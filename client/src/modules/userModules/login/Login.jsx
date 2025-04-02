import { useActionState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../../api/authApi";
import { UserContext } from "../../../hooks/context";
import { toast } from 'react-toastify';

export default function LoginModule() {

    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);
    const { login } = useLogin();

    const loginHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);

        try {
            const authData = await login(values.email, values.password);
            userLoginHandler(authData);

            toast.success('Successful Login')

            navigate('/');
        } catch (err) {
            toast.error(err.message)
        }
    };

    const [_, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' });

    return (
        <form id="login" action={loginAction}>
            <div className="container mt-5 py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-18 col-lg-6 col-xl-5">
                        <div className="card bg-primary text-white">
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <div data-mdb-input-init className="form-outline form-white mb-4">
                                        <input type="email" id="email" name="email" className="form-control form-control-lg" placeholder="name@domain.com" />
                                        <label className="form-label" htmlFor="email">Email</label>
                                    </div>

                                    <div data-mdb-input-init className="form-outline form-white mb-4">
                                        <input type="password" id="password" name="password" className="form-control form-control-lg" placeholder="*******" />
                                        <label className="form-label" htmlFor="password">Password</label>
                                    </div>
                                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5"
                                        type="submit" value="Login" disabled={isPending}>Login</button>
                                </div>

                                <div>
                                    <p className="mb-0">Don't have an account? <a href="/register" className="text-white-50 fw-bold">Sign Up</a>
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
