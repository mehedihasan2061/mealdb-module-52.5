import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    // console.log(error);
    return (
        <div>
            <h2 className='text-4xl'>Opps!</h2>
            <p className='text-2xl text-lime-500'>Sorry, an unexpected error has occurred!</p>
            {error &&
                <div>
                    <p className='text-red-600 text-2xl'>{error.statusText || error.message}</p>
                    <p>{error.status}</p>
            </div>
            }
        </div>
    );
};

export default ErrorPage;