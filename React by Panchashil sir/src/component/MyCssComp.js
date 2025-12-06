import React from 'react'
import './external.css';
import mybox from './mycss.module.css';

const MyCssComp = () => {

    let mycssprop={
        color:"green",
        fontSize:"20px",
        textAlign:"center",
        backgroundColor:"dodgerblue"
    }

    return (
        <div>
            {/*1.use of enternal css  */}
            <h2 style={{color:"red",backgroundColor:"aqua"}}>This is MyCssComp</h2>
            <div style={mycssprop}>use of internal css</div>
            {/* 2. use of external css  */}
            <p className='txt-danger'>Hello Friends</p>
            <p className='txt-success'>How are you Friends</p>
            {/* 3. use of module css  */}
             <div className={mybox.box}>modular css</div>
        </div>
    )
}

export default MyCssComp
