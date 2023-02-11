import React from "react";

class Boton extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return <button onClick={this.props.evento} className={`btn btn-${this.props.estilo==undefined ? 'primary' : this.props.estilo} col-${this.props.col==undefined ? 3 : this.props.col*3}`}>
            {this.props.children}
        </button>
    }
}

export default Boton