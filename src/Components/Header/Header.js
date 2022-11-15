import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/add/user'>addUser</Link>
                <Link to='/update/:id'>update</Link>
            </nav>
        </div>
    );
};

export default Header;