import React from "react";

import { Link } from "react-router-dom";

export default function Cadastro() {
    return (
        <>
        <div class="form">
            <div id="menu-forms">
                <p><Link to="/cadastro/candidato">CANDIDATO</Link></p>
                <p><Link to="/cadastro/recrutador">RECRUTADOR</Link></p>
            </div>
        </div>       
    
        <div id="info-cadastro">
            <p>Área destinada ao candidato e ao recrutador, informarem como querem realizar o cadastro. Após a confirmação será enviado para a página de cadastro referente a seleção.</p>
        </div>
        </>
    );
}