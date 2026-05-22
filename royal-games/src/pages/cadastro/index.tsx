import styles from "./cadastro.module.css"
import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import Listagem from "@/components/listagem/listagem"
import { useState } from "react"
import { cadastro } from "../api/cadastroService"
import { erro, notificacao } from "@/utils/toast";

interface Genero {
    generoId: number
    nome: string
}

const Cadastro = () => {

    const [Generos, setGeneros] = useState<Genero[]>([]);
    const [Nome, setNome] = useState<string>("")
    const [preco, setPreco] = useState<string>("")
    const [Descricao, setDescricao] = useState<string>("")
    const [Imagem, setImagem] = useState<string>("")
    const [generoSelecionado, setGeneroSelecionado] = useState<number[]>([]);

    async function salvarProduto(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {

            const dados = {
                Nome,
                preco,
                Descricao,
                Imagem,
                GeneroIds: generoSelecionado
            }

            await cadastro(dados)
            notificacao("Produto cadastrado!");
        } catch (error: any) {
            erro(error.message)
        }
    }

        return (
            <main>
                <Header />

                <section id={styles.sessao}>
                    <form id={styles.divCadastro} onSubmit={salvarProduto}>
                        <h2>Cadastrar novo jogo</h2>
                        <hr />
                        <div id={styles.divInput}>
                            <div id={styles.ladoEsquerdo}>
                                <div id={styles.primeiraLinha}>
                                    <h3>Nome</h3>
                                    <input type="text" value={Nome} onChange={(e) => setNome(e.target.value)} />
                                </div>
                                <div id={styles.segundaLinha}>
                                    <div id={styles.valor}>
                                        <h3>Valor</h3>
                                        <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} />
                                    </div>
                                    <div id={styles.genero}>
                                        <h3>Genero</h3>
                                        <select
                                            multiple
                                            value={generoSelecionado.map(String)}
                                            onChange={(e) => setGeneroSelecionado(
                                                Array.from(e.target.selectedOptions).map((option) => Number(option.value))
                                            )}
                                        >
                                            {Generos.map((item) => (
                                                <option value={item.generoId} key={item.generoId}>{item.nome}</option>
                                            )
                                            )}
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
                                    <div id={styles.plataforma}>
                                        <h3>Plataforma</h3>
                                        <select>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                    <div id={styles.imagem}>
                                        <h3>Imagem</h3>
                                        <input type="text" value={Imagem} onChange={(e) => setImagem(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div id={styles.ladoDireito}>
                                <h3>Descrição</h3>
                                <input type="text" value={Descricao} onChange={(e) => setDescricao(e.target.value)} />
                            </div>
                        </div>
                        <button id={styles.botaoCadastrar}>Cadastrar</button>
                    </form>
                </section>

                <section id={styles.sessaoListagem}>
                    <h2>Lista de jogos</h2>
                    <hr />
                    <Listagem />
                </section>

                <Footer />
            </main>
        )
    }

export default Cadastro