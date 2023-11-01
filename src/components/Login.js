import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { Context } from "react";
import userConfig from "./Context";
// import ReactDOM from "react-dom/client";

const Loginpage = () => {
  const { user, setuser } = useContext(userConfig);
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  return (
    <div className="w-[500px] h-[500px]  mx-auto mt-[100px] border-black shadow-lg rounded-xl bg-gray-50 pt-14 mb-[54px]">
      <h1 className="w-[80px] mx-auto font-bold text-[30px] text-gray-600 ">
        LogIn
      </h1>
      <div>
        <input
        size={50}
          placeholder={"Username"}
          onChange={(e) => {
            setname(e.target.value);
          }}
          className="mx-[50px] mt-14 bg-gray-50 outline-none"
        ></input>
        <div className=" h-[1px] bg-black mx-[50px]"> </div>

      </div>
      <div>
        <input
        size={50}
          placeholder="Enter your email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          className="mx-[50px] mt-8 outline-none bg-gray-50"
        ></input>
        
        <div className=" h-[1px] bg-black mx-[50px]"> </div>
      </div>
      <div>
        <input
        size={50}
          placeholder="Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          className="mx-[50px] mt-8 outline-none bg-gray-50"
        ></input>
        <div className=" h-[1px] bg-black mx-[50px]"> </div>
      </div>
      <div className="my-10">
        <Link
          className="outline px-[180px] mx-[50px] py-[10px] rounded-md bg-gradient-to-l from-orange-500 via-red-500 to-pink-500 text-white"
          onClick={() => {  
            setuser({
              name: name,
              email: email,
              password: password,
            });
          }}
          to={"/"}
        >
          LOGIN
        </Link>
      </div>
    </div>
  );
};
export default Loginpage;
