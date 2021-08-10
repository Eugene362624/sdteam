import React from 'react'
import './Projects.scss'

function Projects() {
    return (
        <div className="projects">
            <div className="projects-label">
                <span>Последние проекты</span>
            </div>
            <div className="project num-1">
                <div className="project-image">
                    <picture><img src="./customgang.png" alt="Первый проект" /></picture>
                </div>
                <div className="project-description">
                    <div className="project-info">
                        <span className="project-type">
                            Разработка, Дизайн
                        </span>
                        <p className="project-title">
                            Custom Gang
                        </p>
                        <p className="project-briefly">
                            Лендинг с формой заявок и админ-панелью
                        </p>
                    </div>
                    <button className="show-more">Узнать больше</button>
                </div>
            </div>
            <div className="project num-2">
                <div className="project-description">   
                    <div className="project-info">
                        <span className="project-type">
                            Разработка, Дизайн
                        </span>
                        <p className="project-title">
                            Custom Gang
                        </p>
                        <p className="project-briefly">
                            Лендинг с формой заявок и админ-панелью
                        </p>
                    </div>
                    <button className="show-more">Узнать больше</button>
                </div>
                <div className="project-image">
                <picture><img src="./customgang.png" alt="Второй проект" /></picture>
                </div>
            </div>
            <div className="project num-3">
                <div className="project-image">
                <picture><img src="./customgang.png" alt="Третий проект" /></picture>
                </div>
                <div className="project-description">
                    <div className="project-info">
                        <span className="project-type">
                            Разработка, Дизайн
                        </span>
                        <p className="project-title">
                            Custom Gang
                        </p>
                        <p className="project-briefly">
                            Лендинг с формой заявок и админ-панелью
                        </p>
                    </div>
                    <button className="show-more">Узнать больше</button>
                </div>
            </div>
        </div>
    )
}

export default Projects
