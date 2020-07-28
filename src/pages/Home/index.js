import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BanneMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BanneMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          'O bom, velho e onipresente Java! É fácil de aprender? Como é programar em Java? Roberta e Paulo debatem sobre suas experiências com essa linguagem querida e famosa neste vídeo.'
        }
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      {/* <Carousel category={dadosIniciais.categorias[0]} /> */}

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />

      <Carousel category={dadosIniciais.categorias[5]} />

      <Footer />
    </div>
  );
}

export default Home;
