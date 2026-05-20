import { useState } from "react";
import styles from "./login.module.css"
import { login } from "../api/authService"
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {

    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")

    const notificacao = (msg: string) => toast.success(msg);
    const erro = (msg: string) => toast.error(msg);
    

    async function autenticar(e: React.FormEvent<HTMLFormElement>) {
       e.preventDefault();
       try{
            await login(email, senha);
            notificacao("Login bem sucedido")
       }catch(error: any){
            erro(error.message)
        }
    }

    return(
        <main id={styles.main}>
            <div id={styles.mulherLogin}>
                <img src="./imgs/mulherlogin.png" alt="" />
            </div>
            <div id={styles.formularioCompleto}>
                <img src="./imgs/logologin.png" id={styles.logo} alt="" />
                <form id={styles.form} onSubmit={autenticar}>
                    <label>Email</label>
                    <input type="email" id={styles.email}  required placeholder="email@gmail.com"
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label>Senha</label>
                    <input type="password" required placeholder="*****"
                        value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    <button>Entrar</button>
                </form>
            </div>
        </main>
    )
}

export default Login