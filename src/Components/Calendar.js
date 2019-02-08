import React, { Component } from 'react';
//import Class from './Class' 

class Calendar extends Component {

  render() {
    
    return (
        <div className="main column" id="calendar">
          <h2>Schedule</h2>
          {this.props.enrolled.map((item, index) =>
            <div key={index} className="calendar-item">
              <h3>{item.className}</h3>
              <p>{item.classDay} </p>
              <p>{item.classTime}</p>
            </div>
          )} 
        </div>
    )
  }
}

export default Calendar;