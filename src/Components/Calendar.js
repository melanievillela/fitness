import React, { Component } from 'react';
import {Button, Collapsible, CollapsibleItem} from 'react-materialize'

class Calendar extends Component {
	
	removeClass = (e) => {
		const classDeSelection = e.target.getAttribute("btnid");
		this.props.removedClass(classDeSelection);
		const btnArray = document.querySelectorAll(".add");
		btnArray.forEach(button => {
			const btnID = button.getAttribute("btnid");
			if(btnID === classDeSelection) {
				button.removeAttribute("disabled");
			}      
		});
	}

	hideCalendar = () => {
		document.querySelector("#calendar").style.zIndex = "-1";
	}

	render() {
		const enrolledArray = this.props.enrolled;

    return (
		<Collapsible>
			<CollapsibleItem id="calendar" header="Calendar" icon="add">			  	
				{enrolledArray.map((item, index) =>
					<div key={index} className="calendar-item">
						<h5>{item.className}</h5>
						<p>{item.classDay} </p>
						<p>{item.classTime}</p>
						<Button className="add purple darken-3" btnid={item.className} waves='light' onClick={this.removeClass}>Remove</Button>
					</div>
				)}  
				<Button className="purple lighten-3 black-text" id="enroll" waves='light' >Checkout</Button>     
			</CollapsibleItem>
		</Collapsible>
    )
  }
}

export default Calendar;

/*

		<div className="column" id="calendar">
			<i className="material-icons minimize" onClick={this.hideCalendar}>minimize</i>
			<br /> 
			<h2>Calendar</h2> 
			<div className="column">
			{enrolledArray.map((item, index) =>
				<div key={index} className="calendar-item">
				<h5>{item.className}</h5>
				<p>{item.classDay} </p>
				<p>{item.classTime}</p>
				<Button className="add purple darken-3" btnid={item.className} waves='light' onClick={this.removeClass}>Remove</Button>
				</div>
			)}       
			</div>
			<Button className="add purple lighten-3 black-text" id="enroll" waves='light' >Enroll</Button>
	  </div>
	  */