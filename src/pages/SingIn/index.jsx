import React from "react";
import { useState } from "react";
import Form from "../../components/form";
import { LogPage } from "../../style/stylePage";

const SingIn = () => {

    const dadosLogin = [
        { nome: 'Email', type: 'email' },
        { nome: 'Senha', type: 'password' }
    ]

    const dadosCadastro = [
        { nome: 'Nome', type: 'text' },
        { nome: 'Email', type: 'email' },
        { nome: 'Senha', type: 'password' }
    ]

    const [showPage, setShowPage] = useState("Login")

    return (
        <LogPage>
                            <h1>Já tem login? <br />Entre</h1>
            <div className="form">
                {showPage === "Login" ?
                    <Form
                        name='Login'
                        dados={dadosLogin}
                        terms='Remember'
                        action='Login'
                        ativo='true'
                    />
                    :
                    <Form
                        name='Cadastre-se'
                        dados={dadosCadastro}
                        terms='I agree with Terms and Privacy'
                        action='Cadastre-se'
                        ativo=''
                    />
                }
                <hr />
                {showPage === 'Login' ?
                    <div className="option">
                        <h3>Don’t have an account?</h3>
                        <button type="button" onClick={() => setShowPage("Cadastro")}>Cadastro</button>
                    </div>
                    :
                    <div className="option">
                        <h3>Already have an account?</h3>
                        <button type="button" onClick={() => setShowPage("Login")}>LogIn</button>
                    </div>
                }

            </div>
        </LogPage>
    )
}

export default SingIn