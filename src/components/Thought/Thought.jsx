import React from 'react'
import './Thought.scss'
import avatar from '../../assets/img/avatar.svg'
import Container from '../Container/Container';
function Thought() {

  return (
    <div>
               <section className='thought'> 
            <h2 className='text-center'>Что думают о нас</h2>
            <div id="carouselExampleIndicators4" className="carousel slide bestMainSlide"   data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" 
                    data-bs-target="#carouselExampleIndicators4" 
                    data-bs-slide-to="0" className="active" 
                    aria-current="true" 
                    aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                    <Container>
                        <div className="bestSlider thoughtSlider">
                            <div className="thoughCard">
                              <img src={avatar} alt="" />
                            <h4>Иван Иванов</h4>
                            <p>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                            <b>20.10.21</b>
                            </div>
                            <div className="thoughCard">
                            <img src={avatar} alt="" />
                            <h4>Иван Иванов</h4>
                            <p>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                            <b>20.10.21</b>
                           
                            </div>
                            <div className="thoughCard">
                            <img src={avatar} alt="" />
                            <h4>Иван Иванов</h4>
                            <p>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                            <b>20.10.21</b>
                            </div>
                        </div>
                    </Container>
                    </div>
                    <div className="carousel-item">
                    <Container>
                    <div className="bestSlider thoughtSlider">
                    <div className="thoughCard">
                        <img src={avatar} alt="" />
                        <h4>Иван Иванов</h4>
                        <p>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                        <b>20.10.21</b>
                    </div>
                    <div className="thoughCard">
                        <img src={avatar} alt="" />
                        <h4>Иван Иванов</h4>
                        <p>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>                            <b>20.10.21</b>
                    </div>
                    <div className="thoughCard">
                            <img src={avatar} alt="" />
                            <h4>Иван Иванов</h4>
                            <p>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                            <b>20.10.21</b>
                    </div>
                        </div>
                    </Container>
                    </div>
                    <div className="carousel-item">
                        <Container>
                    <div className="bestSlider thoughtSlider">
                    <div className="thoughCard">
                            <img src={avatar} alt="" />
                            <h4>Иван Иванов</h4>
                            <p>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                            <b>20.10.21</b>
                    </div>
                    <div className="thoughCard">
                            <img src={avatar} alt="" />
                            <h4>Иван Иванов</h4>
                            <p>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                            <b>20.10.21</b>
                    </div>
                    <div className="thoughCard">
                            <img src={avatar} alt="" />
                            <h4>Иван Иванов</h4>
                            <p>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                            <b>20.10.21</b>
                    </div>
                        </div>
                        </Container>
                    </div>
                
                </div>
            <button className="carousel-control-prev prev__btn2" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="prev">
                    <span className="left-icon" aria-hidden="true">
                    <i className="bi bi-chevron-left"></i>
                    </span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next next__btn2" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="next">
                <span className="right-icon" aria-hidden="true"><i className="bi bi-chevron-right "></i></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </section>
    </div>
  )
}

export default Thought