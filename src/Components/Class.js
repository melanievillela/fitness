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
        <div className="column class">
			<form className="column" onSubmit={this.addClass} name={this.props.name}>
            	<img src={require(`../Images/${this.props.image}`)} alt="fitness" className="fitness-images"/>
            	<h4>{this.props.name}</h4>
            	<h5>{this.props.instructor}</h5>
            	<p>{this.props.summary}</p>
            	<p>{this.props.day}</p>
            	<select name="schedule">              
            		<option value="times">{this.props.time}</option>
            	</select>
            	<br />
            	<button className="add" btnid={this.props.name}>Enroll</button>
          	</form>
        </div>
    )
  }
}

export default Class;
