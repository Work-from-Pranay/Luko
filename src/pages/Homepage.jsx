import React from 'react'
import Hero from "../components/Hero"
import Part2 from '../components/Part2'
import "../pages/Homepage.css"
import Part3 from '../components/Part3'
import Part4 from '../components/Part4'
import Footer from '../components/Footer';


const Homepage = () => {
  return (
    <>
      <div className="mainHome">

        <Hero></Hero>
        <Part2></Part2>
        <Part3></Part3>
        <Part4></Part4>
        <Footer></Footer>
        
      </div>
    </>
  )
}

export default Homepage