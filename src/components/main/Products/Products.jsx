import React from 'react'
import Card from '../../../common/Card'
import list from '../../../Data/Data'
import './Products.scss'

function Products({handleClick}) {
    return (
        <section className='products'>
            <h3>Mahsulotlarimiz ro'yxati</h3>
            <div className="products__box">
                {
                    list.map((item) => (
                        <Card item={item} key={item.id} handleClick={handleClick} />
                    ))
                }
            </div>
        </section>
    )
}

export default Products
