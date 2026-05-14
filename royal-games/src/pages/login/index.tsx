import styles from "./login.module.css"

const login = () => {
    return(
        <main id={styles.main}>
            <div id={styles.mulherLogin}>
                <img src="./imgs/mulherlogin.png" alt="" />
            </div>
            <div id={styles.formularioCompleto}>
                <img src="./imgs/logologin.png" id={styles.logo} alt="" />
                <form id={styles.form} action="">
                    <label>Email</label>
                    <input type="email" id={styles.email}  required placeholder="email@gmail.com"/>
                    <label>Senha</label>
                    <input type="password" required placeholder="*****"/>
                </form>
                <button>Entrar</button>
            </div>
        </main>
    )
}

export default login