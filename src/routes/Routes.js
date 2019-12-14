import React from 'react';
import { Switch, Route } from "react-router-dom";
import Shop from '../container/Shop';
import Projects from '../container/Projects';
import Blog from '../container/Blog';
import ContactUs from '../container/ContactUs'
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

function Routes() {
	return(
		<Switch>
			<Route exact path='/shop' component={Shop} history={history} />
			<Route exact path='/projects' component={Projects} history={history} />
			<Route exact path='/blog' component={Blog} history={history} />
			<Route exact path='/contactus' component={ContactUs} history={history} />
		</Switch>
	);
}

export default Routes;