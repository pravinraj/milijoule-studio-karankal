import React from 'react';
import {
	Col,
	Row,
	Image
} from 'react-bootstrap';

import serviceOffered from  '../../images/home/service-offered/service-offered.png';
import serviceOfferedMobile from  '../../images/home/service-offered/service-offered-mobile.png';

import arrowIcon from  '../../images/home/arrow-icon.png';

function ServiceOffered() {
	const width = window.innerWidth;
	return (
		<div className='service-offered-wrapper'>
			<Row>
				<Col className='service-offered-desc'>
					<p>Service we offer</p>
					<p>We make sure every design is taken seriously and built to the most significant detail. Everybody in Studio Karankal, irrespective of hierarchy gets to give constructive feedback and improve our products and services.</p>
				</Col>
			</Row>
			<Row>
				<Col className='service-offered-list'>
					  { (width >= 768) ? (<Image src={serviceOffered} />) : (<Image src={serviceOfferedMobile} />) }
				</Col>
			</Row>
			<Row className='know-more-wrapper'>
				<Col><span>Know More</span><img src={arrowIcon} alt='Arrow-icon' /></Col>
			</Row>
		</div>
	);
}

export default  ServiceOffered;