import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Global/Navbar";
import Sidebar from "./components/Global/Sidebar";
import AdminHome from "./components/admin/Home";
import Register from "./components/Form/Register";
import Login from "./components/Form/Login";
import Home from "./pages/Home";
import UserTable from "./components/admin/UserTable";
import BlogTable from "./components/admin/BlogTable";
import UserAdd from "./components/admin/UserAdd";
import BlogAdd from "./components/admin/BlogAdd";

function App() {
  const Client = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  const Admin = () => {
    return (
      <>
        <Sidebar />
        <Outlet />
      </>
    );
  };

  const route = createBrowserRouter([
    {
      path: '/',
      element: <Client />,
      children: [
        {
          path: '/', 
          element: <Home /> 
        }
      ],
    },
    { 
      path: '/admin',
      element: <Admin />,
      children: [
        {
          path: '', // Matches /admin
          element: <AdminHome />
        },
        {
          path: 'user', // Matches /admin/user
          element: <UserTable />
        },
        {
          path: 'adduser', // Matches /admin/user
          element: <UserAdd />
        },
        {
          path: 'blog', // Matches /admin/user
          element: <BlogTable />
        },
        {
          path: 'addblog', // Matches /admin/user
          element: <BlogAdd />
        },
      ]
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login />
    }
  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
