import styles from './Login.module.css';
import InputField from '../../components/InputField/InputField';
import { use, useState } from 'react';
import api from '../../services/api';

import OrcImage from '../../assets/orc-machado.png';
import RopeImage from '../../assets/grafismo-cordas.png';
import TopFrame from '../../assets/moldura-superior.png';
import BottomFrame from '../../assets/moldura-inferior.png';
import { Navigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    try{
      const response = await api.post('/login', {
      email,
      password,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    if(response.status === 200){
      // localStorage.setItem('token', response.data.token);
      Navigate('/home');//mudar para página de diretorias
    }
  }

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
                <InputField label="E-mail" type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} required/>
                <InputField label="Senha" type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} required />
                <button type='submit' className={styles.submitButton} onClick={handleSubmit}>Login</button>
            </form>
          </div>

          <img src={OrcImage} alt="Orc com machado" className={styles.image}/>
        </div>
      </div>

        <img src={RopeImage} className={styles.ropeImage}/>
    </div>
  );
}

export default Login;