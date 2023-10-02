import React, { useState, useEffect } from 'react'
import { FaCirclePause } from 'react-icons/fa6'
import pauseIcon from '../assets/pause.svg'
import stopIcon from '../assets/stop.svg'
import cameraIcon from '../assets/cameraR.svg'
import micIcon from '../assets/mic.svg'
import deleteIcon from '../assets/delete.svg'

function Recording() {
    const [pause, setPause] = useState('Pause')
    const [stop, setStop] = useState('Stop')
    const [camera, setCamera] = useState(false)
    const [mic, setMic] = useState(false)

    

    function handlePause() {
        if (pause === 'Pause') {
            setPause('Play')
        } else {
            setPause('Pause')
        }
    }
    function handleStop() {
        if (stop === 'Stop') {
            setStop('Start')
        } else {
            setStop('Stop')
        }
    }
    return (
        <div className='fixed bottom-5 left-10 max-w-[551px] w-full bg-[rgba(98,98,98,0.17)] rounded-[200px] p-2' id='recording-page'>
            <div className='ps-4 py-3 pe-10 rounded-[200px] bg-[#141414] text-white shadow-lg flex justify-center items-center'>
                <div className='px-4 py-3 h-min flex justify-center items-center gap-2 border-r-2'>
                    <span className='text-xl font-medium font-[Inter]'>TIMER</span>
                    <span className='w-[10px] h-[10px] bg-[#C00404] rounded-[17px]'></span>
                </div>
                <div className='flex justify-center items-start ps-6 gap-6'>
                    {/* PLAY/PAUSE */}
                    <button className='flex flex-col justify-center items-center text-white font-medium font-work-sans text-[12px]' onClick={handlePause}>
                        {/* <FaCirclePause size={'44px'} /> */}
                        <img src={pauseIcon} alt="pause button" />
                        <span className='mt-2'>{pause}</span>
                    </button>
                    {/* Stop */}
                    <button className='flex flex-col justify-center items-center text-white font-medium font-work-sans text-[12px]' onClick={handleStop}>
                        <img src={stopIcon} alt="stop button" />
                        <span className='mt-2'>{stop}</span>
                    </button>
                    {/* camera */}
                    <button className='flex flex-col justify-center items-center text-white font-medium font-work-sans text-[12px]' onClick={() => setCamera(!camera)}>
                        <span className='relative'>
                            <img src={cameraIcon} alt="stop button" />
                            {camera && <span className='w-[3px] h-full absolute bg-red-500 top-0 left-1/2 translate-x-[-50%] -rotate-45'></span>}
                        </span>
                        <span>Camera</span>
                    </button>
                    {/* Mic */}
                    <button className='flex flex-col justify-center items-center text-white font-medium font-work-sans text-[12px]' onClick={() => setMic(!mic)}>
                        <span className="relative">
                            <img src={micIcon} alt="stop button" />
                            {mic && <span className='w-[3px] h-full absolute bg-red-500 top-0 left-1/2 translate-x-[-50%] -rotate-45'></span>}
                        </span>
                        <span>Mic</span>
                    </button>
                    {/* Delete */}
                    <button className='flex flex-col justify-center items-center text-white font-medium font-work-sans text-[12px]'>
                        <img src={deleteIcon} alt="stop button" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Recording
