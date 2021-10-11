import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope }      from '@fortawesome/free-regular-svg-icons'
import { 
  faBehance,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithubSquare
} from '@fortawesome/free-brands-svg-icons'
import styles from './social-links.module.css'

const socialAccounts = [
  {
    label: 'Github',
    icon: faGithubSquare,
    link: '//behance.net/nvlnvl'
  },
  {
    label: 'Behance',
    icon: faBehance,
    link: '//behance.net/nvlnvl'
  },
  {
    label: 'Twitter',
    icon: faTwitter,
    link: '//twitter.com/nvlnvl'
  },
  {
    label: 'Instagram',
    icon: faInstagram,
    link: '//twitter.com/nvlnvl'
  },
  {
    label: 'LinkedIn',
    icon: faLinkedin,
    link: '//twitter.com/nvlnvl'
  },
  {
    label: 'Email',
    icon: faEnvelope,
    link: 'mailto:benjaminwhite@live.co.uk'
  }
];

const socialLinks = () => 
  <ul className={styles.SL}>
    { socialAccounts.map(({label, icon, link}) => 
      <li key={label}>
        <a href={link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={icon} /></a>
      </li>
    ) }
  </ul>

export default socialLinks