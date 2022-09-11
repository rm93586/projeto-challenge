import React from "react";
import { Routes, Route } from "react-router-dom";


//Diretório de páginas
import Home from "../components/home/Home";
import Login from "../components/login/Login";
    import MinhaConta from "../components/login/minhaConta/MinhaConta";
    import EsqueciSenha from "../components/login/esqueciSenha/EsqueciSenha";
import Cadastro from "../components/cadastro/Cadastro";
    import Candidato from "../components/cadastro/candidato/Candidato";
    import Recrutador from "../components/cadastro/recrutador/Recrutador";
import Parceiros from "../components/parceiros/Parceiros";
import MapaDoSite from "../components/mapadosite/MapaDoSite";

export default function MainRoutes() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
        <Route path="/login/minhaConta" element={<MinhaConta/>} />
        <Route path="/login/esqueciSenha" element={<EsqueciSenha/>} />
      <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/cadastro/candidato" element={<Candidato/>} />
        <Route path="/cadastro/recrutador" element={<Recrutador/>} />
      <Route path="/parceiros" element={<Parceiros/>} />
      <Route path="/mapadosite" element={<MapaDoSite/>} />
    </Routes>
    </>
  );
}