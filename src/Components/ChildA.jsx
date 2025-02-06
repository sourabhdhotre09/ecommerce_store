import React, {useContext} from 'react'
import ChildB from './ChildB'
import { userContext } from '../App'

const ChildA = () => {
    const {user,setUser} = useContext(userContext);
  return (
    <>
    <div>ChildA {user}</div>
    <ChildB/>
    </>
  )
}

export default ChildA