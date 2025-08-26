import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
// import Login from "../pages/Login";
import Leaderboard from "../pages/Leaderboard";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import SalesReport from "../pages/SalesReport";
import Setting from "../pages/Setting";
import Signout from "../pages/Signout";
import Message from "../pages/Message";

export const MyRoutes = [
  {
    path: "/",

    element: <DashboardLayout />,
    children: [
      {
        path:"dashboard",
        element: <Dashboard />,
      },
      {
        path:'leaderboard',
        element: <Leaderboard />,
      },
      {
        path:'order',
        element: <Orders />,
      },
      {
        path:'products',
        element: <Products />,
      },
      {
        path:'sales',
        element: <SalesReport />,
      },
      {
        path:'messages',
        element: <Message />,
      },
      {
        path:'settings',
        element: <Setting />,
      },
      {
        path:'signout',
        element: <Signout />,
      },
    ],
  },


  
];
