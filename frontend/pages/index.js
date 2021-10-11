import React        from 'react'
import Layout       from 'components/layout/layout'
import Seo          from 'components/seo/seo'
import { fetchAPI } from 'lib/api'
import Section      from 'components/section/section'
import NavTracker   from 'components/nav-tracker/nav-tracker'
import ListTime     from 'components/list-time'

const PageHome = ({ homepage, global }) => 
  <Layout global={global}>
    <NavTracker total="5" initial="1" />
    <Seo seo={homepage.seo} />
    <Section styles={ ['u-isFull'] } id="section_1">
      <div ariaHidden="true"></div>
      <div class="u-container" style={{textAlign: 'center'}}>
        <h1 style={{margin: 0}}>Hello</h1>
        <p style={{fontSize: '1.5rem'}}>Welcome to the online home of Ben White.<br />A developer and all round average human.</p>
      </div>
    </Section>
    <Section styles={ ['u-isFull'] } id="section_2">
      <div ariaHidden="true"></div>
      <div class="u-container" style={{textAlign: 'center'}}>
        <h2>Who Am I?</h2>
        <p>Born sometime in the 80s I have simply always enjoyed making things. Finding ways to put things together and conecting them to create new objects is a constant fascination and enjoyment. I'm a bit of a minimalist, like discovering great music and indulging a layman's enjoyment of Physics and Philosophy.</p>
        <p>I work with <strong>PHP</strong>, <strong>Javascript</strong>, <strong>React</strong> and modern cross-browser and responsive SASS or <strong>CSS</strong>. I'm comfortable creating custom Webpack configs, working with RESTful or GraphQL APIs and maintaining Apache, nginx and DNS setups.</p>
      </div>
    </Section>
    <Section styles={ ['u-isFull'] } id="section_3">
      <div ariaHidden="true"></div>
      <div class="u-container Timeline" style={{textAlign: 'center'}}>
        <h2>What I've been up to...</h2>
        <ListTime />
      </div>
    </Section>
    <Section styles={ ['u-isFull'] } id="section_4">
      <div ariaHidden="true"></div>
      <div class="u-container" style={{textAlign: 'center'}}>
        <p>I've been lucky enough to work on some great projects and with amazing people. Some recent sites include using ecommerce to help businesses adapt, enabling clients to reach an international audience with multi language solutions and increasing user engament with wearable integrations.</p>
        <p>The projects have covered a range of sectors and user personas including health and wellbeing, leisure and financial services.</p>
      </div>
    </Section>
    <Section styles={ ['u-isFull'] } id="section_5">
      <div ariaHidden="true"></div>
      <div class="u-container" style={{textAlign: 'center'}}>
        <h2>Say Hello.</h2>
        <p>To talk about an idea, project or just in general please mail me at <br /><strong><a href="mailto:benjaminwhite@live.co.uk">benjaminwhite@live.co.uk</a></strong></p>
      </div>
    </Section>
  </Layout>

export async function getStaticProps() {

  const [homepage] = await Promise.all([
    fetchAPI('/homepage')
  ])

  return {
    props: { homepage },
    revalidate: 1,
  }

}

export default PageHome