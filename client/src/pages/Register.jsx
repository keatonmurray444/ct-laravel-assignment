import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="row g-5 w-100" style={{ maxWidth: "900px" }}>
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <img src={"/images/img1.png"} className="img-fluid w-100" alt="Background" />
        </div>
        <div className="col-12 col-md-6">
          <form className="p-4 border-0 bg-white">
            <h4 className="mb-4 fw-bold text-center">Create an account</h4>

            {/* First name - Floating Label */}
            <div className="form-floating mb-3">
                <input type="name" className="form-control" id="floatingFname" placeholder="First name" />
                <label htmlFor="floatingFname">First name</label>
            </div>

            {/* Last name  - Floating label */}
            <div className="form-floating mb-3">
                <input type="name" className="form-control" id="floatingLname" placeholder="Last name" />
                <label htmlFor="floatingLname">Last name</label>
            </div>

            {/* Email address- Floating Label */}
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
            <button type="submit" className="btn btn-primary w-100 fw-bold">Signup</button>

            {/* Register Link */}
            <p className="text-center mt-3 small">
              Already have an account? <Link to="/" className="text-primary fw-bold">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
