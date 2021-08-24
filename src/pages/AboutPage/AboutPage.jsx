import React, { useEffect, useRef } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SideBar from '../MainPage/SideBar/SideBar'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './AboutPage.scss'

function AboutPage() {

    const aboutImage = useRef(null)
    const observer = useRef()
    useEffect(() => {
        window.scroll(0,0)
        let options = {
            root: document.querySelector('#scrollArea'),
            rootMargin: '0px',
            threshold: .7
        }
        let callback = (entries, observer) => {
            console.log(entries)
            if (entries[0].isIntersecting) {
                entries[0].target.src = './Saly-15.png'
                entries[0].target.style = 'animation: fade-in-from-left .5s ease'
            }
        }
        observer.current = new IntersectionObserver(callback, options);
        observer.current.observe(aboutImage.current)
    }, [])

    return (
        <div className="about-page">
            <Header normal/>
            <main>
                <div className="about-content">
                    <div className="about-left">
                        <span id='whoweare'>Кто мы?</span>
                        <ul>
                            <li>Основаны в <strong>2021</strong> году</li>
                            <li>Нас <strong>3 специалиста</strong></li>
                            <li>Выполнено проектов: <strong>1</strong></li>
                            <li>Проваленных дедлайнов: <strong>0</strong></li>
                        </ul>
                    </div>
                    <div className="about-right">
                        <div className="people-list">
                            <div className="people-list-member">
                                <div className="member-wrap">
                                    <div className="member-photo">
                                        <img src="/member.png" alt="" />
                                    </div>
                                    <div className="member-name">
                                        <h3>Евгений М.</h3>
                                    </div>
                                    <div className="member-info">
                                        <p>Основатель и программист</p>
                                    </div>
                                </div>
                                <div className="member-social">
                                    <a href="https://www.linkedin.com/in/%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BC%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2-03017020b/"><LinkedInIcon/></a>
                                </div>
                            </div>
                            <div className="people-list-member">
                                <div className="member-wrap">
                                    <div className="member-photo">
                                        <img src="/member.png" alt="" />
                                    </div>
                                    <div className="member-name">
                                        <h3>Георгий Р.</h3>
                                    </div>
                                    <div className="member-info">
                                        <p>Дизайнер проектов</p>
                                    </div>
                                </div>
                                <div className="member-social">
                                    <a href="https://www.linkedin.com/in/%D0%B3%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B9-%D1%80%D1%83%D0%B4%D1%8C%D0%BA%D0%BE-65b64b206/"><LinkedInIcon/></a>
                                </div>
                            </div>
                            <div className="people-list-member">
                                <div className="member-wrap">
                                    <div className="member-photo">
                                        <img src="/member.png" alt="" />
                                    </div>
                                    <div className="member-name">
                                        <h3>Варвара М.</h3>
                                    </div>
                                    <div className="member-info">
                                        <p>СЕО-маркетолог</p>
                                    </div>
                                </div>
                                <div className="member-social">
                                    <a href="https://www.linkedin.com/in/%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BC%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%B2-03017020b/"><LinkedInIcon/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-bottom">
                    <div className="about-bottom-left">
                        <picture>
                        <img ref={aboutImage} src="./logo.svg" alt="Мальчик с флагом SDTeam" />
                        </picture>
                    </div>
                    <div className="about-bottom-right">
                    <p>Мы друзья и фрилансеры, объединившиеся вместе для создания крутых и продающих сайтов для бизнесов. У каждого есть своя задача и наша команда работает как хорошие механические часы. Среди нас отличные программист, дизайнер и СЕО-маркетолог. К каждому проекту и заказу мы подходим с особым трепетом, чтобы угодить всем. Все мы базируемся в <strong>г. Минск, Беларусь</strong>. Помимо заказов мы разрабатываем собственные проекты. Мы ориентируемся в сторону систем для поддерживания бизнесов.</p>
                    </div>
                    
                </div>
            </main>
            <Footer/>
            <SideBar/>
        </div>
    )
}

export default AboutPage
