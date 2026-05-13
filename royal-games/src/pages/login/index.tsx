import styles from "./login.module.css"

const login = () => {
    return(
        <main id={styles.main}>
            <img src="./imgs/mulherlogin.png" id={styles.imagemLogin} alt="" />
            <div>
                <img src="./imgs/logologin.png" id={styles.logo} alt="" />
                <form id={styles.formulario} action="">
                    <label>Email</label>
                    <input type="email"  required placeholder="email@gmail.com"/>
                    <label>Senha</label>
                    <input type="password" required placeholder="1234"/>
                    <button>Entrar</button>
                </form>
            </div>
        </main>
    )
}

export default login