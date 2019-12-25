import React from 'react';
import {
	Col,
	Row,
	Form
} from 'react-bootstrap';

import bitmap from '../../images/home/one-stop-shop/bitmap.png';
import arrow from  '../../images/home/one-stop-shop/arrow-icon.png';

function OneStopShop() {
	const width = window.innerWidth;
	return (
		<Row className='one-stop-shop-wrapper'>
			<Col xl={7} lg={7} md={12} sm={12} className='one-stop-content'>
				<p>One-stop-shop and design solution</p>
				<p>Cafe / Corporate / Retail spaces</p>
				<p>We are the first design and shop giving end to end design solution for your business. We are giving unique and curated products and services. Our user-friendly design that are as unique and useful</p>
				{(width >= 992) && (
					<div className='meeting-detail'>
						<p className='meeting-detail-desc'>Let Karankal to do first free design meeting</p>
						<span className='email-detail'><Form.Control size="lg" type="text" placeholder="Enter your email ID" bsPrefix='form-control' /></span>
						<span className='email-submit'><img src={arrow} alt='arrow icon' /></span>
					</div>)}
			</Col>
			<Col xl={5} lg={5} md={12} sm={12} className='bit-map-image'><img src={bitmap} alt='bitmap' /></Col>
			{
				(width <=992) && (
					<Col lg={12} md={12} sm={12} className='one-stop-wrapper-nondesktop'>
						<div className='meeting-detail'>
							<p className='meeting-detail-desc'>Let Karankal to do first free design meeting</p>
							<span className='email-detail'><Form.Control size="lg" type="text" placeholder="Enter your email ID" bsPrefix='form-control' /></span>
							<span className='email-submit'><img src={arrow} alt='arrow icon' /></span>
						</div>
					</Col>
				)
			}
		</Row>
	);
}

export default OneStopShop;