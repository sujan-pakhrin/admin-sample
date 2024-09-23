import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
    const navigate=useNavigate()
    const {user, login } = useContext(AuthContext);
    console.log(user,"user")
    
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    console.log(formData);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
   

    const handleSubmit = async (e) => {
        e.preventDefault();
       await  login(formData);
    console.log(user.details.role)
       if (user?.isAdmin === 0&&user?.details.role==="seaker") {
        navigate('/');
      } 
      if(user?.isAdmin === 0&&user?.details.role==="provider") {
          navigate('/admin');
        }
    };
    if (user?.isAdmin === 1) {
     navigate('/admin');
   } 
    return (
        <div className="flex items-center justify-center h-[100vh] bg-[#f3f3f3]">
            <div className="max-w-[550px] w-full flex flex-col gap-5 bg-white px-8 py-6 py-8 rounded-md shadow-sm shadow-slate-300">
                <h1 className="text-center font-bold text-3xl">Login</h1>

                <div className="flex flex-col w-full">
                    <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                        Email
                    </label>
                    <input
                        name="email"
                        id="email"
                        onChange={handleChange}
                        type="text"
                        value={formData.email}
                        className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                        Password
                    </label>
                    <input
                        name="password"
                        id="password"
                        onChange={handleChange}
                        type="password"
                        value={formData.password}
                        className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    className="bg-[#437EF7] text-white py-3 rounded-sm font-semibold tracking-[0.48px]"
                >
                    Sign In
                </button>
                <div className="flex justify-between px-1">
                    <span className="font-medium text-[16px] leading-[20px] tracking-[-0.28px]">Create New Account!</span>
                    <span className="font-medium text-[16px] leading-[20px] tracking-[-0.28px] underline text-blue-600">Sign Up</span>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
