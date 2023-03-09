import React from 'react'
import likeB from '../Assets/img/like b.svg'
import { Link } from 'react-router-dom'
import './Card.scss'


function Card({item , handleClick}) {

    const {name , text , cost , price , img} = item
    return (
        <div className='cards'>
            <div className="image__box">
                <img src={img} alt=""  className='img' />
                <img src={likeB} alt="" className='like' />
            </div>
            <div className="context__box">
                <div className="left">
                    <h4 className='name'>{name}</h4>
                    <p className='text'>{text}</p>
                    <p className='cost'>{cost}</p>
                    <p className='price'>{price}</p>
                </div>
                <div className="right">
                    <button onClick={() => handleClick(item.name)}>+</button>
                </div>
            </div>
            <Link to={"/"} className='link'>
                Tafsilotlar <i class="fa-solid fa-chevron-right"></i>
            </Link>
        </div>
    )
}

export default Card
