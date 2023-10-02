import { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import HowItWorksSection from '../components/HowItWorksSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function LandingPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [])

    return (
        <div className='bg-[#F4F6F8]'>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <Footer />
        </div>
    )
}

export default LandingPage
