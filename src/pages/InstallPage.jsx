import helpLogo from '../assets/help-icon.svg'
import verify from '../assets/verify.svg'
import medal from '../assets/medal.svg'
import Star from '../assets/Star.svg'
import infoCircle from '../assets/infoCircle.svg'
import Frame from '../assets/Frame.png'
import Arrow from '../assets/arrow.svg'
import Arrow1 from '../assets/arrow-1.svg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function InstallPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [])
    return (
        <>
            <div className='container mx-auto mt-20 px-3'>
                <section>
                    <header className="flex justify-between items-start pb-12 border-b">
                        <div className='flex items-start gap-6'>
                            <Link to={'/'}>
                            <img src={helpLogo} className='w-20 h-20' alt="" />
                            </Link>
                            {/* Home */}
                            <div>
                                <Link to={'/'} className="font-['Sora'] text-5xl font-semibold text-[#000000]">HelpMeOut</Link>
                                <div className='flex items-center gap-5 text-[#0E75C5] font-work-sans text-xl font-medium mt-4'>
                                    <p className='flex items-center gap-2'>
                                        <img src={verify} alt="" />
                                        Helpmeout.com
                                    </p>
                                    <p className='flex items-center gap-2'>
                                        <img src={medal} alt="" />
                                        Featured
                                    </p>
                                </div>
                                {/* Stars */}
                                <div className='mt-6 flex items-center gap-3'>
                                    <span className='flex items-center gap-2 pe-3 border-e border-black'>
                                        <span className='flex items-center gap-1'>
                                            <img src={Star} alt="" />
                                            <img src={Star} alt="" />
                                            <img src={Star} alt="" />
                                            <img src={Star} alt="" />
                                            <img src={Star} alt="" />
                                        </span>
                                        252
                                        <img src={infoCircle} alt="" />
                                    </span>
                                    <span className='px-3 font-work-sans text-lg font-normal text-[#0E75C5] border-e border-black'>Productivity</span>
                                    <span className="text-[#606060] px-3 font-work-sans font-normal text-lg">80,000+ users</span>

                                </div>
                            </div>
                        </div>
                        <button className="py-3 px-4 rounded text-white bg-[#0E75C5] font-work-sans font-medium text-lg">Add to Chrome</button>
                    </header>
                    <div className='my-10 flex justify-center items-center gap-10 font-work-sans text-xl font-medium'>
                        <button className='shadow-lg py-3 px-4 rounded-3xl text-[#0E75C5]'>Overview</button>
                        <button className='text-[#606060]'>Privacy practices</button>
                        <button className='text-[#606060]'>Review</button>
                        <button className='text-[#606060]'>Related</button>
                    </div>
                </section>
               
            </div>
            <section className='pt-11 bg-[#F0F0F0]'>
                <div className='container mx-auto flex items-center gap-8'>
                    <button><img src={Arrow1} alt="" /></button>
                    <span>
                        <img src={Frame} alt="" />
                    </span>
                    <button><img src={Arrow} alt="" /></button>
                </div>
            </section>
        </>
    )
}

export default InstallPage
