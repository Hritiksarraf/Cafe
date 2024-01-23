import React from 'react'
import Biryani from "../../assets/biryani2.png"

const servicesDate = [
    {
        id:1,
        img:Biryani,
        name:"Biryani",
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla officia facilis reiciendis quibusdam ex unde eius natus"
    },
    {
        id:2,
        img:Biryani,
        name:"Biryani",
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla officia facilis reiciendis quibusdam ex unde eius natus"
    },
    {
        id:3,
        img:Biryani,
        name:"Biryani",
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla officia facilis reiciendis quibusdam ex unde eius natus"
    }
]

export default function Services() {
    return (
        <>
            <div className='py-16 dark:bg-gray-900 '>
                <div className='container'>
                    <div className='max-w-[400px] mb-40 text-center mx-auto'>
                        <p className='text-sm mx-auto bg-gradient-to-r text-transparent bg-clip-text from-primary to-secondary '>Our Services</p>
                        <h1 className='text-3xl dark:text-white'>Services</h1>
                        <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla officia facilis reiciendis quibusdam ex unde eius natus libero earum labore, id suscipit minus sapiente, ullam provident. Magnam a error, laudantium ad unde deserunt molestias!</p>

                    </div>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 gap-14 md:gap-5  md:grid-cols-3   place-items-center'>
                        {servicesDate.map(({id, img, name, discription})=>{
                            return (
                            <div key={id} className='my-12 justify-between dark:hover:bg-primary max-w-[300px] group  hover:bg-primary dark:text-white  dark:bg-gray-800 hover:text-white rounded-2xl shadow-xl '>
                                <div className='h-[100px]'>
                                    <img src={img} alt="" className='max-w-[200px] transform group-hover:scale-105 group-hover:rotate-6 duration-300 -translate-y-16 mx-auto ' />
                                </div>
                                <div className='text-center p-4 '>
                                    <h1 className='text-xl font-bold'>{name}</h1>
                                    <p className='text-gray-500 text-sm group-hover:text-white line-clamp-2'>{discription}</p>
                                </div>
                            </div>
                        )})}
                    </div>


                </div>
            </div>
        </>
    )
}
