import React from 'react';
import {
	Row,
	Col
} from 'react-bootstrap';

import arrowIcon from  '../../images/home/arrow-icon.png';

function Blog() {
	return (
		<div className='blog-wrapper'>
			<Row>
				<Col xl={6} lg={8} sm={12} className='blog-desc'>
					<p>Blog</p>
					<p>studio Karankal collaborated with the best local artist and designer  to give the best curated artwork and products for making your unique space</p>
				</Col>
			</Row>
			<Row>
				<Col className='blog-list'>
					<p>Redesigning Restaurants with the 5 Senses in Mind</p>
					<p>October 25, 2018</p>
					<p>Cafe</p>
				</Col>
				<Col className='blog-list'>
					<p>How Restaurant Lighting Helps to Set the Mood</p>
					<p>October 22, 2018</p>
					<p>Cafe</p>
				</Col>
				<Col className='blog-list'>
					<p>How do you design a restaurant?</p>
					<p>October 19, 2018</p>
					<p>Cafe</p>
				</Col>
			</Row>
			<Row className='know-more-wrapper'>
				<Col><span>Know More</span><img src={arrowIcon} alt='Arrow-icon' /></Col>
			</Row>
		</div>
	);
}

export default Blog;