import React, { Component } from 'react';
import Class from './Class' 

class Classes extends Component {
	render() {
    	const classesArray = this.props.classes;

    return (
        <div id="classes">
			{classesArray.map((item, index) =>
				<Class 
				key={index}
				name={item.className} 
				day={item.classDay} 
				time={item.classTime}
				image={item.image}
				instructor={item.instructor}
				summary={item.summary}
				selectedClass={this.props.selectedClass}
				enrolled={this.props.enrolled}
				/>
			)}              
        </div>
    )
  }
}

export default Classes;