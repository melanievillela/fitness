import React, { Component } from 'react';

class Class extends Component {
 
  addClass = (e) => {
    e.preventDefault();
    const classSelection = e.target.name;
    const disabledBtn = e.target.querySelector("button");
    this.props.selectedClass(classSelection);
    disabledBtn.setAttribute("disabled", true);
  }

  render() {

    return (
        <div className="column" id="class">
          <form className="column" onSubmit={this.addClass} name={this.props.name}>
            <img src={require(`../Images/${this.props.image}`)} alt="fitness" className="fitness-images"/>
            <div className="row"><h3>Class Name: </h3><p>{this.props.name}</p></div>
            <div className="row"><h3>Class Instructor: </h3><p>{this.props.instructor}</p></div>
            <div className="row description"><h3>Class Description: </h3><p>{this.props.summary}</p></div>
            <div className="row"><h3>Days: </h3><p>{this.props.day}</p></div>
            <select name="schedule">              
              <option value="times">{this.props.time}</option>
            </select>
            <br />
            <button className="add" btnid={this.props.name}>Add Class</button>
          </form>
        </div>
    )
  }
}

export default Class;
