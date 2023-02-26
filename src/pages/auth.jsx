import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import { USER_PATH } from '../config/path'
import { useAsync } from '../hooks/useAsync'
import { useAuth } from '../hooks/useAuth'
import authService from '../services/authService'
import { loginAction, registerAction } from '../store/authReducer'

function Auth() {
    const dispatch = useDispatch()
    const [form,setForm] = useState({})
    const [formRegester,setFormRegester] = useState({})
    const [errorMessage,setErrorMessage] = useState()
    const [loading,setLoading] = useState(false)

    const [erroRegisterrMessage,setErrorRegisterMessage] = useState()
    const [loadingRegister,setLoadingRegister] = useState(false)
    const { user } = useAuth()
    console.log(user)
    
    const onSubmit = async (ev) => {
        ev.preventDefault();
        setLoading(true)
        setErrorMessage('')
        dispatch(loginAction({
            form:form,
            success: () => {
                setLoading(false)
            },
            error: (err) => {
                setLoading(false)
                setErrorMessage(err.message)
            }
        }))
        
    }
    // const {excute,loading,error} = useAsync(() => authService.register)
    const onRegester = async (ev) => {
        ev.preventDefault();
        if(formRegester.name !== "" && formRegester.username !== "" && formRegester.password !== "") {
            // const result = await authService.login(form)
            setLoadingRegister(true)
            setErrorRegisterMessage('')
            dispatch(registerAction({
                form:formRegester,
                success: () => {
                    setLoadingRegister(false)
                },
                error: (err) => {
                    setLoadingRegister(false)
                    setErrorRegisterMessage(err.message || err.error)
                }
            }))
        } else{
            alert('bạn chưa nhập username và password')
        }
    }
    if(user) {
        return <Navigate to={USER_PATH} />
    }
    return (
        <section className="py-12">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        {/* Card */}
                        <div className="card card-lg mb-10 mb-md-0">
                            <div className="card-body">
                                {/* Heading */}
                                <h6 className="mb-7">Returning Customer</h6>
                                {/* Form */}
                                <form onSubmit={onSubmit}>
                                    <div className="row">
                                        <div className="col-12">
                                            {/* Email */}
                                            <Input onChange={ev => form.username = ev.target.value} placeholder={'Email Address *'} type='email' ></Input>
                                        </div>
                                        <div className="col-12">
                                            {/* Password */}
                                            <Input onChange={ev => form.password = ev.target.value} placeholder={'Password *'} type='password' ></Input>
                                        </div>
                                        <div className="col-12 col-md">
                                            {/* Remember */}
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" id="loginRemember" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="loginRemember">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-auto">
                                            {/* Link */}
                                            <div className="form-group">
                                                <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">Forgot
                                                    Password?</a>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Button */}
                                            <Button disable={loading ? true : false}>
                                                Sign In
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Card */}
                        <div className="card card-lg">
                            <div className="card-body">
                                {/* Heading */}
                                <h6 className="mb-7">New Customer</h6>
                                <p style={{color: '#ff0000'}}>{erroRegisterrMessage}</p>
                                {/* Form */}
                                <form onSubmit={onRegester}>
                                    <div className="row">
                                        <div className="col-12">
                                            {/* fulName */}
                                            <Input onChange={ev => formRegester.name = ev.target.value} placeholder={'Full Name *'} type='text' ></Input>
                                        </div>
                                        <div className="col-12">
                                            {/* Email */}
                                            <Input onChange={ev => formRegester.username = ev.target.value} placeholder={'Email Address *'} type='email' ></Input>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Password */}
                                            <Input onChange={ev => formRegester.password = ev.target.value} placeholder={'Password *'} type='password' ></Input>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Password */}
                                            <Input onChange={ev => formRegester.confirmPassword = ev.target.value} placeholder={'Confirm Password *'} type='password' ></Input>
                                        </div>
                                        <div className="col-12 col-md-auto">
                                            {/* Link */}
                                            <div className="form-group font-size-sm text-muted">
                                                By registering your details, you agree with our Terms &amp; Conditions,
                                                and Privacy and Cookie Policy.
                                            </div>
                                        </div>
                                        <div className="col-12 col-md">
                                            {/* Newsletter */}
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" id="registerNewsletter" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="registerNewsletter">
                                                        Sign me up for the Newsletter!
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Button */}
                                            <Button disable={loadingRegister ? true : false}>
                                                Regester
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Auth