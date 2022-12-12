import React, { useState } from "react";
import checkBrowser from "../utils/checkBrowser";
import { Link } from "react-router-dom";
import OAuth from "./../components/OAuth";
import { signInWithEmailAndPassword,getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  // console.log(navigator.userAgent)
  // checkBrowser(navigator.userAgent);
  // if(checkBrowser(navigator.userAgent)===true){
  //     setShowPassword(false);
  // }
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
    password_confirmation: "",
  });

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const user = await signInWithEmailAndPassword(auth,email,password);
      
      
      if(user){
        toast.success("Signed in!");
        navigate("/");
        
      }
      
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section>
      <h1 className="mt-6 text-3xl font-bold text-center">Sign In</h1>
      <div className="flex flex-wrap items-center justify-center max-w-6xl px-6 py-12 mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1429216967620-ece20ff3a5f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            alt="signin"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              className="w-full px-4 py-2 mb-6 text-xl text-gray-700 transition ease-in-out bg-white border-gray-300 rounded"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />
            <div className="relative mb-6">
              <input
                className="w-full px-4 py-2 text-xl text-gray-700 transition ease-in-out bg-white border-gray-300 rounded"
                type="password"
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
            </div>
            <div className="flex justify-between text-sm whitespace-nowrap sm:text-lg">
              <p className="mb-6">
                Don't have an account?
                <Link
                  to="/signup"
                  className="ml-2 text-gray-400 transition duration-200 ease-in-out hover:text-gray-500"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/forgotpassword"
                  className="text-gray-400 transition duration-200 ease-in-out hover:text-gray-500"
                >
                  Forgot password?
                </Link>
              </p>
            </div>
            <button
              className="w-full py-4 text-sm font-medium text-white transition duration-200 ease-in-out bg-blue-600 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Sign In
            </button>
            <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="mx-4 font-semibold text-center">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signin;
