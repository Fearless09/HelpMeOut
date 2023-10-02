import { useState } from 'react'

import videoIcon from '../assets/video-camera.svg'

function Camera() {
    const [camera, setCamera] = useState(true)

    return (
        <div className='rounded-xl mt-6 ps-4 pe-3 py-3 border border-[#120B48] flex items-center justify-between gap-4 text-[#100A42]'>
            <div className='flex items-center gap-2'>
                <img src={videoIcon} alt="Camera-Icon" />
                <h4 className='text-sm font-medium font-work-sans'>Camera</h4>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={camera} onChange={() => setCamera(!camera)} className="sr-only peer" />
                <div className="w-11 h-6 rounded-full bg-[#928FAB] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#100A42]"></div>
            </label>
        </div>
    )
}

export default Camera
