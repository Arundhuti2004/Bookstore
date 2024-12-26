import React from 'react';
import list from "../components/list.json";
import Cards from "../components/Cards.jsx";
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
       <div className="mt-28 items-center justify-center text-center">
        <h1 className='text-2xl md:text-4xl  dark:bg-white dark:text-black '>We're delighted to have you <span className='text-pink-500'>here! :)</span></h1>
        <p className='mt-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, itaque ipsam sint architecto accusamus molestiae quaerat dolor consectetur laborum repudiandae obcaecati consequatur officia, perferendis vitae, porro illum facilis assumenda? Omnis iusto corrupti vel consequatur? Maxime veniam voluptate, unde expedita sapiente mollitia ullam earum aperiam facere magni. Minima nobis et praesentium ipsa, eum reprehenderit vitae omnis quasi, accusantium fuga dolorum amet earum magni rem sunt illum ad quidem commodi assumenda nemo ipsam. Dolore corrupti aliquid dolores facere suscipit necessitatibus! Ut quos deleniti atque consequuntur delectus voluptatum sint numquam obcaecati corporis ex?</p>
        <Link to="/">
        <button className='bg-pink-500 text-white px-2 py-2 rounded mt-6 hover:bg-pink-700 duration-200'>Back</button>
        </Link>
    
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
           {
            list.map((item)=>(
                <Cards key={item.id} item={item}/>
            ))
           }
        </div>
    </div>
    </div>
    </>
  )
}

export default Course
