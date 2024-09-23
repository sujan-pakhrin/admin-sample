import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const {user}=useContext(AuthContext)
  const [data, setData] = useState(null); 
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5550/api/ub");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 
  return (
    <div className="flex justify-center py-8">
      {user?.isAdmin===1&&
        <div>i am admin</div>
      }
      {user?.details.role==="provider"&&
        <div>i am provider</div>
      }
      <div className="max-w-[1340px] w-full">
        <div className="flex justify-between">
          <Link to='/admin/user'>
            <div className="flex flex-col shadow-lg shadow-gray-300 gap-8 py-6 px-9 rounded-lg bg-[#fff5f1]">
              <span className="font-bold text-[50px]">Total number of Users</span>
              <span className="font-bold text-[50px] text-right">
                {data ? data.userCount : 'Loading...'}
              </span>
            </div>
          </Link>
          <Link to='/admin/blog'>
            <div className="flex flex-col shadow-lg shadow-gray-300 gap-8 py-6 px-9 rounded-lg bg-[#fff1f1]">
              <span className="font-bold text-[50px]">Total number of Blogs</span>
              <span className="font-bold text-[50px] text-right">
                {data ? data.blogCount : 'Loading...'} 
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
