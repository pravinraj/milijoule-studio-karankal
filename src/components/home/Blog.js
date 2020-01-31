import React from 'react';
import {
	Row,
	Col,
	Figure
} from 'react-bootstrap';

import arrowIcon from  '../../images/home/arrow-icon.png';
import blog1 from  '../../images/home/blog/blog-1.png';
import blog2 from  '../../images/home/blog/blog-2.png';
import blog3 from  '../../images/home/blog/blog-3.png';

function Blog() {
	return (
		<div className='blog-wrapper'>
			<Row>
				<Col xl={7} lg={12} sm={12} className='blog-desc'>
					<p>Blog</p>
					<p>studio Karankal collaborated with the best local artist and designer  to give the best curated artwork and products for making your unique space</p>
				</Col>
			</Row>
			<Row className='blog-images-wrapper'>
				<Col md={4} sm={12} className='blog-list'>
					<Figure bsPrefix='figure blog-image'>
						<a href='https://studiokarankal.wordpress.com/2018/10/25/the-most-effective-method-to-buildmulti-sensorial-experience-in-restaurants-cafes' target='_blank'>
						<Figure.Image
							width={302}
						    height={213}
						    alt='blog1'
						    src={blog1}
						    rounded
						/>
						</a>
					  	<Figure.Caption bsPrefix='figure-caption blog-image-caption'>
					    	<p>Redesigning Restaurants with the 5 Senses in Mind</p>
							<p>October 25, 2018</p>
							<p>Cafe</p>
					  	</Figure.Caption>
					</Figure>
				</Col>
				<Col md={4} sm={12} className='blog-list'>
					<Figure bsPrefix='figure blog-image'>
						<a href='https://studiokarankal.wordpress.com/2018/10/25/how-restaurant-lighting-helps-toset-the-mood' target='_blank'>
						<Figure.Image
							width={302}
						    height={213}
						    alt='blog2'
						    src={blog2}
						    rounded
						/>
						</a>
					  	<Figure.Caption bsPrefix='figure-caption blog-image-caption'>
					    	<p>How Restaurant Lighting Helps to Set the Mood</p>
							<p>October 22, 2018</p>
							<p>Cafe</p>
					  	</Figure.Caption>
					</Figure>
				</Col>
				<Col md={4} sm={12} className='blog-list'>
					<Figure bsPrefix='figure blog-image'>
						<a href='https://studiokarankal.wordpress.com/2020/01/27/how-do-you-design-a-restaurant' target='_blank'>
							<Figure.Image
								width={302}
							    height={213}
							    alt='blog3'
							    src={blog3}
							    rounded
							/>
						</a>
					  	<Figure.Caption bsPrefix='figure-caption blog-image-caption'>
					    	<p>How do you design a restaurant?</p>
							<p>October 19, 2018</p>
							<p>Cafe</p>
					  	</Figure.Caption>
					</Figure>
				</Col>
			</Row>
			<Row className='know-more-wrapper'>
				<Col><a href='https://studiokarankal.wordpress.com/' target='_blank'><span>VIEW BLOGS</span><img src={arrowIcon} alt='Arrow-icon' /></a></Col>
			</Row>
		</div>
	);
}

export default Blog;