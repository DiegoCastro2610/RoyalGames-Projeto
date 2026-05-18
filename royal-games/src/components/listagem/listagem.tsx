import styles from "./listagem.module.css"
import Card from "../card/card"

const Listagem = () =>{
    return(
        <section id={styles.sessao}>
            <div id={styles.topo}>
                <input type="text" id={styles.texto} placeholder="Pesquisa..."/>
                <select id={styles.filtro}>
                    <option value="Filtro">Filtro</option>
                    <option value="menorPreco">Menor Preço</option>
                    <option value="maiorPreco">Maior Preço</option>
                </select>
                <select id={styles.categoria}>
                    <option value="categorio">Categorio</option>
                </select>
            </div>
            <div id={styles.card}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    )
}

export default Listagem