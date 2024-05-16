import estilos from './Cabecalho.module.css'
import { FilmReel } from '@phosphor-icons/react'

export function Cabecalho(){
    return(
        <header className={ estilos.conteiner }>
            <FilmReel 
                size={34}
                color='#00000'
                weight='duotone'
            />
            <p>Recomendações</p>
        </header>
    )
}
