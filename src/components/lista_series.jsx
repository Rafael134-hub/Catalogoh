import axios from "axios";
import React, {useState, useEffect} from 'react';
import { Card_serie } from "./card_serie";
import estilos from './lista.module.css'
import { Modal_series } from "./modal_series";

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7';

export function Lista_series(){
    const [series, setSeries] = useState([]);
    const [selectedSerie, setSelectedSerie] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/tv/popular?api_key=${API_KEY}`)
        .then(response=>{
            console.log(response.data.results);
            setSeries(response.data.results);
            console.log(movies)
        })

        .catch(error => {
            console.log("Erro: ", error);
        });

    }, []);


    const handleOpenModal = (serie) => {
        setSelectedSerie(serie)
    };

    const handleCloseModal = () => {
        setSelectedSerie(null)
    }


    return(
        <>  
            <div className={estilos.container}>
                <div className={estilos.figure}>
                    
                    {series.map(serie => (
                        <Card_serie key={serie.id} 
                        serie={serie}
                        onOpenModal = {handleOpenModal}
                        
                        />
                    ))}

                </div>
                
            </div>
            {selectedSerie && (<Modal_series serie={selectedSerie} onClose={handleCloseModal}/>)}
        </>
    )
}