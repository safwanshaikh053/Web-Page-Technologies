import React, { Component } from 'react'

class ListComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             menues:[
                {id:1,name:"Samosa",price:20},
                {id:2,name:"Dosa",price:30},
                {id:3,name:"Jalebi",price:40},
                {id:4,name:"VadaPav",price:20},
                {id:5,name:"Idli",price:10}
             ]
        }
    }
    
    render() {
        return (
            <div>
                <h2>this is ListComp</h2>
                <ul>
                    {
                      this.state.menues.map((val,index)=>{
                        return <li key={index}>Name:{val.name}, Price:{val.price}</li>
                      })  
                    }
                </ul>
            </div>
        )
    }
}

export default ListComp
