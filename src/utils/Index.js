import TopBar from "./../components/TopBar";
import SideBar from "./../components/SideBar";
import Pages from "../components/Pages";
import { FaHome } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";

export const linkArray = [
  { text: "Home", link: "/home", icon: FaHome },
  { text: "Booking", link: "/booking", icon: CiCalendarDate },
  { text: "Users", link: "/users", icon: TbUsers },
];

export { TopBar, SideBar, Pages };

export const items = [
  " id",
  "created",
  "name",
  "discount",
  "description",
  "image",
  "isAvailable",
  "maxCapacity",
  "price",
];
