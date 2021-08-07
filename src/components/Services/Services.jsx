import React from 'react'
import Slider from 'react-slick'
import './Services.scss'

function Services() {
    const options = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000
    }
    return (
        <div className='services'>
            <Slider {...options}>
                <div className="service">
                    <div className="service-left">
                        <h3>Разработка</h3>
                        <h4>От интерфейсной разработки до серверной бизнес-логики</h4>
                        <p>Вам нужно разработать сайт?</p>
                    </div>
                    <div className="service-right">
                        <img src="./Saly-13.png" alt="" />
                    </div>
                </div>
                <div className="service">
                    <div className="service-left">
                        <h3>Разработка</h3>
                        <h4>От интерфейсной разработки до серверной бизнес-логики</h4>
                        <p>Вам нужно разработать сайт?</p>
                    </div>
                    <div className="service-right">
                        <img src="./Saly-23.png" alt="" />
                    </div>
                </div>
                <div className="service">
                    <div className="service-left">
                        <h3>Разработка</h3>
                        <h4>От интерфейсной разработки до серверной бизнес-логики</h4>
                        <p>Вам нужно разработать сайт?</p>
                    </div>
                    <div className="service-right">
                        <img src="./Saly-12.png" alt="" />
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Services
