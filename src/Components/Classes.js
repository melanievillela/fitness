import React, { Component } from 'react';
import Class from './Class' 

class Classes extends Component {
	render() {
    	const classesArray = this.props.classes;

    return (
        <div id="classes">
			<div className="column" id="classInfo">
				<h2>Classes</h2>
				<p>Eu reprehenderit strip steak pig, meatball beef ribs tongue cupim chicken. Pastrami tail corned beef, pork belly excepteur dolore anim aliqua.</p>
				<p>Cupim alcatra prosciutto adipisicing dolore kevin. Veniam reprehenderit mollit ullamco capicola.</p>
				<p>Ribeye beef ribs drumstick cow reprehenderit frankfurter, ham swine dolore cupidatat andouille laborum sed pancetta.</p>					
			</div>
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