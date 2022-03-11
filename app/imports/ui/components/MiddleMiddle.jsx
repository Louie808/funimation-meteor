import React from 'react';
import { Container, Header, Image, List } from 'semantic-ui-react';

export default class MiddleMiddle extends React.Component {
  render() {
    const image = [
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/100024082/3f75486c-a56a-4add-8381-1e42751153b9/100024082_CRU_Keyart_a660a799-0096-46d1-809f-66f213ff77cc.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/100023807/a2512f2e-b4d4-4bc4-b736-00aa022fe681/100023807_FGS_Keyart_60299b36-8360-45ae-aad7-0bf0fb7f1cb4.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/2194495/Latvian/2194495_Latvian_ShowKeyart_d427f5a2-89d8-ea11-82a8-dd291e252010.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/100022594/4be86519-5574-445a-af22-6c9dcb356a20/100022594_DAS_Keyart_4b97a980-a567-420b-a787-6c8cd79027d3.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/100003359/5a349166-e6e2-4c3b-ada8-8c218d249d97/100003359_LEV_Keyart_2f5bf335-6ddc-49e0-b9ec-5f4bcd19314b.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/100003396/d6015799-50cc-48c7-bebb-f5e79b343f85/100003396_ZAI_Keyart_34f6ea91-6df6-4be4-a187-26d1234d0c5b.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/1959560/c2b6fc8f-7a34-4960-9b1f-ac6d8aa49c3d/1959560_DSL_Keyart_7bdd15b7-fdc9-4aa8-a282-7830f6d96431.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/1287817/Portuguese(Brazil)/1287817_Portuguese(Brazil)_ShowKeyart_9cdb6bf7-0600-41b6-858d-82f5816f856e.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/2184183/Japanese/2184183_Japanese_ShowKeyart_94d9201b-3e75-ea11-82a8-dd291e252010.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/2022003/Latvian/2022003_Latvian_ShowKeyart_27128122-9083-4160-8025-70316acc8cad.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/100022852/8d51ff2c-557d-410f-be94-3458756cf90b/100022852_POW_Keyart_d500d394-ff18-4579-9a38-12f63e00afa9.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/100005193/07a4afb1-b3c6-4091-aee1-ea99d4326c3f/100005193_RBK_Keyart_da2cf364-146d-47f7-ba87-130a1e5ce1dc.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/1287817/Portuguese(Brazil)/1287817_Portuguese(Brazil)_ShowKeyart_9cdb6bf7-0600-41b6-858d-82f5816f856e.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/100022864/a54adea8-0d47-489c-a5da-e3169a9e375d/100022864_MDD_Keyart_6bea65a1-a958-4025-b95d-4ef89cd0b5db.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/100023158/8c78cd8b-dabf-450d-b77e-6c4b57e1c179/100023158_SMY_Keyart_8c842e12-3f7b-44be-8cd9-1a58f3d6d580.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/100005663/07016159-8a8e-43bb-8d1b-4b723896ef82/100005663_TCS_Keyart_2a00e27e-c6b5-4ccf-ac83-d508f5b67fbe.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/100023108/fe008926-f081-4414-8297-ef9918eeadb0/100023108_ASU_Keyart_00873083-7841-40b3-acd9-d65159f89947.jpg',
      'https://blog.funimation.com/wp-content/uploads/2021/09/Teasing-Master-Takagi-San-Season-3-Teaser-Visual.jpeg',
    ];
    const imageAlt = [
      'Crunchyroll Mascott',
      'Fate Grand Order: Final Singularity ',
      'LoveLive! School Idol Project',
      'Dog & Scissors',
      'Leviathan',
      'I Wish You Were Here',
      'Demon Slayer: Entertainment Arc',
      'Attack on Titan: Final Season Part II',
      'One Piece',
      'Arifureta',
      'She Professed Herself Pupil of Wise Mane',
      'How a Realist Rebuilt the Kingdom',
      'Attack on Titan: Final Season Part II',
      'My Dress-Up Darling',
      'Sasaki and Miyano',
      'The Case Study of Vanitas Part II',
      "Akebi's Sailor Uniform",
      'Teasing Master Takagi-san S3',

    ];
    const white = { fontSize: '28px', color: 'white', paddingTop: '0.5em' };
    return (
      <Container fluid style={{ paddingLeft: '7%' }} textAlign={'left'}>
        <section className='anime-list'>
          <Header style={white} as='h1' content='New on Funimation'/>
          <List horizontal className='anime-image-list'>
            <List.Item as='a'>
              <Image className='anime-list-image' src={image[0]} alt={imageAlt[0]}/>
            </List.Item>
            <List.Item as='a'>
              <Image className='anime-list-image' src={image[1]} alt={'alternate'}/>
            </List.Item>
            <List.Item as='a'>
              <Image className='anime-list-image' src={image[2]} alt='Alternate'/>
            </List.Item>
            <List.Item as='a'>
              <Image className='anime-list-image' src={image[3]} alt={`${imageAlt[4]}`}/>
            </List.Item>
            <List.Item as='a'>
              <Image className='anime-list-image' src={image[4]} alt={imageAlt[4].toString()}/>
            </List.Item>
            <List.Item as='a'>
              <Image className='anime-list-image' src={image[5]} /* no alt will not show a missing image *//>
            </List.Item>
          </List>
        </section>
        <section className='anime-list'>
          <Header style={white} as='h1' content='Winter2022 Season'/>
          <List horizontal className='anime-image-list'>
            <List.Item as='a'>
              <Image className='anime-list-image' src={image[6]} alt={imageAlt[6]}/>
            </List.Item>
            <List.Item as='a'>
              <Image className='anime-list-image' src={image[7]} alt={imageAlt[7]}/>
            </List.Item>
            <List.Item as='a'>
              <Image className='anime-list-image' src={image[8]} alt={imageAlt[8]}/>
            </List.Item>
            <List.Item as='a'>
              <Image className='anime-list-image' src={image[9]} alt={`${imageAlt[9]}`}/>
            </List.Item>
            <List.Item as='a'>
              <Image className='anime-list-image' src={image[10]} alt={imageAlt[10]}/>
            </List.Item>
            <List.Item as='a'>
              <Image className='anime-list-image' src={image[11]} alt={imageAlt[11]}/>
            </List.Item>
          </List>
        </section>
        <section className='anime-list'>
          <Header style={white} as='h1' content='Top 6 Anime of the Week by anitrendz.net (Week 7)'/>
          <List horizontal className='anime-image-list'>
            <List.Item as='a'>
              <Image className='anime-list-image' src={image[12]} alt={imageAlt[12]}/>
            </List.Item>
            <List.Item as='a'>
              <Image className='anime-list-image' src={image[13]} alt={imageAlt[13]}/>
            </List.Item>
            <List.Item as='a'>
              <Image className='anime-list-image' src={image[14]} alt={imageAlt[14]}/>
            </List.Item>
            <List.Item as='a'>
              <Image className='anime-list-image' src={image[15]} alt={imageAlt[15]}/>
            </List.Item>
            <List.Item as='a'>
              <Image className='anime-list-image' src={image[16]} alt={imageAlt[16]}/>
            </List.Item>
            <List.Item as='a'>
              <Image className='anime-list-image' src={image[17]} alt={imageAlt[17]}/>
            </List.Item>
          </List>
        </section>
      </Container>
    );
  }
}
