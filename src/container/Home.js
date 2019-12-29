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
import ContactUs from '../components/home/ContactUs';

function Home() {
	const width = window.innerWidth;
	return (
		<Row>
			<Col className='home-contents-overview'>
				<Row>
					<Col md={1} sm={0} className='home-content-margin'></Col>
					{(width >= 768) ? (
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
					) : (<Row>
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
						</Row>)}
					<Col md={1} sm ={0} className='home-content-margin'></Col>
				</Row>
				<ContactUs/>
			</Col>
		</Row>
	);
}

export default Home;