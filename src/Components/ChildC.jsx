import React, { useContext, useState } from 'react'
import { userContext } from '../App';


const ChildC = () => {
    const {user,setUser} = useContext(userContext);
    
    
  return (
    <div className='d-flex'>
        ChildC: 
        <input type="text" value={user} className='form-control' onChange={(e) => setUser(e.target.value)} placeholder='Type Anything'/>
    </div>
  )
}

export default ChildC