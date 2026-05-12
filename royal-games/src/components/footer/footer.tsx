import styles from "./footer.module.css"

const Footer = () =>{
    return(
        <footer id={styles.footer}>
            <img src="./imgs/Vector.png" id={styles.imagem} alt="" />
            <div id={styles.dados}>
                <p>royalgames@email.com</p>
                <p>(11)99999-9999</p>
                <p>@RoyalGames</p>
            </div>
        </footer>
    )
}

export default Footer