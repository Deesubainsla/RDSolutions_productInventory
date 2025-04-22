import React from 'react'
import {useForm} from 'react-hook-form'

function Addproduct() {

    const {register, handleSubmit, formState:{errors}} = useForm();

  return <>
        <div className='flex justify-center items-center'>
            <form  className='w-[60%]  rounded shadow-lg px-4 py-4 '>

            <div className='my-2'>
            <input id='name' type="text" {...register('name',{required: true})} placeholder="Name" className="input  border rounded w-full py-1 px-2" />
            {errors.name && <span className='text-red-500'>Name is required</span> }
            </div>

            <div className='my-2'>
            <input id='name' type="text" placeholder="Price" className="input  border rounded w-full py-1 px-2" />
            </div>

            <div className='my-2'>
            <input id='name' type="text" placeholder="Stock" className="input  border rounded w-full py-1 px-2" />
            </div>

            <div className='my-2'>
            <input id='name' type="text" placeholder="Active now" className="input  border rounded w-full py-1 px-2" />
            </div>

            <div className='my-2'>
            <select name="category" >
                <option value="">Select Options</option>
                <option value="Electric">Electric</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Study">Study</option>
            </select>
            </div>
            
            
           
            
            
           
            

            
           
            <div className='flex justify-center items-center'>
                <button type='submit' className='rounded text-white p-2 border bg-green-500'>Add Product</button>
            </div>
            </form>
        </div>
        
  </>
}

export default Addproduct