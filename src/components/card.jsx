import React from "react";
import estilo from './card.module.css';
export function Card({movie, onOpenModal}){
    return(
        <>
            <div className={estilo.container} onClick={() => onOpenModal(movie)}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                <h3>{movie.title}</h3>
                {/* <p>{movie.overview}</p> */}
            </div>
        
        </>
    )
}
