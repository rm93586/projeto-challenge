import React from "react";

export default function Recrutador() {
    return (
        <>
        <form class="form" action="./recrutador.html" method="post">
        <p>Formulário para inserção dos dados do recrutador.</p>

        <div class="recrutador">
        <label for="razaoSocialRecrutadorId">Razão Social</label>
            <div class="razaoSocial">
                <input id="razaoSocialRecrutadorId" data-cy="cv-razaoSocial" maxlength="100" data-field-name="razaoSocial" placeholder="Ex.: Marisa da Sousa"/> 
            </div>

            <label for="cnpjRecrutadorId">CNPJ</label>
            <div class="cnpj">
                <input id="cnpjRecrutadorId" data-cy="cv-cnpj" maxlength="100" data-field-name="cnpj" placeholder="Ex.: 00.000.000/0000-00"/> 
            </div>
            
            <label for="enderecoRecrutadorId">Endereço</label>
            <div class="endereco">
                <input id="enderecoRecrutadorId" data-cy="cv-endereco" maxlength="100" data-field-name="endereco" placeholder="Ex.: Rua deu match"/> 
            </div>

            <label for="contatoRecrutadorId">Contato</label>
            <div class="contato">
                <input id="contatoRecrutadorId" data-cy="cv-contato" maxlength="100" data-field-name="contato" placeholder="Ex.: (11) 9 0000- 0000"/> 
            </div>

            <label for="porteEmpresaRecrutadorId">Porte Empresa</label>
            <div class="porteEmpresa">
                <input id="porteEmpresaRecrutadorId" data-cy="cv-porteEmpresa" maxlength="100" data-field-name="porteEmpresa" placeholder="Ex.: Porte Grande"/> 
            </div>

            <label for="descricaoEmpresaRecrutadorId">Descrição Empresa</label>
            <div class="descricaoEmpresa">
                <input id="descricaoEmpresaRecrutadorId" data-cy="cv-descricaoEmpresa" maxlength="100" data-field-name="descricaoEmpresa" placeholder="Ex.: Foco em consultoria para grandes projetos "/> 
            </div>

            <label for="setorAtuacaoRecrutadorId">Setor de Atuação</label>
            <div class="setor">
                <input id="setorAtuacaoRecrutadorId" data-cy="cv-setorAtuacao" maxlength="100" data-field-name="setorAtuacao" placeholder="Ex.: Setor de Tecnologia"/> 
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
