import React from 'react';
import { Link } from "react-router-dom"
import Login from '../components/login.jsx';
import { useForm } from "react-hook-form";

function Signup() {

  const { register, 
        handleSubmit, 
        formState: { errors } 
      } = useForm();
  
    const onSubmit = data => console.log(data);
  return (
    <>
    <div className='flex h-screen items-center justify-center border-black'>
    <div  className="w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</Link>
   
    <h3 className="font-bold text-lg text-white">Signup</h3>

    <div className='mt-4 space-y-2 text-white'>
        <span>Name</span>
        <br />
        <input type="text" 
        placeholder='Enter your name'
        className='w-80 px-3 py-1 border rounded-md outliner-none '
        {...register("name", { required: true })}/>
        <br />
        {errors.name && <span className='text-sm text-red-700'>This field is required</span>}
    </div>


    <div className='mt-4 space-y-2 text-white '>
        <span>Email</span>
        <br />
        <input type="email" 
        placeholder='Enter your email'
        className='w-80 px-3 py-1 border rounded-md outliner-none '
        {...register("email", { required: true })}/>
        <br />
        {errors.email && <span className='text-sm text-red-700'>This field is required</span>}
    </div>

    <div className='mt-4 space-y-2 text-white '>
        <span>Password</span>
        <br />
        <input type="password" 
        placeholder='Enter your password'
        className='w-80 px-3 py-1 border rounded-md outliner-none '
        {...register("password", { required: true })}/>
        <br />
        {errors.password && <span className='text-sm text-red-700'>This field is required</span>}

        <div className='flex justify-around mt-4'>
            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
            <p className=' text-xl'>Have account? <button className='underline text-blue-500 cursor-pointer' onClick={()=>
      document.getElementById("my_modal_3").showModal()}>
                Login</button>
                <Login/>
                </p>
             
        </div>


    </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup
