import React from 'react'
import { NavLink } from 'react-router-dom'
import './login.css'

function Login() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto mt-5" id="container_login">
                        <form>
                            <div className="mb-3">
                                <h1 className="text-center">Log In</h1>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Email or Username" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="*************" />
                            </div>
                            <div className="">
                                <label> <NavLink to="/forget">Forgot Password</NavLink></label>
                            </div>
                            <div className="">
                                <label> Don't have a account <NavLink to="/signup">Create Account</NavLink></label>
                            </div>
                            <NavLink to="/profile" className="btn btn-primary">Login</NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
