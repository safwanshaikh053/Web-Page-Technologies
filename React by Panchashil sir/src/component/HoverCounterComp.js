import React, { Component } from "react";
import MyHocComp from "./MyHocComp";

class HoverCounterComp extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0
//     };
//   }
//   incremtCounter = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
  render() {
    return (
      <div>
        <h2>This is Hover Counter Comp</h2>
        {/* <p>Counter :<strong>{this.state.count}</strong></p>
        <h2 onMouseOver={() => this.incremtCounter()} 
        className="text-success bg-warning"> Hover On me for counter++
        </h2> */}
        <p>
          Counter :<strong>{this.props.count}</strong>
        </p>
        <h2 onMouseOver={() => this.props.incremtCounter()} 
        className="text-success bg-warning"> Hover On me for counter++
        </h2>
      </div>
    );
  }
}

// export default HoverCounterComp;
export default MyHocComp(HoverCounterComp) ;
