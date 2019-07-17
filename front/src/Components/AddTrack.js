import React, { Component } from 'react';
import {
  Button, Form, Container, Header
} from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { changeValue, createTrackSuccess } from '../Action/index';

class AddTrack extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.props.change(name, value)
  }

  handleSubmit(e) {
    e.preventDefault();
    const { playlist_id, title, artist, album_picture, youtube_url } = this.props;
    axios.post('/api/track', { playlist_id, title, artist, album_picture, youtube_url })
      .then(res => res.data)
      .then(newTrack =>
        this.props.create(newTrack)
      )
  }

  render() {
    const { playlist_id, title, artist, album_picture, youtube_url } = this.props
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Header textAlign="center" size="huge">Add a Track</Header>
          <Form.Group widths="equal">
            <Form.Input name="title" value={title} onChange={this.handleChange} placeholder="Title of the song" />
            <Form.Input name="artist" value={artist} onChange={this.handleChange} placeholder="Artist" />
          </Form.Group>
          <Form.Group unstackable widths={2}>
            <Form.Input name="album_picture" value={album_picture} label="album_picture" onChange={this.handleChange} placeholder="Album Picture" />
            <Form.Input name="youtube_url" value={youtube_url} label="youtube_url" onChange={this.handleChange} placeholder="Youtube" />
          </Form.Group>
          <Form.Group inline>
            <label>Name of the playlist</label>
            <Form.Radio
              label='Pop'
              value='playlist_id'
              checked={playlist_id === 'Pop'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Rap'
              value='playlist_id'
              checked={playlist_id === 'Rap'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Electro'
              value='playlist_id'
              checked={playlist_id === 'Electro'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Nouvelle Vague'
              value='playlist_id'
              checked={playlist_id === 'Nouvelle Vague'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return state.form
};


const mapDispatchToProps = {
  change: changeValue,
  create: createTrackSuccess,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTrack);
