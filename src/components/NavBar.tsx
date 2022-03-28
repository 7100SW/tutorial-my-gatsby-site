import React from 'react';
import { Link } from 'gatsby'
import './style.scss';

const NavBar = () => (
	<div className="container" id="navbar-container">
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="https://bulma.io">
					<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
				</a>

				<a
					role="button"
					className="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start"></div>

				<div className="navbar-end">
					<div className="navbar-item">
						<Link className="navbar-item" to="/">Home</Link>
						<Link className="navbar-item" to="/providers">Providers</Link>
						<Link className="navbar-item" to="/brokers">Brokers And Agents</Link>
						<div className="buttons">
							<a className="button is-primary is-orange">
								<strong>Contact Us</strong>
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default NavBar;