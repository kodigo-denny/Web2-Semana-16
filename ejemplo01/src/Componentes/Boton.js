import React from "react";

class Boton extends React.Component{

    constructor(props){
        super(props)
        //console.log(props)
    }

    render(){
        return <button className="btn btn-primary" onClick={this.props.evento}>
            {this.props.children}
        </button>
    }
}

export default Boton