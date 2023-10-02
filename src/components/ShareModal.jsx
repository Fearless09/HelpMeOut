import { Link } from 'react-router-dom';
import successKite from '../assets/success-kite.png'
import closeCirlce from '../assets/close-circle.svg'

function ShareModal({ emailText, onClose }) {
    return (
        <div className="w-screen h-full bg-[rgba(117,115,115,0.45)] absolute top-0 left-0 flex items-center justify-center">
            <div className="bg-white w-[598px] h-[876px] text-center rounded-3xl">
                <div className='relative mt-14 max-w-[370px] w-full mx-auto'>
                    <button onClick={onClose}><img src={closeCirlce} className='absolute top-2 right-[-40px] w-10 h-10' alt="" /></button>
                    <img src={successKite} className='mx-auto' alt="" />

                    <p className="font-work-sans font-normal text-2xl text-[#08051E] mt-10 break-words"><span>Your video link has been sent to</span><span className='ms-2 font-medium text-[#120B48]'>{emailText}</span></p>

                    <p className="font-work-sans text-lg font-normal text-[#141414] mt-[99px]">Would you need to view this video later? Save to your account now!</p>

                    <button className='mt-6 py-4 px-8 rounded-lg bg-[#120B48] text-[#F9F9FF] font-work-sans text-base font-medium'>Share Video</button>

                    <p className="font-['Sora'] text-base font-normal text-[#7E7E7E] mt-10">Don'nt have an account? <Link className='text-[#120B48] font-semibold' to={'/login'}>Create account</Link></p>
                </div>
            </div>
        </div>
    )
}

export default ShareModal;
