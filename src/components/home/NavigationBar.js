import React from 'react';
import {
	Navbar,
	Nav,
	NavDropdown
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import filter from '../../images/home/header/filter.png';
import nounProfile from '../../images/home/header/noun-profile.png';
import group from '../../images/home/header/group.png';
import combinedShape from '../../images/home/header/combined-shape.png';


function NavigationBar(argument) {
	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Navbar.Brand href="#">Karankal.com</Navbar.Brand>
		  	<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  	<Navbar.Collapse id="responsive-navbar-nav">
		    	<Nav className="ml-auto" >
			      	<Nav.Link><NavLink exact activeClassName='activeNav' to='/shop'>Shop</NavLink></Nav.Link>
			      	<Nav.Link><NavLink exact activeClassName='activeNav' to='/projects'>Projects</NavLink></Nav.Link>
			      	<Nav.Link><NavLink exact activeClassName='activeNav' to='/blog'>Blog</NavLink></Nav.Link>
			      	<NavDropdown title="Contact Us" id="collasible-nav-dropdown">
			       		<NavDropdown.Item href="#action/3.1">hello@karankal.com</NavDropdown.Item>
			       		<NavDropdown.Divider />
			       		<NavDropdown.Item href="#action/3.2">+917829 475707</NavDropdown.Item>				       		
		      		</NavDropdown>
			      	{/*<Nav.Link href="#deets"><img src={filter}/></Nav.Link>
			      				      	<Nav.Link href="#deets"><img src={nounProfile}/></Nav.Link>
			      				      	<Nav.Link href="#deets"><img src={group}/></Nav.Link>
			      				      	<Nav.Link href="#deets"><img src={combinedShape}/></Nav.Link>*/}
		    	</Nav>
			    <Nav>
			      	
			    </Nav>
		  	</Navbar.Collapse>
		</Navbar>
	);
}

export default NavigationBar;