import { MainSection } from "./Data"

const Section = (props) => {

    const sections = MainSection.map((val) => {
        return (

            <div className={`w-full ${val.bgColor}`}>


                <div className={`flex mx-auto max-w-[1260px] flex-col ${val.disp} font-ggSans py-14 px-6 md:py-20 md:px-10 xl:py-[120px] gap-5 md:gap-0  md:justify-between`}>


                    <div className=" md:w-6/12 lg::w-7/12">
                        <img src={val.imgsrc} className='w-full' />
                    </div>

                    <div className=' md:w-6/12 lg:w-4/12 flex items-center'>

                        <div className=" flex flex-col gap-6 md:gap-10">
                            <h1 className='text-xl sm:text-[4vw] md:text-5xl font-bold sm:leading-[4vw] md:leading-tight font-Whitney'>{val.head}</h1>
                            <p className=' text-base md:text-[2vw] md:leading-[3vw] lg:text-xl'>{val.para}</p>
                        </div>

                    </div>

                </div>


            </div>

        )
    })

    return sections
}

export default Section