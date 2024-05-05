import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PurchageCard from "./purchageCard";
import PurchageCardRowview from "@/components/purchageCardRowview";
import Tableview from "./tableview";

const Search = () => {
    return (
        <div class="px-6 py-3 w-full">
            <Tabs defaultValue="account" className="">
                <div className="flex items-center justify-between">
                    <div className="flex">
                        <div class="flex items-center space-x-4 ">
                            <p class="text-[#03111F] font-[16px]">
                                Select Products
                            </p>
                            <div className="relative">
                                <svg
                                    class="absolute top-[11px] left-4"
                                    width="16"
                                    height="17"
                                    viewBox="0 0 14 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13 13.5L10.6667 11.1667M12.3333 7.16667C12.3333 10.2963 9.79628 12.8333 6.66667 12.8333C3.53705 12.8333 1 10.2963 1 7.16667C1 4.03705 3.53705 1.5 6.66667 1.5C9.79628 1.5 12.3333 4.03705 12.3333 7.16667Z"
                                        stroke="#838990"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search products by name or SKU"
                                    class=" w-80 rounded-[64px] px-2 py-2 border border-slate placeholder: text-[14px] text-[#838990] pl-10"
                                />
                            </div>
                        </div>
                    </div>
                    <TabsList className="flex items-center space-x-2">
                        <button
                            type="submit"
                            class="rounded-[29px] text-[#FDFFFC] font-[14px] bg-[#5291CD] px-4 py-2"
                        >
                            Refill Inventory
                        </button>
                    <div class=" text-[#626973] text-[12px]"> View by</div>
                        <TabsTrigger value="v1">
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 28 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="0.5"
                                    y="1"
                                    width="27"
                                    height="27"
                                    rx="3.5"
                                    fill="white"
                                />
                                <rect
                                    x="0.5"
                                    y="1"
                                    width="27"
                                    height="27"
                                    rx="3.5"
                                    stroke="#03111F"
                                />
                                <path
                                    d="M11 7H7.83333C7.36662 7 7.13327 7 6.95501 7.09083C6.79821 7.17072 6.67072 7.29821 6.59083 7.45501C6.5 7.63327 6.5 7.86662 6.5 8.33333V11.5C6.5 11.9667 6.5 12.2001 6.59083 12.3783C6.67072 12.5351 6.79821 12.6626 6.95501 12.7425C7.13327 12.8333 7.36662 12.8333 7.83333 12.8333H11C11.4667 12.8333 11.7001 12.8333 11.8783 12.7425C12.0351 12.6626 12.1626 12.5351 12.2425 12.3783C12.3333 12.2001 12.3333 11.9667 12.3333 11.5V8.33333C12.3333 7.86662 12.3333 7.63327 12.2425 7.45501C12.1626 7.29821 12.0351 7.17072 11.8783 7.09083C11.7001 7 11.4667 7 11 7Z"
                                    stroke="#03111F"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M20.1667 7H17C16.5333 7 16.2999 7 16.1217 7.09083C15.9649 7.17072 15.8374 7.29821 15.7575 7.45501C15.6667 7.63327 15.6667 7.86662 15.6667 8.33333V11.5C15.6667 11.9667 15.6667 12.2001 15.7575 12.3783C15.8374 12.5351 15.9649 12.6626 16.1217 12.7425C16.2999 12.8333 16.5333 12.8333 17 12.8333H20.1667C20.6334 12.8333 20.8667 12.8333 21.045 12.7425C21.2018 12.6626 21.3293 12.5351 21.4092 12.3783C21.5 12.2001 21.5 11.9667 21.5 11.5V8.33333C21.5 7.86662 21.5 7.63327 21.4092 7.45501C21.3293 7.29821 21.2018 7.17072 21.045 7.09083C20.8667 7 20.6334 7 20.1667 7Z"
                                    stroke="#03111F"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M20.1667 16.1667H17C16.5333 16.1667 16.2999 16.1667 16.1217 16.2575C15.9649 16.3374 15.8374 16.4649 15.7575 16.6217C15.6667 16.7999 15.6667 17.0333 15.6667 17.5V20.6667C15.6667 21.1334 15.6667 21.3667 15.7575 21.545C15.8374 21.7018 15.9649 21.8293 16.1217 21.9092C16.2999 22 16.5333 22 17 22H20.1667C20.6334 22 20.8667 22 21.045 21.9092C21.2018 21.8293 21.3293 21.7018 21.4092 21.545C21.5 21.3667 21.5 21.1334 21.5 20.6667V17.5C21.5 17.0333 21.5 16.7999 21.4092 16.6217C21.3293 16.4649 21.2018 16.3374 21.045 16.2575C20.8667 16.1667 20.6334 16.1667 20.1667 16.1667Z"
                                    stroke="#03111F"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M11 16.1667H7.83333C7.36662 16.1667 7.13327 16.1667 6.95501 16.2575C6.79821 16.3374 6.67072 16.4649 6.59083 16.6217C6.5 16.7999 6.5 17.0333 6.5 17.5V20.6667C6.5 21.1334 6.5 21.3667 6.59083 21.545C6.67072 21.7018 6.79821 21.8293 6.95501 21.9092C7.13327 22 7.36662 22 7.83333 22H11C11.4667 22 11.7001 22 11.8783 21.9092C12.0351 21.8293 12.1626 21.7018 12.2425 21.545C12.3333 21.3667 12.3333 21.1334 12.3333 20.6667V17.5C12.3333 17.0333 12.3333 16.7999 12.2425 16.6217C12.1626 16.4649 12.0351 16.3374 11.8783 16.2575C11.7001 16.1667 11.4667 16.1667 11 16.1667Z"
                                    stroke="#03111F"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </TabsTrigger>
                        <TabsTrigger value="v2">
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.5 10.5L7.5 10.5M17.5 5.50001L7.5 5.50001M17.5 15.5L7.5 15.5M4.16667 10.5C4.16667 10.9602 3.79357 11.3333 3.33333 11.3333C2.8731 11.3333 2.5 10.9602 2.5 10.5C2.5 10.0398 2.8731 9.66667 3.33333 9.66667C3.79357 9.66667 4.16667 10.0398 4.16667 10.5ZM4.16667 5.50001C4.16667 5.96024 3.79357 6.33334 3.33333 6.33334C2.8731 6.33334 2.5 5.96024 2.5 5.50001C2.5 5.03977 2.8731 4.66667 3.33333 4.66667C3.79357 4.66667 4.16667 5.03977 4.16667 5.50001ZM4.16667 15.5C4.16667 15.9602 3.79357 16.3333 3.33333 16.3333C2.8731 16.3333 2.5 15.9602 2.5 15.5C2.5 15.0398 2.8731 14.6667 3.33333 14.6667C3.79357 14.6667 4.16667 15.0398 4.16667 15.5Z"
                                    stroke="#626973"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </TabsTrigger>
                        <TabsTrigger value="v3">
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8332 6.33333H4.33317C3.39975 6.33333 2.93304 6.33333 2.57652 6.51499C2.26292 6.67478 2.00795 6.92975 1.84816 7.24335C1.6665 7.59987 1.6665 8.06658 1.6665 9V12C1.6665 12.9334 1.6665 13.4001 1.84816 13.7567C2.00795 14.0703 2.26292 14.3252 2.57652 14.485C2.93304 14.6667 3.39975 14.6667 4.33317 14.6667H10.8332M14.1665 6.33333H15.6665C16.5999 6.33333 17.0666 6.33333 17.4232 6.51499C17.7368 6.67478 17.9917 6.92975 18.1515 7.24335C18.3332 7.59987 18.3332 8.06658 18.3332 9V12C18.3332 12.9334 18.3332 13.4001 18.1515 13.7567C17.9917 14.0703 17.7368 14.3252 17.4232 14.485C17.0666 14.6667 16.5999 14.6667 15.6665 14.6667H14.1665M14.1665 18L14.1665 3M16.2498 3.00001L12.0832 3M16.2498 18L12.0832 18"
                                    stroke="#626973"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="v1">
                    <PurchageCard />
                </TabsContent>
                <TabsContent value="v2">
                    <PurchageCardRowview />
                </TabsContent>
                <TabsContent value="v3">
                    <Tableview />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Search;
