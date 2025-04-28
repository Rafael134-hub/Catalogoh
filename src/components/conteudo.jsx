import estilos from './conteudo.module.css'
import { Lista } from './lista'

export function Conteudo(){
    return(
        <>
            <main className={estilos.container}>
                <h2>Nosso catalogo:</h2>
                <Lista/>
            </main>
        </>
    )
}