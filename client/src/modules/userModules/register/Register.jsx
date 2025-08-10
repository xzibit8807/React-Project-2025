import "./register.css";
import { useState } from "react";
import { useRegister } from "../../../api/authApi";
import { useUserContext } from "../../../hooks/context";
import { useNavigate } from "react-router";

export default function RegisterModule() {
    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useUserContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const [formErrors, setFormErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        if (name === "confirmPassword") {
            if (value !== password) message = "Passwords do not match";
        }
        setErrors(prev => ({ ...prev, [name]: message }));
    };

    const validateForm = (email, password, confirmPassword) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            errors.email = "Email is required.";
        } else if (!emailRegex.test(email)) {
            errors.email = "Invalid email address.";
        }

        if (!password) {
            errors.password = "Password is required.";
        }

        if (!confirmPassword) {
            errors.confirmPassword = "Please confirm your password.";
        } else if (password !== confirmPassword) {
            errors.confirmPassword = "Passwords do not match.";
        }

        return errors;
    };

    const registerHandler = async (formData) => {
        formData.preventDefault();

        validateField("email", email);
        validateField("password", password);
        validateField("confirmPassword", confirmPassword);

        if (Object.values(errors).some(err => err)) return; // Stop if errors exist


        const { email, password } = Object.fromEntries(formData);
        const confirmPassword = formData.get("confirm-password");

        const errors = validateForm(email, password, confirmPassword);
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        const authData = await register(email, password);
        userLoginHandler(authData);
        navigate("/");
    };

    return (
        <form id="register" action={registerHandler}>
            <div className="container mt-5 py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-5 col-lg-5 col-xl-7">
                        <div className="card bg-primary text-white">
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-4">
                                    <h2 className="fw-bold mb-4 text-uppercase">Register</h2>
                                    <p className="text-white-5 mb-5">Please enter your Email and password to Register!</p>

                                    {/* Email Field */}
                                    <div className="form-outline form-white mb-4 pb-2 col-xl-13">
                                        <label className="form-label" htmlFor="email">Email:</label>
                                        {errors.email && <small className="error-text">{errors.email}</small>}

                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control form-control-lg"
                                            placeholder="name@domain.com"
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                validateField("email", e.target.value);
                                            }}
                                        />
                                        {formErrors.email && <div className="error-text">{formErrors.email}</div>}
                                    </div>

                                    {/* Password Field */}
                                    <div className="form-outline form-white mb-4 position-relative">
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
                                        >
                                            {showPassword ? "🙈" : "👁️"}
                                        </span>
                                        {formErrors.password && <div className="error-text">{formErrors.password}</div>}
                                    </div>

                                    {/* Confirm Password Field */}
                                    <div className="form-outline form-white mb-5 position-relative">
                                        <label className="form-label" htmlFor="confirm-password">Confirm Password</label>
                                        {errors.confirmPassword && <small className="error-text">{errors.confirmPassword}</small>}
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            id="confirm-password"
                                            name="confirm-password"
                                            className="form-control form-control-lg"
                                            placeholder="Enter your password"
                                            value={confirmPassword}
                                            onChange={(e) => {
                                                setConfirmPassword(e.target.value);
                                                validateField("confirmPassword", e.target.value);
                                            }}
                                        />                                        <span
                                            className="toggle-password"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? "🙈" : "👁️"}
                                        </span>
                                        {formErrors.confirmPassword && <div className="error-text">{formErrors.confirmPassword}</div>}
                                    </div>

                                    <input
                                        className="btn btn-outline-light btn-lg px-5"
                                        type="submit"
                                        value="Register"
                                    />
                                </div>

                                <div>
                                    <p className="mb-0">
                                        Already registered? <a href="/login" className="text-white-50 fw-bold">Login</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
