import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function NavLinkItem({ to, label }: { to: string; label: any }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          "px-3 py-2 rounded-md text-smhover:text-[#94d1f7]",
          isActive && "text-[#94d1f7]",
        )
      }
    >
      {label}
    </NavLink>
  );
}
