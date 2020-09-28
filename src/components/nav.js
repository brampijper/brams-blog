import React from 'react';
import './nav.css';
import {FaKiwiBird} from 'react-icons/fa';

const Nav = () => {
    
    return (
        <nav className='nav'>
            <div className="nav-container">
                <div className="brand">
                    <a aria-current="page" href="/">
                        <span className="text">
                            <FaKiwiBird className="favicon" />
                            Bram writes
                        </span>
                    </a>
                </div>
                <div className="links">
                    <a href="/about/">About</a>
                    <a href="/articles">Thoughts</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;