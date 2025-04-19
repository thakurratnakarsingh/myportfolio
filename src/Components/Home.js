import React from 'react'
import Body from './Body.js'
import Experince from './Experince.js'
import TeachnologyStack from './TeachnologyStack.js'
import Project from './Project.js'
import Education from './Education.js'
import About from './About.js'
import Contacts from './Contacts.js'
import Layout from './Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <Body />
      <About isInHome={true}/>
      <Experince/>
      <Education isInHome={true}/>
      <TeachnologyStack/>
      <Project isInHome={true}/>
      <Contacts isInHome={true}/>
    </Layout>
  )
}

export default Home
