import React from 'react';
import {
	Navbar,
	Nav,
	NavDropdown
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import brandImage from '../../images/home/header/karankal-com.png';
import filter from '../../images/home/header/filter.png';
import nounProfile from '../../images/home/header/noun-profile.png';
import group from '../../images/home/header/group.png';
import search from '../../images/home/header/search.png';
import combinedShape from '../../images/home/header/combined-shape.png';
import shop from '../../images/home/header/shop.png';
import projects from '../../images/home/header/projects.png';
import blog from '../../images/home/header/blog.png';
import mail from '../../images/home/header/mail.png';
import phone from '../../images/home/header/phone.png';


function NavigationBar(argument) {
	return (
		<Navbar fixed="top" className='studio-header-wrapper' collapseOnSelect expand="lg" bg="light" variant="light">
			<Navbar.Brand href="#" bsPrefix='navbar brand-image'><img src={brandImage} alt='brandImage'/></Navbar.Brand>
		  	<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  	<Navbar.Collapse id="responsive-navbar-nav">
		    	<Nav className="ml-auto" >
			      	<Nav.Link bsPrefix='nav-link route-type-shop'><NavLink exact activeClassName='activeNav' to='/shop'><img src={shop} alt='Shop' /></NavLink></Nav.Link>
			      	<Nav.Link bsPrefix='nav-link route-type-projects'><NavLink exact activeClassName='activeNav' to='/projects'><img src={projects} alt='Projects' /></NavLink></Nav.Link>
			      	<Nav.Link bsPrefix='nav-link route-type-blog'><NavLink exact activeClassName='activeNav' to='/blog'><img src={blog} alt='Blog' /></NavLink></Nav.Link>
			      	<NavDropdown className='contact-us-dropdown' title="Contact Us" id="collasible-nav-dropdown">
			       		<NavDropdown.Item href="#action/3.1" className='contact-us-dropdown-item'><img className='mail-icon' src={mail} alt='mail-icon' /><span className='contact-detail'>hello@karankal.com</span></NavDropdown.Item>
			       		<NavDropdown.Divider />
			       		<NavDropdown.Item href="#action/3.2" className='contact-us-dropdown-item'><img className='phone-icon' src={phone} alt='phone-icon' /><span className='contact-detail'>+917829 475707</span></NavDropdown.Item>				       		
		      		</NavDropdown>
		      		<Nav.Link href="#" bsPrefix='nav-link nav-images'><img src={search} alt='search' /></Nav.Link>
			      	<Nav.Link href="#" bsPrefix='nav-link nav-images'><img src={filter} alt='filter' /></Nav.Link>
			      	<Nav.Link href="#" bsPrefix='nav-link nav-images'><img src={nounProfile} alt='nounProfile' /></Nav.Link>
			      	<Nav.Link href="#" bsPrefix='nav-link nav-images'><img src={group} alt='group' /></Nav.Link>
			      	<Nav.Link href="#" bsPrefix='nav-link nav-images'><img src={combinedShape} alt='combinedShape' /></Nav.Link>
		    	</Nav>
		  	</Navbar.Collapse>
		</Navbar>
	);
}

export default NavigationBar;