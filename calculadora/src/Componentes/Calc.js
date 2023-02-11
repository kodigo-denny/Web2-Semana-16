import React from "react";
import Pantalla from "./Pantalla";
import Boton from "./Boton";

class Calc extends React.Component{

    constructor(props){
        super(props)

        this.state = {resultado: '0', num1: 0, operacion: ''}
        this.digitar = this.digitar.bind(this)
        this.limpiar = this.limpiar.bind(this)
        this.quitar = this.quitar.bind(this)
        this.punto = this.punto.bind(this)
        this.operar = this.operar.bind(this)
        this.igual = this.igual.bind(this)
    }

    igual(){
        if(this.state.operacion!=''){
            let num2 = Number(this.state.resultado)
            let res
    
            if(this.state.operacion == '+')
                res = this.state.num1 + num2
            else if(this.state.operacion == '-')
                res = this.state.num1 - num2
            else if(this.state.operacion == '*')
                res = this.state.num1 * num2
            else if(this.state.operacion == '/')
                res = this.state.num1 / num2
    
            this.setState({num1: res})
            this.setState({resultado: res})
        }
    }

    operar(op){
        this.setState({operacion: op})
        this.setState({num1: Number(this.state.resultado)})
        this.setState({resultado: '0'})
    }

    punto(){
        let pos = this.state.resultado.indexOf(".")

        if(pos==-1)
            this.setState({resultado: `${this.state.resultado}.`})
    }

    quitar(){
        let temp = this.state.resultado

        let tamaño = temp.length
        temp = temp.substring(0, tamaño-1)
        this.setState({resultado: temp=='' ? '0' : temp })
        
    }

    limpiar(){
        this.setState({resultado: '0'})
        this.setState({num1: 0})
        this.setState({operacion: ''})
    }

    digitar(num){
        if(this.state.resultado=="0")
            this.setState({resultado: `${num}`})
        else{
            this.setState({resultado: `${this.state.resultado}${num}`})
        }
    }

    render(){
        return <div>
            <div className="row">
                <Pantalla resultado={this.state.resultado} />
            </div>
            <div className="row mb-2">
                <Boton col={3} evento={this.limpiar}>CE</Boton>
                <Boton evento={this.quitar}>{"<"}</Boton>
            </div>

            <div className="row mb-2">
                <Boton evento={() => this.digitar(7)} estilo="secondary">7</Boton>
                <Boton evento={() => this.digitar(8)} estilo="secondary">8</Boton>
                <Boton evento={() => this.digitar(9)} estilo="secondary">9</Boton>
                <Boton evento={() => this.operar('/')} estilo="success">/</Boton>
            </div>

            <div className="row mb-2">
                <Boton evento={() => this.digitar(4)} estilo="secondary">4</Boton>
                <Boton evento={() => this.digitar(5)} estilo="secondary">5</Boton>
                <Boton evento={() => this.digitar(6)} estilo="secondary">6</Boton>
                <Boton evento={() => this.operar('*')} estilo="success">*</Boton>
            </div>

            <div className="row mb-2">
                <Boton evento={() => this.digitar(1)} estilo="secondary">1</Boton>
                <Boton evento={() => this.digitar(2)} estilo="secondary">2</Boton>
                <Boton evento={() => this.digitar(3)} estilo="secondary">3</Boton>
                <Boton evento={() => this.operar('-')} estilo="success">-</Boton>
            </div>

            <div className="row">
                <Boton evento={() => this.digitar(0)} estilo="secondary">0</Boton>
                <Boton evento={this.punto} estilo="danger">.</Boton>
                <Boton evento={this.igual} estilo="warning">=</Boton>
                <Boton evento={() => this.operar('+')} estilo="success">+</Boton>
            </div>
        </div>
    }

}

export default Calc