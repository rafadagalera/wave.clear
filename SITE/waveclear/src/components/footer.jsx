import name from "../assets/name.png"
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <div className="md:hidden w-screen h-10 bg-primary-white flex justify-between static bottom-0">
            <img className="w-22 h-8 pt-3"
            src={name} 
            alt=""/>
        <ul className="flex gap-5 items-center pr-4">
            <li><Link to="/equipe">Conheça a equipe</Link></li>
            <li><Link to="/contato">Entre em contato</Link></li>
        </ul>
        </div>
    )
}