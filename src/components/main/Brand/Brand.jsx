import React from 'react'
import './Brand.scss'
import { Link } from 'react-router-dom'
import jayxun from '../../../Assets/img/Brand/jayhun.svg'
import ask from '../../../Assets/img/Brand/ask.svg'
import dori from '../../../Assets/img/Brand/dori.svg'
import grand from '../../../Assets/img/Brand/grand.svg'
import laxisam from '../../../Assets/img/Brand/laxisam.svg'
import nik from '../../../Assets/img/Brand/nik.svg'

function Brand() {
    return (
        <div className='Brand-section'>
            <div className="container">
                <div className="brand__list">
                    <Link to={"/"}>
                        <img src={grand} alt="" />
                    </Link>
                    <Link to={"/"}>
                        <img src={ask} alt="" />
                    </Link>
                    <Link to={"/"}>
                        <img src={dori} alt="" />
                    </Link>
                    <Link to={"/"}>
                        <img src={nik} alt="" />
                    </Link>
                    <Link to={"/"}>
                        <img src={laxisam} alt="" />
                    </Link>
                    <Link to={"/"}>
                        <img src={jayxun} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Brand
