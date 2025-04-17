import React from 'react'
import Nevbar from './Layout/Nevbar.js'
import Body from './Body.js'
import Experince from './Experince.js'
import Footer from './Layout/Footer.js'
import TeachnologyStack from './TeachnologyStack.js'
import Project from './Project.js'
import Education from './Education.js'

const Home = () => {
  return (
    <div>
      <Nevbar />
      <Body />
      <Experince/>
      <Education/>
      <TeachnologyStack/>
      <Project/>
      <Footer/>

    </div>
  )
}

export default Home
