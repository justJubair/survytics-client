import { Link } from "react-router-dom";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import loginGif from "../../assets/images/loginGif.png"
import logo from "../../assets/images/logo.png"

const Login = () => {
    const handleLogin = ()=>{

    }
    return(
      <div>
        
       <Link className="hidden lg:block" to="/">
       <img className="absolute top-4 left-4  w-32 shadow-xl rounded py-2 px-4  bg-green-600 hover:cursor-pointer" src={logo} alt="" />
       </Link>
        
          <div className="hero h-screen my-20 lg:my-0">         
        <div>
          <h1 className="text-4xl font-bold text-center md:text-5xl md:mt-6 lg:my-8">
            Login <span className="text-green-600">now!</span>
          </h1>
          <div className="hero-content lg:gap-10 items-center flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <div className="hidden w-96 lg:block">
                <img src={loginGif} alt="login gif" />
              </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-green-600 text-white hover:text-green-600 hover:bg-white"
                  >
                    Login
                  </button>
                </div>
              </form>
              <SocialLogin/>
              <div className="flex items-center justify-between px-4 pb-2">
                <p className="font-medium">New to Survytics?</p>
                <Link to="/register" className="btn btn-link">
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )}
export default Login;