import React from 'react';
import { Container, Image, Menu, Button, Dropdown, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    const premiumStyle = {
      color: 'black',
      fontWeight: 'bolder',
    };
    return (
      <Menu borderless className='navbar'>
        <Container>
          <Menu.Item as='a'>
            <Image src="https://static.funimation.com/static/img/common/funimation-logo.svg" alt='Funimation Logo'/>
          </Menu.Item>
          <Dropdown item text='STREAM' icon={null}>
            <Dropdown.Menu>
              <Dropdown.Item><a href='#'>ALL TITLES</a></Dropdown.Item>
              <Dropdown.Item><a href='#'>CURRENT SEASON</a></Dropdown.Item>
              <Dropdown.Item><a href='#'>SCHEDULE</a></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='DISCOVER' icon={null}>
            <Dropdown.Menu>
              <Dropdown.Item><a href='#'>GAMES</a></Dropdown.Item>
              <Dropdown.Item><a href='#'>NEWS</a></Dropdown.Item>
              <Dropdown.Item><a href='#'>THEATRICAL</a></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='SHOP' icon={null}>
            <Dropdown.Menu>
              <Dropdown.Item><a href='#'>HOME VIDEO</a></Dropdown.Item>
              <Dropdown.Item><a href='#'>PRE-ORDERS</a></Dropdown.Item>
              <Dropdown.Item><a href='#'>FIGURES & COLLECTIBLES</a></Dropdown.Item>
              <Dropdown.Item><a href='#'>ACCESSORIES</a></Dropdown.Item>
              <Dropdown.Item><a href='#'>APPAREL</a></Dropdown.Item>
              <Dropdown.Item><a href='#'>HOME GOODS</a></Dropdown.Item>
              <Dropdown.Item><a href='#'>GIFT CARDS</a></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item position='right'>
            <Button color='yellow' style={premiumStyle}>TRY PREMIUM PLUS</Button>
          </Menu.Item>
          <Menu.Item><a href='#'>LOGIN</a></Menu.Item>
          <Menu.Item><Icon link name='search'/></Menu.Item>
        </Container>
      </Menu>
    );
  }
}
