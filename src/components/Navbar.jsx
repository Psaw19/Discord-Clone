import logo from '/logo.svg'
import { NavbarList } from './Data'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

    const data = NavbarList.map((val) => {
        return (
            <>
                <li className='text-base m-[10px] p-[10px] flex'>
                    <a className='m-auto hover:underline'>{val.str}</a>
                </li>
            </>
        )
    })

    return (
        <nav className='bg-[#404EED] font-ggSans w-full font-medium '>
            <div className=' flex mx-auto justify-between max-w-[1260px] h-[80px] px-6 md:px-10'>
                <div className='flex items-center'>

                    <img src={logo} className='h-[34px] cursor-pointer' />
                </div>
                <ul className=' hidden lg:flex text-white'>
                    {data}
                </ul>
                <div className='flex items-center lg:justify-end w-[120px] justify-between'>
                    <button className='text-sm flex justify-center items-center bg-white px-4 py-[7px] rounded-3xl font-normal transition-all duration-200  hover:drop-shadow-md hover:shadow-lg'>
                        <a>Login</a>

                    </button>
                    <GiHamburgerMenu size={30} className=' inline lg:hidden text-white' />

                </div>
            </div>

        </nav>
    )
}

export default Navbar