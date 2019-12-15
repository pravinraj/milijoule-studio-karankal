import React from 'react';
import {
	Col,
	Row,
	Figure
} from 'react-bootstrap';


import cafe from '../../images/home/work-area/cafe.png';
import corporate from '../../images/home/work-area/corporate.png';
import retail from '../../images/home/work-area/retail.png';
import arrowIcon from  '../../images/home/arrow-icon.png';

function WorkArea() {
	return (
		<div className='work-area-wrapper'>
			<Row>
				<Col xl={6} lg={8} sm={12} className='work-area-desc'>
					<p>Buy Well Curated Products</p>
					<p>studio Karankal collaborated with the best local artist and designer  to give the best curated artwork and products for making your unique space</p>
				</Col>
			</Row>
			<Row className='work-area-list'>
				<Col sm={12} xl={4} lg={4} md={4}>
					<Figure bsPrefix='figure work-area-image'>
						<Figure.Image
							width={356}
						    height={356}
						    alt='Cafe'
						    src={cafe}
						    rounded
						/>
					  	<Figure.Caption bsPrefix='figure-caption work-area-image-caption'>
					    	<p>CAFE AND RESTAURANT</p>
					    	<p>Visitors at your cafe and restaurant are not just there to satisfy their taste buds! They need to know the story behind your brand, and have a memorable experience. Does your brand have a legendary tale that’s waiting to be told?</p>
					  	</Figure.Caption>
					</Figure>
				</Col>
				<Col sm={12} xl={4} lg={4} md={4}>
					<Figure bsPrefix='figure work-area-image'>
						<Figure.Image
							width={356}
						    height={356}
						    alt='Corporate'
						    src={corporate}
						    rounded
						/>
					  	<Figure.Caption bsPrefix='figure-caption work-area-image-caption'>
					    	<p>CORPORATE</p>
					    	<p>A lively workspace enhances energy levels and influences productivity. A fresh ambience with ergonomic seating, inspires the team and customers alike. Welcome the breeze of innovation and aesthetics into your work environment and experience the magic as we design your creative workspace.</p>
					  	</Figure.Caption>
					</Figure>
				</Col>
				<Col sm={12} xl={4} lg={4} md={4}>
					<Figure bsPrefix='figure work-area-image'>
						<Figure.Image
							width={356}
						    height={356}
						    alt='Retail'
						    src={retail}
						    rounded
						/>
					  	<Figure.Caption bsPrefix='figure-caption work-area-image-caption'>
					    	<p>RETAIL</p>
					    	<p>People love to go for shopping, as it makes them feel great, and look confident. The ambience you create in your retail space makes them stay longer and spend more. Customers love basking in the glow of soft lighting, a cosy atmosphere and top-notch products. Is your store ready to handle the rush?</p>
					  	</Figure.Caption>
					</Figure>
				</Col>
			</Row>
			<Row className='know-more-wrapper'>
				<Col><span>Know More</span><img src={arrowIcon} alt='Arrow-icon' /></Col>
			</Row>
		</div>
	);
}

export default WorkArea;