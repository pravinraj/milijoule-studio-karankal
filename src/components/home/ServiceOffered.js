import React from 'react';
import {
	Col,
	Row
} from 'react-bootstrap';

import service from  '../../images/home/service-offered/service.png';
import arrowIcon from  '../../images/home/arrow-icon.png';

function ServiceOffered() {
	return (
		<div className='service-offered-wrapper'>
			<Row>
				<Col className='service-offered-desc'>
					<p>Service we offer</p>
					<p>We make sure every design is taken seriously and built to the most significant detail. Everybody in Studio Karankal, irrespective of hierarchy gets to give constructive feedback and improve our products and services.</p>
					<div><img src={service} alt='services offered' /></div>
				</Col>
			</Row>
			<Row className='know-more-wrapper'>
				<Col><span>Know More</span><img src={arrowIcon} alt='Arrow-icon' /></Col>
			</Row>
		</div>
	);
}

export default  ServiceOffered;