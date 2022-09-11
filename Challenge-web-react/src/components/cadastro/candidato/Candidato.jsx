import React from "react";

import "./Candidato.css";


// const submit = document.getElementById("botao-login");
// submit.addEventListener("click");


// function validaEmail(email) {
//     const emailRegex =  /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     return emailRegex.test(String(email).toLowerCase())
//   }

export default function Candidato() {





    return (
        <>
        <form className="formCandidato" action="./candidato.html" method="post">
    <div className="candidato">
        <label for="nmCandidatoId">Nome</label>
        <div className="nome">
            <input id="nomeCandidato" data-cy="cv-name" maxlength="100" data-field-name="Nome" placeholder="Ex.: Marisa da Sousa" required/> 
        </div>
        <label for="emalCandidatoId">Email</label>
        <div className="email">
            <input id="emailCandidato" data-cy="cv-email" maxlength="100" data-field-name="email" placeholder="Ex.: marisa_souza@gmai.com" required/> 
        </div>

        <label for="emalCandidatoId">CPF</label>
        <div className="email">
            <input id="senhaCandidato" data-cy="cv-cpf" maxlength="11" data-field-name="cpf" placeholder="Ex.: 000.111.222-33" required/> 
        </div>

        <label for="telCandidatoId">Telefone</label>
        <div className="telefone">
            <input id="telefoneCandidato" data-cy="cv-telefone" maxlength="13" data-field-name="telefone" placeholder="Ex.: (11) 9 7070-7070" required/> 
        </div>
        <label for="enderecoCandidatoId">CEP</label>
        <div className="endereco">
            <input id="cepCandidato" data-cy="cv-cep" maxlength="100" data-field-name="cep" placeholder="Ex.: 11111-222" required/> 
        </div>
        <label for="enderecoCandidatoId">Endereço</label>
        <div className="endereco">
            <input id="enderecoCandidato" data-cy="cv-endereco" maxlength="100" data-field-name="endereco" placeholder="Ex.: Rua da freguesia" required/> 
        </div>
        <label for="enderecoCandidatoId">Estado</label>
        <select>
            <option value="">Selecione</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espirito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MT">Mato Grosso</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
        </select>
        <br/><br/>
        <label for="enderecoCandidatoId">Cidade</label>
        <div className="cidade">
            <input id="enderecoCandidato" data-cy="cv-endereco" maxlength="20" data-field-name="cidade" placeholder="Ex.: São Paulo" required/> 
        </div>

        <label for="hardSkillCandidatoId">HardSkill</label>
        <div className="hardSkill">
            <input id="hardSkillCandidato" data-cy="cv-hardSkill" maxlength="100" data-field-name="hardSkill" placeholder="Ex.: Habilidades técnicas" required/> 
        </div>

        <label for="softSkilCandidatoId">SoftSkill</label>
        <div className="softSkil">
            <input id="softSkilCandidato" data-cy="cv-softSkil" maxlength="100" data-field-name="softSkil" placeholder="Ex.: Habilidades pessoais " required/> 
        </div>

        <label for="formacaoCandidatoId">Formação Acadêmica</label>
        <div className="formacaoCandidato">
            <input id="formacaoCandidato" data-cy="cv-formacao" maxlength="100" data-field-name="formacao" placeholder="Ex.:Graduação " required/> 
        </div>

        <label for="idiomasCandidatoId">Idiomas</label>
        <div className="idiomasCandidato">
            <input id="idiomasCandidato" data-cy="cv-idiomas" maxlength="100" data-field-name="idiomas" placeholder="Ex.:Inglês " required/> 
        </div>

        <label for="pretencaoSalarialCandidatoId">Pretenção Salarial</label>
        <div className="pretencaoSalarial">
            <input id="pretencaoSalarialCandidato" data-cy="cv-pretencaoSalarial" maxlength="100" data-field-name="pretencaoSalarial" placeholder="Ex.:1.000 " required/> 
        </div>

            <div>
                <input value="Enviar" id="button-login"/>
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