import React, { useState } from 'react'
import './NewProducts.scss'
import product1 from '../../assets/img/product1.png'
import product2 from '../../assets/img/product2.png'
import product3 from '../../assets/img/product3.jpg'
import Container from '../Container/Container';
function NewProducts() {
    const  [heart, setheart] = useState(1);
    const fillHeart = (e)=>{
        switch (heart) {
            case 1:
                e.target.className = 'bi bi-heart-fill'
                setheart(0)
                break;
            case 0: e.target.className = 'bi bi-heart'
                    setheart(1)
                    break;
            default:  console.log(e.target.id);
                break;
        }
       }
  return (
    <div>
        <section className='newPrd'> 
            <h2 className='text-center'>новинки</h2>
            <div id="carouselExampleIndicators1" 
            className="carousel slide bestMainSlide" 
            data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" 
                    data-bs-target="#carouselExampleIndicators1" 
                    data-bs-slide-to="0" className="active" 
                    aria-current="true" 
                    aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                    <Container>
                        <div className="bestSlider">
                            <div className="bestCard">
                                <div className="bestImg">
                                <img src={product1} alt="" />
                               <span><i id='1' className="bi bi-heart" onClick={fillHeart}></i></span> 
                                </div>
                                <div className="bestCardDiscription">
                                    <p>Медный чайник с фарфоровой ручкой</p>
                                    <span>1 953 грн</span>
                                </div>
                            </div>
                            <div className="bestCard">
                                <div className="bestImg">
                                <img src={product2} alt="" />
                                <span><i id='2' className= "bi bi-heart" onClick={fillHeart}></i></span>
                                </div>
                                <div className="bestCardDiscription">
                                    <p>Медный чайник с фарфоровой ручкой</p>
                                    <span>1 953 грн</span>
                                </div>
                            </div>
                            <div className="bestCard">
                                <div className="bestImg">
                                <img src={product3} alt="" />
                        <span>       <i className="bi bi-heart" onClick={fillHeart}></i></span> 
                                </div>
                                <div className="bestCardDiscription">
                                    <p>Медный чайник с фарфоровой ручкой</p>
                                    <span>1 953 грн</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                    </div>
                    <div className="carousel-item">
                    <Container>
                    <div className="bestSlider">
                    <div className="bestCard">
                                <div className="bestImg">
                                <img src={product1} alt="" />
                        <span>       <i className="bi bi-heart" onClick={fillHeart}></i></span> 
                                </div>
                                <div className="bestCardDiscription">
                                    <p>Медный чайник с фарфоровой ручкой</p>
                                    <span>1 953 грн</span>
                                </div>
                            </div>
                            <div className="bestCard">
                                <div className="bestImg">
                                <img src={product2} alt="" />
                        <span>       <i className="bi bi-heart" onClick={fillHeart}></i></span> 
                                </div>
                                <div className="bestCardDiscription">
                                    <p>Медный чайник с фарфоровой ручкой</p>
                                    <span>1 953 грн</span>
                                </div>
                            </div>  
                            <div className="bestCard">
                                <div className="bestImg">
                                <img src={product3} alt="" />
                        <span>       <i className="bi bi-heart" onClick={fillHeart}></i></span> 
                                </div>
                                <div className="bestCardDiscription">
                                    <p>Медный чайник с фарфоровой ручкой</p>
                                    <span>1 953 грн</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                    </div>
                    <div className="carousel-item">
                        <Container>
                    <div className="bestSlider">
                    <div className="bestCard">
                                <div className="bestImg">
                                <img src={product1} alt="" />
                        <span>       <i className="bi bi-heart" onClick={fillHeart}></i></span> 
                                </div>
                                <div className="bestCardDiscription">
                                    <p>Медный чайник с фарфоровой ручкой</p>
                                    <span>1 953 грн</span>
                                </div>
                            </div>
                            <div className="bestCard">
                                <div className="bestImg">
                                <img src={product2} alt="" />
                        <span>       <i className="bi bi-heart" onClick={fillHeart}></i></span> 
                                </div>
                                <div className="bestCardDiscription">
                                    <p>Медный чайник с фарфоровой ручкой</p>
                                    <span>1 953 грн</span>
                                </div>
                            </div>
                            <div className="bestCard">
                                <div className="bestImg">
                                <img src={product3} alt="" />
                        <span>       <i className="bi bi-heart" onClick={fillHeart}></i></span> 
                                </div>
                                <div className="bestCardDiscription">
                                    <p>Медный чайник с фарфоровой ручкой</p>
                                    <span>1 953 грн</span>
                                </div>
                            </div>
                        </div>
                        </Container>
                    </div>
                
                </div>
            <button className="carousel-control-prev prev__btn2" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
                <span className="left-icon"   aria-hidden="true"><i className="bi bi-chevron-left"></i></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next next__btn2" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
                <span className="right-icon" aria-hidden="true"><i className="bi bi-chevron-right "></i></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            <button className='bestSellersBtn'>Перейти в каталог</button>
        </section>
    </div>
  )
}

export default NewProducts