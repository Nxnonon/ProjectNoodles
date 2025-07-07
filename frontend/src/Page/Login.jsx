import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex justify-center items-center my-30'>
      <div className='h-170 w-120 bg-amber-400 shadow-lg shadow-black rounded-3xl'>
          <div className='h-55 w-120 bg-stone-700 rounded-t-3xl'>
            <p className='text-center pt-15 text-5xl text-amber-50 text-shadow-lg/30'>ยินดีต้อนรับ</p>
            <p className='text-center text-3xl pt-5 text-amber-50 text-shadow-lg/30'>กรุณากรอกข้อมูล</p>
          </div>
          <div className='h-115 w-120 bg-stone-400 rounded-b-3xl'>
            <form className='pt-10 text-center' action="">
              <label className='text-amber-50 text-2xl flex justify-start ml-15 text-shadow-lg/30' htmlFor="Username">ชื่อผู้ใช้งาน :</label><br />
              <input className='h-8 w-60 border-2 rounded-md text-amber-50' type="text" name="username" id="username" /><br /><br />
              <label className='text-amber-50 text-2xl flex justify-start ml-15 text-shadow-lg/30' htmlFor="Password">รหัสผ่าน :</label><br />
              <input className='h-8 w-60 border-2 rounded-md text-amber-50' type="password" name="password" id="password" /><br /><br /><br />
              <input className='h-8 w-40 border-2 rounded-md text-amber-50 bg-stone-600 shadow-lg shadow-black' type="submit" value="Submit" />
            </form>
            <div className='my-15 text-center'>
            <Link to='/register' className=' text-2xl'> ลงทะเบียน </Link>
            </div>
          </div>
        </div>
        <Outlet></Outlet>
      </div>  
    
  )
}

export default Login
