import styles from './header-page.module.css'

const HeaderPage = ({ title, intro }) =>
  <header className="u-container">
    <div className={ styles.inner }>
      <h1 className={ styles.title }>{ title }</h1>
      { intro && <p>{ intro }</p> }
    </div>
  </header>

export default HeaderPage