import React, { Component } from 'react';
import {Navbar, NavItem, Row, Col, CardPanel} from 'react-materialize'

class Header extends Component {
  	render() {
		return (
			<div id="header">
				<Row id="about-container">
					<Col s={12} m={6} id="about">
						<CardPanel className="purple lighten-3 black-text">
							<i className="material-icons close">clear</i>
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
				
				<Navbar className="navbar purple darken-3" brand='Lotus Fitness' left>
					<NavItem href="#header">About</NavItem>
					<NavItem href="#classes">Classes</NavItem>
					<NavItem onClick={() => console.log('test click')}>Contact Us</NavItem>
				</Navbar>
			</div>
		)
  	}
}

export default Header;

/*
				<div id="about">
					<p>
						Bacon ipsum dolor amet nulla veniam ham hock boudin doner minim frankfurter shankle picanha cupim filet mignon ut eiusmod. 
						Eu dolor irure non ball tip swine ullamco bresaola laboris. Excepteur tri-tip enim t-bone landjaeger kevin. Cupim dolore dolor chicken short ribs ea. 
						Sunt eu excepteur, commodo elit esse tail officia. Lorem ham tongue sausage consectetur, boudin voluptate qui pork loin beef tenderloin fugiat nostrud pork. 
						Quis ea turducken, kevin brisket exercitation veniam meatloaf tempor t-bone porchetta sirloin officia beef ribs.
					</p>
				</div>
				*/