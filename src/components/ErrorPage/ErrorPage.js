import React from 'react';
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    // console.error(error);
    return (
        <div id="error-page" className='text-center'>
            <div>
                <h1>Oops! {error.status}</h1>
                <h4 className='text-danger'>{error.data}</h4>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                <i>{error.statusText || error.message}</i>
                </p>
            </div>
            <Link to="/">Go to home</Link>
      </div>
    );
};

export default ErrorPage;