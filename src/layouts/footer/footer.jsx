import React, { useEffect, useState } from 'react';
import styles from './footer.module.scss';
import { TwitterOutlined, YoutubeFilled } from '@ant-design/icons';
// import logo from '../../image/Rectangle.png';
// import TermsofService from '../policy/termsofservice';
// import PrivacyPolicy from '../policy/privacypolicy';
// import { useTranslation } from 'react-i18next';


  function AppFooter() {
    return (
        <div className={styles.footerCover}>
          <h1> 'FOOter'</h1>
          <div className={styles.footer}><h1> 'FOOter2'</h1></div>
          <div className={styles.infooter}><h1> 'FOOter3'</h1></div>
        </div>
    );
}

export default AppFooter;
