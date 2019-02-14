import React, { Component } from 'react';
import Class from './Class' 
import Header from './Header' 

class Classes extends Component {
  render() {
    const classesArray = this.props.classes;

    return (
        <div className="main column" id="classes-outer">
            <Header />
            <div className="column" id="classes-inner">
                <h2>Classes</h2>  
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
        </div>
    )
  }
}

export default Classes;