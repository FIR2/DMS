import Success_popup from '@/components/Success_popup'
import React from 'react'

const Sale_popup = () => {
  return (
    <Success_popup 
     title="Request to Add Secondary Sales"
     description="Your request to add new secondary sales has been received and under review we will notify once it approved"
     button="Okey"
    />
  )
}

export default Sale_popup