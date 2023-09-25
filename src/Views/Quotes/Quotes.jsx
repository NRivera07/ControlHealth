import React from 'react'
import Quote from '../../Components/Quotes/Quote'
import Form from '../../Components/Form/Form'
import './Quotes.css'

function Citas() {
  return (
    <div className='home'>
      <div className='container'>
        <Quote />
        <Form />
      </div>
    </div>
  )
}

export default Citas
