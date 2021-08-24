import React from 'react'
import { Link, NavLink, useHistory, useParams } from 'react-router-dom'
import AllIn from '../../components/AllIn/AllIn'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SignUp from '../registerPage/registerPage'
import DoneIcon from '@material-ui/icons/Done';
import './OrderPage.scss'
import { useRef } from 'react'
import { useEffect } from 'react'

function OrderPage() {
    let {service} = useParams()
    const history = useHistory()
    const offers = useRef(null)
    const offers2 = useRef(null)
    const offers3 = useRef(null)
    const offers4 = useRef(null)
    const observer = useRef()
    const benefits = useRef(null)
    const prices = useRef(null)
    const pricesImage = useRef(null)
    useEffect(() => {
        history.push('/offers/all-in')
        serviceWrap.current.style="height: 0px; padding: 0; margin: 0"
        let options = {
            root: document.querySelector('#scrollArea'),
            rootMargin: '0px',
            threshold: .7
        }
        let callback = function(entries, observer) {
            entries.forEach(entry => {
                if (entry.target.alt == 'Наши цены' && entry.isIntersecting) {
                    entry.target.src = '.././Saly-38.png'
                }
                return entry.isIntersecting && !entry.target.classList.contains('show') ? (entry.target.style = 'animation: fade-in 1s ease;', entry.target.classList.add('show')) : ''
            })
        };
        observer.current = new IntersectionObserver(callback, options);
        if (service == 'all-in') {
            observer.current.observe(offers.current)
        }
        observer.current.observe(benefits.current)
        observer.current.observe(prices.current)
        observer.current.observe(pricesImage.current)
    }, [service])

    const serviceWrap = useRef(null)

    const goToPage = (page) => {
        if (!service) {  
            serviceWrap.current.style="height: 100vh; transition: height 1s ease; padding: 0; margin: 0"
            setTimeout(() => history.push(page), 1000)
            return
        } 
        history.push(page)
    }
    return (
        <>
        <Header normal/>
        <div className='offers'>
            <div className="offers-wrap">
                {/* <div className="offers-links">
                    <Link activeClassName='active' to='#' onClick={() => goToPage('/offers/all-in')}>Сайт под ключ</Link>
                    <Link activeClassName='active' to='#' onClick={() => goToPage('/offers/design')}>Дизайн</Link>
                    <Link activeClassName='active' to='#' onClick={() => goToPage('/offers/seo')}>СЕО</Link>
                    <Link activeClassName='active' to='#' onClick={() => goToPage('/offers/dev')}>Разработка</Link>
                </div> */}
                <div ref={serviceWrap} className="service-wrap" style={{padding: '0', margin: '0', height: '0'}}></div>
                {
                    service == 'all-in' ? 
                    <div className="service-wrap">
                        <span id='service-label'>Цены на создание сайтов</span>
                        <div ref={offers} className="service-info">
                            <div className='service-item'>
                                <div>
                                <label>Мини-визитка</label>
                                <div className="service-pricing">
                                    <span id='cost'>FREE</span>
                                    <span id='monthly-support'>Абсолютно <strong>бесплатный</strong> вариант для любого желающего</span>
                                </div>

                                <div className="benefits">
                                    <ul>
                                        <li>Создание: мгновенно</li>
                                        <li>Выбор из готовых шаблонов</li>
                                        <li>Отличный инструмент для завлечения ваших клиентов в ваши соцсети</li>
                                        <li>URL-адрес на выбор из свободных</li>
                                    </ul>
                                </div>
                                </div>
                                <button>Начать</button>
                            </div>
                            <div className='service-item'>
                                <div>
                                <label>Визитка</label>
                                <div className="service-pricing">
                                    <span id='cost'>От 50р</span>
                                    <span id='monthly-support'>Поддержка сайта первые полгода <strong>бесплатно</strong>, затем 8р в месяц</span>
                                </div>

                                <div className="benefits">
                                    <ul>
                                        <li>Создание: 5 дней</li>
                                        <li>Дизайн готовый или по вашему желанию</li>
                                        <li>Ничего лишнего - только то, что нужно для визитки</li>
                                        <li>Идеальная веб-брошюра для краткого экскурса клиентов в ваше дело</li>
                                    </ul>
                                </div>
                                </div>
                                <button>Заказать</button>
                            </div>
                            <div className='service-item'>
                                <div>
                                <label>Лендинг</label>
                                <div className="service-pricing">
                                    <span id='cost'>От 150р</span>
                                    <span id='monthly-support'>Поддержка сайта первые полгода <strong>бесплатно</strong>, затем 8р в месяц</span>
                                </div>

                                <div className="benefits">
                                    <ul>
                                        <li>Создание: 5 дней</li>
                                        <li>Дизайн готовый или по вашему желанию</li>
                                        <li>Ничего лишнего - только то, что нужно для визитки</li>
                                        <li>Идеальная веб-брошюра для краткого экскурса клиентов в ваше дело</li>
                                    </ul>
                                </div>
                                </div>
                                <button>Заказать</button>
                            </div>
                            <div className='service-item'>
                                <div>
                                <label>Блог</label>
                                <div className="service-pricing">
                                    <span id='cost'>От 150р</span>
                                    <span id='monthly-support'>Поддержка сайта первые полгода <strong>бесплатно</strong>, затем 8р в месяц</span>
                                </div>

                                <div className="benefits">
                                    <ul>
                                        <li>Создание: 5 дней</li>
                                        <li>Дизайн готовый или по вашему желанию</li>
                                        <li>Ничего лишнего - только то, что нужно для визитки</li>
                                        <li>Идеальная веб-брошюра для краткого экскурса клиентов в ваше дело</li>
                                    </ul>
                                </div>
                                </div>
                                <button>Заказать</button>
                            </div>
                            <div className='service-item'>
                                <div>
                                <label>Бизнес</label>
                                <div className="service-pricing">
                                    <span id='cost'>От 250р</span>
                                    <span id='monthly-support'>Поддержка сайта первые полгода <strong>бесплатно</strong>, затем 8р в месяц</span>
                                </div>

                                <div className="benefits">
                                    <ul>
                                        <li>Создание: 5 дней</li>
                                        <li>Дизайн готовый или по вашему желанию</li>
                                        <li>Ничего лишнего - только то, что нужно для визитки</li>
                                        <li>Идеальная веб-брошюра для краткого экскурса клиентов в ваше дело</li>
                                    </ul>
                                </div>
                                </div>
                                <button>Заказать</button>
                            </div>
                            <div className='service-item'>

                            <div>
                                <label>Интернет-магазин</label>
                                <div className="service-pricing">
                                    <span id='cost'>От 450р</span>
                                    <span id='monthly-support'>Поддержка сайта первые полгода <strong>бесплатно</strong>, затем 8р в месяц</span>
                                </div>

                                <div className="benefits">
                                    <ul>
                                        <li>Создание: 5 дней</li>
                                        <li>Дизайн готовый или по вашему желанию</li>
                                        <li>Ничего лишнего - только то, что нужно для визитки</li>
                                        <li>Идеальная веб-брошюра для краткого экскурса клиентов в ваше дело</li>
                                    </ul>
                                </div>
                                </div>
                                <button>Заказать</button>
                            </div>
                        </div>
                    </div>
                    : service == 'design' ?
                    <div ref={offers2} className="service-wrap">
                        <span>Цены на создание дизайнов</span>
                    </div>
                    : service == 'seo' ?
                    <div ref={offers3} className="service-wrap">
                        <span>Цены на СЕО-продвижение</span>
                    </div>
                    : service == 'dev' ?
                    <div ref={offers4} className="service-wrap">
                        <span>Цены на программирование сайтов</span>
                    </div>
                    : ''
                }
                <section className="benefits-section">
                    <span>Почему следует выбрать нас?</span>
                    <div className="our-benefits">
                        <span>Мы <strong>не дарим</strong> Вам <strong>фиктивных</strong> подарков</span><br></br>
                        <span>К каждому проекту обязательно идёт:</span>
                        <div className="benefits-list" ref={benefits}>
                        <ul>
                            <li><DoneIcon/> Адаптивный дизайн</li>
                            <li><DoneIcon/> Трафик ограничивается только приобретаемым вами хостингом</li>
                            <li><DoneIcon/> 6 месяцев бесплатного обсуживания</li>
                        </ul>
                        <ul>
                            <li><DoneIcon/> Техническая поддержка 12/7</li>
                            <li><DoneIcon/> Бесплатные учебные материалы для самостоятельной поддержки сайта</li>
                            <li><DoneIcon/> Резервное копирование</li>
                        </ul>
                        </div>
                    </div>
                </section>
                <section className="prices-section">
                    <div className="our-prices" ref={prices}>
                        <div className="prices">
                        <span id='first'>Как мы расчитываем стоимость наших услуг</span>
                        <p>В случае с пакетом "Сайт под ключ" подразумевается полная разработка сайта с нуля или с нашим макетом. Этот пакет является самым удобным вне зависимости от типа сайта. Одновременно любой тип сайта этого пакета будет самым выгодным. Если же у Вас есть готовый дизайн, то Вам этот пакет не подойдет. Мы предложим Вам только разработку и СЕО-маркетинг. Мы имеем минимальные цены на рынке веб-разработки и не берём выше необходимого. Мы не занимаемся накруткой клиентов на деньги. Нам важна наша репутация и каждый положительный отзыв наших клиентов о нас вдохновляет нас на новые свершения.</p>
                        <p>Для любого желающего у нас есть услуга "Мини-визитка". Она абсолютно бесплатная. На одно лицо можно сделать только один подобный сайт.</p>
                        <h3>С уважением, Ваши SDTeam :) </h3>
                        </div>
                        <div className="prices-image">
                            <img ref={pricesImage} src=".././logo.svg" alt="Наши цены" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default OrderPage
