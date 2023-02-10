import React from "react";
import Boton from "./Boton"

class Componente extends React.Component{

    constructor(props){
        super(props)
        //console.log(props)
        this.state = {numero : 10}// inicalizacion

        this.mensaje = this.mensaje.bind(this)
        console.log("Constructor")
    }

    mensaje(num){
        alert("Hola mundo " + num)
    }

    render(){
        console.log("Render")
        return <div>
            <h1>Numero: {this.state.numero}</h1>
            <h1>Hola mundo</h1>
            <h1>Hola mundo</h1>
            <Boton evento={() => this.mensaje(5)}>Guardar (Save)</Boton>

            <Boton evento={() => this.mensaje(10)}>Guardar</Boton>
        </div>
    }

    componentDidMount(){
        console.log("Did Mount")
        this.setState({numero: 20})
    }

    componentDidUpdate(prevProps){
        console.log("Did Update", prevProps)
    }

    componentWillUnmount(){
        console.log("Will Unmount")
    }
}

export default Componente