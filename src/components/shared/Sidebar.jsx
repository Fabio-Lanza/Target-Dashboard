import React from "react";
import { FcBullish } from "react-icons/fc";
import target from "../../assets/target.jpg";
import { DASHBOARD_SIDEBAR_LINKS } from "../../Utils/conts/Navigation";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white w-52 p-3 flex flex-col border-r-2 border-teal-500 text-black">
      <div className="px-6 pb-16">
        <img src={target} className="w-32" />
      </div>
      <div className="flex-1">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>

            {/* ====Bottom Part ==== */}
      <div className="">bottow</div>
    </div>
  );
};


const SidebarLink = ({ item }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={
        pathname === item.path
          ? "flex items-center gap-3 py-5 px-3 font-medium text-base  hover:bg-red-400 rounded-md text-red-800"
          : "flex items-center gap-3 py-5 px-3 font-medium text-base  hover:bg-red-200 rounded-md text-neutral-500"
      }
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
};

export default Sidebar;
