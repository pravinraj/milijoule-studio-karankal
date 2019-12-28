import React, {useState} from 'react';
import hamburger from '../../images/home/header/hamburger.png';

function Drawer(props) {
	const [drawerWidth,setWidth] = useState(0);
	const openNav = () => {
		setWidth('37%');
	}

	const closeNav = () => {
		setWidth('0');
	}

	return (
		<div className='drawer-wrapper'>
			<span onClick={openNav}><img src={hamburger} alt='Hamburger' /></span>
			<div id="mySidenav" class="sidenav" style={{width: drawerWidth}}>
			  <p  className='closebtn' onClick={closeNav}>&#9776;</p>
			  <p>Cafe & Restaurant</p>
			  <p>Corporate</p>
			  <p>Retail</p>
			  <p>Digital Design(UX/UI)</p>
			  <p>ALL (Projects)</p>
			</div>
		</div>
	);
}

export default Drawer;