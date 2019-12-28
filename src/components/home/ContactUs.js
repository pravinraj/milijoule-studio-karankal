import React from 'react';
import {
	Col,
	Row
} from 'react-bootstrap';

import fbLogo from  '../../images/home/contact-us/facebook-logo.png';
import instagramLogo from  '../../images/home/contact-us/instagram-logo.png';
import linkedinLogo from  '../../images/home/contact-us/linkedin-logo.png';
import twitterLogo from  '../../images/home/contact-us/twitter-logo.png';


function  ContactUs() {
	return (
		<div className='contactus-wrapper'>
			<p className='heading'>Contact Us</p>
			<Row>
				<Col xs={12} className='contact-address'>
					<div className="embed-responsive embed-responsive-1by1">
				      	<iframe className="embed-responsive-item" title="Karankal.com" src="https://goo.gl/UJkbS5" width={"600"} height={"450"} allowfullscreen></iframe>
				    </div>	
				</Col>
			</Row>
			<div className='contact-us-list'>
				<p>Contact Us</p>
			</div>
			<Row className='social-media-link'>
				<Col xs={3}><img src={fbLogo} alt='FB-logo' /></Col>
				<Col xs={3}><img src={instagramLogo} rounded alt='instagram-logo' /></Col>
				<Col xs={3}><img src={linkedinLogo} rounded alt='LinkedIn-logo' /></Col>
				<Col xs={3}><img src={twitterLogo} rounded alt='Twitter-logo' /></Col>
			</Row>
		</div>
	);
}

export default ContactUs;