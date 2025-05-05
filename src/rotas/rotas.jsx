import {Routes ,Route} from 'react-router-dom';
import { Initial } from '../pages/initial';
import { Header } from '../components/header';
import { Conteudo } from '../components/conteudo';
import { Lista } from '../components/lista';
import { Perfil } from '../pages/perfil';
import { Series } from '../pages/series';

export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Initial/>}>
                <Route index element={<Conteudo/>} />
                <Route path="perfil" element={<Perfil/>} />
                <Route path="serie" element={<Series/>} />
            </Route>
        </Routes>
    );
};