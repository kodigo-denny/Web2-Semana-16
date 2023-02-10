import React from 'react'

class Boton extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return <button onClick={this.props.evento} className={`btn btn-${this.props.estilo} col-4`}>
            {this.props.children}
        </button>
    }
}

export default Boton