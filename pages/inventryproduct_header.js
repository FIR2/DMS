import React, { useState } from "react";

import { Button } from '@/components/ui/button'

const Main_header = ({}) => {
    return (
        <nav className="flex items-center bg-white pt-4 pb-0 px-6 justify-between border-b gap-3">
            <div>
                <ul className="">                    
                    <li className="text-[14px] text-[#03111F] font-normal  leading-[19px] px-2 pb-3">3 Products Selected</li>
                </ul>
            </div>
            <div className="flex items-center gap-6  pb-3">
                <div className=" flex items-center space-x-2">
                    <Button className="rounded-full py-2 px-3" variant="invProdbtn">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 17H4M4 17L8 13M4 17L8 21M4 7H20M20 7L16 3M20 7L16 11"
                                stroke="#03111F"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </Button>
                    <Button className="items-center" variant="invProdbtn1" size="invProdbtnsize">Transfer Products</Button>
                </div>
                
                <div className="flex items-center space-x-2">
                    <Button  className="rounded-full py-2 px-2" variant="invProdbtn">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 7H14C17.3137 7 20 9.68629 20 13C20 16.3137 17.3137 19 14 19H4M4 7L8 3M4 7L8 11"
                            stroke="#03111F"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    </Button>
                    <Button className="items-center" variant="invProdbtn1" size="invProdbtnsize">Return Products</Button>
                </div>
                
                <div className="flex space-x-3 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M6 12H18M3 6H21M9 18H15"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <p>Filter</p>
                </div>
            </div>
        </nav>
    );
};

export default Main_header;
