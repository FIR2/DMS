import React from "react";
import PurchageCardRow from "@/components/purchageCardRowview";
import Image from "next/image";
const purchageCardRowview = () => {
    const cardinfo = [
        {
            product_image: "/images/cardimage2.png",
            product_title: "Dafodil Neo Accessories ",
            product_code: "DDLN13M",
            price_value: "1,000",
            placeholder:"0"
        },

        {
            product_image: "/images/cardimage2.png",
            product_title: "Dafodil",
            product_code: "DDLN14M",
            price_value: "1,000",
            placeholder:"3"
        },

        {
            product_image: "/images/cardimage2.png",
            product_title: "Dafodil Neo Accessories",
            product_code: "DDLN13M",
            price_value: "2,000",
            placeholder:"0"
        },
        {
            product_image: "/images/cardimage2.png",
            product_title: "Dafodil Neo",
            product_code: "DDLN13M",
            price_value: "1,000",
            placeholder:"3"
        },
    ];
    return (
        <div className="space-y-4">
            <div className="text-[#03111F] text-[20px] leading-[24.2px] font-semibold bg-[#EAEFF4]">
                Create Purchage Order
            </div>
            <div className="space-y-3 p-4 rounded-2">
                {cardinfo.map((info) => {
                    return (
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <div className="flex justify-between space-x-[23px] items-center">
                                    <div className=" rounded-1 w-[53px] h-[47.77px] bg-[#FFFBF5] pt-[5.23px] pr-[5.23px] pb-[0px] pl-[0px]">
                                        <Image
                                            src={info.product_image}
                                            width="54"
                                            height="54"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <h1 className="text-[16px] text-[#03111F] font-normal leading-[19.36px]">
                                            {info.product_title}
                                        </h1>
                                        <div className="items-center text-[12px] font-normal text-[#626973] leading-[14.52px]">
                                            <p>{info.product_code}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-x-7 flex justify-between ">
                                    <div className="flex space-x-4 items-center">
                                        <div>
                                        <ul className="">
                                            <li className="text-[12px]  text-[#626973] font-normal leading-[14.52px]">
                                                Size
                                            </li>
                                            <li className="items-start gap-1">
                                                <select className="text-[#03111F] text-[14px] leading-[16.94px] font-normal">
                                                    <option value="">22</option>
                                                    <option value="">24</option>
                                                    <option value="">26</option>
                                                </select>
                                            </li>
                                        </ul>

                                        </div>
                                        <div>
                                            <ul className="">
                                                <li className="text-[12px]  text-[#626973] font-normal leading-[14.52px]">
                                                    Material
                                                </li>
                                                <li className="">
                                                    <select className="text-[#03111F] text-[14px] leading-[16.94px] font-normal">
                                                        <option value="">
                                                            Neo
                                                        </option>
                                                        <option value="">
                                                            Neo
                                                        </option>
                                                        <option value="">
                                                            Neo
                                                        </option>
                                                    </select>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <ul className="">
                                                <li className="text-[12px]  text-[#626973] font-normal leading-[14.52px]">
                                                    UOM
                                                </li>
                                                <li className="justify-start items-start gap-1">
                                                    <select className="text-[#03111F] text-[14px] leading-[16.94px] font-normal">
                                                        <option value="">
                                                            12
                                                        </option>
                                                        <option value="">
                                                            12
                                                        </option>
                                                        <option value="">
                                                            12
                                                        </option>
                                                    </select>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="space-y-2">
                                            <h2 className="text-[12px] text-[#626973] leading-[14.52px] font-normal">
                                                Scheme Code
                                            </h2>
                                            <p className="text-[14px] text-[#BCC0C6] font-normal leading-[16.94px]">
                                                Add code
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-[#626973] text-[12px] font-normal leading-[14.52px]">
                                                Price
                                            </div>
                                            <div className="text-[14px] text-[#03111F] leading-[16.94px] font-normal">
                                            &#x20B9;{info.price_value}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gap-4 flex items-center">
                                        <input
                                            type="text"
                                            className="w-[60%] py-2 px-3 border border-[#C6C6C6] rounded-full placeholder:text-[16px] leading-[19.36px] text-[#03111F] font-normal text-center"
                                            placeholder={info.placeholder}
                                        />
                                        <button className="w-[40%] py-3 px-4 rounded-full bg-[#D9F3E0] text-[#7EB68F] font-bold">
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="h-[1px] bg-[#DADADA] mb-2"></div>
                            </div>
                        </div>
                    );
                })}

                {/* {cardinfo.map((card) => (
                        <PurchageCardRow
                            product_image={card.product_image}
                            product_title={card.product_title}
                            product_code={card.product_code}
                            price_value={card.price_value}
                        />
                    ))} */}
            </div>
        </div>
    );
};

export default purchageCardRowview;
