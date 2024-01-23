import React from 'react'
import bgImg from "../../assets/vector3.png"
import Food1 from "../../assets/biryani2.png"
import Food2 from "../../assets/biryani3.png"
import Food3 from "../../assets/biryani5.png"
import {FaCartShopping} from "react-icons/fa6"

const imageList = [
    {
        id : 1,
        img : Food1
    },
    {
        id : 2,
        img : Food2
    },
    {
        id : 3,
        img : Food3
    },
];

export default function Hero() {

    
    
    const bgImage = {
        backgroundImage : `url(${bgImg})`,
        backgroundPosition : "center",
        backgroundSize : "cover",
        backgroundRepeat : "no-repeat",
        width : "100%",
        height : "100%"
    }

    
        const [imageId , setImageId] = React.useState(Food2);
    

  return (
    <>
    <div style={bgImage}
    className=' min-h-[550px]
    sm:min-h-[600px] bg-gray-100 dark:bg-gray-950
    dark:text-white duration-200 flex justify-center items-center'
    >
        <div className='container pb-8 sm:pb-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2 '>
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                    <h1 className='text-5xl sm:text-6xl lg:text7xl font-bold'>Welcome to the Foodies Zone</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi minus tempora atque magnam facilis incidunt repudiandae quae porro ipsum, iure quod hic dignissimos repellendus eos!</p>
                    <button className='flex w-24 items-center gap-2 text-white bg-gradient-to-r  from-primary to-secondary py-1 px-4 rounded-full  hover:scale-105 duration-200 '>Order
                    <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                    </button>
                </div>
                <div className='order-1  sm:order-2 relative min-h-[450px] sm:min-h-[450px] flex items-center justify-center '>
                    <div>
                        <img src={imageId} alt="" className='w-[350px] sm:w-[450px] mx-auto spin '/>
                    </div>
                    <di className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full'>
                        {imageList.map( (item) =>(
                            <img alt="" key={item.id} src={item.img} className='max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200'
                            onClick={() => {
                                setImageId(item.img);
                              }}
                            />
                        ))}
                    </di>
                    
                </div>

            </div>

        </div>

    </div>
    </>
  )
}
