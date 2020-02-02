import React from 'react';
import {
	Col,
	Row,
	Image
} from 'react-bootstrap';

import design from  '../../images/home/design-process/design.png';
import discovery from  '../../images/home/design-process/discovery.png';
import customerResearch from  '../../images/home/design-process/customer-research.png';
import ideate from  '../../images/home/design-process/ideate.png';
import implitation from  '../../images/home/design-process/implitation.png';
import arrowIcon from  '../../images/home/arrow-icon.png';


function DesignProcess() {
	const width = window.innerWidth;
	return (
		<div className='design-process-wrapper'> 
			<Row>
				<Col className='design-process-desc'>
					<p>Design Process</p>
					<p>studio Karankal collaborated with the best local artist and designer  to give the best curated artwork and products for making your unique space </p>
				</Col>
			</Row>
			{(width >= 768) && <div className='design-img'><img src={design} alt='Design data' /></div>}
			<Row className='design-process-img-details'>
				<Col md={3} xs={6} className='design-process-img-desc' style={{paddingLeft: (width >=768) && '2em'}}>
					{(width < 768) && <Image src={discovery} />}
					<p>CLIENT MEETING</p>					
				</Col>
				<Col md={3} xs={6} className='design-process-img-desc'>
					{(width < 768) && <Image src={customerResearch} />}
					<p>USER/CUSTOMER RESEARCH</p>
				</Col>
				<Col md={3} xs={6} className='design-process-img-desc'>
					{(width < 768) && <Image src={ideate} />}
					<p>DESIGN DEVELOPMENT</p>					
				</Col>
				<Col md={3}  xs={6} className='design-process-img-desc'>
					{(width < 768) && <Image src={implitation} />}
					<p>EXECUTION</p>
				</Col>
			</Row>
			<Row className='know-more-wrapper'>
				<Col><span>KNOW MORE</span><img src={arrowIcon} alt='Arrow-icon' /></Col>
			</Row>
		</div>
	);
}

export default DesignProcess;