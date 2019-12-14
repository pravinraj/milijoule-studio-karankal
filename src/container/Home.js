import React from 'react';
import {
	Col,
	Row
} from 'react-bootstrap';

import NavigationBar from '../components/home/NavigationBar';
import StudioSlideshow from '../components/home/StudioSlideshow';
import OneStopShop from '../components/home/OneStopShop';

function Home() {
	return (
		<Row>
			<Col>
				<NavigationBar/>
				<StudioSlideshow/>
				<Row>
					<Col sm={1} className='home-content-margin'></Col>
					<Col sm={10}>
						<OneStopShop/>
					</Col>
					<Col sm ={1} className='home-content-margin'></Col>
				</Row>
			</Col>
		</Row>
	);
}

export default Home;