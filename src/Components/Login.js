import React, { Component } from 'react';
import {Row, Input} from 'react-materialize'


class Login extends Component {
    render() {
        return (
            <div id="login-form">
                <h4>LOGIN</h4>
                <Row>
                    <Input type="email" label="Email" s={12} />
                    <Input type="password" label="password" s={12} />
                </Row>
            </div>
        )
    }
}

export default Login;