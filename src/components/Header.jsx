// estrutura React para componentes

import style from './header.module.css';
import crunchyroll_logo from '../assets/crunchyroll_logo.png';
import { BarraDeNavegacao } from './barraNavegacao';

export function Header(){
    return(
        //Para cada return eu só posso renderizar um único componente
        <>
            <header className={style.container}>
                <div className='logo_image'>
                    <img src={crunchyroll_logo}></img>
                </div>

                <BarraDeNavegacao/>
            </header>

        </>
    );
}