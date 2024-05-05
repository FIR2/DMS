"use client";
import React from "react";
import Image from "next/image";
import { NextRequest } from "next/server";
import { Info } from "lucide-react";

const product_details = () => {
    const productInfo = [
        {
            product_image: "/images/cardimage2.png",
            product_title: "Dafodil Neo Accessories",
            product_code: "DDLN13M",
            material:"Neo",
            uom:"14",
            Scheme_no:"UPTO10",
            Qty:"x15",
            amount: "2,000",
        },

        {
            product_image: "/images/cardimage2.png",
            product_title: "Dafodil Neo Accessories",
            product_code: "DDLN13M",
            material:"Neo",
            uom:"14",
            Scheme_no:"UPTO10",
            Qty:"x15",
            amount: "2,000",
        },

        {
            product_image: "/images/cardimage2.png",
            product_title: "Dafodil Neo Accessories",
            product_code: "DDLN13M",
            material:"Neo",
            uom:"14",
            Scheme_no:"UPTO10",
            Qty:"x15",
            amount: "2,000",
            
        },
        {
            product_image: "/images/cardimage2.png",
            product_title: "Dafodil Neo Accessories",
            product_code: "DDLN13M",
            material:"Neo",
            uom:"14",
            Scheme_no:"UPTO10",
            Qty:"x15",
            amount: "2,000",
        },
    ];
    return (
        <div className="rounded-2 p-6 space-y-6 bg-[#FFFFFF]">
            <div className="space-y-2">
                <div>
                    <h1 className="text-[#03111F] text-[20px] font-normal leading-[24.2px]">
                        Products
                    </h1>
                </div>
                <div>
                    <div className="bg-[#A0A0A0] h-[1px]"></div>
                </div>
            </div>
            <div>
                {productInfo.map((info) => {
                    return (
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <div className="gap-4 flex justify-between items-center">
                                    <div className=" rounded-1 bg-[#FFFBF5]">
                                        <Image
                                            src={info.product_image}
                                            width="54"
                                            height="54"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <h1 className="text-[16px] text-[#03111F] font-medium leading-[19.36px]">
                                            {info.product_title}
                                        </h1>
                                        <div className="gap-2 flex items-center text-[14px] font-normal text-[#626973] leading-[16.94px]">
                                            <p>{info.product_code}</p>
                                            <p className="w-[6px] h-[6px]  bg-[#D9D9D9] rounded-full"></p>
                                            <p>{info.material}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-x-7 flex justify-between">
                                    <div className="flex justify space-x-4 items-center">
                                        <div className="space-y-1">
                                            <h3 className="text-[14px] text-[#626973] font-normal leading-[16.94px]">
                                                UOM
                                            </h3>
                                            <span className="text-[16px] font-normal leading-[19.36px] text-[#03111F]">
                                                {info.uom}
                                            </span>
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-[14px] text-[#626973] font-normal leading-[16.94px]">
                                                Scheme No.
                                            </h3>
                                            <span className="text-[16px] font-normal leading-[19.36px] text-[#03111F]">
                                                {info.Scheme_no}
                                            </span>
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-[14px] text-[#626973] font-normal leading-[16.94px]">
                                                Qty
                                            </h3>
                                            <span className="text-[16px] font-normal leading-[19.36px] text-[#03111F]">
                                                {info.Qty}
                                            </span>
                                        </div>
                                        <div className="space-y-1 items-start">
                                            <h3 className="text-[14px] text-[#626973] font-normal leading-[16.94px]">
                                                Amount
                                            </h3>
                                            <span className="text-[16px] font-normal leading-[19.36px] text-[#03111F]">
                                            &#8377;{info.amount}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="gap-4 flex items-center">
                                        <div>
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
                                        </div>
                                        <div>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="h-[1px] bg-[#DADADA] mb-2"></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default product_details;
