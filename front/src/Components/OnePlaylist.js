import React, { Component } from 'react';
import { Card, Form, Icon, Button, Container, Header } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { deletePlaylistSuccess, createPlaylistSuccess, changeValuePlaylist } from '../Action/index';
import axios from 'axios';


class OnePlaylist extends Component {
  constructor(props) {
    super(props);
    this.deletePlaylist = this.deletePlaylist.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.props.change(name, value)
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, genre } = this.props;
    axios.post('/api/playlist', { title, genre })
      .then(res => res.data)
      .then(newPlaylist =>
        this.props.createPlaylist(newPlaylist)
      )
      .then(res => {
        if (res.error) {
          alert('Error');
        } else {
          alert(
            'Added successfully'
          );
        }
      });
  }

  deletePlaylist(index) {
    axios.delete(`/api/playlist/${index}`)
      .then(res => res.data)
      .then(() => this.props.deletePlaylist(index))
      .then(res => {
        if (res.error) {
          alert('Error');
        } else {
          alert(
            'Deleted successfully'
          );
        }
      });
  }

  render() {
    const { playlist, title, genre } = this.props
    return (
      <div>
        <Container className="editPlaylist">
          <Card.Group centered stackable itemsPerRow={4}>
            {playlist && playlist.map(onePlaylist => (
              <Card>
                <Card.Content>
                  <Card.Header>{onePlaylist.title}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Button
                    icon
                    circular
                    onClick={() => this.deletePlaylist(onePlaylist.id)}>
                    <Icon name='delete' />
                  </Button>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>

          <Form onSubmit={this.handleSubmit}>
            <Header textAlign="center" size="huge">Add a Playlist</Header>
            <Form.Group widths="equal">
              <Form.Input name="title" value={title} label="Title " onChange={this.handleChange} placeholder="Title of the playlist" />
              <Form.Input name="genre" value={genre} label="genre" onChange={this.handleChange} placeholder="Genre" />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>

        </Container>
      </div>
    )

  }
}

const mapStateToProps = state => (
  {
    playlist: state.playlist,
    title: state.formPlaylist.title,
    genre: state.formPlaylist.genre,
  }
);

const mapDispatchToProps = {
  change: changeValuePlaylist,
  createPlaylist: createPlaylistSuccess,
  deletePlaylist: deletePlaylistSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(OnePlaylist);
