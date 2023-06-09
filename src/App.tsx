import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="sobre">
          <div className="container">
            <h1>Instituto Federal do Rio Grande do Norte </h1>
            <p>O Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte (IFRN) é uma instituição federal de ensino superior, técnico e básico, localizada no estado do Rio Grande do Norte. A instituição conta com vários campi espalhados pelo estado, incluindo o Campus Natal Central.</p>
            <p>O Campus Natal Central é um dos principais campi do IFRN, oferecendo cursos de nível médio e superior em diversas áreas, como tecnologia, engenharia, ciências exatas e humanas.</p>
            <p>Este é um projeto de teste para o professor Alessandro, onde o aluno José Jefferson está colocando em prática o que aprendeu nos últimos 8 dias.</p>
          </div>
        </section>

        <section id="cursos">
          <div className="container">
            <h2>Alguns Dos Cursos Oferecidos</h2>
            <ul>
              <li>Técnico em Informática</li>
              <li>Técnico em Eletrotécnica</li>
              <li>Técnico em Mecânica</li>
              <li>Técnico em Edificações</li>
              <li>Engenharia de Software</li>
              <li>Ciência da Computação</li>
              <li>Física</li>
              <li>Matemática</li>
            </ul>
          </div>
        </section>

        <section id="contato">
          <div className="container">
            <h2>Contato</h2>
            <p>Telefone: (84) 4005-4109</p>
            <p>E-mail: contato@ifrn.edu.br</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2023 Instituto Federal do Rio Grande do Norte - Campus Natal Central</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
