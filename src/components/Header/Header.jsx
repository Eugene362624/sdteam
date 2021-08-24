import React from 'react'
import './Header.scss'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

function Header({ normal}) {

    const history = useHistory()
    const style = {
        header: {
            position: normal ? 'inherit' : 'fixed',
            borderBottom: normal ? '1px solid lightgray' : ''
        }
    }
    return (
        <header style={style.header}>
            {history.location.pathname != '/' ?
                <>
                <img onClick={() => history.push('/')} id="logo" alt="Лого" src=".././logo.svg"></img>
            <nav>
                <button onClick={() => history.push('/about')}>О компании</button>
                <button onClick={() => history.push('/portfolio')}>Портфолио</button>
                <button onClick={() => history.push('/offers')}>Цены</button>
                <button onClick={() => history.push('/contact')}>Связаться с нами</button>
            </nav>
            <Link to="/offers"><button id='order'>Заказать сайт</button></Link>
                </>
            :
                <>
                    <img onClick={() => window.scrollTo({ top: document.querySelector('#logo').offsetTop, behavior: 'smooth' })} id="logo" alt="Лого" src=".././logo.svg"></img>
                    <nav>
                        <button onClick={() => window.scrollTo({ top: document.querySelector('.about').offsetTop, behavior: 'smooth' })}>О компании</button>
                        <button onClick={() => window.scrollTo({ top: document.querySelector('.projects').offsetTop - 100, behavior: 'smooth' })}>Портфолио</button>
                        <button onClick={() => window.scrollTo({ top: document.querySelector('.services').offsetTop, behavior: 'smooth' })}>Цены</button>
                        <Link to="/profile"><button>Личный кабинет</button></Link>
                    </nav>
                    <Link to="/offers"><button id='order'>Заказать сайт</button></Link>
                </>
            }

        </header>
    )
}

export default Header
