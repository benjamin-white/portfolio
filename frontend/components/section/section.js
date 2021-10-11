import React        from 'react'
import useIntersect from 'lib/hooks/iobserver'
import styles       from './section.module.css'

const Section = props => {

  const ioCallback = (id, intersecting) => {

    const sectionDesc = id.split('_')
    const sectionID   = sectionDesc.length > 1 ? sectionDesc[1] : 0

    intersecting && window.dispatchEvent(
      new CustomEvent(
        'sectionView',
        {
          bubbles: true, 
          detail: { 
            section: sectionID
          } 
        }
      )
    )

  }

  const [ containerRef, isVisible ] = useIntersect(
    {
      root: null,
      rootMargin: "0px",
      threshold: .6
    },
    props.id ? ioCallback.bind(null, props.id) : null
  )

  return (
    <section ref={containerRef} className={ [styles.Section, (props.styles || []).join(' ')].join(' ') }>
      { props.children }
    </section>
  )

}

export default Section