import React from 'react'
import { useForm } from "react-hook-form";
import './Register.scss'
import { NavLink } from 'react-router-dom';

function Register() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className='section-register'>
            <div className="register-top">
                <NavLink to={"/login"} className='link'>
                    Login
                </NavLink>
                <NavLink to={"/register"} className='link'>
                    Register
                </NavLink>
            </div>
            <div className='form'>
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
                    <p className='text'>
                        “Ro’yxatdan o’tish” tugmasini bosgan holda, Siz 
                        <span>Foydalanish shartlarini qabul qilgan xisoblanasiz.</span>
                    </p>
                    <input type="submit" className='btn btn2'  value={"Ro’yxatdan o’tish"} />
                </form>
            </div>
        </div>
    )
}

export default Register