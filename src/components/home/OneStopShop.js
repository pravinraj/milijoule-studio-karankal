import React from 'react';
import {
	Col,
	Row,
	Form
} from 'react-bootstrap';

import bitmap from '../../images/home/one-stop-shop/bitmap.png';
import arrow from  '../../images/home/one-stop-shop/arrow-icon.png';

function OneStopShop() {
	return (
		<Row className='one-stop-shop-wrapper'>
			<Col md={5} sm={12} className='one-stop-content'>
				<p>One-stop-shop and design solution</p>
				<p>Cafe / Corpoeate / Retail spaces</p>
				<p>We are the first design and shop giving end to end design solution for your business. We are giving unique and curated products and services. Our user-friendly design that are as unique and useful</p>
				<div className='meeting-detail'>
					<p className='meeting-detail-desc'>Let Karankal to do first free design meeting</p>
					<span className='email-detail'><Form.Control size="lg" type="text" placeholder="Enter your email ID" bsPrefix='form-control' /></span>
					<span className='email-submit'><img src={arrow} alt='arrow icon' /></span>
				</div>
			</Col>
			<Col md={6} sm={12} className='bit-map-image'><img src={bitmap} alt='bitmap' /></Col>
		</Row>
	);
}

export default OneStopShop;