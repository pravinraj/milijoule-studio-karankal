import React from 'react';
import {
	Row,
	Col,
	Carousel
} from 'react-bootstrap';

import cafe from '../../images/home/slideshow/cafe.jpg';

function StudioSlideshow() {
	return (
		<Row>
			<Carousel>
			  	<Carousel.Item>
				    <img
				      className="d-block w-100"
				      src={cafe}
				      alt="First slide"
				    />
				    <Col>
					    <Carousel.Caption bsPrefix='carousel-caption slide-caption'>
					      	<p>Innovative Cafe Culture</p>
							<p>The fine intertwining of dining and design results in an epic restaurant experience. </p>
							<p>Cafe Interior design</p>
					    </Carousel.Caption>
				    </Col>
			  	</Carousel.Item>
			  	{<Carousel.Item>
				    <img
				      className="d-block w-100"
				      src={cafe}
				      alt="Third slide"
				    />
				    <Carousel.Caption bsPrefix='carousel-caption slide-caption'>
				      	<p>Innovative Cafe Culture</p>
						<p>The fine intertwining of dining and design results in an epic restaurant experience. </p>
						<p>Cafe Interior design</p>
				    </Carousel.Caption>
				  </Carousel.Item>}
			</Carousel>
		</Row>
			
	);
}

export default StudioSlideshow;