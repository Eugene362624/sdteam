import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import "./About.scss"

function About() {

    const aboutImage = useRef(null)
    const observer = useRef()
    const [mouseIn, setMouseIn] = useState(false)
    useEffect(() => {
        let options = {
            threshold: .01
        }
        let callback = function(entries, observer) {
            if (entries[0].isIntersecting) {
                entries[0].target.style = "animation: fade-in-from-left 1s ease;"
                entries[0].target.src = '.././Saly-10.png'
            }
        };
        observer.current = new IntersectionObserver(callback, options);
        observer.current.observe(aboutImage.current)
    }, [])
    return (
        <div className="about">
            <div className="about-left">
                <img ref={aboutImage} src=".././logo.svg" style={{opacity: '0', transform: 'translateY(0)'}} alt="Мальчик за компьютером"></img>
            </div>
            <div className="about-right">
                <div className="right-content">
                    <span>Кто мы? Мы - команда!</span>
                    <p>Программист, дизайнер и маркетолог. Наша миссия - <strong>сделать имидж</strong> вашего бизнеса. Мы занимаемся разработкой сайтов для бизнесов под ключ, а так же выполняем заказы на программирование сайта, дизайн и SEO-продвижение.</p>
                    <br></br>
                    <h1>SDTeam</h1>
                </div>
                <Link to="/about" onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => setMouseIn(false)}>Узнать больше {mouseIn ? <ChevronRightIcon/> : <ChevronRightIcon/>}</Link>
            </div>
        </div>
    )
}

export default About
