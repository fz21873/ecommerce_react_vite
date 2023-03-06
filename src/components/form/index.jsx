import { useState,useContext } from "react"
import { ContextoGlobal } from '../../global/ContextoGlobal';

const Form = (props) => {

    const [capturaDados, setCapturaDados] = useState({ email: "", name: "", password: "" })
    const { navegacao } = useContext(ContextoGlobal)
    const setDados = (e, item) => {
        if (item === 'email') {
            //usando o spreed operator para inserir apenas o dado que alteramos
            setCapturaDados({ ...capturaDados, email: e.target.value })
        } else if (item === 'password') {
            setCapturaDados({ ...capturaDados, password: e.target.value })
        } else {
            setCapturaDados({ ...capturaDados, name: e.target.value })
        }

    }

    const enviaLogin = (event) => {
        event.preventDefault()

        if (capturaDados.email === localStorage.getItem("email")) {

            if (capturaDados.password === localStorage.getItem("password")) {

                return navegacao('/produto')
               
            } else {

                alert("a senha está incorreta")
            }

        } else {
            alert(" o e-mail está incorreto")
        }

    }
    const enviaCadastro = (event) => {
        event.preventDefault()
        localStorage.clear()
        localStorage.setItem("name", capturaDados.name)
        localStorage.setItem("email", capturaDados.email)
        localStorage.setItem("password", capturaDados.password)
        window.location.reload();

    }

    return (
        <form onSubmit={props.name === "Login" ? enviaLogin  : enviaCadastro} >
            <h3> {props.name}</h3 >
            {props.dados.map((item,index) => <input key={index} onChange={(e) => setDados(e, item.type)} type={item.type} placeholder={item.nome} required />)}
            <label label={props.ativo} > <input type={'checkbox'} /> {props.terms}</label >
            <button type="submit">{props.action}</button>
        </form >
    )
}

export default Form