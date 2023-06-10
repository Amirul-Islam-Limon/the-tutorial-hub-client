import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location =useLocation();
    // console.log(user);

    if(loader){
        return <div className='d-flex justify-content-center align-items-center'><h2>Loading........</h2></div>
    }
    if(user?.email){
            return children;
    }
    if(!user?.email){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
};

export default PrivateRoute;