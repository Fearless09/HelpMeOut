import { Link, useNavigate } from "react-router-dom"
import helpLogo from '../assets/help-icon.svg'
import profileCircle from '../assets/profileCircle.svg'
import arrowDown from '../assets/arrowDown.svg'
import editSvg from '../assets/edit.svg'
import WEBCARDLG from '../assets/WEBCARDLG.png'
import copyIcon from '../assets/copy.svg'
import facebookIcon from '../assets/facebook.svg'
import whatsappIcon from '../assets/whatsapp.svg'
import telegramIcon from '../assets/telegram.svg'
import { useEffect, useState } from "react"
import { HiOutlineLogout } from 'react-icons/hi'
import Footer from "../components/Footer"

function VideoPage() {
    const [editable, setEditable] = useState(false)
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


    const navigate = useNavigate()
    return (
        <div className='px-0 m-0 bg-white'>
            <div className="container mx-auto mt-10 px-3">
                <nav className='flex justify-between items-center py-2'>
                    <Link to={'/home'} className='flex items-center py-2 gap-2'>
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
                <div className="mt-10">
                    <p className="flex gap-2 items-center text-[#141414B2] font-work-sans text-lg font-normal capitalize">
                        <span>Home</span>
                        <span>/</span>
                        <span>Recent Videos</span>
                        <span>/</span>
                        <span className="font-medium text-[#413C6D]">How To Create A Facebook Ad Listing</span>
                    </p>
                </div>

                <div className="mt-8 flex items-center gap-6">
                    <h3 className={`capitalize font-['Sora'] text-2xl font-semibold py-2 ${editable && 'outline-slate-300 outline rounded'}`} contentEditable={editable}>How to create a facebook ad listing</h3>
                    <button onClick={() => setEditable(!editable)} ><img src={editSvg} alt="" /></button>
                </div>

                <div className="mt-8">
                    <img src={WEBCARDLG} className="w-full" alt="" />
                </div>

                <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-5">
                    <form className="py-[14px] px-6 flex items-center bg-[#B6B3C680] rounded-xl lg:max-w-[550px] w-full gap-1">
                        <input type="email" placeholder="enter email of receiver" className="py-[6px] text-lg font-work-sans font-normal text-[#141414] bg-transparent flex-auto focus-visible:outline-[#605C84]" required />
                        <button type="submit" className="py-[10px] px-[18px] bg-[#605C84] text-white text-base font-['Manrope'] font-medium rounded-lg active:scale-[0.98] active:bg-[#373166]">Send</button>
                    </form>
                    <div className="flex justify-between items-center rounded-xl bg-[#FAFAFA] py-[14px] px-3 lg:max-w-[600px] w-full flex-wrap">
                        <p className="font-work-sans text-base font-normal text-[#4B4B4B]">https://www.helpmeout/Untitled_Video_20232509</p>
                        <button className="py-[10px] px-[18px] flex gap-2 items-center justify-center rounded-lg border border-[#120B48] text-[#120B48] active:scale-[0.98] active:bg-[#e8e7ebec]">
                            <img src={copyIcon} className="w-[20px] h-[20px]" alt="" />
                            <span className="text-base font-medium font-['Manrope']">Copy URL</span>
                        </button>
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="font-work-sans text-xl font-medium text-[#08051E]">Share your video</h3>
                    <div className="flex gap-4 items-center mt-4">
                        {/* Facebook */}
                        <button className="flex items-center justify-center gap-2 rounded-md border border-[#0A0628] py-3 px-4 active:scale-[0.98] active:bg-[#faf8f8]">
                            <img src={facebookIcon} alt="" />
                            <span>Facebook</span>
                        </button>
                        {/* Whatsapp */}
                        <button className="flex items-center justify-center gap-2 rounded-md border border-[#0A0628] py-3 px-4 active:scale-[0.98] active:bg-[#faf8f8]">
                            <img src={whatsappIcon} alt="" />
                            <span>Whatsapp</span>
                        </button>
                        {/* Telegram */}
                        <button className="flex items-center justify-center gap-2 rounded-md border border-[#0A0628] py-3 px-4 active:scale-[0.98] active:bg-[#faf8f8]">
                            <img src={telegramIcon} alt="" />
                            <span>Telegram</span>
                        </button>
                    </div>
                </div>

                <div className="mt-16 mb-20">
                    <h4 className="font-work-sans text-xl font-medium text-[#000000]">Transcript</h4>
                    <button className="w-max flex gap-8 items-center p-4 mt-4 rounded border border-[#CFCFCF]">
                        <span>English</span>
                        <img src={arrowDown} className="w-4 h-4" alt="" />
                    </button>
                    <div className="mt-10 h-[400px] overflow-x-hidden overflow-y-auto">
                        <div className="flex items-start gap-10 font-work-sans">
                            <span className="w-16 text-center text-[22px] font-medium text-[#141414]">0.01</span>
                            <p className="max-w-[1028px] w-full text-xl font-normal text-[#000000]">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</p>
                        </div>
                        <div className="flex items-start gap-10 font-work-sans mt-10">
                            <span className="w-16 text-center text-[22px] font-medium text-[#141414]">0.15</span>
                            <p className="max-w-[1028px] w-full text-xl font-normal text-[#000000]">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the . Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-ha</p>
                        </div>
                        <div className="flex items-start gap-10 font-work-sans mt-10">
                            <span className="w-16 text-center text-[22px] font-medium text-[#141414]">0.30</span>
                            <p className="max-w-[1028px] w-full text-xl font-normal text-[#000000]">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</p>
                        </div>
                        <div className="flex items-start gap-10 font-work-sans mt-10 text-[#CFCFCF]">
                            <span className="w-16 text-center text-[22px] font-medium">1.00</span>
                            <p className="max-w-[1028px] w-full text-xl font-normal">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</p>
                        </div>
                        <div className="flex items-start gap-10 font-work-sans mt-10 text-[#CFCFCF]">
                            <span className="w-16 text-center text-[22px] font-medium">1.15</span>
                            <p className="max-w-[1028px] w-full text-xl font-normal">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default VideoPage
