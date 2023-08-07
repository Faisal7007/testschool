import React from 'react'
import './HeroSection.scss'
import bg_image from  '../../images/bgimage-transformed.jpeg'



function HeroSection() {

  // const bg_image= 'https://img.freepik.com/free-photo/top-view-colorful-pencils-with-picture-frame-calculator-dark-background-school-drawing-color-photo_140725-108877.jpg?w=2000'
  return (
    <div className='hero_section'>
      {/* <img src={bg_image} alt="bg_image" /> */}
      <h1 className='title'>Admission Form</h1>
    </div>
  )
}

export default HeroSection
