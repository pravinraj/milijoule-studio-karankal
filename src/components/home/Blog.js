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
				<Col xl={8} lg={12} sm={12} className='blog-desc'>
					<p>Blog</p>
					<p>At Karankal, we look at design as strategy in action, and focus on the results. Our adept research team has outlined its research and insights into our blog,  to enlighten you about the current trends and customer behaviour.</p>
				</Col>
			</Row>
			<Row className='blog-images-wrapper'>
				<Col md={4} sm={12} className='blog-list'>
					<Figure bsPrefix='figure blog-image'>
						<a href='https://studiokarankal.wordpress.com/2018/10/25/the-most-effective-method-to-buildmulti-sensorial-experience-in-restaurants-cafes' target='_blank'>
						<div>
							<Figure.Image
								width={302}
							    height={213}
							    alt='blog1'
							    src={blog1}
							    rounded
							/>
						</div>
						</a>
					  	<Figure.Caption bsPrefix='figure-caption blog-image-caption'>
					    	<p>2020 Cafe design trends</p>
							<p>October 25, 2018</p>
							<p>Cafe</p>
					  	</Figure.Caption>
					</Figure>
				</Col>
				<Col md={4} sm={12} className='blog-list'>
					<Figure bsPrefix='figure blog-image'>
						<a href='https://studiokarankal.wordpress.com/2018/10/25/how-restaurant-lighting-helps-toset-the-mood' target='_blank'>
						<div>
							<Figure.Image
								width={302}
							    height={213}
							    alt='blog2'
							    src={blog2}
							    rounded
							/>
						</div>
						</a>
					  	<Figure.Caption bsPrefix='figure-caption blog-image-caption'>
					    	<p>Why do most restaurants fail before celebrating their first anniversary</p>
							<p>October 22, 2018</p>
							<p>Cafe</p>
					  	</Figure.Caption>
					</Figure>
				</Col>
				<Col md={4} sm={12} className='blog-list'>
					<Figure bsPrefix='figure blog-image'>
						<a href='https://studiokarankal.wordpress.com/2020/01/27/how-do-you-design-a-restaurant' target='_blank'>
							<div>
								<Figure.Image
									width={302}
								    height={213}
								    alt='blog3'
								    src={blog3}
								    rounded
								/>
							</div>
						</a>
					  	<Figure.Caption bsPrefix='figure-caption blog-image-caption'>
					    	<p>The sensory experience of restaurants</p>
							<p>October 19, 2018</p>
							<p>Cafe</p>
					  	</Figure.Caption>
					</Figure>
				</Col>
			</Row>
			<Row className='know-more-wrapper'>
				<Col><a href='https://studiokarankal.wordpress.com/' target='_blank'><span>KNOW MORE</span><img src={arrowIcon} alt='Arrow-icon' /></a></Col>
			</Row>
		</div>
	);
}

export default Blog;