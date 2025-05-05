import React from "react";
import estilo from './card_serie.module.css';
export function Card_serie({serie, onOpenModal}){
    return(
        <>
            <div className={estilo.container} onClick={() => onOpenModal(serie)}>
                <img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}/>
                <h3>{serie.name}</h3>
                {/* <p>{movie.overview}</p> */}
            </div>
        
        </>
    )
}
