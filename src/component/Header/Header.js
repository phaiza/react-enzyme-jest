import React from 'react';
import './style.scss';
import Logo from '../../assets/img/logo.png';

function Header(props) {
    return (
        <header>
            <div className="wrapper container-fluid">
            <div className="logo">
                <img src={Logo} alt="logo"/>
            </div>
            </div>
           
        </header>
    )
}

export default Header
