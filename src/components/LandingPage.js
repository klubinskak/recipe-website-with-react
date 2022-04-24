import React from 'react'
import Recipes from './Recipes'

const LandingPage = () => {
  return (
    <>
      <div className='container'>
        <h1 className='main-title'>Good Food<span id='dot'>,</span>  Good Life<span id="dot">.</span></h1>
      </div>
      <Recipes/>
    </>
  )
}

export default LandingPage