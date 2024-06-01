import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

function Navbar() {

    return (
        <>
            <ul className='flex gap-5 mr-4 text-center text-primary-white md:flex md:flex-col md:gap-5 md:mt-5'>

                <li className='ml-3'><Link to='/'>HOME</Link></li>
                <li className='ml-3'><Link to='/problema'>PROBLEMA</Link></li>
                <li className='ml-3'><Link to='/solucao'>SOLUÇÃO</Link></li>
                <li className='ml-3'><Link to='/previsao'>PREVISÃO</Link></li>
                <li className='w-10 se '><GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                /></li>

            </ul>
            <ul className='hidden text-primary-white md:flex md:gap-5 md:flex-col md:mt-10 md:pl-[6px] md:h-screen'>
                <li><Link to='/equipe'>Nossa equipe</Link></li>
                <li><Link to='/contato'>Contato</Link></li>
            </ul>
        </>
    );
}

export default Navbar;