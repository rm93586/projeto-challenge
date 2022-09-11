import React from "react";

import "./Recrutador.css"

export default function Recrutador() {
    return (
        <>
        <form className="formRecrutador" action="./recrutador.html" method="post">
        <p>Formulário para inserção dos dados do recrutador.</p>

        <div className="recrutador">
        <label for="razaoSocialRecrutadorId">Razão Social</label>
            <div className="razaoSocial">
                <input id="razaoSocialRecrutadorId" data-cy="cv-razaoSocial" maxlength="100" data-field-name="razaoSocial" placeholder="Ex.: Marisa da Sousa" required/> 
            </div>

            <label for="cnpjRecrutadorId">CNPJ</label>
            <div className="cnpj">
                <input id="cnpjRecrutadorId" data-cy="cv-cnpj" maxlength="100" data-field-name="cnpj" placeholder="Ex.: 00.000.000/0000-00" required/> 
            </div>

            <label for="email">Email</label>
            <div className="email">
            <input id="email" data-cy="cv-email" maxlength="100" data-field-name="email" placeholder="Ex.: empresa@empresa.com" required/> 
            </div>
            
            <label for="enderecoRecrutadorId">Endereço</label>
            <div className="endereco">
                <input id="enderecoRecrutadorId" data-cy="cv-endereco" maxlength="100" data-field-name="endereco" placeholder="Ex.: Rua deu match" required/> 
            </div>

            <label for="telefone">Telefone de Contato</label>
            <div className="telefone">
                <input id="telefone" data-cy="cv-telefone" maxlength="100" data-field-name="telefone" placeholder="Ex.: (11) 9 0000- 0000" required/> 
            </div>

            <label for="porteEmpresaRecrutadorId">Porte Empresa</label>
            <div className="porteEmpresa">
                <input id="porteEmpresaRecrutadorId" data-cy="cv-porteEmpresa" maxlength="100" data-field-name="porteEmpresa" placeholder="Ex.: Porte Grande" required/> 
            </div>

            <label for="descricaoEmpresaRecrutadorId">Descrição Empresa</label>
            <div className="descricaoEmpresa">
                <input id="descricaoEmpresaRecrutadorId" data-cy="cv-descricaoEmpresa" maxlength="100" data-field-name="descricaoEmpresa" placeholder="Ex.: Foco em consultoria para grandes projetos " required/> 
            </div>

            <label for="setorAtuacaoRecrutadorId">Setor de Atuação</label>
            <div className="setor">
                <input id="setorAtuacaoRecrutadorId" data-cy="cv-setorAtuacao" maxlength="100" data-field-name="setorAtuacao" placeholder="Ex.: Setor de Tecnologia" required/> 
            </div>

            <div>
                <input type="submit" value="Enviar" id="button-login"/>
            </div>

        </div>
    </form>
    <div id="info-cadastro">
        <h4>Os requisitos para cadastro do recrutador são:</h4>
        <p>Razão Social, CNPJ, Endereço, Contato, Porte da empresa, Descrição da empresa, Setor de atuação</p>
    </div>
        </>
    );
}
