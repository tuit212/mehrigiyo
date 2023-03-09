import React from 'react'
import './Cart.scss'
import { NavLink } from 'react-router-dom'
import card from '../../Assets/img/card/card.svg'
import Hero from '../../components/main/Hero/Hero'

function Cart() {
    return (
        <div className='cards-section'>
            <Hero/>
            <div className="section-card">
                <div className="container">
                    <div className="card_pages">
                        <NavLink to={"/"} className='link'>Bosh sahifa</NavLink>
                        <span>/</span>
                        <NavLink to={"/card"} className='link '>Savatcha</NavLink>
                        <h3>Savatcha</h3>
                        <img src={card} className='card' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
