import React from 'react'
import './FooterBootom.scss'
import { Link } from 'react-router-dom'

function FooterBootom() {
    return (
        <ul className='footer__list container'>
            <li>
                <p>© 1996-2021. Mehrigiyo. Barcha huquqlar himoyalangan. </p>
                <p>
                    Saytdan olingan barcha maʼlumotlar chop etilganda veb-saytga havola qilish majburiy.
                </p>
            </li>
            <li>
                <Link to={"/"} className='link'>Bosh sahifa</Link>
                <Link to={"/Biz haqimizda"} className='link'>Biz haqimizda</Link>
                <Link to={"/Yangiliklar"} className='link'>Yangiliklar</Link>
            </li>
        </ul>
    )
}

export default FooterBootom
