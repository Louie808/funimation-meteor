import React from 'react';
import { Image, Button, Grid, Header } from 'semantic-ui-react';

export default
class TopMiddle extends React.Component {
  render() {
    const contentHeader = { lineHeight: '55.8px', paddingTop: '10%', paddingRight: '15%', color: 'white', fontSize: '62px', fontWeight: '000' };
    const contentDescriptionStyle = {
      color: 'white',
      paddingTop: '5%',
      paddingRight: '2%',
      marginLeft: '8%',
      fontWeight: '300',
    };
    const learnMore = { color: 'white', background: '#00A5DF', fontWeight: '800', padding: '15px 60px' };
    const rightContent = {
      // background-image: 'url(https://derf9v1xhwwx1.cloudfront.net/image/upload/q_60/cste/303b37dc-4ec7-48a4-9eb0-355cb5eee672.png)',
      // backgroundSize: '80%',
      // backgroundRepeat: 'no-repeat',
      minHeight: '10em',
      maxHeight: '34em',
      // position: 'relative',
    };
    return (
      <Grid columns={'equal'}>
        <Grid.Column textAlign={'left'} style={contentDescriptionStyle}>
          <Header as='h1' style={contentHeader}>TAKING ANIME TO THE NEXT LEVEL</Header>
          <p style={{ fontSize: '20px' }}>Funimation is officially moving to Crunchyroll! The ultimate anime experience awaits</p>
          <Button size={'medium'} content='LEARN MORE' style={learnMore}/>
        </Grid.Column>
        <Grid.Column position='right' >
          <Image style={rightContent} src='https://derf9v1xhwwx1.cloudfront.net/image/upload/q_60/cste/303b37dc-4ec7-48a4-9eb0-355cb5eee672.png' alt="Hero Spotlight"/>
        </Grid.Column>
      </Grid>
    );
  }
}
