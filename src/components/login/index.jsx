import { useState } from 'react';
import Card from '../card';
import styles from './login.module.css';
import { useLogin } from '@/context/loginContext';

export default function Login() {
  const [username, setUsername] = useState();
  const [pwd, setPwd] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const { login } = useLogin();

  const handleUsername = (e) => {
    setUsername(e.target.value); // e é uma variável que representa o elemento que chamou a função, no caso o input
  };

  const handlePwd = (e) => {
    setPwd(e.target.value); // e é uma variável que representa o elemento que chamou a função, no caso o input
  };

  const clearForm = () => {
    setUsername(null);
    setPwd(null);
    setErrorMessage(null);
  };

  const submitLogin = () => {
    //limpa a mensagem de erro
    setErrorMessage(null);
    console.log(username, pwd);
    // Aqui vai a lógica de valicação do usuário, não faça desta forma, está assim só como exemplo
    if (username === 'joaquim' && pwd === '123') {
      login(username);
    } else {
      setErrorMessage('Usuário e/ou senha inválido(s)');
    }
  };

  return (
    <main className={styles.main}>
      <Card>
        <section className={styles.login}>
          <h2 className={styles.loginTitle}>Login</h2>
          <div className={styles.container}>
            <div className={styles.input}>
              <label htmlFor='uname' className={styles.label}>
                Username
              </label>
              <input
                type='text'
                placeholder='Enter Username'
                name='uname'
                onChange={handleUsername}
                required
              />
            </div>
            <div className={styles.input}>
              <label htmlFor='psw' className={styles.label}>
                Password
              </label>
              <input
                type='password'
                placeholder='Enter Password'
                name='psw'
                onChange={handlePwd}
                required
              />
            </div>
            {errorMessage && (
              <div className={styles.errorMessage}>{errorMessage}</div>
            )}
            <div className={styles.buttons}>
              <button className={styles.clear} onClick={clearForm}>
                Limpar
              </button>
              <button className={styles.submit} onClick={submitLogin}>
                Login
              </button>
            </div>
          </div>
        </section>
      </Card>
    </main>
  );
}
