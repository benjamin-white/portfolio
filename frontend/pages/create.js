import React        from "react"
import Layout       from 'components/layout/layout'
import HeaderPage   from 'components/header-page'
import { fetchAPI } from 'lib/api'
import Link         from 'next/link'

const PageCreate = ({ objects, global }) => {

  return (
    <Layout global={global}>
      <HeaderPage title="Visual" />
      <ul>{ (objects || []).map(x => <Link as={`/article/${'nicename'}`} href="/article/[x.id]">{x.Title}</Link>) }</ul>
    </Layout>
  )

}

export async function getStaticProps() {

  const [objects] = await Promise.all([
    fetchAPI('/objects')
  ])

  return {
    props: { objects },
    revalidate: 1,
  }

}

export default PageCreate