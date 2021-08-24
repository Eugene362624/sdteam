import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SideBar from '../MainPage/SideBar/SideBar'
import './PortfolioPage.scss'

function PortfolioPage() {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [page, setPage] = useState(0)

    const showNext = useRef(null)
    const observer = useRef()

    

    const getProjectsPart = async () => {
        await axios.get(`/api/projects?page=${page}`)
        .then(res => {
            
            setData([...data, res.data.page])
        })
        console.log(page)
    }

    useEffect(() => {
        
        let callback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                getProjectsPart()
            }
        }
        observer.current = new IntersectionObserver(callback)
        observer.current.observe(showNext.current)
    }, [])
    return (
        <>
            <Header normal />
            <div className="portfolio-page">
                <div className="portfolio-label">
                    <button onClick={() => {return setPage(page + 1), console.log(page)}}>show state</button>
                    <span id='ourworks'>Наши работы</span>
                </div>
                <div className="portfolio-content">
                    
                    <div className="container">
                    {/* {
                        data.projects.map((e,i) => {
                            console.log(e)
                            return <div className={i==0 ? "first" : i==1 ? "second" : i==2 ? "third" : i==3 ? "fourth" : i==4 ? "fifth" : ''}>
                            <div className="content-element">
                                <div className="element-wrap">
                                    <div className="element-info">
                                        <div className="element-name">
                                            <h2>{e.title}</h2>
                                        </div>
                                        <div className="element-type">
                                            <span>Сайт под ключ</span>
                                        </div>
                                        <div className="element-description">
                                            <p>Лендинговая страница с админ-панелью для просмотра заявок с подключенным телеграм-ботом</p>
                                        </div>
                                    </div>
                                    
                                    <div className="element-links">
                                        <div className="element-open">
                                            <a target='_blank' href="https://customgang.by">Открыть сайт</a>
                                        </div>
                                        <div className="element-show">
                                            <Link id='show-more' to="/portfolio">Узнать подробности</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        })
                    } */}
                    </div>
                </div>
                <div ref={showNext} className="showMore">
                    {loading? "Загрузка...": "Показать еще"}
                </div>
            </div>
            <Footer />
            <SideBar />
        </>
    )
}

export default PortfolioPage
