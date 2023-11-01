import { createContext } from "react";

const userConfig=createContext({
    user:{
        name:"",
        email:"",
        password:""
    }
})
export default userConfig;