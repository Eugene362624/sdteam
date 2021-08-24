import React from 'react'
import './Footer.scss'


function Footer() {
    return (
        <footer>
            <div className="footer-left">
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
                            <div className="follow-us--links">
                                <a href=""><img src='.././vk.svg'></img></a>
                                <a href=""><img src='.././instagram.svg'></img></a>
                                <a href=""><img src='.././youtube.svg'></img></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-down">
                        <img src='.././bottomLogo.svg'></img>
                        <span>2021 &copy; SDTeam Студия веб-разработки. Все права защищены.</span>
                    </div>
                </div>
            </div>
            <div className="footer-right">
                <img id="dog" src=".././Saly-18.png" alt="Нижнее лого" />
            </div>
        </footer>
    )
}


export default Footer
