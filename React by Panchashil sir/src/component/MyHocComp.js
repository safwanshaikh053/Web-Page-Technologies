import React, { Component } from "react";

const MyHocComp = (WrapperComp) => {
  class Hoc extends Component {

    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    
    incremtCounter = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return <WrapperComp count={this.state.count} incremtCounter={this.incremtCounter}></WrapperComp>;
    }
  }

  return Hoc;
};

export default MyHocComp;
