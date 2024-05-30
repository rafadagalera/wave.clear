import { Link } from 'react-router-dom';

function Navbar() {
    return (  
        <>
            <ul className='flex gap-5 mr-4 text-primary-white md:flex md:flex-col md:gap-5 md:mt-5'>
                <li><Link to='/problema'>Problema</Link></li>
                <li><Link to='/solucao'>Solucao</Link></li>
                <li><Link to='/previsao'>Previsão</Link></li>
                <li><Link to='/'>Home</Link></li>
            </ul>
            <ul className='hidden text-primary-white md:flex md:gap-5 md:flex-col md:mt-10 md:pl-[6px] md:h-screen'>
                <li><Link to='/equipe'>Conheça a equipe</Link></li>
                <li><Link to='/contato'>Entre em contato</Link></li>
            </ul>
        </>
    );
}

export default Navbar;