import React from 'react';
import {
	Col,
	Row
} from 'react-bootstrap';


function  ContactUs() {
	const srcdata = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.670813315161!2d77.62844861464465!3d12.928866590883912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae145e06984b5d%3A0xf669ffd0ad6fbece!2s53%2C%204th%20Cross%20Rd%2C%20Jakasandra%20Block%2C%20Koramangala%203%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560034!5e0!3m2!1sen!2sin!4v1576435647387!5m2!1sen!2sin";
	return (
		<div className='contactus-wrapper'>
			<p className='heading'>Contact Us</p>
			<Row>
				<Col xs={12} className='contact-address'>
				<iframe 
					src={srcdata}
					width={"600"} height={"450"} frameborder={"0"} allowfullscreen={""} 
					style={{"border":"0"}}
				/>				
				</Col>
			</Row>
		</div>
	);
}

export default ContactUs;