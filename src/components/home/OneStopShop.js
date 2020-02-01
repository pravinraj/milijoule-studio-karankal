import React from 'react';
import {
	Col,
	Row,
	Form,
	Button
} from 'react-bootstrap';

import bitmap from '../../images/home/one-stop-shop/bitmap.png';
import arrow from  '../../images/home/one-stop-shop/arrow-icon.png';

function OneStopShop() {
	const width = window.innerWidth;
	return (
		<Row className='one-stop-shop-wrapper'>
			<Col xl={7} lg={7} md={12} sm={12} className='one-stop-content'>
				<p>One-stop-shop and design solution</p>
				<p>Cafe / Restaurants / Corporate</p>
				<p>We are the first Design Studio giving End-to-End Branding / Packaging / Interior / Exterior / Digital Design Solutions for Cafes, Restaurants and Corporate Industry.</p>
				{(width >= 992) && (
					<div className='meeting-detail'>
						<p className='meeting-detail-desc'>Book your FIRST Consultation with Karankal – Absolutely FREE</p>
						<Row>
							<Col xs={8}>
								<Row className='email-details'>
									<Col xs={11}><Form.Control size="lg" type="text" placeholder="Enter your email ID" bsPrefix='form-control' /></Col>
									<Col xs={1}><Button variant="light"><img src={arrow} alt='arrow icon' /></Button></Col>
								</Row>
							</Col>
						</Row>
						{/*<span className='email-detail'><Form.Control size="lg" type="text" placeholder="Enter your email ID" bsPrefix='form-control' /></span>
						<span className='email-submit'><img src={arrow} alt='arrow icon' /></span>*/}
					</div>)}
			</Col>
			<Col xl={5} lg={5} md={12} sm={12} className='bit-map-image'><img src={bitmap} alt='bitmap' /></Col>
			{
				(width <=992) && (
					<Col lg={12} md={12} sm={12} className='one-stop-wrapper-nondesktop'>
						<div className='meeting-detail'>
							<p className='meeting-detail-desc'>Book your FIRST Consultation with Karankal – Absolutely FREE</p>
							<Row>
								<Col xs={8}>
									<Row className='email-details'>
										<Col xs={11}><Form.Control size="lg" type="text" placeholder="Enter your email ID" bsPrefix='form-control' /></Col>
										<Col xs={1}><Button variant="light"><img src={arrow} alt='arrow icon' /></Button></Col>
									</Row>
								</Col>
							</Row>
							{/*<span className='email-detail'><Form.Control size="lg" type="text" placeholder="Enter your email ID" bsPrefix='form-control' /></span>
							<span className='email-submit'><img src={arrow} alt='arrow icon' /></span>*/}
						</div>
					</Col>
				)
			}
		</Row>
	);
}

export default OneStopShop;