const Login = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="row g-5 w-100" style={{ maxWidth: "900px" }}>
        <div className="col-12 col-md-6">
          <img src={"/images/img1.png"} className="img-fluid w-100" alt="Background" />
        </div>
        <div className="col-12 col-md-6">
          <form className="p-4 border-0 bg-white">
            <h4 className="mb-4 fw-bold text-center">Welcome back!</h4>

            {/* Email - Floating Label */}
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingEmail" placeholder="Email" />
              <label htmlFor="floatingEmail">Email address</label>
            </div>

            {/* Password - Floating Label */}
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100 fw-bold">Login</button>

            {/* Register Link */}
            <p className="text-center mt-3 small">
              Don't have an account? <a className="text-primary fw-bold">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
