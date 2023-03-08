import React from 'react' 
import './Header.scss'
import { Link } from 'react-router-dom'
import flag from "../../Assets/img/header/flag.svg"


function HeaderHead() {
    return (
        <div className='headerHead'>
            <div className="container">
                <div className="head">
                    <div className="head__left">
                        <Link to={"/"} className='link'>
                            Mahsulotlar katalogi
                        </Link>
                        <Link to={"/"} className='link'>
                            Foto-lavhalar
                        </Link>
                        <Link to={"/"} className='link'>
                            Yetkazib berish va to'lash
                        </Link>
                        <Link to={"/"} className='link'>
                            Aksiya
                        </Link>
                        <Link to={"/"} className='link'>
                            Yangi
                        </Link>
                    </div>
                    <div className="head__right">
                        <div className='left'>
                            <img src={flag} alt="flag" />
                        </div>
                        <div className='left'>
                            <p>Toshkent shahar</p>
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <Link to={"/login"} className='left'>
                            <p>Kirish</p>
                            <i class="fa-solid fa-user"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderHead
