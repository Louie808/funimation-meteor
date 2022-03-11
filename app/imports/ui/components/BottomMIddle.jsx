import React from 'react';
import { Button, Container, Header } from 'semantic-ui-react';

export default class BottomMiddle extends React.Component {
  render() {

    return (
      <Container className='trial' textAlign={'center'}>
        <Header style={{ color: 'white', fontSize: '40px', fontWeight: '900' }} as='h1'>Stream Ad-Free Anime with <br/> Premium Plus for $7.99 a month</Header>
        <p style={{ color: 'white', fontSize: '14px' }} className='trialContent'>Enjoy over 10,000 episodes and movies from our huge library of subs and dubs, featuring a deep
            catalog of big hits, fan favorites and all-time classics, as well as the latest shows out of Japan.</p>
        <Button color={'yellow'} size={'large'} content='START MY FREE TRIAL'/>
      </Container>
    );
  }
}
