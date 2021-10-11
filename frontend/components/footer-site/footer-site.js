import React       from 'react'
import SocialLinks from '../social-links/social-links'
import styles      from './footer-site.module.css'

const FooterSite = () =>
  <footer className={['u-container', styles.FS].join(' ')}>
    <SocialLinks />
  </footer>

export default FooterSite