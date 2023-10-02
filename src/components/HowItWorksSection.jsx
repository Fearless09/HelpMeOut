import Vector from '../assets/Vector.svg'
import skeleton from '../assets/skeleton.png'

function HowItWorksSection() {
    return (
        <section className='px-3 py-28 mt-[70px] bg-white'>
            <div className="container mx-auto text-center">
                <h1 className="font-bold font-['Sora'] text-4xl">How it works</h1>
                <div className="mt-[59px] lg:flex items-center justify-evenly gap-5">
                    {/* 1 */}
                    <div className='max-w-[358px] w-full mx-auto'>
                        <div className="rounded-full mx-auto w-[67px] h-[67px] flex items-center justify-center bg-[#120B48] text-white font-bold font-['Inter'] text-2xl">1</div>
                        <h5 className="text-[#1B233D] mt-8 font-semibold font-['Inter'] text-xl">Record Screen</h5>
                        <p className='mt-4 text-[#616163] font-normal font-work-sans text-sm'>Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
                        <img src={skeleton} className='mt-7 w-full' alt="" />
                    </div>
                    {/* 2 */}
                    <div className='max-w-[358px] w-full mx-auto mt-[59px] lg:mt-0'>
                        <div className="rounded-full mx-auto w-[67px] h-[67px] flex items-center justify-center bg-[#120B48] text-white font-bold font-['Inter'] text-2xl">2</div>
                        <h5 className="text-[#1B233D] mt-8 font-semibold font-['Inter'] text-xl">Share Your Recording</h5>
                        <p className='mt-4 text-[#616163] font-normal font-work-sans text-sm'>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
                        <img src={skeleton} className='mt-7 w-full' alt="" />
                    </div>
                    {/* 3 */}
                    <div className='max-w-[358px] w-full mx-auto mt-[59px] lg:mt-0'>
                        <div className="rounded-full mx-auto w-[67px] h-[67px] flex items-center justify-center bg-[#120B48] text-white font-bold font-['Inter'] text-2xl">3</div>
                        <h5 className="text-[#1B233D] mt-8 font-semibold font-['Inter'] text-xl">Learn Effortlessly</h5>
                        <p className='mt-4 text-[#616163] font-normal font-work-sans text-sm'>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
                        <img src={skeleton} className='mt-7 w-full' alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorksSection
