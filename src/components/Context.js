import { createContext } from "react";
// use context for login 

const userConfig=createContext({
    user:{
        name:"",
        email:"",
        password:""
    }
})
export default userConfig;