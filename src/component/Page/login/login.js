import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Container, Row, Col, Button, Card, CardBody, FormGroup, CardGroup } from 'reactstrap';
import swal from 'sweetalert';
import '../login/login.css';
import { async } from 'q';
import axios from 'axios';

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange1(event) {
    this.setState({ username: event.target.value });
  }

  handleChange2(event) {
    this.setState({ password: event.target.value });

  }
  async handleClick(event) {
    if (this.state.username === "chiao" && this.state.password === "test1234") {
      await swal({
        title: "Good job!",
        text: this.state.username + " is signed in...!",
        icon: "success",
        button: "OK",
      });
      window.location.assign("location");
    }
    else {
      swal({
        title: "Sorry!",
        text: "please sign in...!",
        icon: "error",
        button: "OK",
      });;
    }
  }

  // handleSubmit2 (event) {
  //   axios.post('http://localhost:3001/users', {
  //       id: this.state.username,
  //       password: this.state.password,
  //   }).then(resp => {
  //     if (this.state.username === "chiao" && this.state.password === "test1234"){
  //       window.location.assign("location");
  //     }
  //   }).catch(error => {
  //       console.log(error);
  //   });  
  // }

  
  render() {
    return (
      <div className="container-fluid">
        <br />

        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <CardGroup className="nlogin">

                <Card body>
                  <CardBody>

                    <h1 className="text-center"> SIGN IN </h1>
                    <hr />
                    <br />
                    <AvForm>
                      <AvField label="Username : " name="username" type="text" value={this.state.username}
                        onChange={this.handleChange1} validate={{
                          required: { value: true, errorMessage: 'Please enter username' },
                          pattern: { value: '^[A-Za-z0-9]+$', errorMessage: 'Your username must be composed only with letter and numbers' },
                          minLength: { value: 3, errorMessage: 'Your username must be between 3 and 16 characters' },
                          maxLength: { value: 16, errorMessage: 'Your username must be between 3 and 16 characters' }
                        }} grid={{ xs: 9 }} />
                      <AvField label="Password : " name="password" type="password" value={this.state.password}
                        onChange={this.handleChange2} validate={{
                          required: { value: true, errorMessage: 'Please enter password' },
                          pattern: { value: '^[A-Za-z0-9]+$', errorMessage: 'Your password must be composed only with letter and numbers' },
                          minLength: { value: 3, errorMessage: 'Your password must be between 3 and 16 characters' },
                          maxLength: { value: 16, errorMessage: 'Your password must be between 3 and 16 characters' }
                        }} grid={{ xs: 9 }} />
                      <FormGroup body className="text-center">
                        <Button color="primary" onClick={this.handleClick.bind(this)}> SIGN  IN </Button>
                      </FormGroup>
                    </AvForm>

                  </CardBody>
                </Card>

              </CardGroup>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default login;