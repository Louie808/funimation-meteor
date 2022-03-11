import React from 'react';
import { Container, Image, List, Grid } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
      <div className='footer-background'>
        <Container style={{ width: '90%' }}>
          <Grid rows={'two'}>
            <Grid.Row textAlign='left'>
              <Grid.Column width={8}>
                <List link className='footer-navigation'>
                  <List.Item as='a'>ABOUT FUNIMATION</List.Item>
                  <List.Item as='a'>CUSTOMER SUPPORT</List.Item>
                  <List.Item as='a'>TERMS OF USE</List.Item>
                  <List.Item as='a'>TERMS OF SALE</List.Item>
                  <List.Item as='a'>PRIVACY POLICY</List.Item>
                  <List.Item as='a'>DO NOT SELL MY PERSONAL INFORMATION</List.Item>
                  <List.Item as='a'>CAREERS</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column textAlign={'right'} className='social-media' width={8}>
                <List horizontal>
                  <List.Item as='a'><Image src="https://static-assets.prd.funimation.com/Social_Icon_SVGs/facebook.svg" alt="facebook"/></List.Item>
                  <List.Item as='a'><Image src="https://static-assets.prd.funimation.com/Social_Icon_SVGs/youtube.svg" alt="youtube"/></List.Item>
                  <List.Item as='a'><Image src="https://static-assets.prd.funimation.com/Social_Icon_SVGs/instagram.svg" alt="instagram"/></List.Item>
                  <List.Item as='a'><Image src="https://static-assets.prd.funimation.com/Social_Icon_SVGs/pinterest.svg" alt="pinterest"/></List.Item>
                  <List.Item as='a'><Image src="https://static-assets.prd.funimation.com/Social_Icon_SVGs/discord.svg" alt="discord"/></List.Item>
                  <List.Item as='a'><Image src="https://static-assets.prd.funimation.com/Social_Icon_SVGs/tiktok.svg" alt="tiktok"/></List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <Image src="https://derf9v1xhwwx1.cloudfront.net/image/upload/q_60/cste/2b6e796d-2275-41a6-8b90-5d2b3f89f680.png" alt="Sony Pictures"/>
              </Grid.Column>
              <Grid.Column width={8} textAlign={'right'}>
                <p className="copyright">©2022 Crunchyroll, LLC. All Rights Reserved.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
