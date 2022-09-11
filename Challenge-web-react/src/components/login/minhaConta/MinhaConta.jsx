import React from "react";

export default function MinhaConta() {
    return (
        <>
        <div className="minhaConta">
            <h1>Minha Conta</h1>
            <div className="minhaConta_lista">
                <ul>
                    <li>Nome: Fulano</li>
                    <li>CPF: 123.456.789-00</li>
                    <li>Telefone: (11) 12345-6789</li>
                    <li>Email:
                        <input type="email" id="email" placeholder="Digite seu email" />
                    </li>
                    <li>Senha:
                        <input type="password" id="senha" placeholder="Digite sua senha" />
                    </li>
                    <li>Confirmar Senha:
                        <input type="password" id="confirmarSenha" placeholder="Confirme sua senha" />
                    </li>
                    <li>
                        <button type="submit">Salvar</button>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}
