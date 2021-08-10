import { Button } from '@material-ui/core'
import React from 'react'
import "./Intro.scss"

function Intro() {

    return (
        <div className="intro">
            <div className="intro-left">
                <div className="left-content">
                    <span id='promo'>Предоставляем Вашему бизнесу возможность продолжать развиваться</span>
                    <p>Проектирование, дизайн, разработка - всё ляжет на наши плечи, чтобы вы могли спокойно заниматься ведением своего бизнеса</p>
                    <button id="read-more">Узнать подробнее</button>
                </div>
            </div>
            <div className="intro-right">
        <img src="./Saly-1.png" alt="Девочка на ракете" />
            </div>
        </div>
    )
}

export default Intro
