import React         from 'react'
import Link          from 'next/link'
import { ArrowDown } from 'components/icons/icons'
import styles        from './header-site.module.css'

const HeaderSite = ({ logo, route }) => {

  const isHome = route === '/'

  return (
    <header className={ ['u-container', styles.HeaderSite, isHome ? 'u-isHome' : ''].join(' ') }>
      <nav>
        <ul className={`${styles.HeaderSite_menu} u-decorateLinks`}>
          { isHome ? '' : <li className={styles.HeaderSite_menuItem}><Link href="/">Main</Link></li> }
          { !isHome ? '' : <li className={styles.HeaderSite_menuItem}><Link href="/create/">Visual</Link></li> }
        </ul>
        <a href="ben_white_cv.pdf" target="_blank" rel="noopener noreferrer"><span>CV</span><ArrowDown /></a>
      </nav>
    </header>
  )

}

export default HeaderSite