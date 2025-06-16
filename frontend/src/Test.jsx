import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArchiveX } from 'lucide-react';


const Test = () => {
    const handleclick = () => {
        console.log("navigate");
        
    }
  return (
    <div>
        <p className='text-red-600 text-9xl'>ฉันรักเสียวอยู่</p><br />
        <button className='h-19 w-3xl bg-amber-700 rounded-4xl'onClick={handleclick}>click me</button>
        <ArchiveX></ArchiveX>
    </div>
  )
}

export default Test
