import axios from "axios";
import { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from "../../context/AuthContext";

const BlogAdd = () => {
  const {user}=useContext(AuthContext)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    user_id:user.details.user_id,
    blog_img: null,
  });
  console.log(formData);
//   console.log(user)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, blog_img: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post("http://localhost:5550/api/blog", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                // console.log(res.data);
                if(res.data.success===false){
                    toast.error(res.data.message)
                }else{
                    toast.success("Blog Added sucessfully!!")
                    navigate("/admin/blog");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
  return (
    <div className="flex items-center justify-center h-[100vh] bg-[#f3f3f3]">
    <div className="max-w-[550px] w-full flex flex-col gap-2 bg-white px-8 py-6 rounded-md shadow-sm shadow-slate-300">
        <h1 className="text-center font-bold text-3xl">Add Blog</h1>

        <div className="flex flex-col w-full">
            <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                Title
            </label>
            <input
                name="title"
                id="title"
                onChange={handleChange}
                type="text"
                value={formData.title}
                className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
            />
        </div>
        <div className="flex flex-col w-full">
            <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                Description
            </label>
            <input
                name="description"
                id="description"
                onChange={handleChange}
                type="text"
                value={formData.description}
                className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
            />
        </div>
       
      
                 
             
        <div className="flex flex-col w-full">
            <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                Upload Blog Image
            </label>
            <input
                type="file"
                name="blog_img"
                id="blog_img"
                onChange={handleFileChange}
                className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
            />
        </div>

        <button
            onClick={handleSubmit}
            className="bg-[#437EF7] text-white py-3 rounded-sm font-semibold tracking-[0.48px]"
        >
           Upload Blog
        </button>
        <div className="flex justify-between px-1">
            <span className="font-medium text-[16px] leading-[20px] tracking-[-0.28px] text-green-500">Already have an account?</span>
            <span className="font-medium text-[16px] leading-[20px] tracking-[-0.28px] underline text-blue-600">Sign In</span>
        </div>
        <ToastContainer />
    </div>
</div>
  )
}

export default BlogAdd