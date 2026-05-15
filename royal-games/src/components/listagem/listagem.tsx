import styles from "./listagem.module.css"
import Card from "../card/card"

const Listagem = () =>{
    return(
        <section>
            <div id={styles.topo}>
                <input type="text" id={styles.texto}/>
                <select id={styles.filtro}>
                    <option value="liltro">Filtro</option>
                    <option value="menorPreco">Menor Preço</option>
                    <option value="maiorPreco">Maior Preço</option>
                </select>
                <select id={styles.categoria}>
                    <option value="">Categorio</option>
                </select>
            </div>
            <section>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
            <div>

            </div>
        
        </section>
    )
}

export default Listagem