import React from 'react';
import {
	Col,
	Row,
	Figure
} from 'react-bootstrap';

import rethink19 from  '../../images/home/feature/rethink-19.png';
import rethink18 from  '../../images/home/feature/rethink-18.png';
import insideOutside from  '../../images/home/feature/inside-outside.png';
import hindustanTimes from  '../../images/home/feature/hindustan-times.png';
import living from  '../../images/home/feature/living.png';
import ndtv from  '../../images/home/feature/ndtv.png';
import interiors from  '../../images/home/feature/interiors.png';
import toi from  '../../images/home/feature/toi.png';

function Feature() {
	const rethinkLink = "https://www.re-thinkingthefuture.com/institutional/2297-agrotie-horticulture-experience-center-by-studiokarankal/?fbclid=IwAR1ufYYwI-WqTNHypeX55WkWtOLyq4_vZlXUvew0AZcS1KXp8K1FBa_IB2k";
	const ndtvLink = 'https://www.youtube.com/watch?v=ESsdASP4G6E'
	const homeBliss = 'https://www.youtube.com/watch?v=97woyW7cLTk'
	return (
		<div className='feature-wrapper'>
			<p className='feature-heading'>Featured In</p>
			<Row className='feature-list'>
				<Col xl={3} lg={3} md={3} sm={6} xs={6}>
					<a href={rethinkLink} target='_blank'>
						<Figure>
						  	<Figure.Image
						    	width={208}
						    	height={104}
						    	alt='Rethink Future - 2019'
						    	src={rethink19}
						  	/>
						  	<Figure.Caption bsPrefix='figure-caption feature-image-caption'>
						    	<p>Rethink Future</p>
						    	<p>2019</p>
						  	</Figure.Caption>
						</Figure>
					</a>
				</Col>
				<Col xl={3} lg={3} md={3} sm={6} xs={6}>
					<a href={homeBliss} target='_blank'>
						<Figure>
						  	<Figure.Image
						    	width={208}
						    	height={104}
						    	alt='Rethink Future - 2018'
						    	src={rethink18}
						  	/>
						  	<Figure.Caption bsPrefix='figure-caption feature-image-caption'>
						    	<p>Homebliss</p>
						    	<p>2018</p>
						  	</Figure.Caption>
						</Figure>
					</a>
				</Col>
				<Col xl={3} lg={3} md={3} sm={6} xs={6}>
					<a>
						<Figure>
						  	<Figure.Image
						    	width={208}
						    	height={104}
						    	alt='Inside Outside - 2010'
						    	src={insideOutside}
						  	/>
						  	<Figure.Caption bsPrefix='figure-caption feature-image-caption'>
						    	<p>Inside Outside</p>
						    	<p>2010</p>
						  	</Figure.Caption>
						</Figure>
					</a>
				</Col>
				<Col xl={3} lg={3} md={3} sm={6} xs={6}>
					<a>
						<Figure>
						  	<Figure.Image
						    	width={208}
						    	height={104}
						    	alt='Hindustan Times - 2010'
						    	src={hindustanTimes}
						  	/>
						  	<Figure.Caption bsPrefix='figure-caption feature-image-caption'>
						    	<p>Hindustan Times</p>
						    	<p>2010</p>
						  	</Figure.Caption>
						</Figure>
					</a>
				</Col>
			</Row>
			<Row className='feature-list'>
				<Col xl={3} lg={3} md={3} sm={6} xs={6}>
					<a>
						<Figure>
						  	<Figure.Image
						    	width={208}
						    	height={104}
						    	alt='Living - 2010'
						    	src={living}
						  	/>
						  	<Figure.Caption bsPrefix='figure-caption feature-image-caption'>
						    	<p>Hi Living</p>
						    	<p>2010</p>
						  	</Figure.Caption>
						</Figure>
					</a>
				</Col>
				<Col xl={3} lg={3} md={3} sm={6} xs={6}>
					<a href={ndtvLink} target='_blank'>
						<Figure>
						  	<Figure.Image
						    	width={208}
						    	height={104}
						    	alt='Ndtv India - 2010'
						    	src={ndtv}
						  	/>
						  	<Figure.Caption bsPrefix='figure-caption feature-image-caption'>
						    	<p>NDTV India</p>
						    	<p>2010</p>
						  	</Figure.Caption>
						</Figure>
					</a>
				</Col>
				<Col xl={3} lg={3} md={3} sm={6} xs={6}>
					<a>
						<Figure>
						  	<Figure.Image
						    	width={208}
						    	height={104}
						    	alt='Society Interiors - 2010'
						    	src={interiors}
						  	/>
						  	<Figure.Caption bsPrefix='figure-caption feature-image-caption'>
						    	<p>Society Interiors</p>
						    	<p>2010</p>
						  	</Figure.Caption>
						</Figure>
					</a>
				</Col>
				<Col xl={3} lg={3} md={3} sm={6} xs={6}>
					<a>
						<Figure>
						  	<Figure.Image
						    	width={208}
						    	height={104}
						    	alt='TOI - 2010'
						    	src={toi}
						  	/>
						  	<Figure.Caption bsPrefix='figure-caption feature-image-caption'>
						    	<p>The Times Of India</p>
						    	<p>2010</p>
						  	</Figure.Caption>
						</Figure>
					</a>
				</Col>
			</Row>
		</div>
	);
}

export default Feature;