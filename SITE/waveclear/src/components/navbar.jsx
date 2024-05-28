import { Link } from 'react-router-dom';

function Navbar() {
    return (  
        <>
            <ul>
                <li><Link to='/previsao'>Previsão</Link></li>
                <li><Link to='/problema'>Problema</Link></li>
                <li><Link to='/solucao'>Solucao</Link></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/equipe'>Equipe</Link></li>

            </ul>
        </>
    );
}

export default Navbar;
