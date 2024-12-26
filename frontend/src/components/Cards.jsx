import React from 'react'

function Cards({ item }) {
  return (
    <>
    <div className='mt-4 my-3 p-3 '>
    <div className="card bg-base-100 w-92 shadow-xl min-h-[400px] hover:scale-105 duration-300 dark:bg-white dark:text-black">
  <figure>
    <img className='w-full h-48 object-cover'
      src={item.image}
      alt={item.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards;
