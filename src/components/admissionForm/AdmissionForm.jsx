import React from 'react'
import './AdmissionForm.scss'
import InputFields from '../inputFields/InputFields'
import InputFieldSmall from '../inputFieldSmall/InputFieldSmall'

function AdmissionForm() {
const admissionformimg = 'https://www.smnsbokaro.in/images/admission.png'

  return (
    <div className='admission_form'>
        <div className="left">
            <img src={admissionformimg} alt="admission_image" />
        </div>
      <div className="right">
        <InputFields type='text' requiredToolTip='*This field is required' placeholder='*Name' />
        <div className="small_row">
            <InputFieldSmall type='mobile' requiredToolTip='*This field is required' placeholder='*Mobile Number'/>
            <InputFieldSmall type='email' requiredToolTip='*This field is required' placeholder='*Email' />
        </div>

        <div className="small_row">
            <InputFieldSmall type='text' requiredToolTip='*This field is required' placeholder='*Child Name'/>
            <InputFieldSmall type='date' requiredToolTip='*This field is required' placeholder='*Date of birth' stylee='40%' />
        </div>
        <div className="message_box">
            <input type="text" placeholder='Message'/>
        </div>
        <button className='submit_btn'>SUBMIT</button>

      </div>
    </div>
  )
}

export default AdmissionForm
