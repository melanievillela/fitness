import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize'

class Header extends Component {

	componentDidMount() {
		const logo = document.querySelector(".brand-logo");
		logo.addEventListener("click", this.scrollToTop)
	}

	login = (e) => {
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
					<NavItem onClick={this.login}><i className="material-icons">person</i></NavItem>	
					<NavItem onClick={this.scrollToClasses}>Classes</NavItem>
					<NavItem onClick={this.scrollToContact}>Contact Us</NavItem>
				</Navbar>
			</div>
		)
  	}
}

export default Header;