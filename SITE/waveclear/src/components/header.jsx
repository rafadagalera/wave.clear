import Navbar from "./navbar";
import fullLogo from '../assets/full-logo.png'
import logo from '../assets/logo.png'
import name from '../assets/name.png'

function Header() {
    return (
        <>
            <div className="flex justify-between p-14 items-center bg-nav-bg md:flex md:flex-col md:absolute md:h-screen md:w-24 md:justify-normal md:pb-0">
                <img className="md:hidden w-20 h-20 "
                src={fullLogo}
                alt="logo completo wave.clear"/>
                <img className= "hidden md:flex md:pt-3"
                src={name} 
                alt="name wave.clear"/>
                <Navbar />
                <img className="hidden md:flex md:bottom-0 "
                src={logo}
                alt="" />
            </div>
        </>
    );
}

export default Header;