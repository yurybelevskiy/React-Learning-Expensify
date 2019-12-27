import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <p>404: Not Found!</p>
        <Link to="/">Go to home page</Link>
    </div>
);

export default NotFoundPage;