import React from "react";

import { Link } from "react-router-dom";

import "./Login.css";


const listaEmails = ["conta1@fiap.com.br", "conta2@fiap.com.br", "conta3@fiap.com.br"]
const listaSenhas = ["111", "222", "333"]

function validarLogin() {

var variavelEmail = document.getElementById("email");
var variavelSenha = document.getElementById("senha");

for(var contador = 0; contador < listaEmails.length; contador++) {

    if (variavelEmail.value === "") {
        document.getElementById("Erro").innerHTML = "O campo de email está vazio"
        console.log("Digite um email válido")
        break;}

    if (variavelSenha.value === "") {
        document.getElementById("Erro").innerHTML = "Campo de Senha está vazio! Por favor insira sua senha.";
        console.log("Campo de Senha está vazio! Por favor insira sua senha.")
        break; }


    if (variavelEmail.value.toLowerCase() === listaEmails[contador]) {

            if (variavelSenha.value === listaSenhas[contador]) {
                console.log("Login efetuado com sucesso!")
                
                break;

            } else {
                document.getElementById("Erro").innerHTML = "Sua senha está inválida"
                console.log("Senha inválida!")
                break;
            }

        } else {
            document.getElementById("Erro").innerHTML = "Os dados da conta estão inválidos"
            console.log("Email inválido!")
            break;
        }

}
}

function senhaErrada(){
    if(document.getElementById("victory").value == "victory")
        return true;
    else 
        document.getElementById("Erro").innerHTML = "Os dados da conta estão inválidos"
        return false;
}



export default function Login() {
    
    return (
        <>
        <div class="login-page">
            <div class="form">
                <p>Exemplo: Conta1@fiap.com.br e senha 111</p>
                <div id="Erro"></div>
                <form className="login-form" action="login.html" method="post">
                    <fieldset>
                        <legend>
                            Login
                        </legend>
                        <div>
                            <input type="text" name="nmUser" id="email" placeholder="Nome de Usuário" required/> 
                        </div>
                        <legend>
                            Senha
                        </legend>
                        <div>
                            <input type="password" name="userPass" id="senha" placeholder="Digite a senha" required/>
                        </div>
                        <div>
                            <input type="button" value="Entrar" id="button-login" onClick={validarLogin}/>
                        </div>
                        <div id="menu-forms">
                            <p><Link to="/cadastro">Cadastre-se</Link></p>
                            <p><Link to="/login/esqueciSenha">Esqueci a senha</Link></p>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
        
    
        <div id="info-login">
            <p>Área destinada ao candidato e ao recrutador, realizarem login na plataforma. Será identificado como recrutador ou candidato conforme dados cadastrados em sistema. Se o usuário não possui cadastro será direcionado a página de cadastro para inserção dos dados.</p>
        </div>
        </>
    );
}