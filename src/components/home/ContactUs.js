import React from 'react';
import {
	Col,
	Row
} from 'react-bootstrap';


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
		</div>
	);
}

export default ContactUs;