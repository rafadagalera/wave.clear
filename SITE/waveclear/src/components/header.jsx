import Navbar from "./navbar";
import fullLogo from '../assets/full-logo.png'

function Header() {
    return (
        <>
            <div className="flex justify-between items-center bg-nav-bg">
                <img className="w-20 h-20 " src={fullLogo} alt="logo wave.clear"/>
                <Navbar />
            </div>
        </>
    );
}

export default Header;