import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ProtectdRoute = ( props ) => {
    // console.log( props );
    if ( localStorage.getItem( 'tkn' ) == null ) {
        return <Navigate to={'/login'} />
    }else
    {
        return props.children
    }


  return <>
  
  </>
}

export default ProtectdRoute