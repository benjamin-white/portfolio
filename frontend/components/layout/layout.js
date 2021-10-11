import HeaderSite from '../header-site/header-site'
import FooterSite from '../footer-site/footer-site'
import styles     from './layout.module.css'

const Layout = ({ children, global }) => (
  <div className={styles.Layout}>
    <div className={ styles.BackPlate }></div>
    <HeaderSite logo={global.siteLogo} route={global.route} />
    <div>
      {children}
    </div>
    <FooterSite />
  </div>
)

export default Layout
