import React from 'react'
import './Hero.scss'
import { Link , NavLink} from 'react-router-dom'
import heart from '../../../Assets/img/main/heatr.svg'

function Hero({size}) {
    return (
        <div className='section-hero'>
            <div className="container">
                <div className="hero">
                    <div className="hero__logo">
                        <Link to={"/"} className='logo'>
                            LOGO
                        </Link>
                        <div className='hero__pages'>
                            <NavLink className='pages' to={"/"}>
                                Bosh sahifa
                            </NavLink>
                            <NavLink className='pages' to={"mahsulotlar"}>
                                Mahsulotlar
                            </NavLink>
                        </div>
                    </div>
                    <div className="hero__box">
                        <NavLink to={"/likes"} className="links">
                            <img src={heart} alt="heaert" />
                        </NavLink>
                        <NavLink to={"/card"} className='links'>
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span>{"0"}</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
