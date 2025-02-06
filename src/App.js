import { createContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Route from './Routes/Route';
// import ChildA from './Components/ChildA';
// import ChildD from './Comp2/ChildD';

// const userContext = createContext();
// const themeContext = createContext();

function App() {
  // const [user,setUser] = useState();
  // const [theme,setTheme] =useState('light');

  // useEffect (()=>{
  //     document.body.setAttribute('data-bs-theme',theme);
  // },[theme]);
  
  return (
    // <themeContext.Provider value={{theme,setTheme}}>
    //   <userContext.Provider value={{user,setUser}}>
    //     <div className='App' data-bs-theme={theme}>
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-md-6">
    //             <ChildA/>
    //           </div>
    //           <div className="col-md-6">
    //             <ChildD/>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </userContext.Provider>
    // </themeContext.Provider>
    <>
      <Route/>
    </>
  );
}

export default App;
// export {userContext};
// export {themeContext};