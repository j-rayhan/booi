import * as React from 'react'
import type { NextPage } from 'next'
import { faAddressBook, faAtlas, faBacon, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//
import styles from '../styles/Login.module.css'

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.loginForm} action="" method="post">
        <div className={styles.links}>
          <h3 className={styles.title}>sign in with</h3>
          <div className={styles.buttons}>
            <a href="http://" className={styles.btn}>
              <FontAwesomeIcon className={styles.faIcon} icon={faAtlas} />
              google
            </a>
            <a href="http://" className={styles.btn}>
              <FontAwesomeIcon className={styles.faIcon} icon={faAddressBook} />
              facebook
            </a>
          </div>
        </div>
        <div className={styles.inputBox}>
          <h3 className={styles.title}>Or sign with email</h3>
          <div className={styles.input}>
            <span><FontAwesomeIcon icon={faEnvelope} /></span>
            <input type="email" name='email' placeholder='example@example.com' />
          </div>
          <div className={styles.input}>
            <span><FontAwesomeIcon icon={faLock} /></span>
            <input type="password" name='password' placeholder='********' />
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" name='checkbook' id="remember" />
            <label htmlFor="remember">remember me</label>
          </div>
          <input type="submit" value="Sign in"  className={styles.submitBtn} />
        </div>
      </form>
    </div>
  )
}

export default Login;