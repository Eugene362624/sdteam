import React from 'react'
import './Header.scss'

function Header() {
    return (
        <header>
            <img onClick={() => window.scrollTo({top: document.querySelector('#logo').offsetTop, behavior: 'smooth'})} id="logo" src="./logo.svg"></img>
            <nav>
                <button onClick={() => window.scrollTo({top: document.querySelector('.about').offsetTop, behavior: 'smooth'})}>О компании</button>
                <button onClick={() => window.scrollTo({top: document.querySelector('.projects').offsetTop-100, behavior: 'smooth'})}>Портфолио</button>
                <button onClick={() => window.scrollTo({top: document.querySelector('.services').offsetTop, behavior: 'smooth'})}>Услуги</button>
                <button>Блог</button>
            </nav>
            <button id='order'>Заказать сайт</button>
        </header>
    )
}

export default Header
