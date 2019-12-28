import React from 'react';
import { Switch, Route } from "react-router-dom";
import Client from 'shopify-buy';

import Shopify from '../container/Shopify';
import Projects from '../container/Projects';
import ContactUs from '../container/ContactUs';
import Home from '../container/Home';
import Blog from '../container/Blog';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

function Routes() {
	const client = Client.buildClient({
        domain: 'karankalstore.myshopify.com',
        storefrontAccessToken: '8890a11a532e31ca9253b90d1660c430'
    });
    let screenWidth = window.screen.width;
	return(
		<Switch>
			<Route exact path='/' component={Home} history={history} />
			<Route exact path='/shopify' 
				render={() => (
                <Shopify
                    style={{
                      width: screenWidth + 'px',
                      height: document.documentElement.clientHeight + 'px',
                      paddingTop: screenWidth > 782 ? '28px' : '15px',
                    }}
                    scrolling={'yes'}
                    align={'left'}
                    client={client}
                />
            	)}
            />
			<Route exact path='/projects' component={Projects} history={history} />
			<Route exact path='/blog' component={Blog} history={history} />
			<Route exact path='/contactus' component={ContactUs} history={history} />
		</Switch>
	);
}

export default Routes;