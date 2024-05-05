import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import{
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const addCustomerPopup = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger>Open</AlertDialogTrigger>
            <AlertDialogContent className=" w-[460px] p-4 rounded-[8px] bg-[#FFF]">
                <div className="flex justify-between items-center ">
                    <div className="text-[#03111F] text-[24px] font-[inter] font-medium leading-normal">
                        {" "}
                        Add Hospital
                    </div>
                    <div className="text-[#000000]">
                        <AlertDialogCancel>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="x-close">
                                    <path
                                        id="Icon"
                                        d="M15 5.5L5 15.5M5 5.5L15 15.5"
                                        stroke="black"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                            </svg>
                        </AlertDialogCancel>
                    </div>
                </div>
                <div className="">
                    <div className="py-8">
                        <div className="space-y-4">
                        <div className="space-y-[6px]">
                            <Label htmlFor="hospital">Hospital Name</Label>
                            <Input type="text" id="hospital" />
                        </div>
                        <div className="space-y-[6px]">
                            <Label htmlFor="PersonName">
                                Location
                            </Label>
                            <Select>
                                    <SelectTrigger className="">
                                        <SelectValue placeholder="" />
                                    </SelectTrigger>
                                    <SelectContent
                                    // value={selectedOption}
                                    // onChange={(e) =>
                                    //     handleSelectedboxChange(
                                    //         e.target.value
                                    //     )
                                    // }
                                    >
                                        <SelectItem value="Attach the Invoice">
                                            Attach the Invoice
                                        </SelectItem>
                                        <SelectItem value="Reference the I.N.">
                                            Reference the I.N.
                                        </SelectItem>
                                        <SelectItem value="Keep a Copy for Your Records">
                                            Keep a Copy for Your Records
                                        </SelectItem>
                                        <SelectItem value="Other">
                                            Other
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                        </div>
                        
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Link href="">
                            <AlertDialogAction className="py-4 px-6 bg-[#5291CD] text-[#FDFFFC]">Add</AlertDialogAction>
                        </Link>
                    </div>
                </div>
                    
            
            </AlertDialogContent>
        </AlertDialog>
    );
    
};

export default addCustomerPopup;
