import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'
import Camera from '../components/Camera'
import Audio from '../components/Audio'
import { ReactMediaRecorder, useReactMediaRecorder } from 'react-media-recorder'
import { useEffect } from 'react'

function Home() {

    const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ screen: true, video: true, audio: true })

    useEffect(() => {
        console.log(mediaBlobUrl)
    }, [mediaBlobUrl])

    return (
        <div className='w-[300px] mx-auto px-6 pt-6 pb-8 shadow-2xl rounded-3xl mt-8'>
            <Navbar />
            <p className="max-w-[225px] w-full mt-4 text-sm font-normal text-[#413C6D] font-work-sans">This extension helps you record and share help videos with ease.</p>
            <Tabs />
            <Camera />
            <Audio />
            <button onClick={startRecording} className="mt-6 w-full rounded-xl text-white bg-[#120B48] p-4 text-center text-base font-medium font-work-sans active:scale-[0.99] active:bg-[#362e7a] hover:bg-[#362e7a]">Start Recording</button>
        </div>
    )
}

export default Home
