import axiosPublic from "./axiosPublic"

const saveUser = async(user)=>{
    try{
        const res = await axiosPublic.post("/users", user)
        return res.data
    }
    catch(err){
        console.log(err)
    }
}

export default saveUser