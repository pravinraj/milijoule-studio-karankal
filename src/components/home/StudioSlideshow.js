import React,  {useState} from 'react';
import {
	Row,
	Carousel
} from 'react-bootstrap';

import cafe from '../../images/home/slideshow/cafe.jpg';
import cafeMobile from '../../images/home/slideshow/cafe-mobile.png';
import mouse from '../../images/home/slideshow/mouse.png';
import arrowIcon from  '../../images/home/arrow-icon.png';
import customFurniture from '../../images/home/slideshow/custom-furniture.jpg';
import customFurnitureMobile from '../../images/home/slideshow/custom-furniture-mobile.jpg';
import brandStrategy from '../../images/home/slideshow/brand-strategy.jpg';
import brandStrategyMobile from '../../images/home/slideshow/brand-strategy-mobile.png';
import uiUx from '../../images/home/slideshow/ui-ux.jpg';
import uiUxMobile from '../../images/home/slideshow/ui-ux-mobile.png';
import architecture from '../../images/home/slideshow/architecture.jpg';
import architectureMobile from '../../images/home/slideshow/architecture-mobile.png';
import retail from '../../images/home/slideshow/retail.jpg';
import retailMobile from '../../images/home/slideshow/retail-mobile.jpg';

function StudioSlideshow(props) {

	const [index, setIndex] = useState(0);
	const width = window.innerWidth;
	const carouselContents = [
		{
			captionHead:'Restaurant and Cafe Interior Design', 
			captionContent: [
				'An excellent restaurant interior design attracts new diners and retains existing ones.',
				'INTERIOR DESIGN'
			],
			linkRouting: '/category/all/tellatales'
		},
		{
			captionHead:'Custom Furniture Makers', 
			captionContent: [
				'When you have a unique taste, custom designed furniture is what you need to enrich your interiors and wow your clients.',
				'BUY PRODUCTS'
			],
			karankalRouting: 'https://www.karankal.store'
		},
		{
			captionHead:'Brand Identity & Packaging Design ', 
			captionContent: [
				'Creating customised brand strategies to help expand your overall reach, and attract new customers',
				'BRANDING AND PACKAGING'
			],
			linkRouting: '/category/all/janela'
		},
		{
			captionHead:'UI/UX To Drive Engagement', 
			captionContent: [
				'User Interface and User Experience (UI/UX) are essential to gaining customer engagement and creating a buzz online',
				'DIGITAL DESIGN'
			],
			linkRouting: '/category/all/circularjourney'
		},
		{
			captionHead:'Architecture and Design', 
			captionContent: [
				'Training Centre Building Design and architecture is critical to the success of a skill development centre and sets the first impression.',
				'FURNITURE DESIGN'
			],
			linkRouting: '/category/all/agrotie'
		},
		{
			captionHead:'Retail Innovation Strategy & Design', 
			captionContent: [
				"Our mantra is, 'Innovation through retail design'. We connect to customers through emotionally rich interiors and drive engagement.",
				'RETAIL'
			],
			linkRouting: '/category/all/walkway'
		}
	];
	const [carouselContent, setCarouselContent] = useState(carouselContents[0]);
	const handleSelect = (selectedIndex) => {
	    setIndex(selectedIndex);
	    setTimeout(function() {
	    	setCarouselContent(carouselContents[selectedIndex]);	
	    },800)
	    
	};

	const slideCaptionContent = (slideContent, index) => {
		return (
			<>
				<p>{slideContent.captionHead}</p>
				<p className={'architecture-content'}>{slideContent.captionContent[0]}</p>
				{(width<768) &&(<div className='slideshow-indicator'>
					<span style={{backgroundColor: (index===0) ? '#ff0000':'#d8d8d8'}}></span>
					<span style={{backgroundColor: (index===1) ? '#ff0000':'#d8d8d8'}}></span>
					<span style={{backgroundColor: (index===2) ? '#ff0000':'#d8d8d8'}}></span>
					<span style={{backgroundColor: (index===3) ? '#ff0000':'#d8d8d8'}}></span>
					<span style={{backgroundColor: (index===4) ? '#ff0000':'#d8d8d8'}}></span>
					<span style={{backgroundColor: (index===5) ? '#ff0000':'#d8d8d8'}}></span>
				</div>)}
				{slideContent.linkRouting && (<p className='design-type' onClick={() => props.props.history.push(slideContent.linkRouting)}><span>{slideContent.captionContent[1]}</span><span><img src={arrowIcon} alt='arrow'/></span></p>)}
				{slideContent.karankalRouting && (<p className='design-type'><a href={slideContent.karankalRouting} target='_blank'><span>{slideContent.captionContent[1]}</span><span><img src={arrowIcon} alt='arrow'/></span></a></p>)}
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
					      src={(width >= 762) ? cafe : cafeMobile}
					      alt="Cafe slide"
					    />
					  </Carousel.Item>}
					  {<Carousel.Item className='custom-furniture-slide'>
					    <img
					      src={(width >=768) ? customFurniture : customFurnitureMobile}
					      alt="Custom-furniture slide"
					    />
					  </Carousel.Item>}
					  {<Carousel.Item className='brand-strategy-slide'>
					    <img
					      className="d-block w-100"
					      src={(width >=768) ? brandStrategy : brandStrategyMobile}
					      alt="Brand Strategy Agency Slide"
					    />
					  </Carousel.Item>}
					  {<Carousel.Item className='architecture-slide'>
					    <img
					      className="d-block w-100"
					      src={(width >= 768) ? uiUx : uiUxMobile}
					      alt="UI UX Slide"
					    />
					  </Carousel.Item>}
					  {<Carousel.Item className='architecture-slide'>
					    <img
					      className="d-block w-100"
					      src={(width >= 768) ? architecture : architectureMobile}
					      alt="Architecture Slide"
					    />
					  </Carousel.Item>}
					  {<Carousel.Item className='architecture-slide'>
					    <img
					      className="d-block w-100"
					      src={(width >= 768) ? retail : retailMobile}
					      alt="Architecture Slide"
					    />
					  </Carousel.Item>}
				</Carousel>
				{(width >= 768) && (
					<>
						<div className='studio-slide-caption'>
							{slideCaptionContent(carouselContent, index)}
						</div>
						<div className='caption-background'></div>
					</>
				)}		
				{/*<span className='mouse-pointer'><img src={mouse} alt='mouse pointer' /></span>*/}
			</Row>
			{(width < 768) && (<div className='studio-slide-caption'>{slideCaptionContent(carouselContent, index)}</div>)}
		</div>
			
	);
}

export default StudioSlideshow;