import estilo from './modal_series.module.css';

export function Modal_series({ serie, onClose }) {
    if (!serie) {
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
                        <img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}}`}></img>
                    </div>

                    <div>
                        <h2>{`Título: ${serie.name}`}</h2>
                        
                        <div className={estilo.modalDescricoes}>
                            <p>{`Popularidade: ${serie.popularity}`}</p>
                            <p>{`Data de lançamento: ${serie.first_air_date}`}</p>
                            <p>{`Quantidade de votos: ${serie.popularity}`}</p>
                            <p>{`Sinopse: ${serie.overview}`}</p>
                        </div>
                    </div>
                </div>
                

                <button className={estilo.modalButton} onClick={onClose}>X</button>

            </div>

        </div>
    )
};