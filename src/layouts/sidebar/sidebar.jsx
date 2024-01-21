import React, { useState } from 'react';
import styles from './sidebar.module.scss'

const Sidebar = ({ }) => {
  const [isVisible, setIsVisible] = useState(false)

  const closeSidebar = () => {
    setIsVisible(!isVisible)
    setTimeout(() => {
      onCloseSidebar();
  }, 300);
  }

  return (
    <div className={`${isVisible ? `${styles.sidebarContent}` : 'hidden'}`}>
      <div>
        <span className={styles.close} onClick={closeSidebar}>&times;</span>
      </div>
    </div>
  )
}

export default Sidebar
