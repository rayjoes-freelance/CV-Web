import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            Error 404! <Link to="/">Aller à la page d'accuiel</Link>
        </div>
    );
}

export default NotFound;