import { Header } from '../components/header';
import { BarraDeNavegacao } from '../components/barraNavegacao';
import { Conteudo } from '../components/conteudo';
import { Card } from '../components/card';
import { Footer } from '../components/footer';

export function Initial(){
    return(
        <>
            <Header />
            <Conteudo/>
            <Footer/>
        </>
    )
}