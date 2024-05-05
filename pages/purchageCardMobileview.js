import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
const purchageCardMobileview = () => {
    return (
        <div className="bg-slate-300">
            <div className="grid grid-cols-15 gap-4 text-[#626973]  text-[14px] font-normal leading-[16.94px] items-center">
                <div className="col-span-4 space-y-3">
                    <Label for="username" className="text-[#626973]">Product Name </Label>
                    <Input type="text" id="username" required className=" bg-white" />
                </div>
                <div className="col-span-3 space-y-3">
                    <Label for="productcode">Product Code </Label>
                    <Input
                        type="text"
                        id="productcode"
                        required   
                        className="bg-white "                     
                
                    />
                </div>
                <div className="col-span-1 space-y-3">
                    <Label className="text-[#626973]">Size</Label>
                    <select className="font-bold text-[#03111F] w-full border border-[#ECECEC] h-[48px] rounded-md bg-white ">
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                    </select>
                </div>
                <div className="col-span-2 space-y-3">
                    <Label className="text-[#626973]">Material</Label>
                    <select className="font-bold text-[#03111F]  w-full border border-[#ECECEC] h-[48px] rounded-md bg-white ">
                        <option>Neo</option>
                        <option>Neo</option>
                        <option>Neo</option>
                        <option>Neo</option>
                        <option>Neo</option>
                        <option>Neo</option>
                        <option>Neo</option>
                    </select>
                </div>
                <div className="col-span-1 space-y-3">
                    <Label for="qty"  className="text-[#626973]">UOM</Label>
                    <select className="font-bold text-[#03111F] w-full border border-[#ECECEC] h-[48px] rounded-md bg-white ">
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>20</option> 
                        <option>21</option>
                        <option>22</option>
                    </select>
                </div>
                <div className="col-span-1 space-y-3">
                    <Label for="qty"  className="text-[#626973]">Qty</Label>
                    <Input type="text" id="qty" required className=" bg-white"/>
                </div>
                <div className="col-span-2 space-y-3">
                    <Label for="schemecode"  className="text-[#626973]">Scheme Code</Label>
                    <Input
                        type="text"
                        id="schemecode"
                        required
                        className="bg-white "
                
                    />
                </div>
                <div className="col-span-1 pt-6">
                    <button className="text-[#FDFFFC] bg-[#BFCCD9] text-[14px] leading-[16.94px] font-semibold rounded-[29px] py-2 px-4">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default purchageCardMobileview;
