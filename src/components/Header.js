import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {
    return (
        <div id='menu'>
            <ul>
                <div id='menuItem'><li><NavLink exact={true} to="/" activeClassName="is-active">Home </NavLink></li></div>
                <div id='menuItem'><li><NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink></li></div>
                <div id='menuItem'><li><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li></div>
            </ul>
        </div>
    );
};

export default Header;