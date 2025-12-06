import React from 'react'

const MyReactMemoComp = (props) => {
    console.log('my React Memo Comp');
    return (
        <div>
            <h2>This is MyReactMemoComp</h2>
            <p>Name :{props.name}</p>
        </div>
    )
}

export default React.memo(MyReactMemoComp); 
