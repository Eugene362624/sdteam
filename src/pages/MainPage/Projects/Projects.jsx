import React, { useEffect, useRef, useState } from 'react'
import './Projects.scss'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Projects() {
    const [isShowed, setShowed] = useState(true)
    const [projects, setProjects] = useState([])
    const lastProject = useRef(null)
    const observer = useRef(null)
    console.log(lastProject.current)
    useEffect(() => {
        axios.get('/api/projects')
        .then((res) => setProjects(res.data))
        .catch((err) => console.log(err.res))
    }, [])

    useEffect(() => {
        let options = {
            root: document.querySelector('#scrollArea'),
            rootMargin: '0px',
            threshold: 1.0
        }
        let callback = function(entries, observer) {
            if (entries[0].isIntersecting) {
            console.log(entries)
            }
        }
        observer.current = new IntersectionObserver(callback, options)
        console.log(lastProject)
        observer.current.observe(lastProject.current)
    }, [])
    
    

    console.log(projects)
    return (
        <div className="projects">
            <div ref={lastProject} className="projects-label">
                <span onClick={() => setShowed(!isShowed)}>Последние проекты</span>
            </div>
            <TransitionGroup>
                {
                projects.map((e, i) => {
                    return <div  key={i} className={`project num-${i+1}`}>
                        
                    <div className="project-image">
                        <picture><img src={e.image} alt={e.title} /></picture>
                    </div>
                    <div className="project-description">
                        <div className="project-info">
                            <span className="project-type">
                                {e.type}
                            </span>
                            <p className="project-title">
                                {e.title}
                            </p>
                            <p className="project-briefly">
                                {e.briefly}
                            </p>
                        </div>
                        <Link to={e.url}><button className="show-more">Узнать больше</button></Link>
                    </div>
                </div>
                })}
            </TransitionGroup>
        </div>
    )
}

export default Projects
