import React from 'react';
import { FooterBase } from './styles';
import Logo from './../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="BllackFlixDev logo" />
      </a>
      <p>
        Criado por{' '}
        <a href="https://github.com/bllackdev" target="_blank">
          BllackDev
        </a>{' '}
        <br />
        durante a{' '}
        <a href="https://www.alura.com.br/imersao-react" target="_blank">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
