import React, { useEffect, useState } from 'react'
import './App.css';
import { Navigate, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import People from './components/People/People';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import { jwtDecode } from 'jwt-decode';
import ProtectdRoute from './components/ProtectdRoute/ProtectdRoute';
import Detiles from './components/Detiles/Detiles';
import Tvshow from './components/Tvshow/Tvshow';

const App = () => {




  const [crrUser, setCrrUser] = useState(null)

  function saveUserData(){
    let encodedToken = localStorage.getItem( 'tkn' )
    let decodedToken = jwtDecode( encodedToken )
    setCrrUser( decodedToken )
    // console.log( crrUser );
    // هعمل كول للفانكشن في اللجن عشان الداتا تكون معايا 
    // طب عملت لفانكشن هنا لي عشان تبقي شير علي كل ال comp واي مكان عاوز فيه بياات ال يوزر ابعتها props
  }



  useEffect(() => {
    if (localStorage.getItem('tkn') != null && crrUser == null) {
      // lama yb3a mafesh data
      saveUserData()
    }
  }, [])
  
  


  const router = createBrowserRouter([ 
    { path: '' , element: <Layout crrUser={ crrUser }  setCrrUser={setCrrUser}  /> , children: [
      { path: '' , element: <ProtectdRoute> <Home/> </ProtectdRoute>  }, 
      { path: 'home' , element: <ProtectdRoute> <Home/> </ProtectdRoute>  }, 
      { path: 'movies' , element:  <ProtectdRoute> <Movies/> </ProtectdRoute> }, 
      { path: 'detiles/:id/:mediaType' , element: <ProtectdRoute> <Detiles/> </ProtectdRoute> }, 
      { path: 'tvshow' , element: <ProtectdRoute> <Tvshow/> </ProtectdRoute> }, 
      { path: 'people' , element: <ProtectdRoute><People/></ProtectdRoute> }, 
      { path: 'login' , element: <Login saveUserData={ saveUserData } /> }, 
      { path: 'register' , element: <Register/> }, 
      { path: '*' , element: <Notfound/> }
    ] }
  ]);



  return <RouterProvider router={ router } ></RouterProvider>
}

export default App