import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const testComp = ({props}) => {
    const[value, setValue] = useState(['']);
    useEffect(()=>{
        setValue({props});
    },[])
    return (
        <div>
            {value.map((val)=>{
                <p>
                    {props.product_image}
                </p>
            })}
        </div>
  )
}

export default testComp