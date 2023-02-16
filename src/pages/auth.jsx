import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import authService from '../services/authService'

function Auth() {
    const [form,setForm] = useState({})

    
    const onSubmit = async (ev) => {
        ev.preventDefault();

        if(form.username !== "" && form.password !== "") {
            const result = await authService.login(form)
            if (result) {
                alert('đăng nhập thành công')
            }
        }
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
                                            <Button>
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
                                {/* Form */}
                                <form>
                                    <div className="row">
                                        <div className="col-12">
                                            {/* Email */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="registerFirstName">
                                                    First Name *
                                                </label>
                                                <input className="form-control form-control-sm" id="registerFirstName" type="text" placeholder="First Name *" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Email */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="registerLastName">
                                                    Last Name *
                                                </label>
                                                <input className="form-control form-control-sm" id="registerLastName" type="text" placeholder="Last Name *" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Email */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="registerEmail">
                                                    Email Address *
                                                </label>
                                                <input className="form-control form-control-sm" id="registerEmail" type="email" placeholder="Email Address *" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Password */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="registerPassword">
                                                    Password *
                                                </label>
                                                <input className="form-control form-control-sm" id="registerPassword" type="password" placeholder="Password *" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Password */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="registerPasswordConfirm">
                                                    Confirm Password *
                                                </label>
                                                <input className="form-control form-control-sm" id="registerPasswordConfirm" type="password" placeholder="Confrm Password *" required />
                                            </div>
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
                                            <button className="btn btn-sm btn-dark" type="submit">
                                                Register
                                            </button>
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