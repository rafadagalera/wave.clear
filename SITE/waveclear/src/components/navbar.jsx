import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

function Navbar() {

    return (
        <>
            <ul className='flex gap-5 text-center mr-auto text-primary-white md:flex md:flex-col md:gap-5 md:mt-5'>

                <li className='ml-3'><Link to='/'><b>HOME</b></Link></li>
                <li className='ml-3'><Link to='/problema'><b>PROBLEMA</b></Link></li>
                <li className='ml-3'><Link to='/solucao'><b>SOLUÇÃO</b></Link></li>
                <li className='ml-3'><Link to='/previsao'><b>PREVISÃO</b></Link></li>
                
            </ul>
            <ul className='hidden text-center mr-auto text-primary-white md:flex md:gap-5 md:flex-col md:mt-10 md:pl-[6px] md:h-screen'>
                <li className='ml-3'><Link to='/equipe'>EQUIPE</Link></li>
                <li className='ml-3'><Link to='/contato'>CONTATO</Link></li>
            </ul>
        </>
    );
}

export default Navbar;