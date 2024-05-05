import React, { useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const return_product_popup = () => {
    const [fileSelected, setFileSelected] = useState(false);
    const [fileName, setFileName] = useState("");
   
    const handleFileUpload = (event) => {
        // Handle the file upload logic here
        const selectedFile = event.target.files[0];
        // console.log("Selected file:", selectedFile);
        setFileName(selectedFile.name);
        // Update state to indicate that a file has been selected
        setFileSelected(true);
    };

    const handleLabelClick = (event) => {
        document.getElementById("fileInput").click();
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger>Open</AlertDialogTrigger>
            <AlertDialogContent className="w-full p-4 rounded-[8px] bg-[#FFF]">
                <div className="flex justify-between items-center ">
                    <div className="text-[#03111F] text-[24px] font-[inter] font-medium leading-normal">
                        {" "}
                        Return Product
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
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="flex justify-between w-full space-x-6">
                            <div className="space-y-[2px]  w-full ">
                                <Label htmlFor="hospital">
                                    Organization order to
                                </Label>
                                <Input className="" type="text" id="hospital" />
                            </div>
                            <div className="space-y-[2px] w-full">
                                <Label htmlFor="hospital">Select Invice</Label>
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
                        <div className="flex justify-between w-full space-x-6">
                            <div className="space-y-[2px] w-full">
                                <Label htmlFor="hospital">Select Reason</Label>
                                <div className="w-full">
                                    <Select>
                                        <SelectTrigger className="w-[225px]">
                                            <SelectValue placeholder="" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Product Defect">
                                                Product Defect
                                            </SelectItem>
                                            <SelectItem value="Wrong Item Received">
                                                Wrong Item Received
                                            </SelectItem>
                                            <SelectItem value="Damage During Shipping">
                                                Damage During Shipping
                                            </SelectItem>
                                            <SelectItem value="Other">
                                                Other
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="space-y-[2px] w-[225px]">
                                <Label htmlFor="hospital">Return Date</Label>
                                <Select>
                                    <SelectTrigger className="w-[225px]">
                                        <SelectValue placeholder="" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">
                                            Light
                                        </SelectItem>
                                        <SelectItem value="dark">
                                            Dark
                                        </SelectItem>
                                        <SelectItem value="system">
                                            System
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="space-y-[2px] w-[229px]">
                                <Label htmlFor="hospital">
                                    Attach Document
                                </Label>
                                <div className="h-15 border border-[#69A6E0] border-dashed  bg-[#F0F8FF] rounded-[4px] text-center mx-auto pt-2 pr-2">
                                    <div className="flex items-center">
                                        <button
                                            className={`rounded-full ${
                                                fileSelected
                                                    ? `hidden`
                                                    : `block`
                                            }`}
                                        >
                                            <svg
                                                width="44"
                                                height="44"
                                                viewBox="0 0 44 44"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g filter="url(#filter0_d_657_6243)">
                                                    <circle
                                                        cx="22.3301"
                                                        cy="20"
                                                        r="15"
                                                        fill="white"
                                                    />
                                                </g>
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M28.8926 26C28.8926 26.5467 28.6751 27.0717 28.2888 27.4587C27.9018 27.845 27.3768 28.0625 26.8301 28.0625H17.8301C17.2833 28.0625 16.7583 27.845 16.3713 27.4587C15.9851 27.0717 15.7676 26.5467 15.7676 26V14C15.7676 13.4533 15.9851 12.9283 16.3713 12.5413C16.7583 12.155 17.2833 11.9375 17.8301 11.9375H24.2696C24.6176 11.9375 24.9513 12.0755 25.1973 12.3222L28.5078 15.6328C28.7546 15.8788 28.8926 16.2125 28.8926 16.5605V26Z"
                                                    fill="#5291CD"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M19.3301 19.4375C19.0196 19.4375 18.7676 19.1855 18.7676 18.875C18.7676 18.5645 19.0196 18.3125 19.3301 18.3125H25.3301C25.6406 18.3125 25.8926 18.5645 25.8926 18.875C25.8926 19.1855 25.6406 19.4375 25.3301 19.4375H19.3301Z"
                                                    fill="white"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M19.3301 22.0625C19.0196 22.0625 18.7676 21.8105 18.7676 21.5C18.7676 21.1895 19.0196 20.9375 19.3301 20.9375H25.3301C25.6406 20.9375 25.8926 21.1895 25.8926 21.5C25.8926 21.8105 25.6406 22.0625 25.3301 22.0625H19.3301Z"
                                                    fill="white"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M19.3301 24.6875C19.0196 24.6875 18.7676 24.4355 18.7676 24.125C18.7676 23.8145 19.0196 23.5625 19.3301 23.5625H22.7051C23.0156 23.5625 23.2676 23.8145 23.2676 24.125C23.2676 24.4355 23.0156 24.6875 22.7051 24.6875H19.3301Z"
                                                    fill="white"
                                                />
                                                <defs>
                                                    <filter
                                                        id="filter0_d_657_6243"
                                                        x="0.830078"
                                                        y="0.5"
                                                        width="43"
                                                        height="43"
                                                        filterUnits="userSpaceOnUse"
                                                        color-interpolation-filters="sRGB"
                                                    >
                                                        <feFlood
                                                            flood-opacity="0"
                                                            result="BackgroundImageFix"
                                                        />
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        />
                                                        <feOffset dy="2" />
                                                        <feGaussianBlur stdDeviation="3.25" />
                                                        <feComposite
                                                            in2="hardAlpha"
                                                            operator="out"
                                                        />
                                                        <feColorMatrix
                                                            type="matrix"
                                                            values="0 0 0 0 0.800278 0 0 0 0 0.851241 0 0 0 0 0.895833 0 0 0 1 0"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in2="BackgroundImageFix"
                                                            result="effect1_dropShadow_657_6243"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in="SourceGraphic"
                                                            in2="effect1_dropShadow_657_6243"
                                                            result="shape"
                                                        />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </button>

                                        <p
                                            className={`text-[10px] font-normal ${
                                                fileSelected
                                                    ? "text-green-500"
                                                    : "text-[#7C98B1]"
                                            }`}
                                        >
                                            <label
                                                for="fileInput"
                                                className={`font-bold cursor-pointer ${
                                                    fileSelected
                                                        ? "text-green-500"
                                                        : "text-[#5291CD]"
                                                }`}
                                                onClick={handleLabelClick}
                                            >
                                                {fileSelected
                                                    ? `${fileName}`
                                                    : "Click here"}
                                            </label>{" "}
                                            {fileSelected
                                                ? ""
                                                : "or Drag & Drop file to Attach"}
                                            <span
                                                className={`${
                                                    fileSelected
                                                        ? `hidden`
                                                        : `block`
                                                }`}
                                            >
                                                <input
                                                    type="file"
                                                    id="fileInput"
                                                    // style={{ display: 'none' }}
                                                    onChange={handleFileUpload}
                                                />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end ">
                        <Link href="">
                            <AlertDialogAction className="py-2 px-5 bg-[#5291CD] text-[#FDFFFC] ">
                                Return Product
                            </AlertDialogAction>
                        </Link>
                    </div>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default return_product_popup;

