import React from 'react'
import './Consultation.scss'
import img from '../../../Assets/img/main/img.svg'

function Consultation() {
    return (
        <div className='consultation-section'>
            <div className="container">
                <div className="consultation">
                    <div className="consultation__top">
                        <h1>Bepul shifokor maslahat kerakmi?</h1>
                        <p>
                            24/7 video maslahat. Shaxsiy maslahat + Audio qo'ng'iroq
                            Faqat <span>mobil ilovada</span>
                        </p>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className="abs">
                        <div title='phone' className='phone'>
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div title='sms' className='sms'>
                            <i class="fa-solid fa-comment"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Consultation
