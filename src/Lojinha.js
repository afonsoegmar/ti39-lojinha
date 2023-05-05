import React, { useState } from 'react'

function Lojinha( props ){

    const [ valor, setValor ] = useState(0)
    const [ itens, setItens ] = useState(0)

    // Crie uma função pra mudar o valor e mostrar um alert()
    function finalizaCompra(){
        setValor(0)
        alert("Compra finalizada com sucesso!")
    }

    function realizaCompra( preco ){
        setValor( valor + preco )
        setItens( itens + 1 )
    }

    return(
        <div>
            <button onClick={()=> props.setLogin(false) }> Sair </button>

            <h1> Lojinha </h1>
            <p> Itens no carrinho: { itens } </p>
            <p> Valor total: R$ { valor } </p>
            <button onClick={ ()=> finalizaCompra() } > Finalizar compra </button>

            <hr/>

            <p> 
                Camisa Polo - R$ 79,90 
                <button onClick={ ()=> realizaCompra(79.90) } >Comprar</button>
            </p>

            <p> 
                Calça Jeans - R$ 120,00
                <button onClick={ ()=> realizaCompra(120) }>Comprar</button>
            </p>

            <p>
                Tênis Nike - R$ 110,99
                <button onClick={ ()=> realizaCompra(110.99) }>Comprar</button>
            </p>
        </div>
    )
}

export default Lojinha;