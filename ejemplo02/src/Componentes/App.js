import {React, useState} from 'react'

function App({titulo, children}){

    const [numero, setNumero] = useState(5)
    const [numero2, setNumero2] = useState(10)
    //const {titulo, children} = props
    //console.log(props)

    function click(){
        setNumero2(20)
    }

    return(
        <div>
            <h1>{numero} {numero2}</h1>
            <h1>{titulo}</h1>
            <h2>{children}</h2>
            <button onClick={click}>Click</button>
        </div>
    )
}

export default App

