import React from 'react'
import image0 from '/Image0.svg'
import image1 from '/Image1.svg'
import image2 from '/Image2.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='overflow-hidden w-full bg-[#404EED] bg-no-repeat bg-bottom bg-cover relative'
            style={{ backgroundImage: `url(${image0})` }} >

            <div className='mx-auto w-full sm max-w-[1260px] px-6 py-14 md:px-10 md:py-[80px] lg:py-[120px] flex flex-col md:block' >

                <div className=' w-full md:w-[62.5%] lg:w-8/12 lg:mx-auto flex flex-col gap-10 py-14 px-6'>

                    <h1 className=' text-white text-[5vw] md:text-[56px] font-ginto z-[100] lg:text-center leading-[1]'>IMAGINE A PLACE...</h1>
                    <p className='text-white sm:text-base sm:leading-7 md:text-[2vw] lg:text-xl lg:text-center z-[100]'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>

                    <div className='flex lg:justify-center gap-5 z-[100] flex-wrap'>
                        <button
                            className=' font-ggSans bg-white rounded-full py-4 px-8 font-normal text-base sm:text-xl hover:text-[#404EED]'>
                            <FontAwesomeIcon icon={faDownload} className='mr-3' />
                            Download for Windows</button>
                        <button className='font-ggSans bg-black text-white rounded-full py-4 px-8 font-medium text-base sm:text-xl'>Open Discord in your browser</button>
                    </div>

                </div>
                <img src={image2} className='md:hidden ml-[-80px]' />

            </div>

            <div className=' hidden md:block w-full h-16 -z-50 ' />
            <div className='h-full w-full absolute bottom-0'>
                <div className='h-full w-full max-w-[1260px] mx-auto relative'>

                    <img src={image1} className='hidden lg:block absolute bottom-0 -right-[350px]' />
                    <img src={image2} className='hidden absolute bottom-0 lg:block -left-[400px]' />
                </div>

            </div>

            <img src={image1} className=' absolute right-[-41rem] bottom-0 hidden md:block mr-[60vw] lg:hidden' />

        </div>
    )
}

export default Header