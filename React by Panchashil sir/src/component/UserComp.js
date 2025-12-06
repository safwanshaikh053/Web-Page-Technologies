import React from 'react'

const UserComp = ({user}) => {
    
    if(user==='Kalu'){
       throw new Error('Not A User');
    }
    return  <div>user is : <strong>{user}</strong></div>   
}

export default UserComp
