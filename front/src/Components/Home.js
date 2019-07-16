import React from 'react';
import {
  Header, Icon, Button, Container, Image
} from 'semantic-ui-react';

const Home = ({ playlist }) => (
  <div>
    <Container>
      <Header as='h2' icon textAlign='center'>
        <Icon name='music' circular />
        <Header.Content>My-Music</Header.Content>
      </Header>
      <Image centered size='large' src='https://cdn.pixabay.com/photo/2019/03/08/21/13/record-4043223_960_720.jpg' />
    </Container>
    <Container>
      <div>
        {playlist && playlist.map(onePlaylist => (
          <Button>{onePlaylist.title}</Button>
        ))
        }
      </div>
    </Container>
  </div>
)

export default Home;