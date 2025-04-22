import React from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

function Productcard({name="trial", id, price, stock, category, isactive}) {


    const dltproduct = ()=>{
        axios.delete(`http://localhost:4000/api/v1/dltproduct?id=${id}`)
        .then((res)=>{
            toast.success('Product deleted successfully');
        })
        .catch((err)=>{
            toast.error(err);
        })
    }

  return (
    

    <div className='text-white w-full my-1 bg-blue-300 flex justify-between items-center px-6 py-1'>
            <div className='w-full pr-6'>
                <div className='font-bold text-xl'>{name}</div>
                <div className='flex justify-between w-full'>
                    <span className='text-sm'>price:{price}</span>
                    <span className='text-sm'>stock:{stock}</span>
                    <span className='text-sm'>category:{category}</span>
                </div>
            </div>
            <div className='flex gap-2'>
                <button className='rounded p-1 bg-blue-500 text-white'>update</button>
                <button onClick={dltproduct} className='rounded p-1 bg-red-500 text-white'>delete</button>
            </div>
    </div>
  )
}

export default Productcard