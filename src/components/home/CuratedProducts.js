import React from 'react';
import {
	Col,
	Row,
	Figure
} from 'react-bootstrap';

import furniture from '../../images/home/curated-products/furniture.png';
import accessories from  '../../images/home/curated-products/accessories.png';
import artWork from  '../../images/home/curated-products/art-work.png';
import arrowIcon from  '../../images/home/arrow-icon.png';

function CuratedProducts() {
	return (
		<div className='curated-products-wrapper'>
			<Row>
				<Col lg={7} sm={5} className='curated-product-desc'>
					<p>Buy well curated products</p>
					<p>For your Cafe, Restaurant and Corporate you can buy the best limited edition furniture, as well as eco-friendly accessories, and artistic masterpieces.</p>
				</Col>
			</Row>
			<Row className='curated-products-list'>
				<Col xl={4} lg={4} md={4} sm={12} xs={12}>
					<Figure bsPrefix='figure curated-figure'>
						<a href='https://karankal.store/collections/furniture' target='_blank'>
							<div>
								<Figure.Image
									width={348}
								    height={347}
								    alt='Furniture'
								    src={furniture}
								/>
							</div>
						</a>
					  	<Figure.Caption bsPrefix='figure-caption curated-image-caption'>
					    	FURNITURE
					  	</Figure.Caption>
					</Figure>
				</Col>
				<Col xl={4} lg={4} md={4} sm={12} xs={12}>
					<Figure bsPrefix='figure curated-figure'>
						<a href='https://karankal.store/collections/accessories' target='_blank'>
							<div>
								<Figure.Image
									width={348}
								    height={347}
								    alt='Accessories'
								    src={accessories}
								/>
							</div>
						</a>
					  	<Figure.Caption bsPrefix='figure-caption curated-image-caption'>
					    	ACCESSORIES
					  	</Figure.Caption>
					</Figure>
				</Col>
				<Col xl={4} lg={4} md={4} sm={12} xs={12}>
					<Figure bsPrefix='figure curated-figure'>
						<a href='https://karankal.store/collections/artwork' target='_blank'>
							<div>
								<Figure.Image
									width={348}
								    height={347}
								    alt='Art-work'
								    src={artWork}
								/>
							</div>
						</a>
					  	<Figure.Caption bsPrefix='figure-caption curated-image-caption'>
					    	ARTWORK
					  	</Figure.Caption>
					</Figure>
				</Col>
			</Row>
			<Row className='know-more-wrapper'>
				<Col><a href='https://karankal.store/collections/all' target='_blank'><span>BUY NOW</span><img src={arrowIcon} alt='Arrow-icon' /></a></Col>
			</Row>
		</div>
	);
}

export default CuratedProducts;