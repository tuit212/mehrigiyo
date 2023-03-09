import React from 'react'
import Card from '../../../common/Card'
import list from '../../../Data/Data'
import './Products.scss'

function Products() {
    return (
        <section className='products'>
            <h3>Mahsulotlarimiz ro'yxati</h3>
            <div className="products__box">
                {
                    list.map((item) => (
                        <Card item={item} />
                    ))
                }
            </div>
        </section>
    )
}

export default Products
