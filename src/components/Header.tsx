import React from 'react';

import './style.scss';

import NavBar from './NavBar';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg">
		<NavBar />
	</section>
);

export default Header;