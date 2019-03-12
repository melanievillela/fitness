import React, { Component } from 'react';
import firebase, { auth, provider } from './firebase.js';
import './App.css';
import Calendar from './Components/Calendar' 
import Classes from './Components/Classes' 
import Contact from './Components/Contact' 
import Header from './Components/Header' 
import Map from './Components/Map' 

class App extends Component {
	//Want to add multiple time slots in the future and loop through as options
  	state = {
		classes2: [],
		enrolled: []
	}
	  
	componentDidMount() {
		const itemsRef = firebase.database().ref('Instructors');
		itemsRef.on("value", (snapshot) => {
			//Object to array
			let items = Object.entries(snapshot.val());
			this.setState({
				classes2: items
			})
		})
	}

	//Get user class selection & update state of enrolled
  	selectedClass = (name) => { 
		const classArray = this.state.classes;
	
		classArray.forEach(classItem => {
			if(name === classItem.className) { 
				this.setState(previousState => ({
					enrolled: [...previousState.enrolled, classItem]
				}))  
			}        
		});

		//Show calendar & hide main classes info
		document.querySelector("#calendar").style.zIndex = "1";
		document.querySelector("#classInfo").childNodes.forEach(child => {
			child.classList.add("hide");
		});
 	}

	//Remove class & update state of enrolled
	removedClass = (name) => {
		const enrolledArray = this.state.enrolled;
		const updatedEnrolledArray = enrolledArray.filter(item => item.className !== name);
		this.setState({
		enrolled: updatedEnrolledArray
		})

		//Hide calendar & show main classes info
		if(this.state.enrolled.length <= 1) {
			document.querySelector("#calendar").style.zIndex = "-1";
			document.querySelector("#classInfo").childNodes.forEach(child => {
				child.classList.remove("hide");
			});
		}
	}
		
	render() {
		const received = this.state.classes2.length > 0;

		return (
			<div className="app">
				<Header />
				<div id="main">
					{received ? <Classes {...this.state} selectedClass={this.selectedClass} /> : console.log("Loading")}					
					<Calendar {...this.state} removedClass={this.removedClass} />
				</div>
				<div id="footer">
					<Contact />
					<Map />
				</div>
			</div>
		);
	}
}

export default App;