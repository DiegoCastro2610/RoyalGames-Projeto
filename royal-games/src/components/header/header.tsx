import styles from "./header.module.css"

const Header = () =>{
    return(
        <header id={styles.header}>
            <div id={styles.imagem}>
                <img src="/imgs/LogoHeader.png" alt="" />
            </div>
            <nav id={styles.navegacao}>
                <a href="">Catalogo</a>
                <button>Login</button>
            </nav>
        </header>
    )
}

export default Header