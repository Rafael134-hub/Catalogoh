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
                <h2>{`Título: ${movie.title}`}</h2>

                <img className={estilo.imgDetalhes} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}}`}></img>

                <p>{`Popularidade: ${movie.popularity}`}</p>
                <p>{`Data de nascimento: ${movie.release_date}`}</p>
                <p>{`Quantidade de votos: ${movie.popularity}`}</p>
                <p>{`Sinopse: ${movie.overview}`}</p>

                <button onClick={onClose}>X</button>

            </div>

        </div>
    )
};