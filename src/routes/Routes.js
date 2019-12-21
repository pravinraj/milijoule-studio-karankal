import React, {useEffect} from 'react';
import { Switch, Route } from "react-router-dom";
import Shop from '../container/Shop';
import Projects from '../container/Projects';
import Blog from '../container/Blog';
import ContactUs from '../container/ContactUs';
import Home from '../container/Home';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

function Routes() {
	const screenWidth = window.screen.width;

	return(
		<Switch>
			<Route exact path='/' component={Home} history={history} />
			<Route exact path='/shop' component={Shop} history={history} />
			<Route exact path='/projects' component={Projects} history={history} />
			<Route exact path='/blog'  render={() => (
				<iframe
					id='blog-wrapper'
	                src="https://studiokarankal.wordpress.com/"
	                frameBorder={0}
	                style={{
	                  width: screenWidth + 'px',
	                  height: document.documentElement.clientHeight + 'px',
	                  paddingTop: screenWidth > 782 ? '28px' : '15px'
	                }}
	                scrolling={'yes'}
	                align={'left'}
	                target="iframe_blog"
              	/>)}
			/>
			<Route exact path='/contactus' component={ContactUs} history={history} />
		</Switch>
	);
}

export default Routes;