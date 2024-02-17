'use server'

import Style from "./style.css"

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Link from "next/link";



export default async function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="intro-sec">
          <div className="intro">
            <img src="/me.png" className="image"/>
            <div className="sobre">
              <h2>Olá mundo! Conheça um pouco sobre mim:</h2>
              <ul>
                <li>Desenvolvedor Web</li>
                <li>Morando em Novo Hamburgo, Rio Grande do Sul</li>
                <li>Cursando Ciência da Computação na Unisinos</li>
                <li>Formação técnica em desenvolvimento web no Senac São Leopoldo</li>
                <li>Artigo publicado no Encontro Nacional de Inteligência Artificial e Computação (ENIAC)</li>
                <li>Fez iniciação científica na Unisinos</li>
              </ul>
            </div>
          </div>
          {/* <button type="button">Baixar currículo</button> */}
        </section>

        <section className="tecnologias">
          <h2>Tecnologias</h2>
          <div className="tecnologias-imgs">
            <div>
              <img src="/html.png"/>
              <h3>HTML</h3>
              <p>Linguagem de marcação para a construção de páginas web</p>
            </div>
            <div>
              <img src="/css.png"/>
              <h3>CSS</h3>
              <p>Linguagem de estilo utilizada para estilizar páginas web</p>
            </div>
            <div>
              <img src="/js.png"/>
              <h3>JavaScript</h3>
              <p>Linguagem de programação utilizada principalmente para o desenvolvimento de aplicações web</p>
            </div>
            <div>
              <img src="/react.png"/>
              <h3>React</h3>
              <p>Biblioteca JavaScript para facilitar o desenvolvimento de interfaces de usúario</p>
            </div>
            <div>
              <img src="/python.png"/>
              <h3>Python</h3>
              <p>Linguagem de programação utilizada principalmente para o desenvolvimento de aplicações backend e ciência de dados</p>
            </div>  
            <div>
              <img src="/sql.png"/>
              <h3>SQL</h3>
              <p>Linguagem de consulta utilizada para gerenciar banco de dados relacionais</p>
            </div>
            <div>
              <img src="/nextjs.png"/>
              <h3>NextJS</h3>
              <p>Framework JavaScript utilizado para o desenvolvimento de aplicações fullstack</p>
            </div>
          </div>
        </section>

        <section className="contato">
          <h2>Contato</h2>
          <ul>
            <li>✉️ Email: artur.schmitt.brenner@gmail.com</li>
            <li><Link href="https://github.com/arturschmitt" className="link-style" target="blank">💻 Github: arturschmitt</Link></li>
            <li><Link href="https://www.linkedin.com/in/artur-brenner-schmitt-716b93217/" className="link-style" target="blank">💼 LinkendIn: Artur Brenner Schmitt</Link></li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
