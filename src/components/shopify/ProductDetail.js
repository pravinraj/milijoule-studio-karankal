import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import VariantSelector from './VariantSelector';
import  './ProductDetail.css';
import Cart from './Cart';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isCartOpen: false,
        checkout: { lineItems: [] },
        Product: [],
        selectedOptions: {}
    }
    
    this.props.client.product.fetch(this.props.match.params.productId).then((product) => {  
        this.setState({
            Product: product,
        });
    });

    this.props.client.checkout.create().then((res) => {
        this.setState({
            checkout: res,
        });
    });
        
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event) {
    const target = event.target
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.client.product.helpers.variantForOptions(this.state.Product, selectedOptions)

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image
    });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
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
      if(this.state.Product.options) {
        let defaultOptionValues = {};

        this.state.Product.options.forEach((selector) => {
            defaultOptionValues[selector.name] = selector.values[0].value;
        });
        this.state.selectedOptions = defaultOptionValues;

        this.handleCartClose = this.handleCartClose.bind(this);
        this.addVariantToCart = this.addVariantToCart.bind(this);
        this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
        this.removeLineItemInCart = this.removeLineItemInCart.bind(this);

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.findImage = this.findImage.bind(this);

        let variantImage = this.state.selectedVariantImage || this.state.Product.images[0]
        let subImages = this.state.Product.images.map((image) => {
            return (
                <img className= "small_image" src={image.src}/>
            );
        });

        let variant = this.state.selectedVariant || this.state.Product.variants[0]
        let variantQuantity = this.state.selectedVariantQuantity || 1
        let variantSelectors = this.state.Product.options.map((option) => {
            return (
                <VariantSelector
                    handleOptionChange={this.handleOptionChange}
                    key={option.id.toString()}
                    option={option}
                />
            );
        });

        return (
        <div className="productDetail">
            <div className="upperDiv">
                <div>
                    {this.state.Product.images.length ? <img className="productImage" src={variantImage.src} alt={`${this.state.Product.title} product shot`}/> : null}
                </div>
                <Cart className = "product_cart"
                    checkout={this.state.checkout}
                    isCartOpen={this.state.isCartOpen}
                    handleCartClose={this.handleCartClose}
                    updateQuantityInCart={this.updateQuantityInCart}
                    removeLineItemInCart={this.removeLineItemInCart}
                />
                <div className = "productInfo">
                    <div>
                        <h5 className = "Product_title"> {this.state.Product.title} </h5>
                        <h6 className = "Product_description"> {this.state.Product.description} </h6>
                        <p className = "Product_price"> ${variant.price} </p><br></br><hr></hr>    
                    </div>
                    {variantSelectors}
                </div>
            </div>
            <div className="lowerDiv">
                <div className="sub_images">
                    {subImages}
                </div>
                <div className="product_buttons">
                    <div>
                        <button className="cart_button" onClick={() => this.addVariantToCart(variant.id, variantQuantity)}>ADD TO CART</button>
                        <button className="buy_button">BUY NOW</button>
                    </div>
                    <div>
                        <button className = "customize">CUSTOMIZE IT</button> 
                    </div>
                </div>
            </div>
        </div>
        );
      } 
      
      else {
          return (
            <div className="Product">
                Loading...
            </div>
          );
      }
  }
}

export default ProductDetail;
