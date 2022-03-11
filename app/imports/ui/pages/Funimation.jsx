import React from 'react';
import { Sticky } from 'semantic-ui-react';
import PromoBar from '../components/PromoBar';
import TopMenu from '../components/TopMenu';
import MiddleMenu from '../components/MiddleMenu';
import FooterMenu from '../components/FooterMenu';

export default class Funimation extends React.Component {
  render() {
    /* const stickyTop = {
      position: '-webkit-sticky',
      position: 'sticky',
      top: '-30px',
    };
    */
    return (
      <div>
        <Sticky>
          <PromoBar/>
          <TopMenu/>
        </Sticky>
        <MiddleMenu/>
        <FooterMenu/>
      </div>
    );
  }
}
