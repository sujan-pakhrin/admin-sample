import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserTable = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  console.log(id);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    await axios
      .get("http://localhost:5550/api/user")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  const handleUpdate = (userId) => {
    navigate(`/edituser/${userId}`);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5550/api/user/${id}`)
      .then((res) => {
        toast.success(res.data.message);
        setOpen(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  return (
    <div className="flex justify-center">
      {open && (
        <div className="absolute top-3 shadow-lg shadow-gray-300 py-6 px-10 flex flex-col gap-3 bg-gray-100 rounded-lg">
          <span className="text-lg font-bold">
            Are sure to delete this user
          </span>
          <div className="flex justify-between">
            <button
              onClick={() => {
                setId(null);
                setOpen(false);
              }}
              className="bg-green-500 text-white py-2 px-6 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={() => handleDelete(id)}
              className="bg-red-500 text-white py-2 px-6 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      )}
      <div className=" max-w-[1300px] w-full flex flex-col gap-8 justify-center">
        <div className="text-end">
          <button className="bg-[#437EF7] py-2 px-6 rounded-md text-white mt-10">
            <Link to={`/admin/adduser`}>Add User</Link>
          </button>
        </div>
        <div>
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">ID</th>
                <th className="border border-gray-400 px-4 py-2">First Name</th>
                <th className="border border-gray-400 px-4 py-2">Last Name</th>
                <th className="border border-gray-400 px-4 py-2">Email</th>
                <th className="border border-gray-400 px-4 py-2">Phone</th>
                <th className="border border-gray-400 px-4 py-2">Address</th>
                {/* <th className="border border-gray-400 px-4 py-2">Role</th> */}
                <th className="border border-gray-400 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.user_id}>
                  <td className="border border-gray-400 px-4 py-2">
                    {row.user_id}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {row.f_name}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {row.l_name}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {row.email}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {row.phone}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {row.address}
                  </td>
                  
                  

                  <td className="border border-gray-400 px-4 py-2 flex justify-between">
                    <button
                      // onClick={() => handleUpdate(row.user_id)}
                      className="bg-[#437EF7] text-white px-4 py-2 rounded-md"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        setOpen(true);
                        setId(row.user_id);
                      }}
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserTable;
