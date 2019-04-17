import React, { Component } from 'react';
import {Navbar, NavItem, Col, Row, CardPanel} from 'react-materialize'

class Header extends Component {

	componentDidMount() {
		const logo = document.querySelector(".brand-logo");
		logo.addEventListener("click", this.scrollToTop)
	}

	login(e) {
		e.preventDefault();
	}

	scrollToClasses = () => {
		const navHeight = document.querySelector(".nav-wrapper").clientHeight;
		document.querySelector("#classes").scrollIntoView();
		window.scrollBy(0, -navHeight);
	}

	scrollToContact = () => {
		const navHeight = document.querySelector(".nav-wrapper").clientHeight;
		document.querySelector("#contact").scrollIntoView();
		window.scrollBy(0, -navHeight);
	}

	scrollToTop = (e) => {
		e.preventDefault();
		document.querySelector("#header").scrollIntoView();
	}

  	render() {

		return (
			<div id="header">
				<Navbar className="navbar purple darken-3" brand="Lotus Fitness" left>		
					<NavItem onClick={this.login}>Login</NavItem>			
					<NavItem onClick={this.scrollToClasses}>Classes</NavItem>
					<NavItem onClick={this.scrollToContact}>Contact Us</NavItem>
				</Navbar>
				<Row id="offer-container">
					<Col l={6} s={12}>
						<CardPanel id="offer">
							<h4 className="white-text">TRY US FOR FREE</h4>
							<p>Try 5 classes for free. Simply enroll below.</p>
						</CardPanel>
					</Col>
				</Row>
			</div>
		)
  	}
}

export default Header;