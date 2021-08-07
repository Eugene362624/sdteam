import React from 'react'
import './Footer.scss'


function Footer() {
    return (
        <footer>
            <div className="footer-up">
                <h2>Появилось желание улучшить Ваш бизнес?<br></br>Мы поможем Вам с этим</h2>
                <button>Запустить проект с нами</button>
            </div>
            <div className="">
                <div className="footer-middle">
                    <div className="contact-us">
                        <h2>Свяжитесь с нами</h2>
                        <a href="">gmail.gmail@gmail.com</a>
                    </div>
                    <div className="follow-us">
                        <h2>Следите за нами</h2>
                        <a href=""><img src='./vk.svg'></img></a>
                        <a href=""><img src='./instagram.svg'></img></a>
                        <a href=""><img src='./youtube.svg'></img></a>
                    </div>
                </div>
                <div className="footer-down">
                    <img src='./bottomLogo.svg'></img>
                    <span>&copy; 2021 - SDTeam студия веб-разработки. Все права защищены.</span>
                </div>
            </div>
            
        </footer>
    )
}


export default Footer
