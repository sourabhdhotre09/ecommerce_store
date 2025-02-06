import React, { useContext } from 'react'
import { themeContext, userContext } from '../App'

const ChildD = () => {
    const {user, setUser} =useContext(userContext);
    const {theme,setTheme} = useContext(themeContext);

    function handleClick(){
        if(theme === 'light'){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    }
  return (
    <>
    <div>ChildD {user}</div>
    <button className='btn btn-warning mt-4' onClick={handleClick}>Click to Toggle Theme</button>
    </>
  )
}

export default ChildD