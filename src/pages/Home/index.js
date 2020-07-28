import React from 'react';

import BannerMain from './../../components/BannerMain';
import Carousel from './../../components/Carousel';
import Footer from './../../components/Footer';
import Menu from './../../components/Menu';
import data from './../../data/dados_iniciais.json';
import './../../components/Menu/Menu.css';

function Home() {
  return (
    <div style={{ backgroundColor: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={data.categorias[0].videos[0].titulo}
        url={data.categorias[0].videos[0].url}
        videoDescription={'O que é Front End ...'}
      />

      <Carousel ignoreFirstVideo category={data.categorias[0]} />
      <Carousel category={data.categorias[1]} />
      <Carousel category={data.categorias[2]} />
      <Carousel category={data.categorias[3]} />
      <Carousel category={data.categorias[4]} />
      <Carousel category={data.categorias[5]} />

      <Footer />
    </div>
  );
}

export default Home;
