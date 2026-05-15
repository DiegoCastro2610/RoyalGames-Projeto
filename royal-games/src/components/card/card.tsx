import styles from "./card.module.css"

const Card = () =>{
    return(
        <section id={styles.card}>
            <img src="./imgs/Rectangle16.png" alt="" />
            <h2>Minecraft</h2>
            <h3>R$70,00</h3>
            <div id={styles.botoes}>
                <button id={styles.excluir}>Excluir</button>
                <button id={styles.editar}>Editar</button>
            </div>
        </section>
    )
}

export default Card