import React, { Component } from 'react';
import { Container, Card, Image, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTrackSuccess } from '../Action/index';
import axios from 'axios';


class OneTrack extends Component {
  constructor(props) {
    super(props);
    this.deleteTrack = this.deleteTrack.bind(this);
  }

  deleteTrack(index) {
    axios.delete(`/api/track/${index}`)
      .then(res => res.data)
      .then(() => this.props.deleteTrackSuccess(index))
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
    const { tracks } = this.props
    return (
      <Container>
        <Card.Group itemsPerRow={4}>
          {tracks && tracks.map(oneTrack => (
            <Card>
              <Image src={oneTrack.album_picture} />
              <Card.Content>
                <Card.Header>{oneTrack.title}</Card.Header>
                <Card.Meta>
                  <span>{oneTrack.artist}</span>
                </Card.Meta>
                <Card.Meta>
                  <a href={oneTrack.youtube_url}>
                    <Icon size="big" name='video play' />

                  </a>
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Button
                  icon
                  circular
                  onClick={() => this.deleteTrack(oneTrack.id)}>
                  <Icon name='delete' />
                </Button>
                <Link to={`/track/edit-track/${oneTrack.id}`}>
                  <Button icon circular>
                    <Icon name="pencil alternate" />
                  </Button>
                </Link>
              </Card.Content>
            </Card>
          ))}

        </Card.Group>
      </Container>
    )

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTrackSuccess: index => dispatch(deleteTrackSuccess(index))
  }
}

export default connect(null, mapDispatchToProps)(OneTrack);