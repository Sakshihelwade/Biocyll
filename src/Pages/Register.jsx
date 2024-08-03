import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../Assets/Images/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Css/style.css";
import { base_url } from "../Config/Index";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [values, setValues] = useState({
        username: "",
        email: "",
        mobileNo: "",
        password: "",
        confirmPassword: "",
    });


    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleValidation = () => {
        const { password, confirmPassword, username, email } = values;
        if (password !== confirmPassword) {
            toast.error("Password and confirm password should be the same.", toastOptions);
            return false;
        } else if (username.length < 3) {
            toast.error("Username should be greater than 3 characters.", toastOptions);
            return false;
        } else if (password.length < 8) {
            toast.error("Password should be equal or greater than 8 characters.", toastOptions);
            return false;
        } else if (email === "") {
            toast.error("Email is required.", toastOptions);
            return false;
        }

        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {

            try {
                // reg app call
                const response = await axios.post(`${base_url}/api/signup`, values);
                //   console.log(response)
                if (response.data.status == true) {
                    alert(response.data.message)
                    navigate("/login")
                }


            } catch (error) {
                toast.error(error.response.data.message, toastOptions)
            }
        }
    };

    return (
        <div className="con">
            <div className="form-container">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="brand">
                        <img src={Logo} alt="logo" />
                        <h1>Biocyll</h1>
                    </div>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => handleChange(e)}
                    />

                    <input
                        type="number"
                        placeholder="Mobile number"
                        name="mobileNo"
                        onChange={(e) => handleChange(e)}
                    />


                    {/* <input
                        type={showPassword ? 'text' : 'password'}
                        // type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => handleChange(e)}
                    />
                    <span className="password-toggle" onClick={togglePasswordVisibility}>
                        {showPassword ? '👁️' : '👁️'}
                    </span> */}

                    <div className="password-input-container">
                        <div className="input-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                // value={password}
                                onChange={(e) => handleChange(e)}
                                placeholder="Password"
                                name="password"
                            />
                            <span className="password-toggle"  onClick={togglePasswordVisibility}>
                                {showPassword ? <i class="fa-solid fa-eye text-dark"></i> : <i class="fa-solid fa-eye-slash text-dark"></i>}
                            </span>
                        </div>
                    </div>

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={(e) => handleChange(e)}
                    />
                    <button className="login_btn" type="submit">Create User</button>
                    <span>
                        Already have an account ? <Link to="/login">Login.</Link>
                    </span>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
