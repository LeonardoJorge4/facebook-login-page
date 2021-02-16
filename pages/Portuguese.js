import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  function handleSubmit() {
    alert('Login efetuado com sucesso')
  }

  return (

    <div className={styles.container}>
      <Head>
        <title>Facebook – entre ou cadastre-se</title>
        <link rel="icon" href="https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico" />
      </Head>

      <div className={styles.main}>
        <div className={styles.items}>

          <div className={styles.logo}>
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook"></img>
            <h2>O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</h2>
          </div>

          <div className={styles.form}>
            <div className={styles.formInner}>
              <form>
              <div className={styles.inputItem}> 
                <input className={styles.input} placeholder="Email ou Telefone"></input>
              </div> 
              <div className={styles.inputItem}>
                <input className={styles.input} placeholder="Senha"></input>
              </div> 
              <div className={styles.buttonLogin}>
                <button className={styles.login} onClick={handleSubmit}>Entrar</button>
              </div>
              <p className={styles.forgotPassword}>Esqueceu a senha?</p>
              <div className={styles.line}></div>
              <button className={styles.createAccount}>Criar nova conta</button>
              </form>
            </div>
          </div>

      
        </div>
      </div>

      <div className={styles.language}>
        <a href="/">English (US)</a>
      </div>


    </div>
  )
}
