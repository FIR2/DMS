import React from "react";
// import Image from "next/image";

const PurchageCardRowview = ({
    product_image,
    product_title,
    product_code,
    price_value,
}) => {
    return (        
        <div className="flex-col justify-start items-start inline-flex">
           
            <div className="p-4 rounded-2 bg-[#FFFFFF] flex-col justify-start items-start gap-3 flex">
                <div className="w-[1120px] h-12 relative">
                    <div className="left-0 top-0 absolute justify-between items-center gap-[23px] inline-flex">
                        <div className="pl-[5.23px] pr-[5.89px] py-[5.23px] bg-[#FFFBF5] rounded-tl-md rounded-tr-md justify-center items-center flex">
                            <img
                                className="w-[41.88px] h-[37.30px] shadow"
                                src={product_image}
                            />
                        </div>
                        <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h2 className="text-[16px] leading-[19.36px] font-semibold">
                                {product_title}
                            </h2>
                            <p className="text-[12px] leading-[14.52px] font-normal text-[#03111F] font-['Inter']">
                                {product_code}
                            </p>
                        </div>
                    </div>
                    <ul className="left-[415px] top-[6px] absolute flex-col justify-start items-start gap-1 inline-flex">
                        <li className="text-[#626973] text-[12px] font-normal leading-[14.52px] font-['Inter']">
                            Material
                        </li>
                        <li className="justify-between items-center gap-1 inline-flex">
                            <select className="text-[14px] leading-[16.94px] text-[#03111F] font-normal">
                                <option value="">Neo</option>
                                <option value="">Neo</option>
                                <option value="">Neo</option>
                            </select>
                        </li>
                    </ul>
                    <ul className="left-[335px] top-[6px] absolute flex-col justify-between items-start gap-1 inline-flex">
                        <li className="text-[12px]  text-[#626973] font-normal leading-[14.52px]">
                            Size
                        </li>
                        <li className="justify-start items-start gap-1 inline-flex">
                            <select className="text-[#03111F] text-[14px] leading-[16.94px] font-normal">
                                <option value="">22</option>
                                <option value="">24</option>
                                <option value="">26</option>
                            </select>
                        </li>
                    </ul>
                    <ul className="left-[542px] top-[6px] absolute flex-col justify-start items-start gap-1 inline-flex">
                        <li className="text-[12px] text-[#626973] leading-[14.52px] font-normal">
                            UOM
                        </li>
                        <li className="justify-start items-start gap-1 inline-flex">
                            <select className="text-[14px] text-[#03111F] leading-[16.94px] font-normal">
                                <option value="">10</option>
                                <option value="">11</option>
                                <option value="">12</option>
                                <option value="">13</option>

                            </select>
                        </li>
                    </ul>
                    <div className="left-[659px] top-[6px] absolute flex-col justify-start items-start gap-1 inline-flex">
                        <h2 className="text-[12px] text-[#626973] leading-[14.52px] font-normal">
                            Scheme Code
                        </h2>
                        <p className="text-[14px] text-[#BCC0C6] font-normal leading-[16.94px]">
                            Add code
                        </p>
                    </div>
                    <div className="left-[776px] top-[6px] absolute flex-col justify-start items-start gap-1 inline-flex">
                        <div className="text-[#626973] text-[12px] font-normal leading-[14.52px]">
                            Price
                        </div>
                        <div className="text-[14px] text-[#03111F] leading-[16.94px] font-normal">
                            {price_value}
                        </div>
                    </div>
                    <div className="left-[898.78px] top-[3px] absolute justify-start items-center gap-4 inline-flex">
                        <input
                            type="text"
                            className="w-[60%] py-2 px-3 border border-[#C6C6C6] rounded-full placeholder:text-[16px] leading-[19.36px] text-[#03111F] font-normal text-center"
                            placeholder="3"
                        />
                        <button className="w-[40%] py-3 px-4 rounded-full bg-[#D9F3E0] text-[#7EB68F] font-bold">
                            Add
                        </button>
                    </div>
                </div>
                <div className="self-stretch h-[0px] border border-stone-200"></div>
            </div>
        </div>
        
    );
};
export default PurchageCardRowview;
