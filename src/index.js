import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';

const Error404 = () => <div>Error 404</div>;

ReactDOM.render(
  <BrowserRouter>
    {/* SWITCH: COMO SE FOSSE O 'IF', PARA ESCOLHER A PAGINA QUE SERÁ CARREGADA */}
    <Switch>
      {/* ROUTE: INDICA A ROTA E O COMPONENTE QUE SERÁ ACESSADO */}
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route component={Error404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
