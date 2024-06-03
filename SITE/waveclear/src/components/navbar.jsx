import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

function Navbar() {

    return (
        <>
            <ul className='flex gap-5 text-center mr-auto text-primary-white md:flex md:flex-col md:gap-5 md:mt-5'>

<<<<<<< HEAD
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

=======
                <li className='ml-3'><Link to='/'><b>HOME</b></Link></li>
                <li className='ml-3'><Link to='/problema'><b>PROBLEMA</b></Link></li>
                <li className='ml-3'><Link to='/solucao'><b>SOLUÇÃO</b></Link></li>
                <li className='ml-3'><Link to='/previsao'><b>SOLUÇÃO</b></Link></li>
                
>>>>>>> taiki-tests
            </ul>
            <ul className='hidden text-center mr-auto text-primary-white md:flex md:gap-5 md:flex-col md:mt-10 md:pl-[6px] md:h-screen'>
                <li className='ml-3'><Link to='/equipe'>EQUIPE</Link></li>
                <li className='ml-3'><Link to='/contato'>CONTATO</Link></li>
            </ul>
        </>
    );
}

export default Navbar;