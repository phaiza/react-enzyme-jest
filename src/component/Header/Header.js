import React from 'react';
import './style.scss';
import Logo from '../../assets/img/logo.png';

function Header(props) {
    return (
        <header className="headerComponent" data-test="headerComponent">
            <div className="wrapper container-fluid">
            <div className="logo" data-component="logo">
                <img src={Logo} alt="logo" data-component="logoImg" className="logoImg"/>
            </div>
            </div>
           
        </header>
    )
}

export default Header
