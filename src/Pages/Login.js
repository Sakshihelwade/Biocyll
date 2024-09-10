import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../Assets/Images/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Css/style.css";
import { base_url } from "../Config/Index";
import { UserContext } from "../Context/CreateContext";

export default function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({ email: "", password: "" });
    const [showPassword,setShowPassword]=useState(false);
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    const { user, token, login, logout } = useContext(UserContext);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    //   useEffect(() => {
    //     if (localStorage.getItem("userData")) {
    //       navigate("/");
    //     }
    //   }, []);

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const validateForm = () => {
        const { email, password } = values;
        if (email === "" || password === "") {
            toast.error("email and Password are required.", toastOptions);
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post(`${base_url}/api/login`, values);
                var Id = response.data.user._id
                // console.log(response)
                toast.success("Logged in Successfully")
                if (response.data.status == true) {
                    // alert(response.data.message)
                    // toast.error(response.data.message, toastOptions);
                    // localStorage.setItem("values", JSON.stringify(response.data.user))
                    // localStorage.setItem("token", response.data.token)
                    login(response.data.user, response.data.token)
                    navigate(`/`)
                }

            }
            catch (error) {
                console.log(error)
                toast.error(error.response.data.message, toastOptions)
            }

        }
    }

    return (
        <div className="con">
            <div className="form-container">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="brand">
                        <img src={Logo} alt="logo" />
                        <h1>Biocyll</h1>
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => handleChange(e)}
                        minLength="3"
                    />
                    {/* <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => handleChange(e)}
                    /> */}
                    <div className="password-input-container">
                        <div className="input-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                // value={password}
                                onChange={(e) => handleChange(e)}
                                placeholder="Password"
                                name="password"
                            />
                            <span className="password-toggle" onClick={togglePasswordVisibility}>
                                {showPassword ? <i class="fa-solid fa-eye text-dark"></i> : <i class="fa-solid fa-eye-slash text-dark"></i>}
                            </span>
                        </div>
                    </div>
                    <button className="login_btn" type="submit">Log In</button>
                    <div >
                        <text className="text-dark text-lwr mr-5">Don't have an account? </text><Link to="/register" className="ml-4">register now</Link>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}
