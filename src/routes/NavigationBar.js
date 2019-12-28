import React from 'react';
import {
	Container,
	Navbar,
	Nav,
	NavDropdown
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import brandImage from '../images/home/header/karankal-com.png';
import nounProfile from '../images/home/header/noun-profile.png';
import cart from '../images/home/header/cart.png';
import search from '../images/home/header/search.png';
import mail from '../images/home/header/mail.png';
import phone from '../images/home/header/phone.png';

import Drawer from '../components/navbar-slider/Drawer';


function NavigationBar(argument) {
	return (
		<div>
			<Container>
				<Navbar fixed="top" className='studio-header-wrapper' collapseOnSelect expand="lg">
					<Navbar.Brand href="#" bsPrefix='navbar brand-image'><img src={brandImage} alt='brandImage'/></Navbar.Brand>
				  	<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				  	<Navbar.Collapse id="responsive-navbar-nav">
				    	<Nav className="ml-auto" >
					      	<Nav.Link bsPrefix='nav-link route-type'><NavLink exact activeClassName='activeNav' to='/shopify'>Shop</NavLink></Nav.Link>
					      	<Nav.Link bsPrefix='nav-link route-type'><NavLink exact activeClassName='activeNav' to='/projects'>Projects</NavLink></Nav.Link>
					      	<Nav.Link bsPrefix='nav-link route-type'><NavLink exact activeClassName='activeNav' to='/blog'>Blog</NavLink></Nav.Link>
					      	<NavDropdown className='contact-us-dropdown' title="Contact Us" id="collasible-nav-dropdown">
					       		<NavDropdown.Item href="#action/3.1" className='contact-us-dropdown-item'><img className='mail-icon' src={mail} alt='mail-icon' /><span className='contact-detail'>hello@karankal.com</span></NavDropdown.Item>
					       		<NavDropdown.Divider />
					       		<NavDropdown.Item href="#action/3.2" className='contact-us-dropdown-item'><img className='phone-icon' src={phone} alt='phone-icon' /><span className='contact-detail'>+917829 475707</span></NavDropdown.Item>				       		
				      		</NavDropdown>
				      	</Nav>
			      		<Nav className='nav-images-list'>
				      		<Nav.Link href="#" bsPrefix='nav-link nav-images'><img src={search} alt='search' /></Nav.Link>
					      	<Nav.Link href="#" bsPrefix='nav-link nav-images'><img src={nounProfile} alt='nounProfile' /></Nav.Link>
					      	<Nav.Link href="#" bsPrefix='nav-link nav-images'><img src={cart} alt='cart' /></Nav.Link>
					      	<Nav.Link href="#" bsPrefix='nav-link nav-images'><Drawer/></Nav.Link>
					     </Nav>
				  	</Navbar.Collapse>
				</Navbar>
			</Container>
		</div>
	);
}

export default NavigationBar;