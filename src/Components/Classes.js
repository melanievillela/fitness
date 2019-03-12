import React, { Component } from 'react';
import Class from './Class' 

class Classes extends Component {
	render() {
		const classesArray = this.props.classes2;
		const classInfo = [];
		//Turn each class object into iterable item
		classesArray.forEach(item => {
            classInfo.push(Object.entries(item[1].Classes))
        });

	return (
		<div id="classes">
			<div className="column" id="classInfo">
				<h2>Classes</h2>
				<p>Eu reprehenderit strip steak pig, meatball beef ribs tongue cupim chicken. Pastrami tail corned beef, pork belly excepteur dolore anim aliqua.</p>
				<p>Cupim alcatra prosciutto adipisicing dolore kevin. Veniam reprehenderit mollit ullamco capicola.</p>
				<p>Ribeye beef ribs drumstick cow reprehenderit frankfurter, ham swine dolore cupidatat andouille laborum sed pancetta.</p>					
			</div>
			{ 
                classInfo.length > 0 ?
                
                classesArray.map((item, index) =>  
                    <Class 
                        key={index}
                        name={classInfo[index][0][0]} 
                        day={classInfo[index][0][1].classDay} 
                        time={classInfo[index][0][1].classTime}
                        image={classInfo[index][0][1].image}
                        instructor={item[0]}
                        summary={classInfo[index][0][1].summary}
                        selectedClass={this.props.selectedClass}
                        enrolled={this.props.enrolled}
                    />
                ) : console.log("LOADING")
            }          
		</div>
	)
  }
}

export default Classes;