import { useState, useEffect } from 'react/'
import styles from './nav-tracker.module.css'

const NavTracker = props => {

  const [current, setCurrent] = useState(props.initial)

  useEffect(() => 
    window.addEventListener(
      'sectionView',
      event => {
        setCurrent(event.detail.section)
      }
    )
  )

  return (
    <div class={ styles.NT }><span>{ current }/{ props.total }</span></div>
  )

}

export default NavTracker