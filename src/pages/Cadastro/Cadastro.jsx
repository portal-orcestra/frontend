import styles from './Cadastro.module.css';

const Cadastro = () => {
    return (
        <div className={styles.cadastro}>
            <div className={styles.container}>
                <div className={styles.caixaEsquerda}>
                    <h1>Crie sua <br /><span>Conta</span></h1>
                        <form className={styles.formulario} action="">
                            <label className={styles.labels} htmlFor="nome">Nome</label>
                            <input className={styles.inputs} type="text" name="nome" id="nome" placeholder="Digite seu nome"/>
                            <label className={styles.labels} htmlFor="email">E-mail</label>
                            <input className={styles.inputs} type="email" name="email" id="email" placeholder="Digite seu e-mail "/>
                            <label className={styles.labels} htmlFor="senha">Senha</label>
                            <input className={styles.inputs} type="password" name="senha" id="senha" placeholder="Digite sua senha "/>

                        </form>
                </div>

                <div className={styles.caixaDireita}>

                </div>
            </div>
        </div>
    )
}

export default Cadastro;