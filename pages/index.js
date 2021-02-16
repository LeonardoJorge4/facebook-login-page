import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  function handleSubmit() {
    alert('successfully login')
  }

  return (

    <div className={styles.container}>
      <Head>
        <title>Facebook - Log In or Sign Up</title>
        <link rel="icon" href="https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico" />
      </Head>

      <div className={styles.main}>
        <div className={styles.items}>

          <div className={styles.logo}>
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook"></img>
            <h2>Connect with friends and the world around you on Facebook.</h2>
          </div>

          <div className={styles.form}>
            <div className={styles.formInner}>
              <form>
              <div className={styles.inputItem}> 
                <input className={styles.input} placeholder="Email or Phone Number"></input>
              </div> 
              <div className={styles.inputItem}>
                <input className={styles.input} placeholder="Password"></input>
              </div> 
              <div className={styles.buttonLogin}>
                <button className={styles.login} onClick={handleSubmit}>Log In</button>
              </div>
              <p className={styles.forgotPassword}>Forgot Password?</p>
              <div className={styles.line}></div>
              <button className={styles.createAccount}>Create New Account</button>
              </form>
            </div>
          </div>

      
        </div>
      </div>

      <div className={styles.language}>
        <a href="/Portuguese">Português (Brasil)</a>
      </div>


    </div>
  )
}
