import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Cta = () => {
    return (
        <section className='W-full font-notoSans bg-[#f6f6f6] pb-20'>

            <div className='mx-auto w-full max-w-[1260px] flex flex-col items-center py-14 px-6 md:py-20 md:px-10 lg:pt-[120px] lg:pb-20 gap-6
            lg:gap-4'>

                <div className=' lg:w-10/12 flex gap-6 flex-col lg:items-center'>
                    <h1 className=' font-ginto text-xl sm:text-[4vw] sm:leading-[5vw] md:text-center lg:text-[40px]'>
                        RELIABLE TECH FOR STAYING CLOSE

                    </h1>
                    <p className=' text-base md:text-[2vw] md:leading-[3vw] md:text-center lg:text-xl'>
                        Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
                    </p>
                </div>

                <img src='/Image4.svg' className='w-full' />

            </div>

            <div className='flex flex-col items-center gap-10'>
                <div className='px-6 md:px-10 relative'>

                    <img src='/stars.svg' className="absolute -top-10 left-0" />
                    <h1 className='sm:text-center text-[32px] font-bold'>
                        Ready to start your journey?
                    </h1>
                </div>
                <button className='flex items-center text-white rounded-full gap-5 text-xl bg-[#404EED] py-4 px-8 hover:opacity-80 hover:drop-shadow-xl hover:shadow-xl transition-all duration-200'>
                    <FontAwesomeIcon icon={faDownload} />
                    Download for Windows

                </button>
            </div>
        </section>
    )
}

export default Cta