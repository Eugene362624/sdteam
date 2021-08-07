import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Stack.scss'

function Stack() {
    const stack = ['./react.svg', './nodejs.svg', './express.svg', './mongodb.svg', './handlebars.svg', './css.svg', './sass.svg', './html.svg']

    return (
        <div className="stack">
            <div className="stack-label">
                <span>Какие технологии мы используем для разработки?</span>
            </div>
            <div className="stack-content">
                {stack.map((e, i) => {
                    return <img key={i} src={e} alt={(e.split('/')[1]).split('.')[0]} title={(e.split('/')[1]).split('.')[0]}/>
                })}
            </div>
        </div>
    )
}

export default Stack
