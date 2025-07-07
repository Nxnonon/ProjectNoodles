import React from "react";
import { Link, Outlet } from 'react-router-dom'


const Main1 = () => {
  return (
    <main>
      <div className="flex justify-center items-center my-35">
        <div1 className="bg-gray-700 inset-shadow-sm inset-shadow-gray-950 h-220 w-320 rounded-2xl shadow-lg shadow-gray-900 ">
          {/* สร้างเมนูร้าน */}
          <div className="flex justify-center items-center my-15">
            <p className="text-3xl text-amber-50 text-shadow-lg/30">
              🌸 เมนูแนะนำของร้าน 🌸
            </p>
          </div>

          {/* ที่อยู่ของรูปแถวแรก */}
          <div className="flex gap-20 my-15 justify-center items-center">
            <div className="bg-stone-500 h-70 w-80 rounded-2xl shadow-lg shadow-gray-900 hover:bg-stone-700">
              <img
                className="h-45 w-80 rounded-t-2xl"
                src="noodle1.jpg"
                alt=""
              />
              <p className="flex justify-center items-center my-3.5 text-amber-50 text-xl">
                ก๋วยเตี๋ยวหมูต้มยำรสเด็ด
              </p>
              <p className="flex justify-center items-center text-amber-50 text-xl">
                50 บาท
              </p>
            </div>
            <div className="bg-stone-500 h-70 w-80 rounded-2xl shadow-lg shadow-gray-900 hover:bg-stone-700">
              <img
                className="h-45 w-80 rounded-t-2xl"
                src="noodle2.jpg"
                alt=""
              />
              <p className="flex justify-center items-center my-3.5 text-amber-50 text-xl">
                ก๋วยเตี๋ยวหมูต้มยำรสเด็ด
              </p>
              <p className="flex justify-center items-center text-amber-50 text-xl">
                50 บาท
              </p>
            </div>
            <div className="bg-stone-500 h-70 w-80 rounded-2xl shadow-lg shadow-gray-900 hover:bg-stone-700">
              <img
                className="h-45 w-80 rounded-t-2xl"
                src="noodle3.jpg"
                alt=""
              />
              <p className="flex justify-center items-center my-3.5 text-amber-50 text-xl">
                ก๋วยเตี๋ยวหมูต้มยำรสเด็ด
              </p>
              <p className="flex justify-center items-center text-amber-50 text-xl">
                50 บาท
              </p>
            </div>
          </div>

          {/* ที่อยู่ของรูปแถวสอง */}
          <div className="flex gap-20 my-15 justify-center items-center ">
            <div className="bg-stone-500 h-70 w-80 rounded-2xl shadow-lg shadow-gray-900 hover:bg-stone-700">
              <img
                className="h-45 w-80 rounded-t-2xl"
                src="noodle4.jpg"
                alt=""
              />
              <p className="flex justify-center items-center my-3.5 text-amber-50 text-xl ">
                ก๋วยเตี๋ยวหมูต้มยำรสเด็ด
              </p>
              <p className="flex justify-center items-center text-amber-50 text-xl">
                50 บาท
              </p>
            </div>
            <div className="bg-stone-500 h-70 w-80 rounded-2xl shadow-lg shadow-gray-900 hover:bg-stone-700">
              <img
                className="h-45 w-80 rounded-t-2xl"
                src="noodle5.jpg"
                alt=""
              />
              <p className="flex justify-center items-center my-3.5 text-amber-50 text-xl">
                ก๋วยเตี๋ยวหมูต้มยำรสเด็ด
              </p>
              <p className="flex justify-center items-center text-amber-50 text-xl">
                50 บาท
              </p>
            </div>
            <div className="bg-stone-500 h-70 w-80 rounded-2xl shadow-lg shadow-gray-900 hover:bg-stone-700">
              <img
                className="h-45 w-80 rounded-t-2xl"
                src="noodle6.jpg"
                alt=""
              />
              <p className="flex justify-center items-center my-3.5 text-amber-50 text-xl">
                ก๋วยเตี๋ยวหมูต้มยำรสเด็ด
              </p>
              <p  className="flex justify-center items-center text-amber-50 text-xl">
                50 บาท
              </p>
            </div>
          </div>
        </div1>
      </div>

      <div className="flex justify-end p-10">
          <Link to="order" className="flex justify-center items-center text-shadow-lg/30 h-20 w-70 bg-stone-500 text-amber-50 text-3xl rounded-2xl shadow-lg shadow-black hover:scale-105">สั่งก๋วยเตี๋ยว 🡆</Link>
      </div>
      <Outlet></Outlet>
    </main>
  )
};

export default Main1;
