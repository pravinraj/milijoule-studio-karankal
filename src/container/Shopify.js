import React, { Component } from 'react';
import Products from '../components/shopify/Products';
import Cart from '../components/shopify/Cart';
import './Shopify.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Shopify extends Component {
    constructor() {
        super();

        this.state = {
            isCartOpen: false,
            checkout: { lineItems: [] },
            allProducts: [],
            furnitures: [],
            artworks: [],
            collection: [],
            shop: {}
        };

        this.handleCartClose = this.handleCartClose.bind(this);
        this.addVariantToCart = this.addVariantToCart.bind(this);
        this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
        this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    }

    componentWillMount() {
        this.props.client.checkout.create().then((res) => {
            this.setState({
                checkout: res,
            });
        });

        this.props.client.product.fetchAll().then((res) => {
            //console.log(JSON.stringify(res));
            //console.log('....................................\n');
            this.setState({
                allProducts: res,
            });
        });

        // Fetch all collections, including their products
        this.props.client.collection.fetchAllWithProducts().then((collections) => {
            // Do something with the collections
            this.state.furnitures = collections[1].products;
            this.state.artworks = collections[2].products;
            // console.log('PRIYANK' + JSON.stringify(collections));
            //console.log(JSON.stringify(collections[1].products[1]));
        });

        // this.props.client.collection.fetchAll().then((res) => {
        //     console.log(JSON.stringify(res));
        //     console.log('....................................\n');
        //     this.setState({
        //         products: res,
        //     });
        // });

        this.props.client.shop.fetchInfo().then((res) => {
            this.setState({
                shop: res,
            });
        });
    }

    addVariantToCart(variantId, quantity){
        this.setState({
            isCartOpen: true,
        });

        const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
        const checkoutId = this.state.checkout.id

        return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
            this.setState({
                checkout: res,
            });
        });
    }

    updateQuantityInCart(lineItemId, quantity) {
        const checkoutId = this.state.checkout.id
        const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]

        return this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
            this.setState({
                checkout: res,
            });
        });
    }

    removeLineItemInCart(lineItemId) {
        const checkoutId = this.state.checkout.id

        return this.props.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
            this.setState({
                checkout: res,
            });
        });
    }

    handleCartClose() {
        this.setState({
            isCartOpen: false,
        });
    }

    render() {
        return(
        <div className="Shopify-container">
            <Tabs>
                <TabList className="Tab">
                    <Tab> All</Tab>
                    <Tab> Furnitures</Tab>
                    <Tab> Artwork</Tab>
                </TabList>

                <TabPanel>
                    <div className="App">
                        <Products
                            products={this.state.allProducts}
                            client={this.props.client}
                            addVariantToCart={this.addVariantToCart}
                        />
                        <Cart
                            checkout={this.state.checkout}
                            isCartOpen={this.state.isCartOpen}
                            handleCartClose={this.handleCartClose}
                            updateQuantityInCart={this.updateQuantityInCart}
                            removeLineItemInCart={this.removeLineItemInCart}
                        />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="App">
                        <Products
                            products={this.state.furnitures}
                            client={this.props.client}
                            addVariantToCart={this.addVariantToCart}
                        />
                        <Cart
                            checkout={this.state.checkout}
                            isCartOpen={this.state.isCartOpen}
                            handleCartClose={this.handleCartClose}
                            updateQuantityInCart={this.updateQuantityInCart}
                            removeLineItemInCart={this.removeLineItemInCart}
                        />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="App">
                        <Products
                            products={this.state.artworks}
                            client={this.props.client}
                            addVariantToCart={this.addVariantToCart}
                        />
                        <Cart
                            checkout={this.state.checkout}
                            isCartOpen={this.state.isCartOpen}
                            handleCartClose={this.handleCartClose}
                            updateQuantityInCart={this.updateQuantityInCart}
                            removeLineItemInCart={this.removeLineItemInCart}
                        />
                    </div>
                </TabPanel>
            </Tabs>
        </div>
        );

        // return (
        //     <div className="App">
        //         <header className="App__header">
        //             {!this.state.isCartOpen &&
        //             <div className="App__view-cart-wrapper">
        //                 <button className="App__view-cart" onClick={()=> this.setState({isCartOpen: true})}>Cart</button>
        //             </div>
        //             }
        //             <div className="App__title">
        //                 <h1>{this.state.shop.name}: React Example</h1>
        //                 <h2>{this.state.shop.description}</h2>
        //             </div>
        //         </header>
        //         <Products
        //             products={this.state.products}
        //             client={this.props.client}
        //             addVariantToCart={this.addVariantToCart}
        //         />
        //         <Cart
        //             checkout={this.state.checkout}
        //             isCartOpen={this.state.isCartOpen}
        //             handleCartClose={this.handleCartClose}
        //             updateQuantityInCart={this.updateQuantityInCart}
        //             removeLineItemInCart={this.removeLineItemInCart}
        //         />
        //     </div>
        // );
    }
}

export default Shopify;
