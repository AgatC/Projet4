import React, { Component } from 'react';
import { Container, Card, Image, Icon } from 'semantic-ui-react'

class OneTrack extends Component {

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
              </Card.Content>
              <Card.Content extra>
                <a href={oneTrack.youtube_url}>
                  <Icon name='video play' />

                </a>
              </Card.Content>
            </Card>
          ))}

        </Card.Group>
      </Container>
    )

  }
}


export default OneTrack;