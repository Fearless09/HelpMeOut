import { useState } from 'react'

function Tabs() {
    const [tab, setTab] = useState('current')

    return (
        <div className="flex items-center gap-8 mt-8 justify-center">
            {/* FULL SCREEN */}
            <button className={`flex flex-col justify-center items-center gap-2 ${tab === 'full' ? 'text-[#120B48]' : 'text-[#928FAB]'}`} onClick={() => setTab('full')}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5865 2.66675H23.3998C28.1465 2.66675 29.3332 3.85341 29.3332 8.58675V17.0267C29.3332 21.7734 28.1465 22.9467 23.4132 22.9467H8.5865C3.85317 22.9601 2.6665 21.7734 2.6665 17.0401V8.58675C2.6665 3.85341 3.85317 2.66675 8.5865 2.66675Z" stroke={tab === 'full' ? '#120B48' : '#928FAB'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 22.96V29.3333" stroke={tab === 'full' ? '#120B48' : '#928FAB'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.6665 17.3333H29.3332" stroke={tab === 'full' ? '#120B48' : '#928FAB'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 29.3333H22" stroke={tab === 'full' ? '#120B48' : '#928FAB'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className='text-sm font-medium font-work-sans'>Full Screen</span>
            </button>
            <button className={`flex flex-col justify-center items-center gap-2 ${tab === 'current' ? 'text-[#120B48]' : 'text-[#928FAB]'}`} onClick={() => setTab('current')}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.3332 17.2001V22.8001C21.3332 27.4667 19.4665 29.3334 14.7998 29.3334H9.19984C4.53317 29.3334 2.6665 27.4667 2.6665 22.8001V17.2001C2.6665 12.5334 4.53317 10.6667 9.19984 10.6667H14.7998C19.4665 10.6667 21.3332 12.5334 21.3332 17.2001Z" stroke={tab === 'current' ? '#120B48' : '#928FAB'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29.3332 9.20008V14.8001C29.3332 19.4667 27.4665 21.3334 22.7998 21.3334H21.3332V17.2001C21.3332 12.5334 19.4665 10.6667 14.7998 10.6667H10.6665V9.20008C10.6665 4.53341 12.5332 2.66675 17.1998 2.66675H22.7998C27.4665 2.66675 29.3332 4.53341 29.3332 9.20008Z" stroke={tab === 'current' ? '#120B48' : '#928FAB'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className='text-sm font-medium font-work-sans'>Current Tab</span>
            </button>
        </div>
    )
}

export default Tabs
