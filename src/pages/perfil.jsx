import estilos from './perfil.module.css'
import Imagem_icone from '../assets/hime_icon.png';

export function Perfil(){
    return(
        <div className={estilos.container}>
            <h2>Seu Perfil</h2>

            <div className={estilos.container_perfil}>
                
                <div className={estilos.bloco_imagem}>
                    <img src={Imagem_icone}></img>
                </div>

                <div className={estilos.conteudo}>
                    
                    <div className={estilos.bloco_texto}>
                        <p>Nome do perfil</p>
                        <h3>YuumiChanUwU</h3>
                        
                        <p>Nome de usuário (opcional)</p>
                        <h3>YuumiKawaiiDesu!OwO</h3>
                    </div>

                </div>
            </div>
            
        </div>
    )
}