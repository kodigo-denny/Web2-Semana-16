import React from 'react'
import imagen from '../Img/kodigo-mac.png'

class Pantalla extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return <div>
            <div className="card">
            <img src={require("../Img/kodigo-mac.png")} className="card-img-top" alt="..." />
                <div className="card-body" style={{textAlign: 'center'}}>
                    <h1>{this.props.valor}</h1>
                </div>
            </div>
        </div>
    }
}

export default Pantalla