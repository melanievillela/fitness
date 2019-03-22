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
		//Turn each class object into iterable item
		const enrolledInfo = [];
		enrolledArray.forEach(item => {
            enrolledInfo.push(Object.entries(item[1].Classes))
		});

    return (
		<Collapsible>
			<CollapsibleItem id="calendar" header="Calendar" icon="add">			  	
				{enrolledInfo.map((item, index) =>
					<div key={index} className="calendar-item">
						<h5>{item[0][0]}</h5>
						<p>{item[0][1].classDay} </p>
						<p>{item[0][1].classTime}</p>
						<Button className="add purple darken-3" btnid={item[0][0]} waves='light' onClick={this.removeClass}>Remove</Button>
					</div>
				)}  
				<Button className="purple lighten-3 black-text" id="enroll" waves='light' >Checkout</Button>     
			</CollapsibleItem>
		</Collapsible>
    )
  }
}

export default Calendar;