import React from 'react';
import {
	Navbar,
	Nav,
	NavDropdown,
	Col,
	Row
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import NavigationBar from '../components/home/NavigationBar'

function Home() {
	return (
		<Row>
			<Col>
				<NavigationBar/>
			</Col>
		</Row>
	);
}

export default Home;