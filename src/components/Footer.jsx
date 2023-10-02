import { useNavigate } from 'react-router-dom'
import footerLogo from '../assets/footerLogo.svg'

function Footer() {
    const navigate = useNavigate()
    return (
        <footer className='bg-[#120B48] px-3 py-[98px] text-white'>
            <div className="container mx-auto md:flex items-start justify-between">
                <button className='flex items-center justify-center p-[10px] gap-2 w-full md:w-auto'>
                    <img src={footerLogo} alt="" />
                    <span className='font-bold text-base font-[Inter]'>HelpMeOut</span>
                </button>

                <div className='flex md:w-[65%] justify-around gap-10 mt-[70px] md:mt-0'>
                    {/* Menu */}
                    <ul className='font-[Sora] font-normal text-base'>
                        <li className='mb-[26px]'><a  className='font-semibold'>Menu</a></li>
                        <li><a >Home</a></li>
                        <li className='my-6'><a >Converter</a></li>
                        <li><a >How it Works</a></li>
                    </ul>
                    {/* About US */}
                    <ul className='font-[Sora] font-normal text-base'>
                        <li className='mb-[26px]'><a  className='font-semibold'>About US</a></li>
                        <li><a >About</a></li>
                        <li className='my-6'><a >Contact US</a></li>
                        <li><a >Privacy Policy</a></li>
                    </ul>
                    {/* Screen Record */}
                    <ul className='font-[Sora] font-normal text-base'>
                        <li className='mb-[26px]'><a  className='font-semibold'>Screen Record</a></li>
                        <li><a >Browser Window</a></li>
                        <li className='my-6'><a >Desktop</a></li>
                        <li><a >Applications</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
