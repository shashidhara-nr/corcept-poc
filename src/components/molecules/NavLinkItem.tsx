import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function NavLinkItem({ to, label }: { to: string; label: any }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          "px-3 py-2 rounded-md text-sm text-white hover:bg-white/10",
          isActive && "bg-white/15",
        )
      }
    >
      {label}
    </NavLink>
  );
}
