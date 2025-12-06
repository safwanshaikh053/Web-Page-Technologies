import React, { Component } from "react";
import ChildComp from "./ChildComp";
import MyReactMemoComp from "./MyReactMemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myName: "Panchashil",
    };
  }

  render() {
    console.log('parent component...');
    return (
      <div>
        <h2>This is Parent Component</h2>
        <p>My Name is:<strong>{this.state.myName}</strong></p>

        <button type="button" className="btn btn-primary" onClick={()=>this.setState({myName:"Panchashil Wankhede"})}> change state Data</button>

        <hr/>

        <ChildComp name={this.state.myName}></ChildComp>
        <hr/>
        <MyReactMemoComp name={this.state.myName}></MyReactMemoComp>
      </div>
    );
  }
}

export default ParentComp;
