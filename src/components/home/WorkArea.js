import React, {useState} from 'react';
import {
	Col,
	Row,
	Figure
} from 'react-bootstrap';


import cafe from '../../images/home/work-area/cafe.png';
import corporate from '../../images/home/work-area/corporate.png';
import retail from '../../images/home/work-area/retail.png';
import arrowIcon from  '../../images/home/arrow-icon.png';

function WorkArea() {
	const width = window.innerWidth;
	const [isExpandCafe, setExpandCafe] = useState(false);
	const [isExpandCorporate, setExpandCorporate] = useState(false);
	const [isExpandRetail, setExpandRetail] = useState(false);

	/*const setData=(workAreaParam)=>{
		switch (workAreaParam){
			case 'cafe':{
				setExpandCafe(true);
				setExpandCorporate(false);
				setExpandRetail(false);
				
            }
            case 'corporate':{
            	setExpandCafe(false);
            	setExpandCorporate(true);
            	setExpandRetail(false);
            	
            }
            case 'retail':{
            	setExpandCafe(false);
            	setExpandCorporate(false);
            	setExpandRetail(true);
            	

            }
            default:{
            	setExpandCafe(false);
            	setExpandCorporate(false);
            	setExpandRetail(false);
            	
            }

		}
	}*/

	return (
		<div className='work-area-wrapper'>
			<Row>
				<Col xl={7} lg={8} sm={12} className='work-area-desc'>
					<p>Area of Work</p>
					<p>studio Karankal collaborated with the best local artist and designer  to give the best curated artwork and products for making your unique space</p>
				</Col>
			</Row>
			<Row className='work-area-list'>
				<Col sm={12} xl={4} lg={4} md={4}>
					<Figure bsPrefix='figure work-area-image'>
						<div>
							<Figure.Image
								width={(width >= 768) ? 356 : 301}
							    height={(width >= 768) ? 356 : 290}
							    alt='Cafe'
							    src={cafe}
							/>
						</div>
					  	<Figure.Caption bsPrefix='figure-caption work-area-image-caption'>
					    	{(width >= 768) ? (
					    		<>
					    			<p>CAFE AND RESTAURANT</p>
					   				<p>Visitors at your cafe and restaurant need to know the legendary tale behind your brand. Do you have one that needs to be told?</p>
					   			</>
					   		) : (
						   			<>
							   			<p>
							   				<span className='work-area-caption-mobile-heading'>CAFE AND RESTAURANT</span>
							   				<span className={isExpandCafe ? 'work-area-up-arrow' : 'work-area-down-arrow'} onClick={()=> {setExpandCafe(!isExpandCafe); setExpandCorporate(false); setExpandRetail(false)}}></span>
							   			</p>
							   			{isExpandCafe && (<p className='work-area-caption-mobile-desc'>Visitors at your cafe and restaurant need to know the legendary tale behind your brand. Do you have one that needs to be told?</p>)}
						   			</>
					   			)}
					  	</Figure.Caption>
					</Figure>
				</Col>
				<Col sm={12} xl={4} lg={4} md={4}>
					<Figure bsPrefix='figure work-area-image'>
						<div>
							<Figure.Image
								width={(width >= 768) ? 356 : 301}
							    height={(width >= 768) ? 356 : 290}
							    alt='Corporate'
							    src={corporate}
							/>
						</div>
					  	<Figure.Caption bsPrefix='figure-caption work-area-image-caption'>
					  	{
					  		(width>=768) ? (
					  			<>
					  				<p>CORPORATE</p>
					    			<p>A lively workspace with ergonomic seating enhances energy levels, preps up productivity, and positively influences clients.</p>
					  			</>
					  		) : (
					  			<>
						   			<p>
						   				<span className='work-area-caption-mobile-heading'>CORPORATE</span>
						   				<span className={isExpandCorporate ? 'work-area-up-arrow' : 'work-area-down-arrow'} onClick={()=> {setExpandCafe(false); setExpandCorporate(!isExpandCorporate); setExpandRetail(false)}}></span>
						   			</p>
						   			{isExpandCorporate && (<p className='work-area-caption-mobile-desc'>A lively workspace with ergonomic seating enhances energy levels, preps up productivity, and positively influences clients.</p>)}
					   			</>
					  		)
					  	}
					    	
					  	</Figure.Caption>
					</Figure>
				</Col>
				<Col sm={12} xl={4} lg={4} md={4}>
					<Figure bsPrefix='figure work-area-image'>
						<div>
							<Figure.Image
								width={(width >= 768) ? 356 : 301}
							    height={(width >= 768) ? 356 : 290}
							    alt='Retail'
							    src={retail}
							/>
						</div>
					  	<Figure.Caption bsPrefix='figure-caption work-area-image-caption'>
					  		{
					  			(width >= 768) ?
						  			(<>
							    		<p>RETAIL</p>
							    		<p>A spellbinding ambience at your retail space makes customers stay longer and spend more. Is your store ready to handle the crowd?</p>
							    	</>) : (
							    	<>
							   			<p>
							   				<span className='work-area-caption-mobile-heading'>RETAIL</span>
							   				<span className={isExpandRetail ? 'work-area-up-arrow' : 'work-area-down-arrow'} onClick={() => {setExpandCafe(false); setExpandCorporate(false); setExpandRetail(!isExpandRetail)}}></span>
							   			</p>
							   			{isExpandRetail && (<p className='work-area-caption-mobile-desc'>A spellbinding ambience at your retail space makes customers stay longer and spend more. Is your store ready to handle the crowd?</p>)}
					   				</>

							    	)
					    	}
					  	</Figure.Caption>
					</Figure>
				</Col>
			</Row>
			<Row className='know-more-wrapper'>
				<Col><span>ALL PROJECTS</span><img src={arrowIcon} alt='Arrow-icon' /></Col>
			</Row>
		</div>
	);
}

export default WorkArea;