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
				<Col xl={5} lg={7} sm={12} className='curated-product-desc'>
					<p>Buy Well Curated Products</p>
					<p>For your cafe and corporate space, we have the best limited edition furniture to avoid similar products in the market. </p>
				</Col>
			</Row>
			<Row className='curated-products-list'>
				<Col>
					<Figure>
						<Figure.Image
							width={348}
						    height={347}
						    alt='Furniture'
						    src={furniture}
						    rounded
						/>
					  	<Figure.Caption bsPrefix='figure-caption curated-image-caption'>
					    	FURNITURE
					  	</Figure.Caption>
					</Figure>
				</Col>
				<Col>
					<Figure>
						<Figure.Image
							width={348}
						    height={347}
						    alt='Accessories'
						    src={accessories}
						    rounded
						/>
					  	<Figure.Caption bsPrefix='figure-caption curated-image-caption'>
					    	ACCESSORIES
					  	</Figure.Caption>
					</Figure>
				</Col>
				<Col>
					<Figure>
						<Figure.Image
							width={348}
						    height={347}
						    alt='Art-work'
						    src={artWork}
						    rounded
						/>
					  	<Figure.Caption bsPrefix='figure-caption curated-image-caption'>
					    	ARTWORK
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

export default CuratedProducts;