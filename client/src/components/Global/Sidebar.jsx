import { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${
        open ? "w-[250px] bg-blue-900 " : "bg-none"
      } h-[100vh] absolute text-white`}
    >
      {!open ? (
        <FaBars
          className="mt-5 ml-5 text-xl w-[20px] text-black"
          onClick={() => setOpen((prev) => !prev)}
        />
      ) : (
        ""
      )}
      {open && (
        <div className="w-full p-5 relative">
          <FaTimes
            className="text-xl absolute top-4 right-4 h-[17px] w-[17px]"
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="flex flex-col justify-between h-[90vh] items-center mt-7">
            <ul className="flex flex-col items-center gap-5 ">
              <Link to={"/admin"}>
                <li>Home</li>
              </Link>
              <Link to={"/admin/user"}>
                <li>User</li>
              </Link>
              <Link to={"/admin/blog"}>
                <li>Blog</li>
              </Link>
            </ul>
            <div className="flex flex-col items-center gap-3">
              <span>{user.details.f_name}</span>
              <img
                src={`http://localhost:5550/${user.details.profile}`}
                className="h-[50px] w-[50px] object-cover rounded-[25px]"
                alt="img"
              />

              <button>Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
