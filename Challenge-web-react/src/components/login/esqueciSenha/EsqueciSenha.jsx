import React from "react";

import "./EsqueciSenha.css";

export default function EsqueciSenha() {
    return (
        <>
        <div className="recupera-page">
            <div className="form">
                <form className="recupera-form" action="troca_senha.html" method="post">
                    <fieldset>
                        <legend id="esqueci_senha_texto">
                            Insira seu e-mail abaixo para recuperação de senha
                        </legend>
                        <div>
                            <input id="emailCandidatoId" data-cy="cv-email" maxlength="100" data-field-name="email" placeholder="Ex.: joao_gabriel@gmai.com"/> 
                        </div>
                        <div>
                            <input type="submit" value="TROCAR SENHA" id="button-login"/>
                        </div>
                        <div id="menu-forms">
                            <p><a href="./login.html">Login</a></p>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
        
    
        <div id="info-login">
            <p>Área destinada ao candidato e ao recrutador, realizarem a troca de senha na plataforma. Será identificado como recrutador ou candidato conforme dados cadastrados em sistema. Se o usuário não possui cadastro será informado que o e-mail é inválido.</p>
        </div>
    </>
    );
}