import React, { useState } from 'react'

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Lojinha from './Lojinha'
import Menu from './Menu';

function App() {

    const [ login, setLogin ] = useState(false)

    return (
        <div className="App">

            <ToastContainer/>

            <Menu />
            <div className='container'>

                {
                    login == false ?
                        <>
                            <p> Faça login para continuar </p>
                            <button className="btn btn-primary" onClick={()=> setLogin(true) } > Logar </button>
                        </>
                    :
                        <Lojinha setLogin={ setLogin } />
                }
            </div>

        </div>
    );
}

export default App;
