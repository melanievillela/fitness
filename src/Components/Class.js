import React, { Component } from 'react';

class Class extends Component {
  addclass = (event) => {
    event.preventDefault();
    
  }

  render() {
    return (
        <div className="column" id="class">
          <form className="column" onSubmit={this.addClass}>
            <h3>Class Name: </h3>
            <p>Class Instructor: </p>
            <p>Class Description: </p>
            <select name="schedule">
              <p>Days: </p>
              <option value="times"></option>
            </select>
            <br />
            <button type="submit">Add Class</button>
          </form>          
        </div>
    )
  }
}

export default Class;