import React, { Component } from 'react';
import {
  Button, Modal, Form, Label, Container, Grid
} from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { dispatch } = this.props;
    event.preventDefault();
    axios.post('/api/auth/signin', this.state)
      .then(res => res.data)
      .then(data => {
        localStorage.setItem('token', data.token);
        const user = jwtDecode(data.token);
        dispatch({
          type: 'LOGIN',
          user
        });
      })
  }

  validateForm() {
    const { email, password } = this.state;
    return email.length > 0 && password.length > 0;
  }


  render() {
    const { email, password } = this.state;
    return (
      <div className="Login">
        <Container>
          <Grid centered>
            <Modal trigger={<Button>Login</Button>}>
              <Modal.Header>Please Login</Modal.Header>
              <Modal.Content>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <Label>Email</Label>
                    <Form.Input
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Label>Password</Label>
                    <Form.Input
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.handleChange}
                      type="password"
                    />
                  </Form.Field>
                  <Button
                    type="submit"
                    disabled={!this.validateForm()}
                  >
                    Login
                  </Button>
                </Form>
              </Modal.Content>
            </Modal>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth
});

export default connect(mapStateToProps)(Login);
