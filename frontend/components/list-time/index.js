import { useState, useRef  } from 'react'
import styles from './list-time.module.css'

const data =[
  {
    year: '2004',
    title: 'HND in Multimedia',
    content: 'Exploring the role and impact of digital technologies in motion and interactive design.'
  },
  {
    year: '2005',
    title: 'Groundworker',
    content: 'All aspects of ground level labour on new build properties.'
  },
  {
    year: '2015',
    title: 'Retail Senior Supervisor',
    content: 'Increasing team engagement through training and coaching staff.'
  },
  {
    year: '2016',
    title: 'Student @Makers Academy',
    content: 'A fast paced and intensive course in software development completed remotely over 3 months.'
  },
  {
    year: '2022',
    title: <>Full Stack Developer <a href="https://sixtwo.tech">@sixtwo</a></>,
    content: 'Supporting colleagues in dev, design and project management. Writing robust code and reducing technical debt.'
  }
]

const Content = data => {
  return `<span>${data.year.split('').join('</span><span>')}</span>`
}

const ListItem = ({ title, content, isActive }) => {

  const item = useRef()

  return (
    <div ref={ item } className={ styles.hidden } style={{ width: isActive ? '280px' : '0px' }}>
      <div>
        <strong>{ title }</strong><br />
        { content }
      </div>
    </div>
  )

}

const ListTime = () => {

  const [open, setOpen] = useState(data.length - 1)

  return (
    <ul class={ styles.ListTimeAlt }>
      { data.map((values, index) => (
        <li 
          key={ index }
          className={ open === index ? 'u-isOpen' : '' }
          onClick={ setOpen.bind(null, index) }
        >
          <ListItem title={ values.title } content={ values.content } isActive={ open === index } />
          <div className={ styles.content } dangerouslySetInnerHTML={{ __html: Content(values) }}></div>
        </li>
      ))}
    </ul>
  )

}
export default ListTime

