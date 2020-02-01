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
				<Col xl={5} lg={12} sm={12} className='curated-product-desc'>
					<p>Buy Well Curated Products</p>
					<p>For your cafe and corporate space, we have the best limited edition furniture to avoid similar products in the market. </p>
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
				<Col><a href='https://karankal.store/collections/all' target='_blank'><span>BUY PRODUCTS</span><img src={arrowIcon} alt='Arrow-icon' /></a></Col>
			</Row>
		</div>
	);
}

export default CuratedProducts;