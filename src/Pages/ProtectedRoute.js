import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children,user}) => {

    
    if(!user){
        return <Navigate to="/MyPages/login"></Navigate>

    } else {
        return children;
    }
  return (
    <div>
      
    </div>
  )
}

export default ProtectedRoute
