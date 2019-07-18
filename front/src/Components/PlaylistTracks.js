import React, { Component } from 'react';
import { Container, Card } from 'semantic-ui-react'
import OneTrack from './OneTrack';


class PlaylistTracks extends Component {
  render() {
    const { tracks } = this.props
    return (
      <Container>
        <Card.Group itemsPerRow={4}>
          {tracks && tracks.map(oneTrack => (
            <OneTrack oneTrack={oneTrack} />
          ))}

        </Card.Group>
      </Container>
    )

  }
}

export default PlaylistTracks;