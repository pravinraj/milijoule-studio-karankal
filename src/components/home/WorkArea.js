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
				<Col lg={6} sm={12} className='work-area-desc'>
					<p>Area of work</p>
					<p>Studio Karankal collaborates with the best designers, developers and manufacturer to give end-to-end-solutions for your unique spaces.</p>
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
					    			<p>TELLA TALES ( Interior Design )</p>
					   				<p>Tella tales is the first Nutella themed café where a customer can satisfy his Nutella cravings satisfied in by way of pizzas, crepes, sandwiches, and shakes</p>
					   			</>
					   		) : (
						   			<>
							   			<p>
							   				<span className='work-area-caption-mobile-heading'>TELLA TALES ( Interior Design )</span>
							   				<span className={isExpandCafe ? 'work-area-up-arrow' : 'work-area-down-arrow'} onClick={()=> {setExpandCafe(!isExpandCafe); setExpandCorporate(false); setExpandRetail(false)}}></span>
							   			</p>
							   			{isExpandCafe && (<p className='work-area-caption-mobile-desc'>Tella tales is the first Nutella themed café where a customer can satisfy his Nutella cravings satisfied in by way of pizzas, crepes, sandwiches, and shakes</p>)}
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
					  				<p>JANELA ( Branding and Packaging )</p>
					    			<p>This exclusive chocolate brand is from Goa. We created a package design that reflects its rich heritage..</p>
					  			</>
					  		) : (
					  			<>
						   			<p>
						   				<span className='work-area-caption-mobile-heading'>JANELA ( Branding and Packaging )</span>
						   				<span className={isExpandCorporate ? 'work-area-up-arrow' : 'work-area-down-arrow'} onClick={()=> {setExpandCafe(false); setExpandCorporate(!isExpandCorporate); setExpandRetail(false)}}></span>
						   			</p>
						   			{isExpandCorporate && (<p className='work-area-caption-mobile-desc'>This exclusive chocolate brand is from Goa. We created a package design that reflects its rich heritage..</p>)}
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
							    		<p>TRANGULAR ( Custom Furniture )</p>
							    		<p>We chose triangles as the primary element while building this piece of abstract furniture. It can be transformed into a chair to bench.</p>
							    	</>) : (
							    	<>
							   			<p>
							   				<span className='work-area-caption-mobile-heading'>TRANGULAR ( Custom Furniture )</span>
							   				<span className={isExpandRetail ? 'work-area-up-arrow' : 'work-area-down-arrow'} onClick={() => {setExpandCafe(false); setExpandCorporate(false); setExpandRetail(!isExpandRetail)}}></span>
							   			</p>
							   			{isExpandRetail && (<p className='work-area-caption-mobile-desc'>We chose triangles as the primary element while building this piece of abstract furniture. It can be transformed into a chair to bench.</p>)}
					   				</>

							    	)
					    	}
					  	</Figure.Caption>
					</Figure>
				</Col>
			</Row>
			<Row className='know-more-wrapper'>
				<Col><span>VIEW ALL PROJECTS</span><img src={arrowIcon} alt='Arrow-icon' /></Col>
			</Row>
		</div>
	);
}

export default WorkArea;