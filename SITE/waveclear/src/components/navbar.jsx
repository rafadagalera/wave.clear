import { Link } from 'react-router-dom';

function Navbar() {
    return (  
        <>
            <ul className='flex gap-5 mr-4 text-primary-white'>
                <li><Link to='/problema'>Problema</Link></li>
                <li><Link to='/solucao'>Solucao</Link></li>
                <li><Link to='/previsao'>Previsão</Link></li>
                <li><Link to='/'>Home</Link></li>
            </ul>
        </>
    );
}

export default Navbar;
