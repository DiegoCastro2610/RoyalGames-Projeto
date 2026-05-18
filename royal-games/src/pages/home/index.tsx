import styles  from "./home.module.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Listagem from "@/components/listagem/listagem";

const Home = () =>{
    return(
        <body>
            <Header/>

            <section id={styles.introducao}>
                <div id={styles.textosIntroducao}>
                    <h3>Conheça nossos jogos!</h3>
                    <p>Navegue por títulos de todas as gerações, descubra plataformas, gêneros e detalhes completos antes de escolher sua próxima aventura. Seu próximo jogo favorito começa aqui.</p>
                </div>
                <img src="./imgs/ImagemBanner.png" id={styles.imagemIntroducao} alt="" />
            </section>
            
            <section id={styles.listagem}>
                <h2>Catálogo de jogos</h2>
                <hr />
                <Listagem/>
            </section>

            <section id={styles.informacoes}>
                <h3>Jogos online podem afetar o comportamento humano?</h3>
                <hr id={styles.barra}></hr>
                <div>
                    <img src="./imgs/Group10.png" id={styles.lol} alt="" />
                    <img src="./imgs/cs.png" id={styles.cs} alt="" />
                </div>
                <p> Estudos indicam que jogos podem alterar o comportamento humano…</p>
                <p> Principalmente quando o time resolve testar sua paciência em plena partida ranqueada.</p>
            </section>
            
            <Footer/>

        </body>
    )
}

export default Home