import styles from './Login.module.css';
import InputField from '../../components/InputField/InputField';

import OrcImage from '../../assets/orc-machado.png';
import RopeImage from '../../assets/grafismo-cordas.png';
import TopFrame from '../../assets/moldura-superior.png';
import BottomFrame from '../../assets/moldura-inferior.png';


const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <img src={BottomFrame} className={styles.bottomFrame}/>
        <img src={TopFrame} className={styles.topFrame}/>

        <div className={styles.content}>
          <div className={styles.form}>
            <div className={styles.title}>
                <h1>Bem-vindo!</h1>
                <h2>Login</h2>
            </div>
            <form>
                <InputField label="E-mail" type="email" name="email" required/>
                <InputField label="Senha" type="password" name="password" required />
                <button type='submit' className={styles.submitButton}>Login</button>
            </form>
          </div>

          <img src={OrcImage} alt="Orc com machado" className={styles.image}/>
        </div>
      </div>

        <img src={RopeImage}/>
    </div>
  );
}

export default Login;