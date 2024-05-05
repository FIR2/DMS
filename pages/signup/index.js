import Success_popup from '@/components/Success_popup'
import React from 'react'

const popup = () => {
  return (
    <Success_popup 
      title="Purchage Order Created"
      description="your po with #3126352636 has been created successflly and under review  by our order management team"
      button="Okey"
      url=""
    />
  )
}

export default popup;