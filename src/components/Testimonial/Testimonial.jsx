import React from 'react'
import img from "../../assets/dog.jpg"
import Slider from "react-slick"

const TestimonialData =[
    {
        id:1,
        name:"Hritik",
        text:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet  consectetur adipisicing elit. Doloribus nulla officia",
        img:img
    },
    {
        id:1,
        name:"Hritik",
        text:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla officia",
        img:img
    },
    {
        id:1,
        name:"Hritik",
        text:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla officia",
        img:img
    },
    {
        id:1,
        name:"Hritik",
        text:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla officia",
        img:img
    }
]



export default function Testimonial() {
    var settings ={
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    }
    return (
        <>
            <div className="dark:bg-gray-800 py-10">
                <div className='container' >
                    <div className='max-w-[400px]  mb-40 text-center mx-auto'>
                        <p className='text-sm mx-auto bg-gradient-to-r text-transparent bg-clip-text from-primary to-secondary '>Our Services</p>
                        <h1 className='text-3xl dark:text-white'>Services</h1>
                        <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla officia facilis reiciendis quibusdam ex unde eius natus libero earum labore, id suscipit minus sapiente, ullam provident. Magnam a error, laudantium ad unde deserunt molestias!</p>
                    </div>
                    <div className='grid grid-cols-1 max-w-[600px] mx-auto gap-6 '>
                        <Slider {...settings}>
                            {TestimonialData.map(({id,img,name,text})=>{
                                return(
                                    <>
                                    <div key={id} className='relative dark:bg-gray-950 dark:text-white my-6  shadow-lg flex flex-col bg-primary/10 px-10 '>
                                        <div className='block w-24 h-24 mx-auto rounded-full pt-4'>
                                            <img src={img} alt="" className='rounded-full h-24 w-24' />
                                        </div>
                                        <div className='flex flex-col items-center text-center mt-10'>
                                            <p className='text-sm text-gray-500'>{text}</p>
                                            <p className='text-xl font-bold my-4'>{name}</p>
                                            <p className='absolute top-0 right-0 dark:text-gray-400  text-9xl font-serif text-black/20'>,,</p>
                                        </div>
                                    </div>
                                    </>
                                )
                            })}
                        </Slider >

                    </div>
                </div>
            </div>
        </>
    )
}
