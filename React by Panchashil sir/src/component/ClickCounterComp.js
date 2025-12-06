import React, { Component } from 'react';
import MyHocComp from './MyHocComp';

class ClickCounterComp extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //      count:0    
    //     }
    // }
    // incremtCounter =()=>{
    //     this.setState({count:this.state.count+1});
    // }
    
    render() {
        return (
            <div>
                <h2>This is ClickCounterComp</h2>
                {/* <p>Counter :<strong>{this.state.count}</strong></p>
                <button type='button' onClick={()=>this.incremtCounter()} className='btn btn-primary'>counter++</button> */}
                <p>Counter :<strong>{this.props.count}</strong></p>
                <button type='button' onClick={()=>this.props.incremtCounter()} className='btn btn-primary'>counter++</button>
                <hr/>
            </div>
        )
    }
}

// export default ClickCounterComp
export default MyHocComp(ClickCounterComp) 
