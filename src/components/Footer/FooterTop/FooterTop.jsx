import React from 'react'
import './FooterTop.scss'
import { Link } from 'react-router-dom'
import google from '../../../Assets/img/footer/google.svg'
import app from '../../../Assets/img/footer/apple.svg'

function FooterTop() {
    return (
        <div className='FooterTop-section'>
            <div className="container">
                <Link to={"/"} className='logo'>Logo</Link>
                <ul className='list'>
                    <li>
                        <p className='textTop'>
                            Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar
                        </p>
                        <p className='text'>
                            Ish vaqti: Har kuni 8:00 dan 18:00 gacha
                        </p>
                        <ul>
                            <Link className='url' title='facebook'>
                                <i class="fa-brands fa-facebook"></i>
                            </Link>
                            <Link className='url' title='instagram'>
                                <i class="fa-brands fa-instagram"></i>
                            </Link>
                            <Link className='url' title='telegram'>
                                <i class="fa-solid fa-paper-plane"></i>
                            </Link>
                            <Link className='url' title='you tube'>
                                <i class="fa-brands fa-youtube"></i>
                            </Link>
                        </ul>
                    </li>
                    <li>
                        <p className='center'>Huquqiy</p>
                    </li>
                    <li>
                        <p className='right'>Ilovani yuklab olish</p>
                        <Link to={"https://www.google.com.ar/"}>
                            <img src={google} alt="" />
                        </Link>
                        <Link to={"https://www.app.com/"} className='link'>
                            <img src={app} alt="" />
                        </Link>
                    </li>
                </ul>
                <div className="footer-card">
                    <ul>
                        <li>
                            <p className='top'>E-mail</p>
                            <p className='bottom'>info@mehrigiyo.uz</p>
                        </li>
                        <li>
                            <p className='top'>Bizga qo'ng'iroq qiling</p>
                            <p className='bottom'>+99898 125 31 03</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterTop
