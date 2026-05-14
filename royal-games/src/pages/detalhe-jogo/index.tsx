import styles from "./detalhe-jogo.module.css"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"

const detalheJogo = () =>{
    return(
        <>
            <Header/>
            
            <div id={styles.fundo}>
                <div id={styles.detalhe}>
                    <h2>Destalhes do jogo</h2>
                    <hr></hr>
                    <div id={styles.imagemTexto}>
                        <img src="./imgs/Rectangle27.png" alt="" />
                        <div id={styles.textoCima}>
                            <h3>League of Legends</h3>
                            <p>
                                League of Legends (LoL) é um jogo eletrônico do gênero MOBA (Multiplayer Online Battle Arena) onde duas equipes de cinco jogadores competem entre si com o objetivo de destruir a base adversária. Cada jogador controla um campeão com habilidades únicas, exigindo estratégia, trabalho em equipe e tomada de decisões rápidas durante as partidas.
                                O jogo possui diversos modos, mapas e estilos de jogo, além de oferecer atualizações frequentes com novos personagens, eventos e ajustes de balanceamento. League of Legends é conhecido pelo seu cenário competitivo mundial, reunindo milhões de jogadores e campeonatos profissionais ao redor do mundo.
                            </p>
                        </div>
                    </div>
                        <div id={styles.TextoBaixo1}>
                            <p>Classificação indicativa: 18 anos</p>
                            <p>Gêneros: Terror</p>
                        </div>
                        <div id={styles.TextoBaixo2}>
                            <p>Preço: R$100,00</p>
                            <p>Plataformas: PS5 </p>
                        </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default detalheJogo