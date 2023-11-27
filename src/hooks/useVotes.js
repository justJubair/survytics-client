import { useEffect, useState } from "react"
import axiosSecure from "../api/axiosSecure"


const useVotes = ()=>{
    const [votes, setVotes] = useState()
    useEffect(()=>{
        try{
            axiosSecure.get("/votes")
            .then(res=>{
                setVotes(res.data)
            })
        }
        catch(err){
            console.log(err)
        }
    },[])
    return votes
}

export default useVotes