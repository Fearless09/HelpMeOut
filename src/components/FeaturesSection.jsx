import VideoRepository from '../assets/VideoRepository.png'
import simple from '../assets/simple.svg'
import easy from '../assets/easy.svg'
import revisit from '../assets/revisit.svg'

function FeaturesSection() {
    return (
        <section className='px-3 py-20 mt-14 bg-white'>
            <div className="container mx-auto">
                <div className='text-center'>
                    <h1 className="font-bold font-['Sora'] text-4xl">Features</h1>
                    <h5 className='mt-2 text-[#616163] font-work-sans font-normal text-sm'>Key Highlights of Our Extension</h5>
                </div>
                <div className='mt-16 lg:flex items-center justify-evenly gap-5'>
                    <div>
                        {/* Simple Screen Recording */}
                        <div className='flex gap-4 items-start justify-center lg:justify-start'>
                            <img src={simple} alt="" />
                            <div>
                                <h3 className="font-['Inter'] font-semibold text-[28px] text-[#1B233D]">Simple Screen Recording</h3>
                                <p className='mt-2 w-full max-w-[484px] font-normal text-sm font-work-sans text-[#616163]'>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                            </div>
                        </div>
                        {/* Easy to Share URL */}
                        <div className='my-12 flex gap-4 items-start justify-center lg:justify-start'>
                            <img src={easy} alt="" />
                            <div>
                                <h3 className="font-['Inter'] font-semibold text-[28px] text-[#1B233D]">Easy-to-Share URL</h3>
                                <p className='mt-2 w-full max-w-[484px] font-normal text-sm font-work-sans text-[#616163]'>Share your recordings instantly with a single link. No attachments, no downloads.</p>
                            </div>
                        </div>
                        {/* Revisit Recording */}
                        <div className='flex gap-4 items-start justify-center lg:justify-start'>
                            <img src={revisit} alt="" />
                            <div>
                                <h3 className="font-['Inter'] font-semibold text-[28px] text-[#1B233D]">Revisit Recording</h3>
                                <p className='mt-2 w-full max-w-[484px] font-normal text-sm font-work-sans text-[#616163]'>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-20 lg:mt-0'><img src={VideoRepository} className='w-full' alt="" /></div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
