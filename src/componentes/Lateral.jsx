import estilos from './Lateral.module.css'
import {Gear, FilmSlate, User} from '@phosphor-icons/react'
import {Link} from 'react-router-dom'

export function Lateral(){
    return(
        <aside className={ estilos.conteiner }>
            <header>
                <img className={ estilos.imagemCabecalho } src='https://images.pexels.com/photos/54267/sunflower-blossom-bloom-flowers-54267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />

                <div className={ estilos.perfil }>
                    <img className={ estilos.avatar } src='https://avatars.githubusercontent.com/u/71993525?v=4' />
                    <strong>Gabebsz</strong>
                </div>
            </header>
            <section className={ estilos.opcoes }>

                <Link 
                    className={ estilos.botao }
                    to={'/inicial'}
                >
                    <FilmSlate size={20} />
                    <strong>Filmes</strong>
                </Link>

                <Link 
                    className={ estilos.botao }
                    to={'perfil'}
                >
                    <Gear size={20} />
                    <strong>Perfil</strong>
                </Link>

                <Link 
                    className={ estilos.botao }
                    to={'sobre'}
                >
                    <User size={20} />
                    <strong>Sobre</strong>
                </Link>

            </section>
        </aside>
    )
}
