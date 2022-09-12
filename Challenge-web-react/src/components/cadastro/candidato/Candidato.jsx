import React from "react";

import "./Candidato.css";


// const submit = document.getElementById("botao-login");
// submit.addEventListener("click");

//--------------------------------------------------------------------------------
// retonar true se o email for válido
function validarEmail(email) {
    const emailRegex =  /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(String(email).toLowerCase())
}

// retonar true se o telefone for válido
function validarTelefone(telefone) {
    const telefoneRegex = /([(]?[0]?[1-9]{2}[)]?)[9]?([1-9][0-9]{3})-?([0-9]{4})/
    return telefoneRegex.test(String(telefone))
}

// retonar true se o cpf for válido
function validarCpf(cpf) {
    const cpfRegex = /([0-9]{3})\.?([0-9]{3})\.?([0-9]{3})-?([0-9]{2})/
    return cpfRegex.test(String(cpf))
}

// retonar true se o cep for válido
function validarCep(cep) {
    const cepRegex = /([0-9]{5})-?([0-9]{3})/
    return cepRegex.test(String(cep))
}

function validarEstado(estado) {
    const estadoRegex = /([A-Z]{2})/
    return estadoRegex.test(String(estado))
}

// retonar true se a senha for válida
function validarSenha(senha, confirmarSenha) {
    if (senha == "") {
        return false
    } else if (senha == confirmarSenha) {
        return true
    }
}

function validarCampos (dataNascimento, nome, pretencaoSalarial, formacao, softSkill, hardSkill, experiencia, cidade) {
    if (dataNascimento == "" || nome == "" || pretencaoSalarial == "" || formacao == "" || softSkill == "" || hardSkill == "" || experiencia == "" || cidade == "") {
        return false
    } else {
        return true
    }
}

//--------------------------------------------------------------------------------

function validarCadastro() {
    const nome = document.getElementById("nome").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const telefone = document.getElementById("telefone").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const cep = document.getElementById("cep").value;
    const cidade = document.getElementById("cidade").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const estado = document.getElementById("estado").value;

    // Profissional
    const softSkill = document.getElementById("softSkill").value;
    const hardSkill = document.getElementById("hardSkill").value;
    const formacao = document.getElementById("formacaoAcademica").value;
    const experiencia = document.getElementById("experienciaProfissional").value;
    const pretencaoSalarial = document.getElementById("pretensaoSalarial").value;

    if (validarTelefone(telefone) && validarCpf(cpf) && validarEmail(email) && validarCep(cep) && validarSenha(senha, confirmarSenha) && validarEstado(estado) && validarCampos(dataNascimento, nome, pretencaoSalarial, formacao, softSkill, hardSkill, experiencia, cidade)) {
        console.log("campos corretos")
        document.getElementById("ErroCandidato").innerHTML = ""
        document.getElementById("formCandidato").submit();
        return true
    } else {
        document.getElementById("ErroCandidato").innerHTML = ""
        alert("Preencha os campos corretamente")
        console.log("campos errados")
        if (!validarTelefone(telefone)) {
            document.getElementById("ErroCandidato").innerHTML = "Telefone inválido <br />"
        }
        if (!validarCpf(cpf)) {
            document.getElementById("ErroCandidato").innerHTML += "CPF inválido <br />"
        }
        if (!validarEmail(email)) {
            document.getElementById("ErroCandidato").innerHTML += "Email inválido <br />"
        }
        if (!validarCep(cep)) {
            document.getElementById("ErroCandidato").innerHTML += "CEP inválido <br />"
        }
        if (!validarSenha(senha, confirmarSenha)) {
            document.getElementById("ErroCandidato").innerHTML += "Senhas não conferem <br />"
        }
        if (!validarEstado(estado)) {
            document.getElementById("ErroCandidato").innerHTML += "Estado inválido <br />"
        }
        return false
    }


}


