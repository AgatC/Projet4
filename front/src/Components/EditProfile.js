import React, { Component } from 'react';
import {
  Button, Form, Container, Header
} from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { changeValue, editProfileSuccess, getProfileSuccess } from '../Action/index';

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMyProfile = this.getMyProfile.bind(this);
  }

  componentDidMount() {
    this.getMyProfile();
  }

  getMyProfile() {
    const { match } = this.props;
    const { id } = match.params;
    const { firstname, lastname, email } = this.props;
    axios.get(`/api/user/${id}`, { firstname, lastname, email })
      .then(res => res.data)
      .then(profile => this.props.getProfile(profile))
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.props.change(name, value)
  }

  handleSubmit(e) {
    e.preventDefault();
    const { match } = this.props;
    const { id } = match.params;
    const { firstname, lastname, email } = this.props;
    axios.put(`/api/user/${id}`, { firstname, lastname, email })
      .then(res => res.data)
      .then(editProfile =>
        this.props.edit(editProfile)
      )
      .then(res => {
        if (res.error) {
          alert('Error');
        } else {
          alert(
            'Edit successfully'
          );
        }
      });
  }

  render() {
    const { firstname, lastname, email } = this.props
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Header textAlign="center" size="huge">Edit My Profile</Header>
          <Form.Input name="firstname" value={firstname} label="Firstname" onChange={this.handleChange} placeholder="Firstname" />
          <Form.Input name="lastname" value={lastname} label="Lastname" onChange={this.handleChange} placeholder="Lastname" />


          <Form.Input name="email" value={email} label="Email" onChange={this.handleChange} placeholder="Email" />

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return state.user
}



const mapDispatchToProps = {
  change: changeValue,
  edit: editProfileSuccess,
  getProfile: getProfileSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
