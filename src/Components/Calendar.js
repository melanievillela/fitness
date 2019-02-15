import React, { Component } from 'react';

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

  render() {
    const enrolledArray = this.props.enrolled;

    return (
      <div className="main column" id="calendar">
        <h2>Calendar</h2>  
        <div className=" column">
          {enrolledArray.map((item, index) =>
            <div key={index} className="calendar-item">
              <h3>{item.className}</h3>
              <p>{item.classDay} </p>
              <p>{item.classTime}</p>
              <button btnid={item.className} onClick={this.removeClass}>Remove Class</button>
            </div>
          )}       
        </div>
      </div>
    )
  }
}

export default Calendar;