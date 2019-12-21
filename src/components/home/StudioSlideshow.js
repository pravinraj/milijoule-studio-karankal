import React from 'react';
import {
	Row,
	Carousel
} from 'react-bootstrap';

import cafe from '../../images/home/slideshow/cafe.jpg';
import customFurniture from '../../images/home/slideshow/custom-furniture.jpg';
import brandStrategy from '../../images/home/slideshow/brand-strategy.jpg';
import arrowIcon from  '../../images/home/arrow-icon.png';

function StudioSlideshow() {
	return (
		<Row className='slide-show-wrapper'>
			<Carousel className='studio-slides' fade='true'>
			  	{<Carousel.Item className='cafe-slide'>
				    <img
				      className="d-block w-100"
				      src={cafe}
				      alt="Cafe slide"
				    />
				    <Carousel.Caption bsPrefix='carousel-caption slide-caption'>
				      	<p>Restaurant and Cafe Interior Design</p>
						<p className='cafe-slide-desc'>An excellent restaurant interior design attracts new diners and retains existing ones.</p>
				    </Carousel.Caption>
				  </Carousel.Item>}
				  {<Carousel.Item className='custom-furniture-slide'>
				    <img
				      className="d-block w-100"
				      src={customFurniture}
				      alt="Custom-furniture slide"
				    />
				    <Carousel.Caption bsPrefix='carousel-caption slide-caption'>
				      	<p>Custom Furniture Makers</p>
						<p className='custom-furniture-slide-desc'>When you have a unique taste, custom designed furniture is what you need to enrich your interiors and wow your clients.</p>
				    </Carousel.Caption>
				  </Carousel.Item>}
				  {<Carousel.Item className='brand-strategy-slide'>
				    <img
				      className="d-block w-100"
				      src={brandStrategy}
				      alt="Brand Strategy Agency Slide"
				    />
				    <Carousel.Caption bsPrefix='carousel-caption slide-caption'>
				      	<p>Brand Strategy Agency</p>
						<p className='brand-strategy-slide-desc'>Creating customised brand strategies to help expand your overall reach, and attract new customers</p>
				    </Carousel.Caption>
				  </Carousel.Item>}
			</Carousel>
			<p className='furniture-design-slide'><span>Furniture Design</span><span><img src={arrowIcon} alt='Arrow-icon' /></span></p>
		</Row>
			
	);
}

export default StudioSlideshow;