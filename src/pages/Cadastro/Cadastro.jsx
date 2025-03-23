import styles from './Cadastro.module.css';
import mascote from '../../assets/orc.png'; 
import decoracaoEsquerda from '../../assets/detalheVerdeClaro.svg';
import decoracaoDireita from '../../assets/decoracaoVerdeDireita.svg';

const Cadastro = () => {
    return (
        <div className={styles.cadastro}>

            <div className={styles.container}>
                <img src={mascote} alt="Mascote" className={styles.mascote} />
                <img src={decoracaoDireita} alt="Decoração do lado direito" className={styles.decoracaoDireita} />
                <div className={styles.caixaEsquerda}>
                    <img src={decoracaoEsquerda} alt="Decoração do lado esquerdo" className={styles.decoracaoEsquerda} />
                    <div className={styles.titulo}>
                        <h1>Crie sua <br /><span className={styles.spanVerde}>Conta</span></h1>
                    </div>
                    <div className={styles.linha}></div>
                    <form className={styles.formulario} action="">
                        <label className={styles.labels} htmlFor="nome">Nome</label>
                        <input className={styles.inputs} type="text" name="nome" id="nome" placeholder="Digite seu nome"/>
                        <label className={styles.labels} htmlFor="email">E-mail</label>
                        <input className={styles.inputs} type="email" name="email" id="email" placeholder="Digite seu e-mail "/>
                        <label className={styles.labels} htmlFor="senha">Senha</label>
                        <input className={styles.inputs} type="password" name="senha" id="senha" placeholder="Digite sua senha "/>
                        <button className={styles.botao} type="submit">Cadastre-se</button>
                    </form>
                </div>

                <div className={styles.caixaDireita}>

                </div>
            </div>
        </div>
    )
}

export default Cadastro;