import React, { Component } from 'react';
import {Button} from 'react-materialize'

class Class extends Component {

	addClass = (e) => {
		e.preventDefault();
		const classSelection = e.target.name;
		this.props.selectedClass(classSelection);
		//Disable enroll button so you can't add ame class twice
		const disabledBtn = e.target.querySelector("button");
		disabledBtn.setAttribute("disabled", true);
		//Scroll into Calendar view
		const navHeight = document.querySelector(".nav-wrapper").clientHeight;
		document.querySelector("#classes").scrollIntoView();
		window.scrollBy(0, -navHeight);
	  }


  	render() {

	return (
		<div className="column class">
			<form className="column" onSubmit={this.addClass} name={this.props.name}>
				<img src={require(`../Images/${this.props.image}`)} alt="fitness" className="fitness-images"/>
				<h4>{this.props.name}</h4>
				<h5>{this.props.instructor}</h5>
				<p>{this.props.summary}</p>
				<p>{this.props.day}</p>
				<select name="schedule">              
					<option value="times">{this.props.time}</option>
				</select>
				<br />
				<Button className="add purple darken-3" btnid={this.props.name} waves='light'>Enroll</Button>
		  	</form>
		</div>
	)
  }
}

export default Class;
