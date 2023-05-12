import React, { useState } from 'react'

import { toast } from 'react-toastify'

function Lojinha( props ){

    const [ valor, setValor ] = useState(0)
    const [ itens, setItens ] = useState(0)

    // Crie uma função pra mudar o valor e mostrar um alert()
    function finalizaCompra(){
        setValor(0)
        toast("Compra finalizada com sucesso!")
    }

    function realizaCompra( preco ){
        setValor( valor + preco )
        setItens( itens + 1 )
    }

    return(
        <div>
            <button className='btn btn-secondary mb-4' onClick={()=> props.setLogin(false) }> Sair </button>

            <h1> Lojinha </h1>
            <p> Itens no carrinho: <span className='bagde bg-primary '> { itens }</span> </p>
            <p className='alert alert-info'> Valor total: R$ { valor } </p>
            <button className='btn btn-success ' onClick={ ()=> finalizaCompra() } > Finalizar compra </button>

            <hr/>

            <div className='d-flex justify-content-around'>
                <div className='card'>
                    <img src="https://via.placeholder.com/250x250" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title"> Card camisa Polo </h5>
                            <p class="card-text"> 79,90 </p>
                            <button href="#" class="btn btn-primary"> COMPRAR </button>
                        </div>
                </div>
                <div className='card' >
                    <img src="https://via.placeholder.com/250x250" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title"> Card camisa Polo </h5>
                            <p class="card-text"> 79,90 </p>
                            <button href="#" class="btn btn-primary"> COMPRAR </button>
                        </div>
                </div>
                <div className='card' >
                    <img src="https://via.placeholder.com/250x250" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title"> Card camisa Polo </h5>
                            <p class="card-text"> 79,90 </p>
                            <button href="#" class="btn btn-primary"> COMPRAR </button>
                        </div>
                </div>

            </div>

            {/* <ul className='list-group d-flex flex-row justify-content-around'>
                <li className='list-group-item' > 
                    <p> 
                        Camisa Polo - R$ 79,90 
                        <button className='btn btn-warning ' onClick={ ()=> realizaCompra(79.90) } >Comprar</button>
                   </p>
                </li>
            

            
                <li className='list-group-item'>
                    <p > 
                        Calça Jeans - R$ 120,00
                        <button className='btn btn-dark ' onClick={ ()=> realizaCompra(120) }>Comprar</button>
                    </p>
                </li>
            
            
                <li className='list-group-item'>
                    <p>
                        Tênis Nike - R$ 110,99
                        <button className='btn btn-info ms' onClick={ ()=> realizaCompra(110.99) }>Comprar</button>
                    </p>
                </li>
            </ul> */}
            

            
        </div>
    )
}

export default Lojinha;