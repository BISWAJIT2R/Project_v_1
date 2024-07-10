import { FaHome } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const linkArray = [
  { icon: <FaHome />, linkText: "/app/home", text: "Home" },
  { icon: <CiCalendarDate />, linkText: "/app/booking", text: "Booking" },
  { icon: <TbUsers />, linkText: "/app/users", text: "User" },
  { icon: <CiSettings />, linkText: "/app/setting", text: "Settings" },
];

const SideBar = () => {
  return (
    <div className="side-bar">
      <ul className=" flex flex-col gap-3 text-[20px] font-mono font-medium p-2 overflow-hidden">
        {linkArray.map((link, index) => (
          <li key={index} className=" flex items-center gap-2 hover:bg-[#0005] py-2 px-1 cursor-pointer transition duration-300 ease-in-out transform hover:translate-x-4
        >">
            {link.icon}
            <NavLink  to={link.linkText}>{link.text} </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
