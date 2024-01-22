import React, { useState } from 'react'
// import logo from '../../assets/logo.png'
import styles from './navbar.module.scss'
import Sidebar from '../sidebar/sidebar'
// import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import { useApContext } from '../../AppContext'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  // const { profile } = useAppContext();
  // const [token, setToken] = useState();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const onCloseSidebar = () => {
    setIsOpenSidebar(false)
  };

  const navigateTo = (path) => {
    if (path) {
      navigate(path)
      window.location.reload()
    }
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_logo}>
          <a href='/'><img src={`src/assets/logo.png`} /></a>
        </div>
        <div className={styles.hamburger}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" onClick={() => setIsOpenSidebar(true)}>
            <path d="M5.33203 8H26.6654M5.33203 15.3333H26.6654M5.33203 22.6667H26.6654" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className={styles.navrigth}>
          <div className={styles.verticalLine}></div>
          <button className={styles.selectaddressbutton}>{t('Select a delivery address')}</button>
          <div className={styles.verticalLine}></div>
          <div className={styles.button}>
            <button className={styles.singup}><span onClick={() => navigateTo('/register')}>{t('Register')}</span></button>
            <button className={styles.singin}><span onClick={() => openModal("signup")}>{t('Login')}</span></button>
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.lang}>
            <button className={styles.singin}><span onClick={() => changeLanguage('en')}>{t('EN')}</span></button>
            <button className={styles.singin}><span onClick={() => changeLanguage('th')}>{t('TH')}</span></button>
          </div>
        </div>
      </nav>
      <Sidebar isOpenSidebar={isOpenSidebar} onCloseSidebar={onCloseSidebar} />
    </>
  );
}

export default Navbar