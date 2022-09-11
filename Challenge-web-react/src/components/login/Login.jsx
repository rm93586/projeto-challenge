import React from "react";

import { Link } from "react-router-dom";

import "./Login.css";

export default function Login() {
    return (
        <>
        <div class="login-page">
            <div class="form">
                <form class="login-form" action="login.html" method="post">
                    <fieldset>
                        <legend>
                            Login
                        </legend>
                        <div>
                            <input type="text" name="nmUser" id="nmUserId" placeholder="Nome de Usuário" required/> 
                        </div>
                        <div>
                            <input type="password" name="userPass" id="userPassId" placeholder="Digite a senha" required/>
                        </div>
                        <div>
                            <input type="submit" value="Entrar" id="button-login"/>
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