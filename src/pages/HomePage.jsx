import { Link, useNavigate } from 'react-router-dom'
import helpLogo from '../assets/help-icon.svg'
import Footer from '../components/Footer'
import profileCircle from '../assets/profileCircle.svg'
import arrowDown from '../assets/arrowDown.svg'
import searchNormal from '../assets/searchNormal.svg'
import WEBCARD from '../assets/WEBCARD.png'
import WEBCARD2 from '../assets/WEBCARD2.png'
import { HiOutlineLogout } from 'react-icons/hi'
import { useState, useEffect } from 'react'

function HomePage() {
    const navigate = useNavigate()
    const [isLogout, setIsLogout] = useState(false)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setIsLogout(false)
        }, 4000);
    }, [isLogout])

    return (
        <div className='bg-white p-0 m-0'>
            <div className="container mx-auto mt-10 px-3">
                <nav className='flex justify-between items-center py-2'>
                    <Link to={'/home'} className='flex items-center p-[10px] gap-2'>
                        <img src={helpLogo} alt="" />
                        <span className="font-bold text-base font-['Inter'] text-[#100A42]">HelpMeOut</span>
                    </Link>

                    <div className='relative'>
                        <button className='flex items-center gap-2' onClick={() => setIsLogout(!isLogout)}>
                            <img src={profileCircle} alt="" />
                            <h3>John Mark</h3>
                            <img src={arrowDown} alt="" />
                        </button>
                        {isLogout && <button onClick={() => navigate('/login')} className='flex items-center gap-2 bg-red-800 text-white py-2 px-3 rounded-lg absolute right-0 top-11 active:scale-[0.98]'>
                            <h3>Sign Out</h3>
                            <HiOutlineLogout color='white' size={'24px'} />
                        </button>}
                    </div>
                </nav>

                <header className='sm:flex justify-between items-center mt-10 mb-11'>
                    <div className='text-center sm:text-left'>
                        <h1 className="text-[#141414] font-['Sora'] font-bold text-[32px]">Hello, John Mark</h1>
                        <p className='mt-2 text-[#141414B2] font-work-sans font-normal text-lg'>Here are your recorded videos</p>
                    </div>

                    <div className='mt-10 sm:mt-0 relative'>
                        <input type="search" className='py-6 ps-[60px] pe-10 rounded-xl border border-[#E7E7ED] bg-[#B6B3C624] text-[#C3C3C3] font-work-sans font-normal text-sm w-full md:w-[400px]' placeholder='Search for a particular video' />
                        {/* search icon at ps-[24px] */}
                        <img src={searchNormal} className='absolute left-6 top-1/2 translate-y-[-50%]' alt="" />
                    </div>
                </header>
            </div>

            <div className='w-screen h-[1px] bg-[#0000001A] mb-20 shadow-sm'></div>

            <div className="container mx-auto mt-10 px-3">
                <h5 className='font-work-san font-medium text-lg text-[#141414CC]'>Recent files </h5>

                <div className="mt-6 md:grid md:grid-cols-2 items-center justify-evenly gap-16">
                    <div>
                        <Link to={`/video`}>
                            <img src={WEBCARD} className='w-full' alt="" />
                        </Link>
                    </div>
                    <div className='mt-10 md:mt-0'>
                        <Link to={`/video`}>
                            <img src={WEBCARD2} className='w-full' alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mx-auto my-10 px-3">
                <h5 className='font-work-san font-medium text-lg text-[#141414CC]'>Files from last week</h5>

                <div className="mt-6 md:grid md:grid-cols-2  items-center gap-16">
                    <Link to={`/video`}>
                        <img src={WEBCARD} className='w-full' alt="" />
                    </Link>
                    <Link to={`/video`}>
                        <img src={WEBCARD2} className='w-full' alt="" />
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default HomePage
