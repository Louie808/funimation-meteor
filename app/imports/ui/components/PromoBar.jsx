import React from 'react';
import { Container, Header, Image, Menu, List, Item, Icon, Button, Dropdown, Grid, Sticky } from 'semantic-ui-react';

export default class PromoBar extends React.Component {
  render() {
    return (
      <Container fluid className={'promo-header'} textAlign='center'>
        <a href="#">
          <div className="promo">
            <p>THE NEXT LEVEL OF ANIME HAS ARRIVED - CLICK HERE TO LEARN MORE</p>
          </div>
        </a>
      </Container>
    );
  }
}
