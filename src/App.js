import React, { Component } from 'react';
//import firebase from './firebase.js';
import './App.css';
import Calendar from './Components/Calendar' 
import Classes from './Components/Classes' 
import Header from './Components/Header' 

class App extends Component {
	//Want to add multiple time slots in the future and loop through as options
  	state = {
		classes2: [],
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
 	}

	//Remove class & update state of enrolled
	removedClass = (name) => {
		const enrolledArray = this.state.enrolled;

		const updatedEnrolledArray = enrolledArray.filter(item => item.className !== name);
		this.setState({
		enrolled: updatedEnrolledArray
		})
	}
		
	render() {

		return (
			<div className="app">
				<Header />
				<h2>Classes</h2>  
				<Classes {...this.state} selectedClass={this.selectedClass} />
			</div>
		);
	}
}

export default App;

//<Calendar {...this.state} removedClass={this.removedClass} />
