import React, {useState} from 'react'
import Nav from '../../components/nav'
import Header from '../../components/header'
import Main from '../../components/main'
import Banner from '../../components/banner'
import Footer from '../../components/footer'

const Home = () => {
  const [navSize, setNavSize] = useState('')
  return (
    <>
      <Nav setNavSize={setNavSize}/>
      <Header navHeight={navSize}/>
      <Main/>
      <Banner/>
      <Footer/>
    </>
  )
}

export default Home