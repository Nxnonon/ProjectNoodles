import React from "react";
import "./Navbar.css";
import { ShoppingCart } from "lucide-react";
import { History } from 'lucide-react';
import "./Navbar.css";
import { Link, Outlet } from 'react-router-dom'

// const Napbar = () => {
//   return (
//     <nav className="bg-gray-400 h-30 flex justify-center items-center shadow-lg shadow-stone-600 gap-200">
//       <div className="flex justify-center items-center">
//         <img className="h-30 w-35 " src="logonoodle-removebg-preview.png" alt="" />
//         <p className=" text-5xl text-amber-50 text-shadow-lg/30"> 
//           ก๋วยเตี๋ยวเรือพี่โต้รสเด็ด
//         </p>
//       </div>

//       <div className="flex justify-end items-center gap-20">
//         <Link to="cart"><ShoppingCart className="text-amber-50 h-15 w-15 hover:scale-110"></ShoppingCart></Link>
//         <Link to="history"><History className="text-amber-50 h-15 w-15 hover:scale-110"></History></Link>
        
//         <div className="bg-indigo-950 p-3 border-4 border-amber-50 rounded-xl shadow-2xl hover:bg-gray-700 hover:scale-105">
//           <Link to="login" className="text-3xl text-amber-50 " >เข้าสู่ระบบ👤</Link>
//         </div>
       
//       </div>
//       <Outlet></Outlet>
//     </nav>
//   );
// };


const Napbar = () => {
  return (
    <>
      <nav className="bg-gray-400 shadow-lg shadow-stone-600 px-4 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* โลโก้และชื่อร้าน */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <img
              className="h-20 w-20 object-contain"
              src="logonoodle-removebg-preview.png"
              alt="โลโก้"
            />
            <p className="text-2xl md:text-4xl text-amber-50 font-bold drop-shadow-md text-center md:text-left">
              ก๋วยเตี๋ยวเรือพี่โต้รสเด็ด
            </p>
          </div>

          {/* ปุ่มเมนูด้านขวา */}
          <div className="flex justify-center md:justify-end items-center gap-6 flex-wrap">
            <Link to="cart">
              <ShoppingCart className="text-amber-50 h-8 w-8 hover:scale-110 transition-transform" />
            </Link>
            <Link to="history">
              <History className="text-amber-50 h-8 w-8 hover:scale-110 transition-transform" />
            </Link>

            <div className="bg-indigo-950 px-4 py-2 border-2 border-amber-50 rounded-xl shadow-md hover:bg-gray-700 hover:scale-105 transition-transform">
              <Link to="login" className="text-lg md:text-xl text-amber-50">
                เข้าสู่ระบบ 👤
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Napbar;
