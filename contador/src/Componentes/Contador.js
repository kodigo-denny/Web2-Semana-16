import React from 'react'
import Pantalla from './Pantalla'
import Boton from './Boton'

class Contador extends React.Component{

    constructor(props){
        super(props)
        this.state = {numero: 0}
        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
        this.reset = this.reset.bind(this)
    }

    incrementar(){
        this.setState({numero: this.state.numero + 1})
    }

    decrementar(){
        this.setState({numero: this.state.numero - 1})
    }

    reset(){
        this.setState({numero: 0})
    }

    render(){
        return <div>
            <Pantalla valor={this.state.numero} />
            <div >
                <Boton evento={this.decrementar} estilo="secondary">-</Boton>
                <Boton evento={this.reset} estilo="warning">Reset</Boton>
                <Boton evento={this.incrementar} estilo="primary">+</Boton>
            </div>
        </div>
    }
}

export default Contador