import { Link } from 'react-router-dom';

function Navbar() {
    return (  
        <>
            <ul>
                <li><Link to='/problema'>Problema</Link></li>
                <li><Link to='/solucao'>Solucao</Link></li>
                <li><Link to='/previsao'>Previsão</Link></li>
                <li><Link to='/'>Home</Link></li>
            </ul>
            <ul>
                <li><Link to='/equipe'>Conheça a equipe</Link></li>
                <li><Link to='/contato'>Entre em contato</Link></li>
            </ul>
        </>
    );
}

export default Navbar;
