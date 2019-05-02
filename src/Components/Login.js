import React, { Component } from 'react';
import {Col, Row, CardPanel, Button, Icon, TextInput} from 'react-materialize'

class Login extends Component {

	render() {
      
    return (
		<Row>
            <Col m={6} s={12}>
                <CardPanel className="darken-3">
                    <Button waves="light" >
                        Login
                        <Icon right>
                        send
                        </Icon>
                    </Button>                  
                </CardPanel>
            </Col>
        </Row>
    )
  }
}

export default Login;