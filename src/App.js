import React, { Component } from 'react';
import './App.css';
import Calendar from './Components/Calendar' 
import Classes from './Components/Classes' 
import Order from './Components/Order' 

class App extends Component {
  //Want to add multiple time slots in the future and loop through as options
  state = {
    classes: [
      {
        className: "Absolute Abs",
        classDay: "Monday",
        classTime: "3:00 PM",
        image: "./Images/Absolute_Abs.jpg",
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
        image: "./Images/Sultry_Stretchers.jpg",
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
        image: "./Images/Kickstart_Cardio.jpg",
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
        image: "./Images/Glorious_Glutes.jpg",
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
        image: "./Images/Mindful_Meditations.jpg",
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
    
  render() {
    return (
      <div className="app">
        <Classes {...this.state} selectedClass={this.selectedClass}/>
        <Calendar {...this.state} />
        <Order />
      </div>
    );
  }
}

export default App;


/*

    for (let i=0; i<this.state.classes.length; i++) {
      if (name === this.state.classes[i].className) {
        const classToAdd = this.state.classes[i];
        console.log("Class to add: ", classToAdd);
        if (this.state.enrolled.length === 0) {
          this.setState({
            enrolled: [classToAdd]
          })
        }
        else {
          console.log("Enrolled 1: ", this.state.enrolled)
          for (let j=0; j<this.state.enrolled.length; j++) {
            if (classToAdd !== this.state.enrolled[j]) {
              this.setState(previousState => ({
                enrolled: [...previousState.enrolled, classToAdd]
              }))
            }
          }           
          console.log("Enrolled 2: ", this.state.enrolled)
        }
      }
    }





            console.log(this.state.enrolled)
            this.state.enrolled.forEach(enrolledItem => {
              if (name !== enrolledItem.className) {               
                this.setState(previousState => ({
                  enrolled: [...previousState.enrolled, classItem]
                }))    
                console.log(enrolledItem.className)
            
              } else{console.log("Duplicate")}        
            });


                    if (this.state.enrolled.length === 0) {
          this.setState(previousState => ({
            enrolled: [...previousState.enrolled, classItem]
          }))
        } //If enrolled isn't empty make sure the class isn't already added so no duplicate classes are added
          else {    });


           
    this.state.classes.forEach(classItem => {
      if (name === classItem.className) {
            this.state.enrolled.forEach(enrolledItem => {
              if (name !== enrolledItem.className) {
                console.log("Adding to state!");
                this.setState(previousState => ({
                  enrolled: [...previousState.enrolled, classItem]
                }))
              } else {console.log("Already in state!")}
            })
          }
      })
            */