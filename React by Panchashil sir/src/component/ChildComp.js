import React, { Component, PureComponent } from 'react'

class ChildComp extends PureComponent {

    render() {
        console.log('child component...');
        return (
            <div>
                <h2>This is ChildComp</h2>
                <p>Name :{this.props.name}</p>
            </div>
        )
    }
}

export default ChildComp
