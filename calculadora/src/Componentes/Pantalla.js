import React from "react";

class Pantalla extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return <div className="col-12">
            <input type="text" id="pantalla" readOnly value={this.props.resultado} style={{textAlign: 'right', fontSize: 40}} className="form-control" />
        </div>
    }
}

export default Pantalla