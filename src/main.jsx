import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import { CartProvider } from "./context/CartContext";


import Home from './pages/Home';
import Menu from './pages/Menu'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import Company from './pages/Company'
import Special from './pages/Special'
import LogIn from './pages/LogIn'
import UserHome from './pages/useraccount/UserHome'
import UserMenu from './pages/useraccount/UserMenu'
import UserCompany from './pages/useraccount/UserCompany'
import UserSpecial from './pages/useraccount/UserSpecial'
import UserAccount from './pages/useraccount/UserAccount'
import UserCart from './pages/useraccount/UserCart'
import CheckOut from './components/CheckOut'
import AdminLogin from './admin/AdminLogin'
import AdminDashboard from './admin/AdminDashboard'
import AdminMenu from './admin/AdminMenu'


const RequireAuth = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAdminAuthenticated');
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

const router = createBrowserRouter([{
  path: '/yappari-coffee-bar/',
  element: <Home />,
  errorElement: <NotFound/>,
}, {
  path: '/yappari-coffee-bar/menu',
  element: <Menu />,
  errorElement: <NotFound/>,
}, {
  path: '/yappari-coffee-bar/company',
  element: <Company />,
  errorElement: <NotFound/>,
}, {
  path: '/yappari-coffee-bar/special',
  element: <Special />,
  errorElement: <NotFound/>,
},{
  path: '/yappari-coffee-bar/signin',
  element: <SignIn />,
  errorElement: <NotFound/>,
}, {
  path: '/yappari-coffee-bar/login',
  element: <LogIn />,
  errorElement: <NotFound/>,
}, {
  path: '/yappari-coffee-bar/user/home',
  element: <UserHome />,
  errorElement: <NotFound/>,
}, {
  path: '/yappari-coffee-bar/user/menu',
  element: <UserMenu />,
  errorElement: <NotFound/>,
},  {
  path: '/yappari-coffee-bar/user/company',
  element: <UserCompany />,
  errorElement: <NotFound/>,
}, {
  path: '/yappari-coffee-bar/user/special',
  element: <UserSpecial />,
  errorElement: <NotFound/>,
}, {
  path: '/yappari-coffee-bar/user/account',
  element: <UserAccount />,
  errorElement: <NotFound/>,
}, {
  path: '/yappari-coffee-bar/user/cart',
  element: <UserCart />,
  errorElement: <NotFound/>,
}, {
  path: '/yappari-coffee-bar/user/logout',
  element: <Home />,
  errorElement: <NotFound/>,
}, {
  path: '/yappari-coffee-bar/user/checkout',
  element: <CheckOut />,
  errorElement: <NotFound/>,
}, {
  path: '/yappari-coffee-bar/admin/login',
  element: <AdminLogin />,
  errorElement: <NotFound/>,
}, { 
  path: '/yappari-coffee-bar/admin/dashboard', 
  element: <RequireAuth><AdminDashboard /></RequireAuth>, 
  errorElement: <NotFound/> 
},{ 
  path: '/yappari-coffee-bar/admin/menu', 
  element: <RequireAuth><AdminMenu /></RequireAuth>, 
  errorElement: <NotFound/> 
},]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
