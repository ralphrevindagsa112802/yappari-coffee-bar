import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const isAdmin = localStorage.getItem('isAdmin'); // Example check
    return isAdmin ? children : <Navigate to="/yappari-coffee-bar/" />;
}

export default PrivateRoute