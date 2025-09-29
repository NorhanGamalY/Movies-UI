import React from 'react';
import { Outlet } from 'react-router-dom';

const MoviesModule = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
}

export default MoviesModule;