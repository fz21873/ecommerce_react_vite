import React from "react";

export default function Header(props) {
    return (
        <div>
            <h1>Bem vindos a página {props.texto}</h1>
            <button>clique aqui</button>
            <div className="cards">

                <div className="card"></div>
                <div className="card"></div>
            </div>
        </div>
    )
}