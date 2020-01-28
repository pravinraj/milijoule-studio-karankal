import React, {useState} from 'react';
import {
	Container,
	Row,
	Col,
	Navbar,
	Nav,
	Figure
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import home from '../images/nav-bar-footer/home.png';
import shop from '../images/nav-bar-footer/shop.png';
import projects from '../images/nav-bar-footer/projects.png';
import projects1 from '../images/nav-bar-footer/projects-1.png';
import project from '../images/nav-bar-footer/project.png';
import blog from '../images/nav-bar-footer/blog.png';

function NavigationBarFooter() {
	let timer = null;
	const [navDisplay, setNavDisplay] = useState('flex');
	const [opacityValue, setOpacity] = useState('1');
	window.addEventListener('scroll', function() {
	    if(timer !== null) {
	        console.log('timer not null')
	        setNavDisplay('none');
	        setOpacity('0');
	        clearTimeout(timer);        
	    }
	    timer = setTimeout(function() {
	          // do something
	        console.log('inside set time out')
	        setNavDisplay('flex');
	        setOpacity('1');
	    }, 150);
	}, false);
	return (
		<Navbar fixed='bottom' className='studio-footer-wrapper' collapseOnSelect expand="lg" style={{display: navDisplay, opacity: opacityValue}}>
				<Row>
					<Col xs={3} className='footer-images-container my-auto'>
						<Nav.Link href="#" bsPrefix='nav-link nav-images'>
							<NavLink exact activeClassName='activeNav' to='/'>
								<div className='home'></div>
								<div className='desc'>Home</div>
								{/*<Figure>
								  <Figure.Image
								    width={15}
								    height={17}
								    alt="home"
								    src={home}
								  />
								  <Figure.Caption bsPrefix='figure-caption  footer-caption'>
								    Home
								  </Figure.Caption>
								</Figure>*/}
							</NavLink>
						</Nav.Link>
					</Col>
					<Col xs={3} className='footer-images-container my-auto'>
						<Nav.Link href="#" bsPrefix='nav-link nav-images'>
							<NavLink exact activeClassName='activeNav' to='/shopify'>
							{/*<Figure>
							  <Figure.Image
							    width={40}
							    height={30}
							    alt="shop"
							    src={shop}
							  />
							  <Figure.Caption bsPrefix='figure-caption  footer-caption'>
							    Shop
							  </Figure.Caption>
							</Figure>*/}
							<div className='shop'></div>
							<div className='desc shop-desc'>Shop</div>
							</NavLink>
						</Nav.Link>
					</Col>
					<Col xs={3} className='footer-images-container my-auto'>
						<Nav.Link href="#" bsPrefix='nav-link nav-images'>
							<NavLink exact activeClassName='activeNav' to='/category/all'>
								<div className='projects'></div>
								<div className='desc'>Projects</div>
								{/*<Figure>
								  <Figure.Image
								    width={15}
								    height={17}
								    alt="projects"
								    src={projects}
								  />
								  <Figure.Caption bsPrefix='figure-caption  footer-caption'>
								    Projects
								  </Figure.Caption>
								</Figure>*/}
							</NavLink>
						</Nav.Link>
					</Col>
					<Col xs={3} className='footer-images-container my-auto'>
						<Nav.Link href="#" bsPrefix='nav-link nav-images'>
							<NavLink exact activeClassName='activeNav' to='/blog'>
							{/*<Figure>
							  <Figure.Image
							    width={12}
							    height={13}
							    alt="blog"
							    src={blog}
							  />
							  <Figure.Caption bsPrefix='figure-caption  footer-caption'>
							    Blog
							  </Figure.Caption>
							</Figure>*/}
								<div className='blog'></div>
								<div className='desc'>Blog</div>
							</NavLink>
						</Nav.Link>
					</Col>
				</Row>
		</Navbar>
	);
}

export default NavigationBarFooter;