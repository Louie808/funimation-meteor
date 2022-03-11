import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import TopMiddle from './TopMiddle';
import MiddleMiddle from './MiddleMiddle';
import BottomMiddle from './BottomMIddle';

export default class MiddleMenu extends React.Component {
  render() {
    return (
      <Container fluid>
        <Grid className='middle-menu' centered>
          <Grid.Row className='middle-top'>
            <TopMiddle/>
          </Grid.Row>
          <Grid.Row className='middle-middle'>
            <MiddleMiddle/>
          </Grid.Row>
          <Grid.Row className='middle-bottom'>
            <BottomMiddle/>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
