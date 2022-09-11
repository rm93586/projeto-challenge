import React from "react";

import { Link } from "react-router-dom";

import deuMatch from "./img/Deu.png";





export default function Menu() {
    return (
    <header>
        <img src={deuMatch} alt="logo-marca deu match"/>
        <h1>Deu Match! Recrutamento e Seleção de vagas</h1>
        <nav id="menu-topo">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/cadastro">Cadastre-se</Link></li>
                <li><Link to="/parceiros">Parceiros</Link></li>
            </ul>
        </nav>
    </header>
    );
}