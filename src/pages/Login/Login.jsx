import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Register/Register.scss'
import { useForm } from "react-hook-form";

function Login() {


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
                        <label htmlFor="phone">Telefon raqam</label>
                        <input id='phone' type={"tel"} {...register("phone", { required: true, maxLength: 20 })}  required/>
                    </div>
                    <div className='input'>
                        <label htmlFor="password">Parol</label>
                        <input type={"password"} id='password' {...register("password")} required />
                    </div>
                    <input type="submit" className='btn' value={"Tizimga kirish"} />
                </form>
            </div>
        </div>
    )
}

export default Login
