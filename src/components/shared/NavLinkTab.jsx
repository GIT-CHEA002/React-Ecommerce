import { NavLink } from "react-router";

export default function NavLinkTab({ path, title, widthStyle }) {
  return (
    <NavLink
      to={path}
      className={`px-2 py-2 ${widthStyle} text-white font-medium bg-blue-900 rounded-lg hover:bg-blue-900/90  fade transition-colors duration-300`}
    >
      {title}
    </NavLink>
  );
}
