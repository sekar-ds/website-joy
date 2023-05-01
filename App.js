import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "././component/context/Authcontext";
import AdminLogin from "./component/AdminLogin";
 import EmployeeLogin from "./component/Employeelogin";
 import Start from './component/start'
//  import Home from './component/Home'
 import Dashboard  from "./component/dasbord";
 import Employeelist from './component/employeelistcom';
 import AddEmployee from "./component/Addemployee";
 import Editemployee from './component/Editemployee'

function App() {
  const { currentUser } = useContext(AuthContext);

  const AuthRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <AdminLogin />,
    },
    {
      path: "/employeeLogin",
      element: <EmployeeLogin />,
    },
   
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/",
      element: <Start/>,
    },
    
    {
      path: "/employeelist",
      element: <Employeelist/>,
    },
    {
      path: "/editemployee",
      element: <Editemployee/>,
    },
    {
      path: "/create",
      element: <AddEmployee/>,
    },
    {
      path: "/",
      element: (
        <AuthRoute>
         <Start />
        </AuthRoute>
      ),
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
