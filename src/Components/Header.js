import React, { Component } from 'react';
import {Navbar, NavItem, Row, Col, CardPanel} from 'react-materialize'

class Header extends Component {

	displayAbout = () => {
		document.querySelector("#header").scrollIntoView();
		document.querySelector("#about").style.zIndex = "1";
		document.querySelector("#about-container").style.backgroundColor = "rgb(0, 0, 0, .5)";
	}

	hideAbout = () => {
		document.querySelector("#about").style.zIndex = "-1";
		document.querySelector("#about-container").style.backgroundColor = "transparent";
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

  	render() {
		return (
			<div id="header">
				<Row id="about-container">
					<Col s={12} m={6} id="about">
						<CardPanel className="purple lighten-3 black-text">
							<i className="material-icons close" onClick={this.hideAbout}>clear</i>
							<br />
							<span>
								Bacon ipsum dolor amet nulla veniam ham hock boudin doner minim frankfurter shankle picanha cupim filet mignon ut eiusmod. 
								Eu dolor irure non ball tip swine ullamco bresaola laboris. Excepteur tri-tip enim t-bone landjaeger kevin. Cupim dolore dolor chicken short ribs ea. 
								Sunt eu excepteur, commodo elit esse tail officia. Lorem ham tongue sausage consectetur, boudin voluptate qui pork loin beef tenderloin fugiat nostrud pork. 
								Quis ea turducken, kevin brisket exercitation veniam meatloaf tempor t-bone porchetta sirloin officia beef ribs.								
							</span>
						</CardPanel>
					</Col>
				</Row>
				<Navbar className="navbar purple darken-3" brand="Lotus Fitness" left>					
					<NavItem onClick={this.displayAbout}>About</NavItem>
					<NavItem onClick={this.scrollToClasses}>Classes</NavItem>
					<NavItem onClick={this.scrollToContact}>Contact Us</NavItem>
				</Navbar>				
			</div>
		)
  	}
}

export default Header;