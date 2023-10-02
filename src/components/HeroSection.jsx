import React from 'react'
import AdobeStock1 from '../assets/AdobeStock1.png'
import AdobeStock2 from '../assets/AdobeStock2.png'
import AdobeStock3 from '../assets/AdobeStock3.png'
import beforeGrid from '../assets/beforegrid.svg'
import afterGrid from '../assets/aftergrid.svg'
import arrowRight from '../assets/arrowRight.svg'
import { useNavigate } from 'react-router-dom'

function HeroSection() {
    const navigate = useNavigate()
    return (
        <section className='px-3 py-[165px] bg-white overflow-hidden'>
            <div className="container mx-auto grid lg:grid-cols-2 gap-28 lg:gap-0 items-center">
                <div className='text-center lg:text-left' >
                    <h1 className="mx-auto lg:mx-0 max-w-[468px] w-full font-bold font-['Sora'] text-[64px] text-[#141414]">Show Them Don't Just Tell</h1>
                    <p className="mx-auto lg:mx-0 max-w-[548px] w-full mt-5 text-xl font-normal font-['Inter'] text-[#000000BF]">Help your friends and loved ones by creating and sending videos on how to get things done on a website</p>
                    <button className='mx-auto lg:mx-0 py-[22px] px-6 mt-12 rounded-lg bg-[#120B48] text-white flex items-center justify-center gap-3 text-lg font-medium font-work-sans active:scale-[0.99] active:bg-[#190b86] hover:bg-[#190b86]' onClick={() => navigate('/install')}>
                        <span>Install HelpMeOut</span>
                        <img src={arrowRight} alt="" />
                    </button>
                </div>
                <div className='relative grid grid-cols-2 gap-3'>
                    <img src={beforeGrid} className='absolute top-[-3.7rem] right-[-3.1rem] z-[0]' alt="" />
                    <div className='grid gap-3'>
                        <img src={AdobeStock1} className='w-full h-full rounded-lg relative z-[1]' alt="" />
                        <img src={AdobeStock2} className='w-full h-full rounded-lg relative z-[1]' alt="" />
                    </div>
                    <div><img src={AdobeStock3} className='w-full h-full rounded-lg relative z-[1]' alt="" /></div>
                    <img src={afterGrid} className='absolute z-[0] bottom-[-5.6rem] left-[-3rem]' alt="" />
                </div>
            </div>

        </section>
    )
}

export default HeroSection
