import React from 'react';
import {
	Container,
	Row,
	Col,
	Navbar,
	Nav,
	Figure
} from 'react-bootstrap';
import home from '../images/nav-bar-footer/home.png';
import shop from '../images/nav-bar-footer/shop.png';
import projects from '../images/nav-bar-footer/projects.png';
import blog from '../images/nav-bar-footer/blog.png';

function NavigationBarFooter() {
	return (
		<Navbar fixed='bottom' className='studio-footer-wrapper' collapseOnSelect expand="lg">
				<Row>
					<Col xs={3}>
						<Nav.Link href="#" bsPrefix='nav-link nav-images'>
							<Figure>
							  <Figure.Image
							    width={15}
							    height={17}
							    alt="home"
							    src={home}
							  />
							  <Figure.Caption bsPrefix='figure-caption  footer-caption'>
							    Home
							  </Figure.Caption>
							</Figure>
						</Nav.Link>
					</Col>
					<Col xs={3}>
						<Nav.Link href="#" bsPrefix='nav-link nav-images'>
							<Figure>
							  <Figure.Image
							    width={14}
							    height={16}
							    alt="shop"
							    src={shop}
							  />
							  <Figure.Caption bsPrefix='figure-caption  footer-caption'>
							    Shop
							  </Figure.Caption>
							</Figure>
						</Nav.Link>
					</Col>
					<Col xs={3}>
						<Nav.Link href="#" bsPrefix='nav-link nav-images'>
							<Figure>
							  <Figure.Image
							    width={13}
							    height={14}
							    alt="projects"
							    src={projects}
							  />
							  <Figure.Caption bsPrefix='figure-caption  footer-caption'>
							    Projects
							  </Figure.Caption>
							</Figure>
						</Nav.Link>
					</Col>
					<Col xs={3}>
						<Nav.Link href="#" bsPrefix='nav-link nav-images'>
							<Figure>
							  <Figure.Image
							    width={12}
							    height={13}
							    alt="blog"
							    src={blog}
							  />
							  <Figure.Caption bsPrefix='figure-caption  footer-caption'>
							    Blog
							  </Figure.Caption>
							</Figure>
						</Nav.Link>
					</Col>
				</Row>
		</Navbar>
	);
}

export default NavigationBarFooter;