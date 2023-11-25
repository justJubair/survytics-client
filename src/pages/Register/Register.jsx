import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import RegisterGif from "../../assets/images/registerGif.png";
import logo from "../../assets/images/logo.png";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { saveUser } from "../../api";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate()
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = {
      name,
      email,
      role: "user",
      photo,
    };
    try {
      const res = await createUser(email, password);
      if (res?.user?.email) {
        await updateUserProfile(name, photo);
        const dbResponse = await saveUser(user);
        if (dbResponse.insertedId) {
          toast.success(`${name} your account has been created`);
          navigate("/")
        }
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div>
      <Link className="hidden lg:block" to="/">
        <img
          className="absolute top-4 left-4  w-32 shadow-xl rounded py-2 px-4  bg-green-600 hover:cursor-pointer"
          src={logo}
          alt=""
        />
      </Link>

      <div className="hero my-20 lg:my-10">
        <div>
          <h1 className="text-4xl font-bold text-center md:text-5xl md:mt-6 lg:my-8">
            Register <span className="text-green-600">now!</span>
          </h1>
          <div className="hero-content lg:gap-10 items-center flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <div className="hidden w-96 lg:block">
                <img src={RegisterGif} alt="Register gif" />
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
                    className="btn bg-green-600 text-white hover:text-green-600 hover:bg-white"
                  >
                    Register
                  </button>
                </div>
              </form>
              <SocialLogin />
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
    </div>
  );
};
export default Register;
