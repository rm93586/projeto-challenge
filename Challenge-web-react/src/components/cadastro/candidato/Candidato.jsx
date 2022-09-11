import React from "react";

import "./Candidato.css";

export default function Candidato() {
    return (
        <>
        <form class="formCandidato" action="./candidato.html" method="post">
    <div class="candidato">
        <label for="nmCandidatoId">Nome</label>
        <div class="nome">
            <input id="nmCandidatoId" data-cy="cv-name" maxlength="100" data-field-name="Nome" placeholder="Ex.: Marisa da Sousa"/> 
        </div>
        <label for="emalCandidatoId">Email</label>
        <div class="email">
            <input id="emalCandidatoId" data-cy="cv-email" maxlength="100" data-field-name="email" placeholder="Ex.: marisa_souza@gmai.com"/> 
        </div>

        <label for="telCandidatoId">Telefone</label>
        <div class="telefone">
            <input id="telCandidatoId" data-cy="cv-telefone" maxlength="100" data-field-name="telefone" placeholder="Ex.: (11) 9 7070-7070"/> 
        </div>
        <label for="enderecoCandidatoId">Endereço</label>
        <div class="endereco">
            <input id="enderecoCandidatoId" data-cy="cv-endereco" maxlength="100" data-field-name="endereco" placeholder="Ex.: Rua da freguesia"/> 
        </div>
        <label for="hardSkillCandidatoId">HardSkill</label>
        <div class="hardSkill">
            <input id="hardSkillCandidatoId" data-cy="cv-hardSkill" maxlength="100" data-field-name="hardSkill" placeholder="Ex.: Habilidades técnicas"/> 
        </div>

        <label for="softSkilCandidatoId">SoftSkill</label>
        <div class="softSkil">
            <input id="softSkilCandidatoId" data-cy="cv-softSkil" maxlength="100" data-field-name="softSkil" placeholder="Ex.: Habilidades pessoais "/> 
        </div>

        <label for="formacaoCandidatoId">Formação Acadêmica</label>
        <div class="formacaoCandidato">
            <input id="formacaoCandidatoId" data-cy="cv-formacao" maxlength="100" data-field-name="formacao" placeholder="Ex.:Graduação "/> 
        </div>

        <label for="idiomasCandidatoId">Idiomas</label>
        <div class="idiomasCandidato">
            <input id="idiomasCandidatoId" data-cy="cv-idiomas" maxlength="100" data-field-name="idiomas" placeholder="Ex.:Inglês "/> 
        </div>

        <label for="pretencaoSalarialCandidatoId">Pretenção Salarial</label>
        <div class="pretencaoSalarial">
            <input id="pretencaoSalarialCandidatoId" data-cy="cv-pretencaoSalarial" maxlength="100" data-field-name="pretencaoSalarial" placeholder="Ex.:1.000 "/> 
        </div>

            <div>
                <input type="submit" value="Enviar" id="button-login"/>
            </div>

        </div>
    </form>
    <div id="info-cadastro">
        <h4>Os requisitos para cadastro do Candidato são:</h4>
        <p>Nome, endereço, telefone, e-mail, hard skills, soft skills, idiomas, pretensão salarial</p>
    </div>
        </>
    );
}