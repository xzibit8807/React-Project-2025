import { Routes, Route } from "react-router";

import './App.css'

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


function App() {

  return (
    <>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<MainComp />} />
        <Route path="/about" element={<AboutComp />} />
        <Route path="/contact" element={<ContactUsComp />} />
        <Route path="/products" element={<ProductsComp />} />
        <Route path="*" element={<NoPageTemp/>} />
        <Route path="/blog" element={<BlogComp/>}/>
        <Route path="/search" element={<SearchComp/>} />
        <Route path="/login" element={<LoginModule/>}/>
        <Route path="/register" element={<RegisterModule/>}/>
      </Routes>
      <FooterComp />
    </>
  )
}

export default App
