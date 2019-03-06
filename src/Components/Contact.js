import React, { Component } from 'react';
import {Button, Input} from 'react-materialize'


class Contact extends Component {
    render() {
        return (
            <div id="contact">
                <h3>Get In Touch!</h3>
                <div className="column" id="contact-form">
                    <Input s={6} label="First Name" />
                    <Input s={6} label="Last Name" />
                    <Input type="email" label="Email" s={12} />
                    <br />
                    <Input type='textarea' label="Message"/>
                    <Button className="purple darken-3" waves='light'>Submit</Button>
                </div>
            </div>
        )
    }
}

export default Contact;