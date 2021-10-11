import React  from 'react'
import Layout from 'components/layout/layout'

const styles404 = {
  minHeight: '100vh', 
  width: '100%', 
  display: 'flex', 
  alignItems: 'center',
  justifyContent: 'center'
}

const Custom404 = () => 
  <Layout global={global}>
    <div style={styles404}>
      <h1 style={{ fontSize: '2rem' }}>404 - a page that was not found</h1>
    </div>
  </Layout>

export default Custom404