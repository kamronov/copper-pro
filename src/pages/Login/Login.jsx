import React from 'react'
import header_icon from '../../assets/img/header-logo.png'
import './Login.scss'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div className='login'>
            <header className='login__header'>
                <nav>
                    <ul className='p-0'>
                        <li className='text-center pt-4 pb-4'>
                            <Link to='/'><img src={header_icon} alt=""/></Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Login