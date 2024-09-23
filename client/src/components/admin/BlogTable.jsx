import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BlogTable = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  console.log(data);

  const fetchData = async () => {
    await axios
      .get("http://localhost:5550/api/blog")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = (userId) => {
    // navigate(`/edituser/${userId}`);
  };

  const handleDelete = (userId) => {
    // Delete user functionality here
    // console.log(`Delete user with ID: ${userId}`);
  };
  return (
    <div className="flex justify-center">
      <div className=" max-w-[1300px] w-full flex flex-col gap-8 justify-center">
        <div className="text-end">
          <button className="bg-[#437EF7] py-2 px-6 rounded-md text-white mt-10">
            <Link to={`/admin/addblog`}>Add BLog</Link>
          </button>
        </div>
        <div>
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">ID</th>
                <th className="border border-gray-400 px-4 py-2">Title</th>
                <th className="border border-gray-400 px-4 py-2">
                  Description
                </th>
                <th className="border border-gray-400 px-4 py-2">Created At</th>
                <th className="border border-gray-400 px-4 py-2">
                  Published At
                </th>
                <th className="border border-gray-400 px-4 py-2">Blog Img</th>
                <th className="border border-gray-400 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.blog_id}>
                  <td className="border border-gray-400 px-4 py-2">
                    {row.blog_id}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {row.title}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {row.description}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {row.created_at.split("T")[0]}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {row.published_at.split("T")[0]}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <div className="flex justify-center">
                      <img
                        src={`http://localhost:5550/${row.blog_img}`}
                        alt=""
                        className="w-[100px] "
                      />
                    </div>
                  </td>

                  <td className="border-t border-gray-400 px-4 py-2 flex justify-between">
                    <button
                      // onClick={() => handleUpdate(row.user_id)}
                      className="bg-[#437EF7] text-white px-4 py-2 rounded-md"
                    >
                      Update
                    </button>
                    <button
                      // onClick={() => handleDelete(row.user_id)}
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
    </div>
  );
};

export default BlogTable;
