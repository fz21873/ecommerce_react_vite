import React from "react";
import Form from "../../components/form";
import { LogPage } from "../../style/stylePage";

const SingUp = () => {
    const dados = ['Nome', 'Email', 'Senha']
    return (
        <LogPage>
            <h1>Não tem Login? Cadastre-se</h1>
            <div className="form">
                <Form
                    name='Cadastre-se'
                    dados={dados}
                    terms='I agree with Terms and Privacy'
                    action='Cadastre-se'
                    optionText='Already have an account?'
                    actionOption='LogIn'
                    ativo=''
                /></div>
        </LogPage>
    )
}

export default SingUp