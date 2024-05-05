import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableFooter,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const tableview = () => {
    const info = [
        {
            product_image: "/images/cardimage2.png",
            product_name: "Dafodil Neo Accessories",
            product_code: "DDLN13M",
            size: "11",
            material: "Neo",
            uom: "12",
            qty: "15",
            scheme_code: "-",
        },
        {
            product_image: "/images/cardimage2.png",
            product_name: "Dafodil Neo Accessories",
            product_code: "DDLN13M",
            size: "11",
            material: "Neo",
            uom: "12",
            qty: "15",
            scheme_code: "-",
        },
        {
            product_image: "/images/cardimage2.png",
            product_name: "Dafodil Neo Accessories",
            product_code: "DDLN13M",
            size: "11",
            material: "Neo",
            uom: "12",
            qty: "15",
            scheme_code: "-",
        },
    ];
    return (
        <div>
            <Table className="bg-[#ECECEC]">
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow className="text-[#626973] text[14px] font-normal leading-[16.94px]">
                        <TableHead className="">Product Name</TableHead>
                        <TableHead>Product Code</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Material</TableHead>
                        <TableHead>UOM</TableHead>
                        <TableHead>Qty</TableHead>
                        <TableHead className="">Scheme Code</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="">
                    <TableRow className=" rounded-2 py-0 px-3 gap-4 text-[16px] font-normal leading-[19.6px] w-full bg-white">
                        <TableCell>
                            <Input className="text-[#03111F]" />
                        </TableCell>
                        <TableCell>
                            <Input className="text-[#03111F]" />
                        </TableCell>
                        <TableCell>
                            <Select>
                                <SelectTrigger className="text-[#03111F] h-[48px]">
                                    <SelectValue placeholder="10" />
                                </SelectTrigger>
                                <SelectContent className="text-[#03111F]">
                                    <SelectItem value="10">10</SelectItem>
                                    <SelectItem value="11">11</SelectItem>
                                    <SelectItem value="12">12</SelectItem>
                                    <SelectItem value="13">13</SelectItem>
                                    <SelectItem value="14">14</SelectItem>
                                </SelectContent>
                            </Select>
                        </TableCell>
                        <TableCell>
                            <Select className="">
                                <SelectTrigger className="text-[#03111F] h-[48px]">
                                    <SelectValue placeholder="Neo" />
                                </SelectTrigger>
                                <SelectContent className="text-[#03111F] ">
                                    <SelectItem value="Neo">Neo</SelectItem>
                                    <SelectItem value="Neo">Neo</SelectItem>
                                    <SelectItem value="Neo">Neo</SelectItem>
                                    <SelectItem value="Neo">Neo</SelectItem>
                                    <SelectItem value="Neo">Neo</SelectItem>
                                </SelectContent>
                            </Select>
                        </TableCell>
                        <TableCell>
                            <Select>
                                <SelectTrigger className="text-[#03111F] h-[48px]">
                                    <SelectValue placeholder="11" />
                                </SelectTrigger>
                                <SelectContent className="text-[#03111F] ">
                                    <SelectItem
                                        value="10"
                                        className="border-b border-slate-300 "
                                    >
                                        10
                                    </SelectItem>
                                    <SelectItem value="11">11</SelectItem>
                                    <SelectItem value="12">12</SelectItem>
                                    <SelectItem value="13">13</SelectItem>
                                    <SelectItem value="14">14</SelectItem>
                                    <SelectItem
                                        value="Request Custom"
                                        className="text-blue-300"
                                    >
                                        Request Custom
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </TableCell>
                        <TableCell className="">
                            <Input className="text-[#03111F]" />
                        </TableCell>
                        <TableCell className="">
                            <Input className="text-[#03111F]" />
                        </TableCell>
                        <TableCell className="">
                            <button className=" rounded-[29px] py-2 px-4 gap-2 bg-[#EAEFF4] text-[#FDFFFC] text-[14px] font-semibold leading-[16.94px]">
                                Add
                            </button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <p className=" pl-2 w-full bg-[#ECECEC] text-[20px] font-semibold leading-[24.2px] text-[#03111F]">Added Products</p>
            <Table className="bg-[#ECECEC]">
          
                <TableHeader>
                
                    <TableRow className="text-[#626973] text[14px] font-normal leading-[16.94px]">
                        <TableHead className="">Product Name</TableHead>
                        <TableHead>Product Code</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Material</TableHead>
                        <TableHead>UOM</TableHead>
                        <TableHead>Qty</TableHead>
                        <TableHead className="">Scheme Code</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {info.map((info) => {
                        return (
                            <TableRow className=" rounded-2 py-0 px-3 gap-4 text-[16px] font-normal leading-[19.6px] w-full bg-white">
                                <TableCell className=" items-center">
                                    <div className="flex gap-3 items-center">
                                        <div className="bg-[#FFFBF5]">
                                            <Image
                                                src={info.product_image}
                                                width="54"
                                                height="54"
                                            />
                                        </div>

                                        <p className="text-[16px] text-[#03111F] font-medium leading-[19.36px]">
                                            {info.product_name}
                                        </p>
                                    </div>
                                </TableCell>
                                <TableCell>{info.product_code}</TableCell>
                                <TableCell>{info.size}</TableCell>
                                <TableCell>{info.material}</TableCell>
                                <TableCell>{info.uom}</TableCell>
                                <TableCell className="">{info.qty}</TableCell>
                                <TableCell className="">
                                    {info.product_code}
                                </TableCell>
                                <TableCell>
                                    {" "}
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.87604 18.1159C2.92198 17.7024 2.94496 17.4957 3.00751 17.3025C3.06301 17.131 3.14143 16.9679 3.24064 16.8174C3.35246 16.6478 3.49955 16.5008 3.79373 16.2066L17 3.0003C18.1046 1.89573 19.8955 1.89573 21 3.0003C22.1046 4.10487 22.1046 5.89573 21 7.0003L7.79373 20.2066C7.49955 20.5008 7.35245 20.6479 7.18289 20.7597C7.03245 20.8589 6.86929 20.9373 6.69785 20.9928C6.5046 21.0553 6.29786 21.0783 5.88437 21.1243L2.5 21.5003L2.87604 18.1159Z"
                                            stroke="black"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </TableCell>
                                <TableCell>
                                    {" "}
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"
                                            stroke="#03111F"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
};

export default tableview;
