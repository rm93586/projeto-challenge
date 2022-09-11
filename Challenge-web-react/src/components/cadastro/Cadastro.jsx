import React from "react";

import { Link } from "react-router-dom";

import "./Cadastro.css";

export default function Cadastro() {
    return (
        <>
        <div className="formCadastro">
            <div id="menu-cadastro">
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