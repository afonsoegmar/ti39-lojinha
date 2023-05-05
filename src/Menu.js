import React from 'react'

function Menu(){

    const [ fundo, setFundo ] = React.useState("black")

    const estilo = {
        backgroundColor: fundo,
        color: "white"
    }

    return(
        <div style={ estilo } >
            <p> Lojinha do Conradito <button onClick={ ()=> setFundo(  fundo == "black" ? "red" : "black" ) }>Fundo</button> </p>
        </div>
    )
}

export default Menu;