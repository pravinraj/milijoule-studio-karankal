import React,  {useState} from 'react';
import {
	Row,
	Carousel
} from 'react-bootstrap';

import cafe from '../../images/home/slideshow/cafe.jpg';
import mouse from '../../images/home/slideshow/mouse.png';
import arrowIcon from  '../../images/home/arrow-icon.png';
import customFurniture from '../../images/home/slideshow/custom-furniture.jpg'
import brandStrategy from '../../images/home/slideshow/brand-strategy.jpg'
import uiUx from '../../images/home/slideshow/ui-ux.jpg'

function StudioSlideshow() {

	const [index, setIndex] = useState(0);
	const width = window.innerWidth;
	const carouselContents = [
		{
			captionHead:'Restaurant and Cafe Interior Design', 
			captionContent: [
				'An excellent restaurant interior design attracts new diners and retains existing ones.',
				'INTERIOR DESIGN'
			]
		},
		{
			captionHead:'Custom Furniture Makers', 
			captionContent: [
				'When you have a unique taste, custom designed furniture is what you need to enrich your interiors and wow your clients.',
				'FURNITURE DESIGN'
			]
		},
		{
			captionHead:'Brand Strategy Agency', 
			captionContent: [
				'Creating customised brand strategies to help expand your overall reach, and attract new customers',
				'BRANDING AND PACKAGING'
			]
		},
		{
			captionHead:'UI/UX To Drive Engagement', 
			captionContent: [
				'User Interface and User Experience (UI/UX) are essential to gaining customer engagement and creating a buzz online',
				'FURNITURE DESIGN'
			]
		}
	];
	const [carouselContent, setCarouselContent] = useState(carouselContents[0]);
	const handleSelect = (selectedIndex) => {
	    setIndex(selectedIndex);
	    setTimeout(function() {
	    	setCarouselContent(carouselContents[selectedIndex]);	
	    },600)
	    
	};

	const slideCaptionContent = (slideContent, index) => {
		return (
			<>
				<p>{slideContent.captionHead}</p>
				<p>{slideContent.captionContent[0]}</p>
				{(width<768) &&(<div className='slideshow-indicator'>
					<span style={{backgroundColor: (index===0) ? '#ff0000':'#d8d8d8'}}></span>
					<span style={{backgroundColor: (index===1) ? '#ff0000':'#d8d8d8'}}></span>
					<span style={{backgroundColor: (index===2) ? '#ff0000':'#d8d8d8'}}></span>
					<span style={{backgroundColor: (index===3) ? '#ff0000':'#d8d8d8'}}></span>
				</div>)}
				<p className='design-type'><span>{slideContent.captionContent[1]}</span><span><img src={arrowIcon} alt='arrow'/></span></p>
			</>
		);
	};

	return (
		<div className='slideshow-container'>
			<Row className='slide-show-wrapper'>
				<Carousel className='studio-slides' activeIndex={index} onSelect={handleSelect}>
				  	{<Carousel.Item className='cafe-slide'>
					    <img
					      className="d-block w-100"
					      src={cafe}
					      alt="Cafe slide"
					    />
					  </Carousel.Item>}
					  {<Carousel.Item className='custom-furniture-slide'>
					    <img
					      src={customFurniture}
					      alt="Custom-furniture slide"
					    />
					  </Carousel.Item>}
					  {<Carousel.Item className='brand-strategy-slide'>
					    <img
					      className="d-block w-100"
					      src={brandStrategy}
					      alt="Brand Strategy Agency Slide"
					    />
					  </Carousel.Item>}
					  {<Carousel.Item className='brand-strategy-slide'>
					    <img
					      className="d-block w-100"
					      src={uiUx}
					      alt="UI UX Slide"
					    />
					  </Carousel.Item>}
				</Carousel>
				{(width >= 768) && (
					<div className='studio-slide-caption'>
						{slideCaptionContent(carouselContent, index)}
					</div>
				)}		
				<span className='mouse-pointer'><img src={mouse} alt='mouse pointer' /></span>
			</Row>
			{(width < 768) && (<div className='studio-slide-caption'z>{slideCaptionContent(carouselContent, index)}</div>)}
		</div>
			
	);
}

export default StudioSlideshow;