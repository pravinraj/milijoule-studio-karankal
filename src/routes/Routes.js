import React, {useState} from 'react';
import { Switch, Route } from "react-router-dom";
import Client from 'shopify-buy';

import AboutUs from '../container/AboutUs';
import Shopify from '../container/Shopify';
import Project from '../container/Project';
import Category from '../container/Category';
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
    const [showTypePopup, setShowTypePopup] = useState(false);
    const [selectedPopupTypes, setSelectedPopupTypes] = useState(['all']);
    const [activeFilter, setActiveFilter] = useState(false);

    const setForCategory = (d) => {
        setSelectedPopupTypes(d);
        setActiveFilter(!d.includes('all'))
    }
	return(
		<Switch>
			<Route exact path='/' component={Home} history={history} />
            <Route
                path={'/about-studio/:type'}
                render={({ match, history }) => (
                  <AboutUs selectedState={match.params.type} />
                )}
            />
			/*<Route exact path='/shopify' 
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
            />*/
			<Route 
                exact 
                path='/category/:category' 
                history={history} 
                render={({match, history}) => (
                    <Category
                        match={match}
                        history={history}
                        showTypePopup={showTypePopup}
                        handleSelectedType={d =>
                          screenWidth < 600 &&
                          setForCategory,
                            () => window.scrollTo(0, 0)
                        }
                        selectedPopupTypes={screenWidth < 600 && selectedPopupTypes}
                        closePopup={d =>
                          screenWidth < 600 && setShowTypePopup(false)
                        }
                    />
                    )
                }
            />
            <Route 
                exact
                path={'/category/:category/:projectName'}
                render={({ match, history }) => (
                  <Project match={match} history={history} />
                )}
            />
			<Route exact path='/blog' component={Blog} history={history} />
			<Route exact path='/contactus' component={ContactUs} history={history} />
		</Switch>
	);
}

export default Routes;