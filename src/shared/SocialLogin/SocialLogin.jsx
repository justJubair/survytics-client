import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
const SocialLogin = () => {
    const handleGoogleLogin = ()=>{

    }
    return(
        <div onClick={handleGoogleLogin} className="flex items-center justify-center gap-4 mb-4 px-4">
        <div className="flex items-center gap-4 btn ">
         <p className="font-medium"> Login with </p>
        <AiOutlineGoogle size={25}/>
    </div>
        <div className="flex items-center gap-4 btn ">
         <p className="font-medium"> Login with </p>
        <AiFillGithub size={25}/>
    </div>
    </div>
    )}
export default SocialLogin;