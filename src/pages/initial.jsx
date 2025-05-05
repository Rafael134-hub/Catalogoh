import { Header } from '../components/header';
import { BarraDeNavegacao } from '../components/barraNavegacao';
import { Conteudo } from '../components/conteudo';
import { Footer } from '../components/footer';
import { Outlet } from 'react-router-dom';

export function Initial() {
    return (
        <>
            <Header />
            <Outlet /> 
            <Footer />
        </>
    );
}
