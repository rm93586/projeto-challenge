import React from "react";

import "./Recrutador.css"


// retonar true se o telefone for válido
function validarEmail(email) {
    const emailRegex =  /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(String(email).toLowerCase())
}

// retonar true se o telefone for válido
function validarTelefone(telefone) {
    const telefoneRegex = /([(]?[0]?[1-9]{2}[)]?)[9]?([1-9][0-9]{3})-?([0-9]{4})/
    return telefoneRegex.test(String(telefone))
}

function validarCNPJ(cnpj) {
    const cnpjRegex = /^(\d{2})\.?(\d{3})\.?(\d{3})\/?(\d{4})-?(\d{2})$/
    return cnpjRegex.test(String(cnpj))
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

function validarCampos(razaoSocial, endereco, cidade, porteEmpresa, setorAtuacao, descricaoEmpresa) {
    if (razaoSocial == "" || endereco == "" || cidade == "" || porteEmpresa == "" || setorAtuacao == "" || descricaoEmpresa == "") {
        return false
    } else {
        return true
    }
}


function validarCadastro() {
    const razaoSocial = document.getElementById("razaoSocial").value;
    const cnpj = document.getElementById("cnpj").value;
    const email = document.getElementById("email").value;
    const cep = document.getElementById("cep").value;
    const endereco = document.getElementById("endereco").value;
    const estado = document.getElementById("estado").value;
    const cidade = document.getElementById("cidade").value;
    const telefone = document.getElementById("telefone").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    //requeridos
    const porteEmpresa = document.getElementById("porteEmpresa").value;
    const setorAtuacao = document.getElementById("setorAtuacao").value;
    const descricaoEmpresa = document.getElementById("descricaoEmpresa").value;

    if (validarEmail(email) && validarTelefone(telefone) && validarCNPJ(cnpj) && validarSenha(senha, confirmarSenha) && validarCep(cep) && validarEstado(estado) && validarCampos(razaoSocial, endereco, cidade, porteEmpresa, setorAtuacao, descricaoEmpresa)) {
        console.log("campos corretos")
        document.getElementById("ErroRecrutador").innerHTML = ""
        document.getElementById("formRecrutador").submit();
        return true
    } else {    
        document.getElementById("ErroRecrutador").innerHTML = ""
        alert("Dados inválidos, tente novamente!")
        if (!validarEmail(email)) {
            document.getElementById("ErroRecrutador").innerHTML += "Email inválido<br>"
        }
        if (!validarTelefone(telefone)) {
            document.getElementById("ErroRecrutador").innerHTML += "Telefone inválido<br>"
        }
        if (!validarCNPJ(cnpj)) {
            document.getElementById("ErroRecrutador").innerHTML += "CNPJ inválido<br>"
        }
        if (!validarSenha(senha, confirmarSenha)) {
            document.getElementById("ErroRecrutador").innerHTML += "Senhas não conferem<br>"
        }
        if (!validarCep(cep)) {
            document.getElementById("ErroRecrutador").innerHTML += "CEP inválido<br>"
        }
        if (!validarEstado(estado)) {
            document.getElementById("ErroRecrutador").innerHTML += "Estado inválido<br>"
        }

        if (!validarCampos(razaoSocial, endereco, cidade, porteEmpresa, setorAtuacao, descricaoEmpresa)) {
            document.getElementById("ErroRecrutador").innerHTML += "Preencha todos os campos<br>"
        }

        return false
    }

}


export default function Recrutador() {
    return (
        <>
        <form className="formRecrutador" id="formRecrutador" action="../../login">
        <div id="ErroRecrutador"></div>
        <p>Formulário para inserção dos dados do recrutador.</p>
        <br/>
        <div className="recrutador">
        <label for="razaoSocial">Razão Social</label>
            <div className="razaoSocial">
                <input id="razaoSocial" data-cy="cv-razaoSocial" maxlength="100" data-field-name="razaoSocial" placeholder="Ex.: Marisa da Sousa" required/> 
            </div>

            <label for="cnpj">CNPJ</label>
            <div className="cnpj">
                <input id="cnpj" data-cy="cv-cnpj" maxlength="100" data-field-name="cnpj" placeholder="Ex.: 00.000.000/0000-00" required/> 
            </div>

            <label for="email">Email</label>
            <div className="email">
            <input id="email" data-cy="cv-email" maxlength="100" data-field-name="email" placeholder="Ex.: empresa@empresa.com" required/> 
            </div>

            <label for="senha">Senha</label>
            <div className="senha">
            <input type="password" name="userPass" id="senha" maxlength="20" placeholder="Digite uma senha" required/>
            </div>
            <label for="senha">Repita a senha</label>
            <div className="confirmarSenha">
                <input type="password" name="userPass" id="confirmarSenha" maxlength="20" placeholder="Digite a senha novamente" required/>
            </div>
            <br/>
            <label for="cep">CEP</label>
        <div className="endereco">
            <input id="cep" data-cy="cv-cep" maxlength="100" data-field-name="cep" placeholder="Ex.: 11111-222" required/> 
        </div>

        <label for="endereco">Endereço</label>
        <div className="endereco">
            <input id="endereco" data-cy="cv-endereco" maxlength="100" data-field-name="endereco" placeholder="Ex.: Rua da freguesia" required/> 
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
        <label for="estado">Estado</label>
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
        <label for="cidade">Cidade</label>
        <div className="cidade">
            <input id="cidade" data-cy="cv-cidade" maxlength="20" data-field-name="cidade" placeholder="Ex.: São Paulo" required/> 
        </div>
        </div>

            <label for="telefone">Telefone de Contato</label>
            <div className="telefone">
                <input id="telefone" data-cy="cv-telefone" maxlength="100" data-field-name="telefone" placeholder="Ex.: (11) 9 0000- 0000" required/> 
            </div>

            <label for="porteEmpresa">Porte Empresa</label>
            <div className="porteEmpresa">
                <input id="porteEmpresa" data-cy="cv-porteEmpresa" maxlength="100" data-field-name="porteEmpresa" placeholder="Ex.: Porte Grande" required/> 
            </div>

            <label for="descricaoEmpresa">Descrição Empresa</label>
            <div className="descricaoEmpresa">
                <input id="descricaoEmpresa" data-cy="cv-descricaoEmpresa" maxlength="100" data-field-name="descricaoEmpresa" placeholder="Ex.: Foco em consultoria para grandes projetos " required/> 
            </div>

            <label for="setorAtuacao">Setor de Atuação</label>
            <div className="setor">
                <input id="setorAtuacao" data-cy="cv-setorAtuacao" maxlength="100" data-field-name="setorAtuacao" placeholder="Ex.: Setor de Tecnologia" required/> 
            </div>

            <div>
                <input type="button" value="Enviar" id="button-login" onClick={validarCadastro}/>
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
