import { Link } from 'react-router-dom'
import { IoMdMenu } from 'react-icons/io'
import helpLogo from '../assets/help-icon.svg'

function Navbar() {
    return (
        <nav className='shadow-sm bg-white border-b p-3'>
            <div className="container mx-auto flex items-center justify-between gap-4">
                <Link to={'/'} className='flex items-center p-[10px] gap-2'>
                    <img src={helpLogo} alt="" />
                    <span className="font-bold text-base font-['Inter'] text-[#100A42]">HelpMeOut</span>
                </Link>

                <ul className='hidden sm:flex justify-center items-center gap-10 py-[10px] px-5 text-base font-medium font-work-sans text-black'>
                    <li className=''><a href="#">Features</a></li>
                    <li className=''><a href="#">How It Works</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <Link to={'/login'} className="text-[#120B48] py-3 px-[10px] font-semibold text-lg font-['Sora']">Get Started</Link>
                    <button className='sm:hidden px-2 py-1 rounded-md border-2 border-[#100A42] active:scale-[0.95]'><IoMdMenu size={'24px'} color='#100A42' /></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
