import React from 'react';
import { Route } from "react-router-dom";
import Home from '../container/Home';
import Shop from '../container/Shop';
import Projects from '../container/Projects';
import Blog from '../container/Blog';
import ContactUs from '../container/ContactUs'
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

function Routes() {
	return(
		<div>
			<Route exact path='/shop' component={Shop} history={history} />
			<Route exact path='/projects' component={Projects} history={history} />
			<Route exact path='/blog' component={Blog} history={history} />
			<Route exact path='/contactus' component={ContactUs} history={history} />
		</div>
	);
}

export default Routes;