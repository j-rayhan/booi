import React from 'react';
import type { NextPage } from 'next'
import Image from 'next/image'
import { faHome, faList, faTimes, faTags, faComments, faBlog, faSearch, faBook, faHeart, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [active, setActive] = React.useState<boolean>(false);
  const [searchFormVisible, setSearchFormVisible] = React.useState<boolean>(false);
  const [loginFormVisible, setLoginFormVisible] = React.useState<boolean>(false);
  const toggleActive = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 80) {
      setActive(true);
    } else if (scrolled <= 80) {
      setActive(false);
    }
  };
  React.useEffect(() => {
    const subscribe = window.addEventListener('scroll', toggleActive);
    return () => subscribe;
  })
  const handleSearchFormVisible = () => setSearchFormVisible(!searchFormVisible);
  const handleLoginFormVisible = () => setLoginFormVisible(!loginFormVisible)
  return (
    <div className={styles.container}>
      {/* Header section */}
      <header className={styles.header}>
        <div className={styles.headerOne}>

          <a href="#" className={styles.logo}> <FontAwesomeIcon icon={faBook} /> bookly </a>

          <form action="" className={`${styles.searchForm} ${searchFormVisible ? styles.active : null}`}>
            <input type="search" name="" placeholder="search here..." id="search-box" />
            <label htmlFor="search-box"><FontAwesomeIcon icon={faSearch} /></label>
          </form>

          <div className={styles.icons}>
            <div id="search-btn" className={styles.searchBtn} onClick={() => handleSearchFormVisible()}><FontAwesomeIcon icon={faSearch} /></div>
            <a href="#heart"><FontAwesomeIcon icon={faHeart} /></a>
            <a href="#shoppingCart"><FontAwesomeIcon icon={faShoppingCart} /></a>
            <div id="login-btn" onClick={() => handleLoginFormVisible()}>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>

        </div>

        <div className={`${styles.headerTwo} ${active ? styles.active : null}`}>
          <nav className={styles.navbar}>
            <a href="#home">home</a>
            <a href="#featured">featured</a>
            <a href="#arrivals">arrivals</a>
            <a href="#reviews">reviews</a>
            <a href="#blogs">blogs</a>
          </nav>
        </div>

      </header>
      {/* bottom navbar */}
      <nav className={styles.bottomNavbar}>
        <a href="#home"><FontAwesomeIcon icon={faHome} /></a>
        <a href="#featured" ><FontAwesomeIcon icon={faList} /></a>
        <a href="#arrivals" ><FontAwesomeIcon icon={faTags} /></a>
        <a href="#reviews"><FontAwesomeIcon icon={faComments} /></a>
        <a href="#blogs" ><FontAwesomeIcon icon={faBlog} /></a>
      </nav>

      
{/* login form */}

<div className={`${styles.loginFormContainer} ${loginFormVisible ? styles.active : null}`}>

    <div
      className={styles["close-login-btn"]}
      onClick={() => handleLoginFormVisible()}
    >
      <FontAwesomeIcon icon={faTimes} />
    </div>

    <form action="">
        <h3>sign in</h3>
        <span>username</span>
        <input type="email" name="" className={styles.box} placeholder="enter your email" id="" />
        <span>password</span>
        <input type="password" name="" className={styles.box} placeholder="enter your password" id="" />
        <div className={styles.checkbox}>
            <input type="checkbox" name="" id="remember-me" />
            <label htmlFor="remember-me"> remember me</label>
        </div>
        <input type="submit" value="sign in" className={styles.btn} />
        <p>forget password ? <a href="#">click here</a></p>
        <p>don&apos;t have an account ? <a href="#">create one</a></p>
    </form>

</div>

    </div>
  )
}

export default Home


// TODO deploy in vercel
{/* https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app */ }