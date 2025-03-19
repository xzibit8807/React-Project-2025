import "./register.css"

export default function RegisterModule() {
    return (

        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-primary text-white">
                        <div className="card-body p-5 text-center">

                            <div className="mb-md-5 mt-md-4 pb-5">

                                <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                                <p className="text-white-50 mb-5">Please enter your Email and password to Register!</p>

                                <div data-mdb-input-init className="form-outline form-white mb-4">
                                    <input type="email" id="email" name="email" className="form-control form-control-lg" placeholder="name@domain.com" />
                                    <label className="form-label" htmlFor="typeEmailX">Email</label>
                                </div>

                                <div data-mdb-input-init className="form-outline form-white mb-4">
                                    <input type="password" id="password" name="password" className="form-control form-control-lg" placeholder="*******" />
                                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                                </div>

                                <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Register</button>

                            </div>

                            <div>
                                <p className="mb-0">Already registered ? Then go to your account. <a href="/login" className="text-white-50 fw-bold">Login</a>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
