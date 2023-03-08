import React from 'react'
import './Request.scss'
import { useForm } from "react-hook-form";
import img from '../../../Assets/img/Contact Animations.svg'

function Request() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='Request-section'>
            <div className="container">
                <div className="request">
                    <div className="request__im">
                        <img src={img} alt="" />
                    </div>
                    <div className="request__form">
                        <span>Biz bilan bog'lanish</span>
                        <p>So'rovingizni yuboring</p>
                        <div className="form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='input'>
                                    <label htmlFor="name">Name</label>
                                    <input id='name' type={"text"} {...register("name", { required: true, maxLength: 20 })} required />
                                </div>
                                <div className='input'>
                                    <label htmlFor="email">Email</label>
                                    <input id='email' type={"text"} {...register("email", { required: true, maxLength: 20 })} required />
                                </div>
                                <div className='input'>
                                    <label htmlFor="password">Parol</label>
                                    <input type={"password"} id='password' {...register("password")} required />
                                </div>
                                <input type="submit" className='btn btn2'  value=
                                {"Xabar yuborish "} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Request
