import React from 'react';
import {
	Col,
	Row
} from 'react-bootstrap';

import StudioSlideshow from '../components/home/StudioSlideshow';
import OneStopShop from '../components/home/OneStopShop';
import CuratedProducts from '../components/home/CuratedProducts';
import WorkArea from '../components/home/WorkArea';
import Blog from '../components/home/Blog';
import ServiceOffered from '../components/home/ServiceOffered';
import DesignProcess from '../components/home/DesignProcess';
import Testimonals from '../components/home/Testimonals';
import Feature from '../components/home/Feature';
// import ContactUs from '../components/home/ContactUs';
import ContactUs  from '../components/category/contactus/ContactUs';
import contactOptions  from '../components/category/contactus/ContactOptions';

function Home() {
	const width = window.innerWidth;
	let screenWidth = window.screen.availWidth;
	return (
		<Row>
			<Col className='home-contents-overview'>
				<Row>
					<Col md={1} sm={0} className='home-content-margin'></Col>
						<Col md={10} sm={12} className='home-content-detail'>
							<StudioSlideshow/>
							<OneStopShop/>
							<CuratedProducts/>
							<WorkArea/>
							<Blog/>
							<ServiceOffered/>
							<DesignProcess/>
							<Testimonals/>
							<Feature/>
						</Col>
					<Col md={1} sm ={0} className='home-content-margin'></Col>
				</Row>
				<div>
					<ContactUs screenWidth={screenWidth} options={contactOptions} />
				</div>
				{/*<ContactUs/>*/}
			</Col>
		</Row>
	);
}

export default Home;