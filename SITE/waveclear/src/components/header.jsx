import Navbar from "./navbar";
import fullLogo from '../assets/full-logo.png'
import logo from '../assets/logo.png'
import name from '../assets/name.png'

function Header() {
    return (
        <div className=" bg-primary-100 flex justify-between items-center w-screen md:h-full md:fixed md:flex md:flex-col  md:w-52">
            <img className="md:hidden md:mt-24 w-20 h-20" src={fullLogo} alt="logo completo wave.clear"/>
            <img className="hidden md:mt-4 md:flex md:pt-3" src={name} alt="name wave.clear"/>
            <Navbar />
            <img className="hidden md:flex md:bottom-0" src={logo} alt="" />
        </div>
    );
}

export default Header;

