import React from 'react';
import {
	Col,
	Row,
	Carousel
} from 'react-bootstrap';

function Testimonals() {
	return (
		<div className='testimonals-wrapper'>
			<p className='testimonal-heading'>Testimonials</p>
			<Carousel className='testimonal-slides'>
			  	<Carousel.Item>
				    <p className='testimonal-slide-heading'>Redesigning Restaurants with the 5 Senses in Mind</p>
				    <p className='testimonal-footer'>Rajesh Kumar</p>
				    <p className='testimonal-footer'>October 25, 2018</p>
			  	</Carousel.Item>
			  	<Carousel.Item>
				    <p className='testimonal-slide-heading'>Redesigning Restaurants with the 5 Senses in Mind</p>
				    <p className='testimonal-footer'>Rajesh Kumar</p>
				    <p className='testimonal-footer'>October 25, 2018</p>
			  	</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Testimonals;