import React from 'react';
import PageDefault from '../../../components/PagesDefault';
import { Link } from 'react-router-dom';
import PaginaConstrucao from '../../../assets/img/PaginaConstrucao.png';

function CadastroVideo() {
  return (
    <PageDefault>
      <a href="/">
        <img
          className="PaginaConstrucao"
          src={PaginaConstrucao}
          alt="Página em Construção"
        />
      </a>
      <h1>Cadastro de Video</h1>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
