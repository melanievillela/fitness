import React, { Component } from 'react';
import Class from './Class' 
import Header from './Header' 

class Classes extends Component {
  render() {
    return (
        <div className="main column" id="classes-outer">
            <Header />
            <div className="column" id="classes-inner">
                <h2>Classes</h2>
                <Class />
                <Class />
                <Class />
                <Class />
            </div>
        </div>
    )
  }
}

export default Classes;