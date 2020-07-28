import React from 'react';
import PageDefault from '../../../components/PagesDefault';
import { Link } from 'react-router-dom';
import PaginaConstrucao from '../../../assets/img/PaginaConstrucao.png';

function CadastroCategoria() {
  return (
    <PageDefault>
      <a href="/">
        <img
          className="PaginaConstrucao"
          src={PaginaConstrucao}
          alt="Página em Construção"
        />
      </a>

      <h1>Cadastro de Categoria</h1>

      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>
        <button>Cadastrar</button>
      </form>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
