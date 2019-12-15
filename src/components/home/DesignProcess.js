import React from 'react';
import {
	Col,
	Row
} from 'react-bootstrap';

import design from  '../../images/home/design-process/design.png';
import arrowIcon from  '../../images/home/arrow-icon.png';


function DesignProcess() {
	return (
		<div className='design-process-wrapper'> 
			<Row>
				<Col className='design-process-desc'>
					<p>Design Process</p>
					<p>studio Karankal collaborated with the best local artist and designer  to give the best curated artwork and products for making your unique space </p>
				</Col>
			</Row>
			<div className='design-img'><img src={design} alt='Design data' /></div>
			<Row className='design-process-img-details'>
				<Col className='design-process-img-desc'>
					<p>Discovery & Strategy</p>
					<p>Visioning & Strategy Planning & Scheduling Understanding the space Client Interview Gather Brand Assets</p>
				</Col>
				<Col className='design-process-img-desc'>
					<p>User/Customer Research</p>
					<p>Competitive Analysis User/Customer Research Gather Proposed Materials Implementation Budget Concept Presentation</p>
				</Col>
				<Col className='design-process-img-desc'>
					<p>IDEATE & PROTOTYPE</p>
					<p>Concept Refinement Develop Concepts Design Specifications Detail Drawings Develop Prototypes</p>
				</Col>
				<Col className='design-process-img-desc'>
					<p>IMPLITATION</p>
					<p>Coordination with other trades Implementation Budget Schedule Installation Produce and Install Project Complete</p>
				</Col>
			</Row>
			<Row className='know-more-wrapper'>
				<Col><span>Know More</span><img src={arrowIcon} alt='Arrow-icon' /></Col>
			</Row>
		</div>
	);
}

export default DesignProcess;