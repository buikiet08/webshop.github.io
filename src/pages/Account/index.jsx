import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useAsync } from '../../hooks/useAsync'
import { useAuth } from '../../hooks/useAuth'
import userService from '../../services/userService'
import { getUserAction } from '../../store/userReducer'

function Account() {
    const {user} = useAuth()
    const dispatch = useDispatch()
    const [form,setForm] = useState(user)

    const {excute:excuteUser, loading,error} = useAsync(userService.updateUser)

    const onSubmit = async (ev) => {
        ev.preventDefault()
        try {
           await excuteUser(form)
           dispatch(getUserAction())
        } catch (error) {
            
        }
    }
    console.log(user)
    console.log(form)
    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Form */}
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-12">
                        {/* fulName */}
                        <Input onChange={ev => form.name = ev.target.value} defaultValue={form.name} placeholder={'Full Name *'} type='text' ></Input>
                    </div>
                    <div className="col-12">
                        {/* Email */}
                        <Input onChange={ev => form.username = ev.target.value} defaultValue={form.username} placeholder={'Email Address *'} type='email' ></Input>
                    </div>
                    <div className="col-12 col-md-6" disable={true}>
                        {/* Password */}
                        <Input disable={true} onChange={ev => form.password = ev.target.value} placeholder={'Curent Password *'} type='password' ></Input>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <Input onChange={ev => form.confirmPassword = ev.target.value} placeholder={'New Password *'} type='password' ></Input>
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* Birthday */}
                        <div className="form-group">
                            {/* Label */}
                            <label>Date of Birth</label>
                            {/* Inputs */}
                            <div className="form-row">
                                <div className="col-auto">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountDate">
                                        Date
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountDate">
                                        <option>10</option>
                                        <option>11</option>
                                        <option selected>12</option>
                                    </select>
                                </div>
                                <div className="col">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountMonth">
                                        Month
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountMonth">
                                        <option>January</option>
                                        <option selected>February</option>
                                        <option>March</option>
                                    </select>
                                </div>
                                <div className="col-auto">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountYear">
                                        Year
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountYear">
                                        <option>1990</option>
                                        <option selected>1991</option>
                                        <option>1992</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* Gender */}
                        <div className="form-group mb-8">
                            <label>Gender</label>
                            <div className="btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-sm btn-outline-border active">
                                    <input type="radio" name="gender" defaultChecked /> Male
                                </label>
                                <label className="btn btn-sm btn-outline-border">
                                    <input type="radio" name="gender" /> Female
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Button */}
                        <Button disable={loading ? true : false}>
                            Save Changes
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Account