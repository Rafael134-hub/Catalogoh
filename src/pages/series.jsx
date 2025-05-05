import estilos from './series.module.css';
import { Lista_series } from '../components/lista_series'

export function Series(){
    return(
        <>
            <main className={estilos.container}>
                <h2>Nosso catalogo de séries:</h2>
                <Lista_series />
            </main>
        </>
    )
}