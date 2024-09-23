import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        f_name: "",
        l_name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        gender: "",
        dob: "",
        profile: null,
    });
    console.log(formData);
    const handleChange = (e) => {
        // const { name, value } = e.target;
        // setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleFileChange = (e) => {
        // setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // await axios
        //     .post("http://localhost:8880/api/todo", formData, {
        //         headers: {
        //             "Content-Type": "multipart/form-data",
        //         },
        //     })
        //     .then((res) => {
        //         console.log(res.data);
        //         // navigate("/");
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    };
    return (
        <div className="flex items-center justify-center h-[100vh] bg-[#f3f3f3]">
            <div className="max-w-[550px] w-full flex flex-col gap-2 bg-white px-8 py-6 py-8 rounded-md shadow-sm shadow-slate-300">
                <h1 className="text-center font-bold text-3xl">Register</h1>

                <div className="flex flex-col w-full">
                    <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                        First Name
                    </label>
                    <input
                        name="f_name"
                        id="f_name"
                        onChange={handleChange}
                        type="text"
                        value={formData.f_name}
                        className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                        Last Name
                    </label>
                    <input
                        name="l_name"
                        id="l_name"
                        onChange={handleChange}
                        type="text"
                        value={formData.l_name}
                        className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
                    />
                </div>
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
                        Address
                    </label>
                    <input
                        name="address"
                        id="address"
                        onChange={handleChange}
                        type="text"
                        value={formData.address}
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
                <div className="flex flex-col w-full">
                    <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                        Phone
                    </label>
                    <input
                        name="phone"
                        id="phone"
                        onChange={handleChange}
                        type="text"
                        value={formData.phone}
                        className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                        Date of Birth
                    </label>
                    <input
                        name="dob"
                        id="dob"
                        onChange={handleChange}
                        type="text"
                        value={formData.dob}
                        className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                        Gender
                    </label>
                    <select
                        name="gender"
                        id="gender"
                        onChange={handleChange}
                        value={formData.gender}
                        className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
                    >
                        <option value="" disabled>
                            Select Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="flex flex-col w-full">
                    <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                        Upload Profile
                    </label>
                    <input
                        type="file"
                        name="profile"
                        id="profile"
                        onChange={handleFileChange}
                        className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    className="bg-[#437EF7] text-white py-3 rounded-sm font-semibold tracking-[0.48px]"
                >
                    Add User
                </button>
                
                
            </div>
        </div>
    );
};

export default Register;
