import React from 'react';
import {
	Container,
	Row,
	Col,
	Navbar,
	Nav
} from 'react-bootstrap';

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