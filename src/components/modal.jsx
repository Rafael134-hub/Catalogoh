import estilo from './modal.module.css';

export function Modal({ movie, onClose }) {
    if (!movie) {
        return null;
        console.log("CADE????")
    }
    else {
        console.log("Oi fer")
    }

    return (
        <div className={estilo.container}>

            <div className={estilo.modalContainer}>
                <div className={estilo.modalConteudo}>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}}`}></img>
                    </div>

                    <div>
                        <h2>{`Título: ${movie.title}`}</h2>
                        
                        <div className={estilo.modalDescricoes}>
                            <p>{`Popularidade: ${movie.popularity}`}</p>
                            <p>{`Data de lançamento: ${movie.release_date}`}</p>
                            <p>{`Quantidade de votos: ${movie.popularity}`}</p>
                            <p>{`Sinopse: ${movie.overview}`}</p>
                        </div>
                    </div>
                </div>
                

                <button className={estilo.modalButton} onClick={onClose}>X</button>

            </div>

        </div>
    )
};