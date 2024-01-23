import React from 'react'
import isoimg from "../../assets/app_store.png"
import andriodimg from "../../assets/play_store.png"
import map from "../../assets/mobile_bike.gif"

export default function AppStore() {
    return (
        <>
            <div className='bg-gray-100 dark:bg-gray-800'>
                <div className='container'>
                    <div className='flex flex-col sm:flex-row justify-center items-center '>
                        <div className='w-1/2'>
                            <div>

                                <h1 className='text-4xl sm:text-5xl md:text-6xl dark:text-white lg:text-7xl text-center'> XFoody Now Available in Andriod and Ios</h1>
                            </div>
                            <div className='flex w-1/2  '>
                                <img src={andriodimg} alt="" className='h-12 md:h-20 sm:h-16' />
                                <img src={isoimg} alt="" className='h-12 sm:h-16 md:h-20 '/>
                            </div>
                        </div>
                        <div className='mx-auto p-4 w-1/2'>
                            <img src={map} alt="" className='mx-auto left-0 ' />
                        </div>
                    </div>

                </div>
            </div> 
        </>
    )
}
