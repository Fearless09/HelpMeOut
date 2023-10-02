import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import helpLogo from '../assets/help-icon.svg'
import Google from '../assets/Google.svg'
import Facebook from '../assets/Facebook.svg'

function LoginPage() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [])

    function onSubmit(e) {
        e.preventDefault()
        navigate('/home')
    }
    return (
        <div className='bg-white px-3'>
            <nav className="container mx-auto mt-[90.5px]">
                <Link to={'/'} className='flex items-center p-[10px] gap-2'>
                    <img src={helpLogo} alt="" />
                    <span className="font-bold text-base font-['Inter'] text-[#100A42]">HelpMeOut</span>
                </Link>
            </nav>

            <div className="max-w-[475px] w-full mx-auto mt-12">
                <div className="text-center mx-auto max-w-[321px] w-full">
                    <h1 className="text-[#141414] text-[32px] font-bold font-['Inter']">Log in or Sign up</h1>
                    <p className="font-['Inter'] text-[#434343] text-sm font-light mt-2">Join millions of others in sharing successful moves on <span className="font-normal font-['Sen']">HelpMeOut.</span></p>
                </div>

                <div className="my-8">
                    <button className="w-full p-[10px] flex justify-center items-center gap-4 rounded-xl border border-[#141414] active:scale-[0.98]">
                        <img src={Google} alt="" />
                        <span className="font-['Inter'] font-medium text-base text-[#141414]">Continue with Google</span>
                    </button>
                    <button className="w-full p-[10px] mt-6 flex justify-center items-center gap-4 rounded-xl border border-[#141414] active:scale-[0.98]">
                        <img src={Facebook} alt="" />
                        <span className="font-['Inter'] font-medium text-base text-[#141414]">Continue with Facebook</span>
                    </button>
                </div>

                <div className="px-3 flex items-center justify-center gap-[2px]">
                    <div className="w-full h-[2px] bg-[#B9C2C8]"></div>
                    <span className="px-10 text-[#B9C2C8] text-sm font-medium font-['Inter']">or</span>
                    <div className="w-full h-[2px] bg-[#B9C2C8]"></div>
                </div>

                <form className="my-8" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="email" className="font-work-sans text-sm font-medium" >Email</label>
                        <input type="email" placeholder="Enter your email address" className="w-full mt-2 p-4 rounded-xl border border-[#B6B3C6] text-[#626262] font-work-sans font-medium text-base" required />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="password" className="font-work-sans text-sm font-medium" >Password</label>
                        <div className="relative">
                            <input type="password" placeholder="Enter your password" className="w-full mt-2 p-4 rounded-xl border border-[#B6B3C6] text-[#626262] font-work-sans font-medium text-base" required />
                        </div>
                    </div>

                    <button type="submit" className="w-full rounded-lg text-white bg-[#120B48] mt-8 px-5 py-4 font-work-sans font-medium text-lg active:scale-[0.98] active:bg-[#160a6d]">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
