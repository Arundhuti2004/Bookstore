import React from 'react';
import list from "../components/list.json";
import Slider from "react-slick";
import Cards from "../components/Cards"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Freebooks(){
    const filterData = list.filter((data) => data.category === "Free");
     

    
        var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
        <h1 className='font-semibold text-xl pb-2' >Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio amet nisi voluptates aliquid officiis iusto. Eveniet eius a dolore atque vel nemo veritatis consequuntur tempore? Possimus dolor sapiente illum exercitationem. Reiciendis neque optio inventore accusantium fuga? Eius molestiae sapiente corrupti deleniti earum, delectus at quo corporis modi ex sunt vel?</p>
        </div>
   

    <div >
    <Slider {...settings}>
        {filterData.map((item) => (
            <Cards item= {item} key={item.id} />
        ))}
      </Slider>
    </div>
    </div>
    
    </>
  );
}


export default Freebooks;
