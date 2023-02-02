import React from 'react'
import { FooterList } from './Data'
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook, FaChevronDown } from "react-icons/fa";

const Footer = () => {

    const data = FooterList.map((val) => {
        return (

            <ul className=' w-[50%] lg:w-[25%] mb-10'>
                {
                    val.map((items) => {
                        return (
                            <li className={`${items.textColor} mt-2`}>
                                {items.str}
                            </li>
                        )
                    })
                }</ul>
        )
    })

    return (
        <div className='w-full bg-[#23272a] text-white font-notoSans pt-20 pb-16'>

            <div className='max-w-[1260px] px-6 md:px-10 mx-auto w-full'>

                <div className='flex gap-14 flex-col md:flex-row md:justify-between'>

                    <div className='flex flex-col gap-6 w-full md:w-[37.5%] lg:w-3/12'>
                        <h1 className=' font-ginto text-[#404EED] text-4xl'>IMAGINE A PLACE</h1>
                        <div className='flex gap-2 items-center'>
                            <img src='/flag.png' className='w-6' />
                            <h4 className=' text-sm'>English, USA</h4>
                            <FaChevronDown size={12} />
                        </div>
                        <div className='flex gap-6'>
                            <FaTwitter size='24px' />
                            <FaInstagram size='24px' />
                            <FaYoutube size='24px' />
                            <FaFacebook size='24px' />
                        </div>


                    </div>

                    <div className='flex flex-wrap w-full md:w-[50%] lg:w-8/12'>
                        {data}
                    </div>
                </div>

                <div className='h-[1px] w-full bg-[#404EED]' />
                <div className='flex justify-between pt-10'>
                    <img src='/logo.svg' className=' w-32' />
                    <button className='bg-[#404EED] rounded-full py-[7px] px-4'>Sign Up</button>
                </div>



            </div>



        </div>
    )
}

export default Footer