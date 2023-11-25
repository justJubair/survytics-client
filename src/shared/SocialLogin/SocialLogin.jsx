import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import saveUser from "../../api/saveUser";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const navigate = useNavigate()
    const { signInWithGoogle } = useAuth();
  const handleGoogleLogin = async () => {
    try {
      const res = await signInWithGoogle();
      if (res?.user) {
        const currentUser = {
          name: res?.user.displayName,
          email: res?.user.email,
          role: "user",
          photo: res?.user.photoURL,
        };
        const dbResponse = await saveUser(currentUser);
        if (dbResponse.insertedId) {
          toast.success(
            `${res?.user.displayName} your account has been created`
          );
          navigate("/")
        } else {
          toast.success("Logged in successfully");
          navigate("/")
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex items-center justify-center gap-4 mb-4 px-4">
      <div onClick={handleGoogleLogin} className="flex items-center gap-4 btn ">
        <p className="font-medium"> Login with </p>
        <AiOutlineGoogle size={25} />
      </div>
      <div className="flex items-center gap-4 btn ">
        <p className="font-medium"> Login with </p>
        <AiFillGithub size={25} />
      </div>
    </div>
  );
};
export default SocialLogin;
