import React from 'react'
import './Hero.scss'
import Container from '../Container/Container'
import slider1 from '../../assets/img/slider-bg.jpg'
function Hero() {
    return (
        <section className='hero'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slider1} className="d-block w-100" alt="..." />
                      <Container>
                      <div className="d-none d-md-block slider__title">
                            <h2>Хит продаж</h2>
                            <p>Дистиллятор для эфирных масел </p>
                            <div className="costs">
                                <span>Цена</span>
                                <b>4 906 грн</b>
                            </div>
                            <button className='slider__btn'>Купить</button>
                        </div>
                      </Container>
                    </div>
                    <div className="carousel-item">
                        <img src={slider1} className="d-block w-100" alt="..." />
                        <Container>
                      <div className="d-none d-md-block slider__title">
                            <h2>Хит продаж</h2>
                            <p>Дистиллятор для эфирных масел </p>
                            <div className="costs">
                                <span>Цена</span>
                                <b>4 906 грн</b>
                            </div>
                            <button className='slider__btn'>Купить</button>
                        </div>
                      </Container>
                    </div>
                    <div className="carousel-item">
                        <img src={slider1} className="d-block w-100" alt="..." />
                        <Container>
                      <div className="d-none d-md-block slider__title">
                            <h2>Хит продаж</h2>
                            <p>Дистиллятор для эфирных масел </p>
                            <div className="costs">
                                <span>Цена</span>
                                <b>4 906 грн</b>
                            </div>
                            <button className='slider__btn'>Купить</button>
                        </div>
                      </Container>
                    </div>
                </div>
                <button className="carousel-control-prev prev__btn" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next next__btn" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

                <Container>
 
                <div className="parents_indi">
                <div id='carusel_indicator' className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                </div>
                </Container>
            </div>
        </section>
    )
}

export default Hero