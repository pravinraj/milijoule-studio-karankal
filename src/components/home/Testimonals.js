import React from 'react';
import {
	Carousel
} from 'react-bootstrap';

function Testimonals() {
	return (
		<div className='testimonals-wrapper'>
			<p className='testimonal-heading'>Testimonials</p>
			<Carousel className='testimonal-slides'>
			  	<Carousel.Item>
				    <p className='testimonal-slide-heading'>Am absolutely in love with my writing desk. Rahul Karankal designed it for me.  I was very unhappy with what most furniture stores offered as writing desks/study tables. Till i came across Rahul's work at his studio.  If i could, I'd 'collect' his work. Can't wait to commission/buy my next piece of furniture from Karankal.</p>
				    <p className='testimonal-footer'>Thani Mudaliar - Writer</p>
				    <p className='testimonal-footer'>October 25, 2018</p>
			  	</Carousel.Item>
			  	<Carousel.Item>
				    <p className='testimonal-slide-heading'>Rahul, the owner has always provided us with outstanding design. He's an excellent furniture designer. I am happy to find this place</p>
				    <p className='testimonal-footer'>Satyam prateek</p>
				    <p className='testimonal-footer'>October 25, 2018</p>
			  	</Carousel.Item>
			  	<Carousel.Item>
				    <p className='testimonal-slide-heading'>At a 50m walk from my office. The name itself attracts all Nutella lovers. The ambience gives you a feeling as if you're in a snow cave, very soothing. We ordered chocolate overload and brownie blast. Both were pretty good.</p>
				    <p className='testimonal-footer'>{'Forever Hungry (Expert in Koramangala 5th Block)'}</p>
				    <p className='testimonal-footer'>October 25, 2018</p>
			  	</Carousel.Item>
			  	<Carousel.Item>
				    <p className='testimonal-slide-heading'>Very cute and well done ambience. To all food and nutella lovers in town, its time to head towards this place. Very unique menu. They serve the best dessert and berry pancakes recommended.</p>
				    <p className='testimonal-footer'>Nishita Singhania</p>
				    <p className='testimonal-footer'>October 25, 2018</p>
			  	</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Testimonals;