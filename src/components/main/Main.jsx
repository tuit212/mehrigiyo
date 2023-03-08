import React from 'react'
import Brand from './Brand/Brand'
import Cart from './Cart/Cart'
import Consultation from './Consultation/Consultation'
import Hero from './Hero/Hero'
import Questions from './Questions/Questions'
import Request from './Request/Request'

function Main() {
    return (
        <div>
            <Hero/>
            <Consultation/>
            <Cart/>

            <Questions/>
            <Request/>
            <Brand/>
        </div>
    )
}

export default Main
