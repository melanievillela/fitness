import React, { Component } from 'react';
import {Button, Input, Row, Col, CardPanel} from 'react-materialize'


class Contact extends Component {
    render() {
        return (
            <div id="contact">
                <Row>
                    <Col s={12} m={12}>
                        <CardPanel className="purple lighten-3 black-text" id="address-card">
                            <h5>
                                Lotus Fitness
                            </h5>
                            <p>
                               1234 Some Address <br />
                               Houston, TX <br />
                            </p>
                            <p>
                                PHONE: 123-456-7890
                            </p>
                        </CardPanel>
                    </Col>
                </Row>

                <h3>Get In Touch!</h3>
                <div className="column">
                    <Input s={12} label="First Name" />
                    <Input s={12} label="Last Name" />
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