import estilos from './footer.module.css';

export function Footer(){
    return(
        <>
            <footer>
                <div id={estilos.line_area}>
                    <div className={estilos.elemento_linha}></div>
                </div>
                <div  className={estilos.container}>
                    <div className={estilos.area_1}>
                        <h2>FERNANDA PICTURES</h2>
                        <p>|</p>
                        <h3>© Crunchyroll, LLC</h3>
                    </div>

                    <div className={estilos.area_2}>
                        <h3>PWFE</h3>
                    </div>
                </div>
                
            </footer>
        </>
    )
}