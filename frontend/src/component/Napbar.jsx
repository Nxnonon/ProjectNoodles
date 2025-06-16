import React from "react";
import "./Navbar.css";
import { ShoppingCart } from "lucide-react";
import { History } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom'

const Napbar = () => {
  return (
    <nav className="bg-gray-400 h-30 flex justify-center items-center shadow-lg shadow-stone-600 gap-200">
      <div className="flex justify-center items-center">
        <img className="h-30 w-35 " src="logonoodle-removebg-preview.png" alt="" />
        <p className=" text-5xl text-amber-50 text-shadow-lg/30">
          ก๋วยเตี๋ยวเรือพี่โต้รสเด็ด
        </p>
      </div>

      <div className="flex justify-end items-center gap-20">
        <Link to="cart"><ShoppingCart className="text-amber-50 h-15 w-15 "></ShoppingCart></Link>
        <Link to="history"><History className="text-amber-50 h-15 w-15 "></History></Link>
        
        <div className="bg-indigo-950 p-3 border-4 border-amber-50 rounded-xl shadow-2xl hover:bg-gray-700">
          <Link to="login" className="text-3xl text-amber-50 " >เข้าสู่ระบบ👤</Link>
        </div>
      </div>
      <Outlet></Outlet>
    </nav>
  );
};

export default Napbar;
