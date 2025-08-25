import { Routes, Route } from "react-router";

import './App.css'
import GuestRoute from "./hooks/guestRoute";
import ProtectedRoute from "./hooks/ProtectedRoute";

import HeaderComp from './modules/header/Header'
import FooterComp from './modules/footer/Footer'
import MainComp from './modules/main/Main'
import AboutComp from "./modules/about/About";
import ContactUsComp from "./modules/contactUs/ContactUs";
import ProductsComp from "./modules/products/Products";
import BlogComp from "./modules/blog/BLog";
import LoginModule from "./modules/userModules/login/Login";
import RegisterModule from "./modules/userModules/register/Register";
import NoPageTemp from "./modules/noPage/NoPage404";
import SearchComp from "./modules/search/Search";
import { UserProvider } from "./hooks/context";
import ProfileComponent from "./modules/userModules/profile/Profile";
import LogoutComponent from "./modules/userModules/logout/logout";
import AddGameComponent from "./modules/add-game/Add-Game";


function App() {

  return (
    <>
      <UserProvider>
        <HeaderComp />
        <Routes>
          <Route path="/" element={<MainComp />} />
          <Route path="/about" element={<AboutComp />} />
          <Route path="/contact" element={<ContactUsComp />} />
          <Route path="/products" element={<ProductsComp />} />
          <Route path="*" element={<NoPageTemp />} />
          <Route path="/blog" element={<ProductsComp><BlogComp /></ProductsComp>} />
          <Route path="/search" element={<SearchComp />} />
          <Route path="/login" element={<GuestRoute><LoginModule /></GuestRoute>} />
          <Route path="/register" element={<GuestRoute><RegisterModule /></GuestRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfileComponent /></ProtectedRoute>} />
          <Route path="/logout" element={<ProtectedRoute><LogoutComponent /></ProtectedRoute>} />
          <Route path="/games/create" element={<ProtectedRoute><AddGameComponent/></ProtectedRoute>} />
        </Routes>
        <FooterComp />
      </UserProvider>
    </>
  )
}

export default App