export default function Candidato() {


    return (
        <>
        <form className="formCandidato" id="formCandidato" action="../../login">
        <div id="ErroCandidato"></div>
    <div className="candidato">
        <label for="nome">Nome</label>
        <div className="nome">
            <input id="nome" data-cy="cv-nome" maxlength="100" data-field-name="Nome" placeholder="Ex.: Marisa da Sousa" required/> 
        </div>

        <label for="dataNascimento">Data de Nascimento</label>
        <div className="dataNascimento">
            <input id="dataNascimento" data-cy="cv-dataNascimento" type="date" data-field-name="dataNascimento" required/> 
        </div>

        <label for="telefone">Telefone</label>
        <div className="telefone">
            <input id="telefone" data-cy="cv-telefone" maxlength="13" data-field-name="telefone" placeholder="Ex.: (11)97070-7070" required/> 
        </div>

        <label for="cpf">CPF</label>
        <div className="cpf">
            <input id="cpf" data-cy="cv-cpf" maxlength="14" data-field-name="cpf" placeholder="Ex.: 000.111.222-33" required/> 
        </div>
        <br/>
        <label for="cep">CEP</label>
        <div className="endereco">
            <input id="cep" data-cy="cv-cep" maxlength="100" data-field-name="cep" placeholder="Ex.: 11111-222" required/> 
        </div>

        <label for="enderecoCandidatoId">Endereço</label>
        <div className="endereco">
            <input id="enderecoCandidato" data-cy="cv-endereco" maxlength="100" data-field-name="endereco" placeholder="Ex.: Rua da freguesia" required/> 
        </div>

        <div className="numero_e_complemento">
            <label>Número</label>
            <div className="numero">
                <input id="numeroEndereco" data-cy="cv-numero" maxlength="100" data-field-name="numero" placeholder="Ex.: 123" required/>
            </div>
            <label>Complemento</label>
            <div className="complemento">
                <input id="complementoEndereco" data-cy="cv-complemento" maxlength="100" data-field-name="complemento" placeholder="Ex.: Apto 123" required/>
            </div>
        </div>

        <div className="estado_e_cidade">
        <label for="estadoCandidato">Estado</label>
        <select id="estado">
            <option value="nenhum">Selecione</option>
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
        <label for="enderecoCandidatoId">Cidade</label>
        <div className="cidade">
            <input id="cidade" data-cy="cv-endereco" maxlength="20" data-field-name="cidade" placeholder="Ex.: São Paulo" required/> 
        </div>
        </div>

        <label for="email">Email</label>
        <div className="email">
            <input id="email" data-cy="cv-email" maxlength="100" data-field-name="email" placeholder="Ex.: marisa_souza@gmail.com" required/> 
        </div>

        <label for="senha">Senha</label>
        <div className="senha">
            <input type="password" name="userPass" id="senha" maxlength="20" placeholder="Digite uma senha" required/>
        </div>
        <label for="senha">Repita a senha</label>
        <div className="confirmarSenha">
            <input type="password" name="userPass" id="confirmarSenha" maxlength="20" placeholder="Digite a senha novamente" required/>
        </div>

        <br/><br/>

        <label for="skillList">HardSkill</label>
        <div className="skillList">
            <input id="hardSkill" data-cy="cv-hardSkill" maxlength="100" data-field-name="hardSkill" placeholder="Ex.: Habilidades técnicas" required/> 
        </div>

        <label for="skillList">SoftSkill</label>
        <div className="skillList">
            <input id="softSkill" data-cy="cv-softSkil" maxlength="100" data-field-name="softSkil" placeholder="Ex.: Habilidades pessoais " required/> 
        </div>

        <label for="formacaoAcademica">Formação Acadêmica</label>
        <div className="formacaoAcademica">
            <input id="formacaoAcademica" data-cy="cv-formacao" maxlength="100" data-field-name="formacaoAcademica" placeholder="Ex.:Graduação " required/> 
        </div>

        <label for="experienciaProfissional">Experiência Profissional</label>
        <div className="experienciaProfissional">
            <input id="experienciaProfissional" type="text" data-cy="cv-experiencia" maxlength="100" data-field-name="experienciaProfissional" placeholder="Ex: Empresa 2019-2021: Tech Lead" required/> 
        </div>

        <label for="pretensaoSalarial">Pretenção Salarial</label>
        <div className="pretensaoSalarial">
            <input id="pretensaoSalarial" data-cy="cv-pretencaoSalarial" maxlength="100" data-field-name="pretencaoSalarial" placeholder="Ex.:1.000 " required/> 
        </div>

            <div>
                <input type="button" value="Enviar" id="button-login" onClick={validarCadastro}/>
            </div>

        </div>
    </form>
    <div id="info-cadastro">
        <h4>Todos os campos são obrigatórios</h4>
    </div>
        </>
    );
}