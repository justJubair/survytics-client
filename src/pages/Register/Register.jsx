const Register = () => {
    return(
        <div className="hero my-20">
        <div>
          <h1 className="text-4xl font-bold text-center md:text-5xl md:mt-6 lg:my-8">
            Register <span className="text-[#4b1818]">now!</span>
          </h1>
          <div className="hero-content lg:gap-10 items-center flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <div className="hidden w-96 lg:block">
                <Lottie animationData={registerAnimation} loop={true} />
              </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="https://img.png"
                    className="input input-bordered"
                    name="photo"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-[#4b1818] text-white hover:bg-[#350b0b]"
                  >
                    Register
                  </button>
                </div>
              </form>
              <SocialLogin/>
              <div className="flex items-center justify-between px-4 pb-2">
                <p>Already have an account?</p>
                <Link to="/login" className="btn btn-link">
                  Login Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
export default Register;