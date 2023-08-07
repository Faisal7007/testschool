import React from 'react'
import './Careers.scss'
import InputFieldSmall from '../inputFieldSmall/InputFieldSmall'
import InputFields from '../inputFields/InputFields'

function Careers() {
    const careerimg ='https://thumbs.dreamstime.com/b/happy-children-future-career-labor-day-may-little-kids-helmet-tablet-hammer-foreman-inspector-repair-small-girls-149117464.jpg'
  return (
    <div className='careers'>
         <div className="left">
            <img src={careerimg} alt="admission_image" />
        </div>
      <div className="right">
        <InputFields type='text' requiredToolTip='*This field is required' placeholder='*Post for applications' />
        <div className="small_row">
            <InputFieldSmall type='text' requiredToolTip='*This field is required' placeholder='*Name'/>
            <InputFieldSmall type='mobile' requiredToolTip='*This field is required' placeholder='*Mobile' />
        </div>

        <div className="small_row">
            <InputFieldSmall type='email' requiredToolTip='*This field is required' placeholder='*Email'/>
            <InputFieldSmall type='text' placeholder='Country'  />
        </div>
        <div className="message_box">
            <input type="text" placeholder='Message'/>
        </div>
       
        <InputFields type='file' placeholder='Upload CV' stylee='40%'/>
       
        <button  className='submit_btn'>SUBMIT</button>

      </div>
    </div>
  )
}

export default Careers
