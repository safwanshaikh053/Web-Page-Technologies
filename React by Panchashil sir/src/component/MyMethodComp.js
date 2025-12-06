import React, { Component } from "react";

class MyMethodComp extends Component{
    
    greeting=(s1,s2,s3)=>{
        window.alert(`Good Morning ${s1}, ${s2},${s3}`);
    }

    render(){
        return <div>
            <h2>This is MyMethodComp</h2>
            <button type="button" onClick={()=>this.greeting("Junaid",'Chinmay',"Vaibhav")}> call greeting</button>
        </div>
    }
}
export default MyMethodComp;