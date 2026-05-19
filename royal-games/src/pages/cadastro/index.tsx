import styles from "./cadastro.module.css"
import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import Listagem from "@/components/listagem/listagem"

const Cadastro = () =>{
    return(
        <main>
            <Header/>

            <section id={styles.sessao}>
                <div id={styles.divCadastro}>
                    <h2>Cadastrar novo jogo</h2>
                    <hr/>
                    <div id={styles.divInput}>
                        <div id={styles.ladoEsquerdo}>
                            <div id={styles.primeiraLinha}>
                                <h3>Nome</h3>
                                <input type="text" />
                            </div>
                            <div id={styles.segundaLinha}>
                                <div id={styles.valor}>
                                    <h3>Valor</h3>
                                    <input type="text" />
                                </div>
                                <div id={styles.genero}>
                                    <h3>Genero</h3>
                                    <select>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div id={styles.classificacao}>
                                    <h3>Classificação</h3>
                                    <select>
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                            <div id={styles.terceiraLinha}>
                                <div  id={styles.plataforma}>
                                    <h3>Plataforma</h3>
                                    <select>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div id={styles.imagem}>
                                    <h3>Imagem</h3>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div id={styles.ladoDireito}>
                            <h3>Descrição</h3>
                            <input type="text" />
                        </div>
                    </div>
                    <button id={styles.botaoCadastrar}>Cadastrar</button>
                </div>
            </section>

            <section id={styles.sessaoListagem}>
                <h2>Lista de jogos</h2>
                <hr />
                <Listagem/>
            </section>

            <Footer/>
        </main>
    )
}

export default Cadastro