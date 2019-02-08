import React, { Component } from 'react';

class Class extends Component {

  addClass = (e) => {
    e.preventDefault();
    let classSelection = e.target.name;
    //console.log("Class Component: ", classSelection);
    this.props.selectedClass(classSelection);
  }

  render() {
    return (
        <div className="column" id="class">
          <form className="column" onSubmit={this.addClass} name={this.props.name}>
            {/* Want to add image here! */}
            <div className="row"><h3>Class Name: </h3><p>{this.props.name}</p></div>
            <div className="row"><h3>Class Instructor: </h3><p>{this.props.instructor}</p></div>
            <div className="row"><h3>Class Description: </h3><p>{this.props.summary}</p></div>
            <div className="row"><h3>Days: </h3><p>{this.props.day}</p></div>
            <select name="schedule">              
              <option value="times">{this.props.time}</option>
            </select>
            <br />
            <button>Add Class</button>
          </form>
        </div>
    )
  }
}

export default Class;