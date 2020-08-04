import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/54696213?s=460&u=d5836ed6c94dfc7a00bad0b36b3364b745102096&v=4" alt="Denilson Pedro"/>
        <div>
          <strong>Denilson Pedro</strong>
          <span>Cálculo Diferencial e Integral II</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores formas de aprender cálculo avançado.
        <br /><br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através
        da matemática. Mais de 200.000 pessoas já passaram pelos meus cálculos e também 
        Isaac Newton foi aluno de Denilson Pedro. 
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;