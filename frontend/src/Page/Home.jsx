import React from 'react'
import Napbar from '../component/Napbar'
import Main1 from '../component/Main1'




const Home = () => {
  return (
    <div className='min-h-screen min-w-full bg-cover bg-center bg-no-repeat object-cover' style={{ backgroundImage: 'url("https://media.istockphoto.com/id/938399580/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%AD%E0%B8%B1%E0%B8%A1%E0%B8%9E%E0%B8%A7%E0%B8%B2%E0%B9%83%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B9%84%E0%B8%97%E0%B8%A2.jpg?s=612x612&w=0&k=20&c=mZxonwKz8aSbfG8b4NackQDA62Ee6vOenOBQPCc_u34=")' }}>
      
      <Napbar/>
      <Main1/>
    </div>
  )
}

export default Home
