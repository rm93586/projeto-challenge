import React from "react";

import { Link } from "react-router-dom";

import "./Home.css"


//import de imagens
import vaga1 from "./img/vaga1.jpg"
import vaga2 from "./img/vaga2.jpg"
import vaga3 from "./img/vaga3.jpg"

export default function Home() {
    return (
        <div class="mural-vagas">
                    <h3>O Deu Match chegou para quebrar as barreiras que existem entre candidato e empregador. Atualmente existem inúmeras perguntas e testes que são realizadas nos sites de emprego, que geram ao candidato diversas dúvidas, feedback de recusa feitos por robô, falta de humanização... chega disso, o Deu Match irá mudar este conceito, implementando apenas as informações essenciais para o candidato e permitindo ao recrutador inserir requisitos chaves para a vaga.Recrutador postou, candidato gostou? O match rolou!</h3>
            <h3>Mural de vagas</h3>
            <section class="vagas">
                <div>
                    <h4>Programador Front-End JR</h4>
                    <img src={vaga1} alt="programando códigos"/>
                        <div id="info-vagas">
                            <p><span>Descrição: </span>Realizar templates WEB, criar páginas seguindo o design da empresa.</p>
                            <p><span>Hard Skill: </span>Conhecimentos em HTML, CSS e JAVASCRIPT.</p>
                            <p><span>Soft SKill: </span>Confiança e Trabalho em equipe são os pilares da nossa empresa.</p>
                            <p><span>Salário: </span>R$2.500,00</p>
                        </div>
                        
                    <p>Para se candidatar, faça <Link to="/login">login</Link> na página.</p>
                </div>
                <div>
                    <h4>Analista de Dados</h4>
                    <img src={vaga2} alt="dashboard com dados"/>
                    <div id="info-vagas">
                        <p><span>Descrição: </span>Realizar a análise de dados através de BI e atualizar o dashboard.</p>
                        <p><span>Hard Skill: </span>Conhecimentos em Power BI e Banco de dados SQL.</p>
                        <p><span>Soft SKill: </span>Confiança e Trabalho em equipe são os pilares da nossa empresa.</p>
                        <p><span>Salário: </span>R$5.500,00</p>
                    </div>
                    <p>Para se candidatar, faça <Link to="/login">login</Link> na página.</p>
                </div>
                <div>
                    <h4>Copywriter Senior</h4>
                    <img src={vaga3} alt="escrevendo um post"/>
                    <div id="info-vagas">
                        <p><span>Descrição: </span>Criação de textos de anúncios nas redes sociais e elaboração de textos em sites de vendas e capturas.</p>
                        <p><span>Hard Skill: </span>Habilidade em escrita de textos para e-commerce.</p>
                        <p><span>Soft SKill: </span>Confiança e Trabalho em equipe são os pilares da nossa empresa.</p>
                        <p><span>Salário: </span>R$3.500,00</p>
                    </div>
                    <p>Para se candidatar, faça <Link to="/login">login</Link> na página.</p>
                </div>
            </section>
        </div>
    );
}