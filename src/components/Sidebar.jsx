import {
  ChartNoAxesColumn,
  ChartPie,
  LayoutDashboard,
  ShoppingCart,
  Handbag,
  ChartLine,
  MessageSquareMore,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router";

const navItems = [
  {
    name: "Dashboard",
    icon: <ChartPie />,
    path: "/dashboard",
  },
  {
    name: "Leaderboard",
    icon: <ChartNoAxesColumn />,
    path: "/leaderboard",
  },
  {
    name: "Order",
    icon: <ShoppingCart />,
    path: "/order",
  },
  {
    name: "Products",
    icon: <Handbag />,
    path: "/products",
  },
  {
    name: "Sales Report",
    icon: <ChartLine />,
    path: "/sales",
  },
  {
    name: "Messages",
    icon: <MessageSquareMore />,
    path: "/messages",
  },
  {
    name: "Setting",
    icon: <Settings />,
    path: "/settings",
  },
  {
    name: "Sign Out",
    icon: <LogOut />,
    path: "/signout",
  },
];

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-[240px] p-7  flex flex-col justify-between bg-white">
      {/* Sidebar Header */}
      <div>
        <div className="flex gap-4 items-center justify-center w-full mb-4 cursor-pointer">
          <LayoutDashboard color="#0e13a4" />
          <span className="text-2xl font-semibold">Dabang</span>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col justify-start items-center p-3">
          {navItems.map((item) => {
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "flex mb-4 text-md text-white w-[180px] gap-6 p-3 bg-indigo-500 rounded-xl "
                    : "flex mb-4 text-md text-gray-600 w-[180px] gap-6 p-3 hover:bg-gray-200 hover:rounded-xl"
                }
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Bottom Card */}
      <div className="bg-indigo-500 text-white p-5 rounded-xl flex flex-col items-center text-center mb-4">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3">
          <LayoutDashboard className="text-indigo-500" />
        </div>
        <h2 className="text-lg font-semibold">Dabang Pro</h2>
        <p className="text-sm mt-1 mb-4 opacity-90">
          Get access to all features on betumbas
        </p>
        <button className="bg-white text-indigo-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
          Get Pro
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
