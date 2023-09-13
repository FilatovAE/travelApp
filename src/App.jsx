import { useState } from 'react'

import { IconContext } from 'react-icons'
import { CgMenu, CgClose } from 'react-icons/cg'
import { MdTravelExplore, MdSettings } from 'react-icons/md'
import { BiUserCircle } from 'react-icons/bi'

import styles from './app.module.css'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <header className={styles.header}>
        <div className='container'>
          <div className={styles.header__inner}>
            <button
              className={styles.burgerBtn}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <IconContext.Provider value={{ size: '40px' }}>
                {menuOpen ? <CgClose /> : <CgMenu />}
              </IconContext.Provider>
            </button>
            <h1>
              Travel <span className={styles.logo__span}>App</span>
            </h1>
          </div>
        </div>
      </header>

      <div className={menuOpen ? styles.menuOpen : styles.menuClose}>
        <div className='container'>
          <nav>
            <ul className={styles.nav}>
              <li>
                <div className={styles.icon}>
                  <MdTravelExplore />
                </div>
                <div> Мои путешествия</div>
              </li>
              <li>
                <div className={styles.icon}>
                  <BiUserCircle />
                </div>
                <div>Профиль</div>
              </li>
              <li>
                <div className={styles.icon}>
                  <MdSettings />
                </div>
                <div>Настройки</div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main>Home</main>
    </div>
  )
}

export default App
