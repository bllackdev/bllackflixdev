import React, { useState } from 'react';
import PageDefault from '../../../components/PagesDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField'
import PaginaConstrucao from '../../../assets/img/PaginaConstrucao.png';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }
  // COCHETES ANTES DO '=', VOCE ESTÁ ABRINDO O ARRAY PARA COLETAR VALORES
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // CHAVE: nome, descricao ...
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    const { getAttribute, value } = infosDoEvento.target;
    setValue(
      getAttribute('name'),
      value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          // '...' ESTÁ ESPALHANDO OS VALORES
          ...categorias,
          values
        ]);

        setValues(valoresIniciais)
      }}>

        <FormField
          label="Nome da Categoria: "
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          type="???"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Descrição:
              <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor: "
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria}
            </li>
          )
        })}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
