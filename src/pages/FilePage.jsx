import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoMdMenu } from 'react-icons/io'
import copyIcon from '../assets/copy.svg'
import editSvg from '../assets/edit.svg'
import helpLogo from '../assets/help-icon.svg'
import facebookIcon from '../assets/facebook.svg'
import whatsappIcon from '../assets/whatsapp.svg'
import telegramIcon from '../assets/telegram.svg'
import videoIcon from '../assets/video.png'
import arrowDown from '../assets/arrowDown.svg'
import Footer from '../components/Footer'
import ShareModal from '../components/ShareModal'

function FilePage() {
    const [editable, setEditable] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [emailText, setEmailTest] = useState('')

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [])

    function onClose() {
        setShowModal(false)
    }

    return (
        <div className='relative overflow-hidden'>
            {/* Modal */}
            {showModal && <ShareModal emailText={emailText} onClose={onClose} />}
            {/* NavBar */}
            <nav className='bg-white px-3 py-6 my-[10px]'>
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
            {/* GRID SECTION */}
            <section className='container mx-auto px-3 mt-10'>
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-0 lg:divide-x-2 items-start">
                    {/* First Grid Item */}
                    <div>
                        {/* Your Video is Ready */}
                        <h1 className="font-['Sora'] text-[45px] font-bold text-[#141414]">Your video is ready!</h1>
                        {/* Name & Edit Name */}
                        <p className='mt-10 text-base font-medium text-[#727272]'>Name</p>
                        <div className="mt-8 flex items-center gap-6">
                            <h3 className={`capitalize font-['Sora'] text-2xl font-semibold py-2 ${editable && 'outline-slate-300 outline rounded'}`} contentEditable={editable}>Untitled_Video_20232509</h3>
                            <button onClick={() => setEditable(!editable)} ><img src={editSvg} alt="" /></button>
                        </div>
                        {/* Send To Email Address */}
                        <form className="mt-16 py-3 px-6 flex items-center bg-[#B6B3C633] rounded-2xl lg:max-w-[550px] w-full gap-1" onSubmit={() => setShowModal(true)}>
                            <input type="email" placeholder="enter email of receiver" value={emailText} onChange={(event) => setEmailTest(event.target.value)} className="py-[6px] text-lg font-work-sans font-normal text-[#434343CC] bg-transparent flex-auto focus-visible:outline-[#605C84]" required />
                            <button type="submit" className="py-[10px] px-[18px] bg-[#605C84] text-white text-base font-['Manrope'] font-medium rounded-lg active:scale-[0.98] active:bg-[#373166]">Send</button>
                        </form>
                        {/* Copy Link */}
                        <h3 className="mt-16 text-[#141414] font-['Sora'] font-semibold text-xl">Video Url</h3>
                        <div className="mt-4 flex justify-between items-center rounded-2xl bg-[#FAFAFA] p-3 gap-3 lg:max-w-[580px] w-full border-[0.5px] border-[#929292] flex-wrap">
                            <p className="font-work-sans text-base font-normal text-[#4B4B4B] break-all">https://www.helpmeout/Untitled_Video_20232509</p>
                            <button className="py-[10px] px-[18px] flex gap-2 items-center justify-center rounded-lg border border-[#120B48] text-[#120B48] active:scale-[0.98] active:bg-[#e8e7ebec]">
                                <img src={copyIcon} className="w-[20px] h-[20px]" alt="" />
                                <span className="text-base font-medium font-['Manrope']">Copy URL</span>
                            </button>
                        </div>
                        {/* Share Your Video */}
                        <div className="mt-16">
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
                    </div>
                    {/* Second Grid Item */}
                    <div className='lg:ps-10'>
                        {/* Playing Video */}
                        <div>
                            <img src={videoIcon} className='w-full' alt="" />
                        </div>
                        {/* Transcript */}
                        <div className="mt-16">
                            {/* Languge */}
                            <h4 className="font-work-sans text-xl font-medium text-[#000000]">Transcript</h4>
                            <button className="w-max flex gap-8 items-center p-4 mt-4 rounded border border-[#CFCFCF]">
                                <span>English</span>
                                <img src={arrowDown} className="w-4 h-4" alt="" />
                            </button>
                            {/* The Transcript */}
                            <div className="mt-10 h-[350px] overflow-x-hidden overflow-y-auto">
                                <div className="flex items-start gap-10 font-work-sans">
                                    <span className="text-base font-normal text-[#141414]">0.01</span>
                                    <p className="max-w-[1028px] w-full text-base font-['Inter'] font-medium text-[#000000]">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</p>
                                </div>
                                <div className="flex items-start gap-10 font-work-sans mt-10">
                                    <span className="text-base font-normal text-[#141414]">0.15</span>
                                    <p className="max-w-[1028px] w-full text-base font-['Inter'] font-medium text-[#000000]">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the . Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-ha</p>
                                </div>
                                <div className="flex items-start gap-10 font-work-sans mt-10">
                                    <span className="text-base font-normal text-[#141414]">0.30</span>
                                    <p className="max-w-[1028px] w-full text-base font-['Inter'] font-medium text-[#000000]">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</p>
                                </div>
                                <div className="flex items-start gap-10 font-work-sans mt-10 text-[#CFCFCF]">
                                    <span className="text-base font-normal">1.00</span>
                                    <p className="max-w-[1028px] w-full text-base font-medium font-['Inter']">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</p>
                                </div>
                                <div className="flex items-start gap-10 font-work-sans mt-10 text-[#CFCFCF]">
                                    <span className="text-base font-normal">1.15</span>
                                    <p className="max-w-[1028px] w-full text-base font-medium font-['Inter']">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-16 bg-[#E7E7ED33] px-3'>
                <div className="max-w-[653px] w-full mx-auto py-12 text-center">
                    <p className="text-[#141414] font-semibold text-2xl font-['Sora']">To ensure the availability and privacy of your video, we recommend saving it to your account.</p>

                    <button className='my-10 py-4 px-8 rounded-lg bg-[#120B48] text-[#F9F9FF] font-work-sans text-base font-medium'>Share Video</button>
                    <p className="font-['Sora'] text-2xl font-semibold text-[#7E7E7E]">Don'nt have an account? <Link className='text-[#120B48]' to={'/login'}>Create account</Link></p>
                </div>
            </section>


            <br /><br />
            <Footer />
        </div>
    )
}

export default FilePage
