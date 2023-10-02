import helpIcon from '../assets/help-icon.svg'
import settingsIcon from '../assets/setting-2.svg'
import closeIcon from '../assets/close-circle.svg'


function Navbar() {
    return (
        <div className="flex items-center justify-between gap-2">
            <button className="flex items-center gap-2">
                <img src={helpIcon} alt="HelpMeOut-Logo" />
                <h1 className="text-base font-bold font-[Sora] text-[#120B48]">HelpMeOut</h1>
            </button>
            <div className="flex items-center gap-2">
                <button>
                    <img src={settingsIcon} alt="settings" />
                </button>
                <button>
                    <img src={closeIcon} alt="settings" />
                </button>
            </div>
        </div>
    )
}

export default Navbar
