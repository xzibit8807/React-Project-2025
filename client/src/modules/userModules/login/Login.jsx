import "./login.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../../api/authApi";
import { UserContext } from "../../../hooks/context";
import { toast } from 'react-toastify';

export default function LoginModule() {

    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);
    const { login } = useLogin();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validateField = (name, value) => {
        let message = "";
        if (name === "email") {
            if (!value) message = "Email is required";
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = "Invalid email";
        }
        if (name === "password") {
            if (!value) message = "Password is required";
            else if (value.length < 6) message = "Password must be at least 6 characters";
        }
        setErrors(prev => ({ ...prev, [name]: message }));
    };

    const validateForm = (email, password) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) errors.email = "Email is required.";
        else if (!emailRegex.test(email)) errors.email = "Invalid email address.";

        if (!password) errors.password = "Password is required.";

        return errors;
    };

    const loginHandler = async (event) => {
        event.preventDefault();

        validateField("email", email);
        validateField("password", password);

        const errors = validateForm(email, password);
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        try {
            console.log("Attempting login with:", { email, password });  // Debug log

            const authData = await login(email, password);

            console.log("Login response:", authData);  // Debug response

            if (!authData.accessToken) {
                throw new Error("No access token received");
            }

            userLoginHandler(authData);

            toast.success('Successful Login');
            navigate('/');
        } catch (err) {
            toast.error(err.message || 'Login failed');
        }
    };

    return (
        <form id="login" onSubmit={loginHandler} noValidate>
            <div className="container mt-5 py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-18 col-lg-8 col-xl-7">
                        <div className="card bg-primary text-white">
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-5 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <div className="form-outline form-white mb-5 password-container">
                                        <label className="form-label" htmlFor="email">Email:</label>
                                        {errors.email && <small className="error-text">{errors.email}</small>}
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={email}
                                            className="form-control form-control-lg"
                                            placeholder="name@domain.com"
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                validateField("email", e.target.value);
                                            }}
                                        />
                                        {formErrors.email && <div className="error-text">{formErrors.email}</div>}
                                    </div>

                                    <div className="form-outline form-white mb-4 password-container">
                                        <label className="form-label" htmlFor="password">Password:</label>
                                        {errors.password && <small className="error-text">{errors.password}</small>}

                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            name="password"
                                            className="form-control form-control-lg"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                validateField("password", e.target.value);
                                            }}
                                        />
                                        <span
                                            className="toggle-password"
                                            onClick={() => setShowPassword(!showPassword)}
                                            style={{ cursor: "pointer" }}
                                            aria-label="Toggle password visibility"
                                        >
                                            {showPassword ? "🙈" : "👁️"}
                                        </span>

                                        {formErrors.password && <div className="error-text">{formErrors.password}</div>}
                                    </div>

                                    <button
                                        className="btn btn-outline-light btn-lg px-5"
                                        type="submit"
                                        disabled={false}  // you can add isPending state if you want
                                    >
                                        Login
                                    </button>
                                </div>

                                <div>
                                    <p className="mb-0">Don't have an account? <Link to="/register" className="text-white-50 fw-bold">Sign Up</Link></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
