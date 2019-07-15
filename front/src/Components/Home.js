import React from 'react';
import { Header, Icon, Image, Container } from 'semantic-ui-react';

const Home = () => (
  <div>
    <Container>
      <Header as='h2' icon textAlign='center'>
        <Icon name='users' circular />
        <Header.Content>My-Music</Header.Content>
      </Header>
      <Image centered size='large' src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
    </Container>
  </div>
  <div>
    <Container>
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
      </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
      </a>
        </Card.Content>
      </Card>
    </Container>
  </div>
)

export default Home;