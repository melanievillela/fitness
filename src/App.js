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
		classes2: {},
	classes: [
	  {
		className: "Absolute Abs",
		classDay: "Monday",
		classTime: "3:00 PM",
		image: "Absolute_Abs.jpg",
		instructor: "Georgia Thompson",
		summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
				  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
	  },
	  {
		className: "Sultry Stretchers",
		classDay: "Tuesday",
		classTime: "9:00 AM",
		image: "Sultry_Stretchers.jpg",
		instructor: "Anita Mendoza",
		summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
				  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
	  },
	  {
		className: "Kickstart Cardio",
		classDay: "Wednesday",
		classTime: "3:00 PM",
		image: "Kickstart_Cardio.jpg",
		instructor: "Natalie Jones",
		summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
				  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
	  },
	  {
		className: "Glorious Glutes",
		classDay: "Thursday",
		classTime: "9:00 AM",
		image: "Glorious_Glutes.jpg",
		instructor: "Stephanie Larson",
		summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
				  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
	  },
	  {
		className: "Mindful Meditations",
		classDay: "Friday",
		classTime: "3:00 PM",
		image: "Mindful_Meditations.jpg",
		instructor: "Gia Ashani",
		summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
				  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
	  }
	],
	enrolled: []
  }
	  
	componentDidMount() {
		const itemsRef = firebase.database().ref('Instructors');
		itemsRef.on("value", (snapshot) => {
			let items = snapshot.val();
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

		return (
			<div className="app">
				<Header />
				<div id="main">
					<Classes {...this.state} selectedClass={this.selectedClass} />
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