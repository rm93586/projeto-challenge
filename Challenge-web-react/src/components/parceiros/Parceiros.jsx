import React from "react";

import "./Parceiros.css";

import parceiro1 from "./img/Linkedin.png";
import parceiro2 from "./img/Infojobs.jpg";
import parceiro3 from "./img/Logo_Catho_1.png";

export default function Parceiros() {
    return (
    <>
        <div className="parceiros">
            <a href="https://www.linkedin.com/" target="_blank"><img src={parceiro1} alt="Linkedin"/></a>
            <a href="https://www.infojobs.com.br/" target="_blank"><img src={parceiro2} alt="InfoJobs"/></a>
            <a href="https://www.catho.com.br/" target="_blank"><img src={parceiro3} alt="Catho"/></a>
        </div>
    </>
    );
}