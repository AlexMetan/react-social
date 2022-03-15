import React from 'react';
import s from './Header.module.css';
const Header = () => {
    return(
        <header className={s.header}>
            <img src="https://alexdev.pl/img/logo.svg"/>
        </header>
    );
}

export default Header;