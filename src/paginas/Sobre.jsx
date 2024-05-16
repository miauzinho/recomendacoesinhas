import estilos from './Sobre.module.css'

export function Sobre(){

    return(
        <div className={estilos.conteiner}> 

            <img className={estilos.avatar} src='https://avatars.githubusercontent.com/u/71993525?v=4' />
            <p className={estilos.texto}>gabebsz</p>
            <p className={estilos.texto}>3DS</p>

        </div>
    )
}
