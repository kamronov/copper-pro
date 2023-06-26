import React from 'react'
import './OurProduct.scss'
import item1 from '../../assets/img/product1.png'
import item2 from '../../assets/img/product2.png'
import item3 from '../../assets/img/product3.jpg'
import item4 from '../../assets/img/product4.png'
import item5 from '../../assets/img/product5.png'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
function OurProduct() {
  return (
    <div>
        <section className='ourProduct'>
            <h2 className='ourProduct__title'>Наша продукция</h2>
            <Container>
            <ul className="ourProduct__list">
                <li className='ourProduct__item'>
                    <Link>
                    <img src={item1} alt="img" />
                    <p>Для эфирных масел</p>
                    <div className="card__effect"></div>
                    </Link>
                    
                </li>
                <li className='ourProduct__item'>
                    <Link>
                    <img src={item2} alt="img" />
                    <p>Для гидролатов</p>
                    <div className="card__effect"></div>

                    </Link>
                </li>
                <li className='ourProduct__item'>
                    <Link>
                    <img src={item3} alt="img" />
                    <p>Медная посуда</p>
                    <div className="card__effect"></div>
                    </Link>
                </li>
                <li className='ourProduct__item'>
                    <Link>
                    <img src={item4} alt="img" />
                    <p>Аксессуары из меди</p>
                    <div className="card__effect"></div>
                    </Link>
                </li>
                <li className='ourProduct__item'>
                    <Link>
                    <img src={item5} alt="img" />
                    <p>Индивидуальный заказ</p>
                    <div className="card__effect"></div>
                    </Link>
                </li>
                <li className='ourProduct__item'>
                    <Link>
                    <img src={item1} alt="img" />
                    <p>Скидки и предложения</p>
                    <div className="card__effect"></div>
                    </Link>
                </li>
            </ul>
            </Container>
        </section>

    </div>
  )
}

export default OurProduct