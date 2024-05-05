import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from '@/components/ui/button'
  

const inventrySecondrySale = () => {
const productinfo =[
    {
        invice_no:"5632489",
        invice_type:"Invoice",
        invice_date:"25-11-2023",
        sold_to:"All India Institute of Medical Science",
        total_product:"5",
        implant_date:"23-11-2023",
        total_amount:"10,000",

    },
    {
        invice_no:"5632489",
        invice_type:"Consignment",
        invice_date:"25-11-2023",
        sold_to:"All India Institute of Medical Science",
        total_product:"5",
        implant_date:"23-11-2023",
        total_amount:"10,000",

    },
    {
        invice_no:"5632489",
        invice_type:"Consignment",
        invice_date:"25-11-2023",
        sold_to:"All India Institute of Medical Science",
        total_product:"5",
        implant_date:"23-11-2023",
        total_amount:"10,000",

    },
    {
        invice_no:"5632489",
        invice_type:"Invoice",
        invice_date:"25-11-2023",
        sold_to:"All India Institute of Medical Science",
        total_product:"5",
        implant_date:"23-11-2023",
        total_amount:"10,000",

    },
    {
        invice_no:"5632489",
        invice_type:"Invoice",
        invice_date:"25-11-2023",
        sold_to:"All India Institute of Medical Science",
        total_product:"5",
        implant_date:"23-11-2023",
        total_amount:"10,000",

    },
]
  return (
    <Table >
  {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
  <TableHeader>
    <TableRow className="bg-white text-[14px] font-normal leading-[16.94px] text-[#626973]">
      <TableHead >Invoice No.</TableHead>
      <TableHead>Invoice Type</TableHead>
      <TableHead>Invoice Date</TableHead>
      <TableHead>Sold To</TableHead>
      <TableHead>Total Products</TableHead>
      <TableHead>Date of Implant</TableHead>
      <TableHead>Total Amount</TableHead>
    </TableRow>
  </TableHeader>
  {productinfo.map((info)=> {
    return(
     <TableBody className="bg-white border-b border-[#DADADA]">
        <TableRow className="text-[14px] text-[03111F] font-normal leading-[16.94px]">
          <TableCell>{info.invice_no}</TableCell>
          <TableCell><Button className='py-1 px-2 text-[12px] text-[521063] leading-[14.52px] font-medium bg-[#F7D8FF] rounded-[22px]'>{info.invice_type}</Button></TableCell>
          <TableCell>{info.invice_date}</TableCell>
          <TableCell >{info.sold_to}</TableCell>
          <TableCell>{info.total_product}</TableCell>
          <TableCell>{info.implant_date}</TableCell>
          <TableCell>{info.total_amount}</TableCell>    
        </TableRow>
      </TableBody>
    )}
  )}
  
</Table>
  )
}

export default inventrySecondrySale