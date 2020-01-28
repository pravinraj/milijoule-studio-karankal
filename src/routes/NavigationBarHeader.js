import React from 'react';
import {
	Container,
	Row,
	Col,
	Navbar,
	Nav
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import brandImage from '../images/home/header/karankal-com.png';
import nounProfile from '../images/home/header/noun-profile.png';
import cart from '../images/home/header/cart.png';

function NavigationBarHeader() {
	return (
		<Container>
			<Navbar fixed="top" className='studio-navheader-wrapper' collapseOnSelect expand="lg">
				<Row>
				<Col xs={6} className='my-auto'>
					<Navbar.Brand href="#" bsPrefix='navbar brand-image'><img src={brandImage} alt='brandImage'/></Navbar.Brand>
				</Col>
				<Col xs={2} className='about'>
					<Nav.Link bsPrefix='nav-link route-type'><NavLink exact activeClassName='activeNav' to='/about-studio/team'>ABOUT</NavLink></Nav.Link>
				</Col>
				<Col xs={3} className='contact'>
					<Nav.Link href='tel:+917829475707' bsPrefix='nav-link route-type'>CONTACT</Nav.Link>
				</Col>
				{/*<Col className='image-links-list'>
					<Navbar id="responsive-navbar-nav">
						<Nav className='ml-auto nav-images-list'>
							<Nav.Link href="#" bsPrefix='nav-link nav-images'><img src={nounProfile} alt='nounProfile' /></Nav.Link>
						    <Nav.Link href="#" bsPrefix='nav-link nav-images'><img src={cart} alt='cart' /></Nav.Link>
						</Nav>
					</Navbar>
				</Col>*/}
				</Row>
			</Navbar>
		</Container>
	);
}

export default NavigationBarHeader;