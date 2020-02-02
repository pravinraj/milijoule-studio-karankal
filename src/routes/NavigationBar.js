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
import share from '../images/home/header/share.png';

import Drawer from '../components/navbar-slider/Drawer';


function NavigationBar(argument) {
	const width = window.innerWidth;
	return (
		<div>
			<Container>
				<Navbar fixed="top" className='studio-header-wrapper' collapseOnSelect expand="lg">
					<Navbar.Brand href="#" bsPrefix='navbar brand-image'><img src={brandImage} alt='brandImage'/></Navbar.Brand>
				  	<Navbar id="responsive-navbar-nav" bsPrefix={width > 768 ? 'navbar studio-navbar':''}>
				  		<Nav className="mx-auto" >
				  			<Nav.Link bsPrefix='nav-link route-type'><NavLink exact activeClassName='activeNav' to='/about-studio/firm'>ABOUT</NavLink></Nav.Link>
					      	<Nav.Link bsPrefix='nav-link route-type'><NavLink exact activeClassName='activeNav' to='/category/all'>WORK</NavLink></Nav.Link>
					      	<Nav.Link href='https://karankal.store/' target='_blank' bsPrefix='nav-link route-type'><a>STORE</a></Nav.Link>
					      	<Nav.Link bsPrefix='nav-link route-type' href='https://studiokarankal.wordpress.com/' target='_blank'><a>BLOG</a></Nav.Link>
					      	<NavDropdown className='contact-us-dropdown custom-carets' title="CONTACT" id="collasible-nav-dropdown">
					       		<NavDropdown.Item href="#action/3.1" className='contact-us-dropdown-item'><img className='mail-icon' src={mail} alt='mail-icon' /><span className='contact-detail'>hello@karankal.com</span></NavDropdown.Item>
					       		<NavDropdown.Divider />
					       		<NavDropdown.Item href="#action/3.2" className='contact-us-dropdown-item'><img className='phone-icon' src={phone} alt='phone-icon' /><span className='contact-detail'>+917829 475707</span></NavDropdown.Item>				       		
				      		</NavDropdown>
				      	</Nav>
			      		<Nav className='nav-images-list'>
			      			<Nav.Link href="#" bsPrefix='nav-link nav-images'><img src={share} alt='share' /></Nav.Link>
				      		{/*<Nav.Link href="#" bsPrefix='nav-link nav-images'><img src={search} alt='search' /></Nav.Link>
					      	<Nav.Link href="#" bsPrefix='nav-link nav-images'><img src={nounProfile} alt='nounProfile' /></Nav.Link>
					      	<Nav.Link href="#" bsPrefix='nav-link nav-images'><img src={cart} alt='cart' /></Nav.Link>*/}
					      	{/*<Nav.Link href="#" bsPrefix='nav-link nav-images'><Drawer/></Nav.Link>*/}
					     </Nav>
				  	</Navbar>
				</Navbar>
			</Container>
		</div>
	);
}

export default NavigationBar;