import { LogOut } from "lucide-react";
import logoutUser from "../../services/auth/logoutUser";
import { NavLink, useNavigate } from "react-router";
import { BiCart, BiSearch } from "react-icons/bi";
import axios from "axios";
import { useEffect, useState } from "react";

export default function NavigationLink({
  isSearchFormOpen,
  setisSearchFormOpen,
}) {
  const headerLinkClass = ({ isActive }) =>
    `text-gray-600/90 hover:text-gray-600 ${isActive ? "underline decoration-blue-900 underline-offset-2 " : "underline-none"}`;

  const navigate = useNavigate();
  const [carts, setCarts] = useState([]);

  // get user with local storage
  const user = JSON.parse(localStorage.getItem("user_session"));
  useEffect(() => {
    const getCart = async () => {
      try {
        if (user) {
          const url = `https://dummyjson.com/carts/user/${user.id}`;
          const respone = await axios.get(url);
          setCarts(respone.data.carts);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCart();
  }, [user]);

  const totalCart = carts[0]?.products.length;
  return (
    <div className="flex">
      <div className="">
        <NavLink to="/" className="text-blue-900 font-semibold text-lg ">
          Lumina Shop.
        </NavLink>
      </div>
      <div className="flex-1 flex md:justify-between justify-end">
        <ul className="flex-1 hidden md:flex justify-center space-x-6 ">
          <NavLink to="/" end className={headerLinkClass}>
            Home
          </NavLink>
          <NavLink to="/product" className={headerLinkClass}>
            {" "}
            Products
          </NavLink>
        </ul>
        <div className="flex w-fit">
          <form action="" className="hidden md:block">
            <input
              type="text"
              name="search"
              id="search"
              className="h-full  border-2  rounded px-4 py-1 items-center bg-gray-100 border-gray-500 text-gray-700 tracking-wide outline-none focus:border-blue-900 transition-colors duration-300 "
              placeholder="seach products..."
            />
          </form>
          <button
            className="md:hidden block px-5 hover:text-blue-600"
            onClick={() => {
              setisSearchFormOpen(!isSearchFormOpen);
            }}
          >
            <BiSearch className="text-gray-600 text-xl" />
          </button>
          <div
            onClick={() => {
              if (user) {
                navigate("/checkout");
              } else {
                navigate("/auth/register");
              }
            }}
            className="flex items-center ms-3 px-3 space-x-2 rounded-sm cursor-pointer bg-gray-100 border-2 hover:border-blue-900 transition-all duration-300"
          >
            <BiCart className="text-gray-600 text-lg" />
            <span className="text-sm">{totalCart || 0}</span>
          </div>
          {user && (
            <div
              onClick={() => {
                if (window.confirm("Are you sure you want to log out?")) {
                  logoutUser();
                  navigate("/");
                }
              }}
              className="flex items-center ms-3 gap-2 px-4 py-2 rounded-md border border-gray-200 bg-white text-gray-600 hover:text-red-600 hover:bg-red-50 hover:border-red-200 transition-all duration-200 cursor-pointer text-sm font-medium shadow-sm w-fit"
            >
              <LogOut size={14} />
              <span className="hidden sm:block">Log out</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
