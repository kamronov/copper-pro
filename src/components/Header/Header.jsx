import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import './Header.scss'
import logo from '../../assets/img/header-logo.png'

function Header() {
  return (
    <div>
       <header className='header'>
        <Container>
            <nav className='d-flex justify-content-between'>
                <ul className='header__list'>
                    <li><Link to='/'><img src={logo} alt="" /></Link></li>
                    <li><Link to='/catalog'>Каталог</Link></li>
                    <li><Link to='/'>Новости</Link></li>
                    <li><Link to='/'>Доставка</Link></li>
                    <li><Link to='/'>О нас</Link></li>
                    <li><Link to='/'>Контакты</Link></li>
                </ul>
                <ul className="header__icons">
                <li className=''><Link ><i className="bi bi-heart"></i></Link></li>
                <li className=''><Link to='/login'><i className="bi bi-person"></i></Link></li>
                <li className=''><Link ><i className="bi bi-cart3"></i></Link></li>
                </ul>
            </nav>
        </Container>
      </header>     
    </div>
  )
}

export default Header