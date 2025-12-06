import React, { Component } from "react";

class ClassComp extends Component {

  constructor() {
    super();
    this.state = {
      empName: "Panchashil",
      empSal: 40000,
    };
  }

  changStateData =()=>{
    this.setState({empName:"Panchashil Wankhede",
      empSal:this.state.empSal+1000});
    // this.setState((prevState)=>({empName:"Panchashil Wankhede",
    // empSal:prevState.empSal+1000}));
  }

  render() {
    console.log("class component");
    // desstructuring of props
    const {fname,post} = this.props;
     // desstructuring of state
    const {empName,empSal} = this.state;

    return (
      <div>
        <h2>This is Class Component</h2>
        <p>Name:{fname} and Post:{post}</p>
        {/* how to access state data  */}
        <p> Name:<strong>{empName}</strong> and Salary:<strong>{empSal}</strong></p>

        <button type="button" onClick={()=>this.changStateData()}>Change State Data </button>
       
      
      </div>
    );
  }
}

export default ClassComp;
