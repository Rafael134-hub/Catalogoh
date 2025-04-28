import estilos from './barraNavegacao.module.css';
import { Link } from 'react-router-dom';

export function BarraDeNavegacao(){
    return (
        <>
            <nav className={estilos.container}>
                <ul>
                    <li><Link to={'/'}><p>Home</p></Link></li>
                    <li><Link to={'serie'}><p>Série</p></Link></li>
                    <li><Link to={'perfil'}><p>Perfil</p></Link></li>
                </ul>
            </nav>
        </>
    )
}