import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user)
  const [open, setOpen] = useState(false);
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex justify-center  border-b border-[#EAEBF0] bg-white sticky top-0 text-[#272D37] h-[86px]">
      <nav className="flex justify-between items-center  w-full max-w-[1200px] relative">
        <div className="flex items-center w-[128px] h-[32px] justify-between lg:w-full">
          <label className="font-semibold text-[18px] leading-[22px] ">
            E-com
          </label>

          <div className="flex items-center">
            <ul className="flex gap-[32px] font-semibold text-[15px] leading-[22px]">
              <li>Home</li>

              <li>Our Products</li>

              <li className="flex gap-[8px] items-center">
                <span>About Us</span>
              </li>

              <li>Contacts Us</li>
            </ul>
          </div>

          {!user && (
            <div className="flex items-center gap-2">
              <button className="px-[28px] py-[12px] font-semibold text-[15px] leading-[22px] text-[#437EF7] rounded-sm">
                <Link to={"/register"}>Sign Up</Link>
              </button>

              <button className="px-[28px] py-[12px] bg-[#437EF7] font-semibold text-[15px] leading-[22px] text-white rounded-sm ">
                <Link to={"/login"}>Sign In</Link>
              </button>
            </div>
          )}
          {user && (
            <div className="flex gap-2 items-center font-bold text-sm">
              <label>{user.details.f_name}</label>

              <button onClick={handleLogout}>Logout</button>
              <img
                src={`http://localhost:5550/${user.details.profile}`}
                alt="profile"
                className="h-[30px] w-[30px] object-cover rounded-[50%]"
              />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
