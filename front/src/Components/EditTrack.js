import React, { Component } from 'react';
import {
  Button, Form, Container, Header, Select
} from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { changeValue, editTrackSuccess, getOneTrackSuccess } from '../Action/index';

// const options = [
//   { key: 'Electro', text: 'Electro', value: 8 },
//   { key: 'Rap', text: 'Rap', value: 7 },
//   { key: 'Pop', text: 'Pop', value: 6 },
//   { key: 'Nouvelle Vague', text: 'Nouvelle Vague', value: 9 },
// ]

class EditTrack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePlaylist = this.handleChangePlaylist.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getOneTrack = this.getOneTrack.bind(this);
    this.getOptionPlaylist = this.getOptionPlaylist.bind(this);
    this.handleChangeOptionPlaylist = this.handleChangeOptionPlaylist.bind(this);
  }

  componentDidMount() {
    this.getOneTrack();
    this.getOptionPlaylist()
  }

  getOneTrack() {
    const { match } = this.props;
    const { id } = match.params;
    const { playlist_id, title, artist, album_picture, youtube_url } = this.props;
    axios.get(`/api/track/${id}`, { playlist_id, title, artist, album_picture, youtube_url })
      .then(res => res.data)
      .then(oneTrack => this.props.getOne(oneTrack))
  }

  getOptionPlaylist() {
    axios.get('/api/playlist/option')
      .then(res => res.data)
      .then(option => this.setState({ options: option }));
  }

  handleChangeOptionPlaylist(event, { value }) {
    this.setState({ playlist_id: value });
  }


  handleChange(e) {
    const { name, value } = e.target;
    this.props.change(name, value)
  }

  handleChangePlaylist(e, { value }) {
    this.props.change("playlist_id", value)
  }

  handleSubmit(e) {
    e.preventDefault();
    const { match } = this.props;
    const { id } = match.params;
    const { playlist_id, title, artist, album_picture, youtube_url } = this.props;
    axios.put(`/api/track/${id}`, { playlist_id, title, artist, album_picture, youtube_url })
      .then(res => res.data)
      .then(editTrack =>
        this.props.edit(editTrack)
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
    const { playlist_id, title, artist, album_picture, youtube_url } = this.props
    const { options } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Header textAlign="center" size="huge">Edit a Track</Header>
          <Form.Group widths="equal">
            <Form.Input name="title" value={title} label="Title" onChange={this.handleChange} placeholder="Title" />
            <Form.Input name="artist" value={artist} label="Artist" onChange={this.handleChange} placeholder="Artist" />
          </Form.Group>
          <Form.Group unstackable widths={2}>
            <Form.Input name="album_picture" value={album_picture} label="Album Picture" onChange={this.handleChange} placeholder="Album Picture" />
            <Form.Input name="youtube_url" value={youtube_url} label="URL Youtube" onChange={this.handleChange} placeholder="Url Youtube" />
          </Form.Group>
          <Form.Group>
            <Form.Field
              control={Select}
              label='Playlist'
              options={options}
              value={playlist_id}
              placeholder="Playlist"
              onChange={this.handleChangePlaylist}
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
}



const mapDispatchToProps = {
  change: changeValue,
  edit: editTrackSuccess,
  getOne: getOneTrackSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTrack);
