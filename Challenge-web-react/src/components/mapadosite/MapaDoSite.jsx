import React from "react";

import { Link } from "react-router-dom";

import "./MapaDoSite.css";

export default function MapaDoSite() {

    return (
        <>
        <div className="mapaDoSite">
            <div className="mapaDoSite_lista">
                <ul>
                    <Link to="/" className="mapa_home">Home</Link>
                    <Link to="/login" className="mapa_login">Login</Link>
                    <Link to="/login/esqueciSenha" className="mapa_esqueci_senha">Esqueci minha senha</Link>
                    <Link to="/cadastro" className="mapa_cadastro">Cadastre-se</Link>
                    <Link to ="/cadastro/candidato" className="mapa_candidato">Cadastro de candidato</Link>
                    <Link to="/cadastro/recrutador" className="mapa_recrutador">Cadastro de recrutador</Link>
                    <Link to="/parceiros" className="mapa_parceiros">Parceiros</Link>
                    <Link to="/mapadosite" className="mapa_mapa_do_site">Mapa do Site</Link>
                </ul>
            </div>
        </div>
        </>
    );
}