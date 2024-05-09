import Success_popup from '@/components/Success_popup'
import React from 'react'

const Credit_popup = () => {
  return (
    <Success_popup 
      title="Credit Note Created"
      description="We received your credit note request and it is under review"
      button="Okey"
      name="successpopup"
    />
  )
}

export default Credit_popup