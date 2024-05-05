import React from "react";
import Image from "next/image";

const Card = ({ product_image, product_title, product_code }) => {
    return (
        <div className="mx-auto bg-white border rounded-lg px-3 pt-3 pb-4 space-y-3">
            {/* image section  */}
            <div className="bg-[#FFFBF5] space-y-4">
                <div className="relative w-[110px] h-[80px] mx-auto">
                    <Image
                        src={product_image}
                        alt="product_image"
                        layout="fill"
                        objectPosition="center"
                        objectFit="contain"
                        className=""
                    />

                    <ul className="flex justify-center absolute left-[60%] bottom-[0%] font-normal text-[12px] leading-[14.52px] bg-zinc-50 hover:bg-sky-50 rounded-full px-3 py-[6px] gap-2 shadow items-center">
                        <li className=" leading- text-[#626973]">Size</li>
                        <li>
                            <select className="text[#03111F] bg-zinc-50 hover:bg-sky-50">
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mx-auto">
                {/* ppduct title section  */}
                <h2 className="text-[#03111F] text-[16px] font-semibold leading-[19.36px]">
                    {product_title}
                </h2>
                {/* product code section  */}
                <span className="text-[#03111F] text-[12px] font-normal leading-[14.52px]">
                    {product_code}
                </span>
                {/* material section  */}
                <ul className="flex justify-between items-center mt-1">
                    <li className="text-[#626973] text-[12px] font-normal leading-[14.52px]">
                        Material
                    </li>
                    <li>
                        <select className="font-bold text-[#03111F]">
                            <option>Neo</option>
                            <option>Geo</option>
                            <option>Pro</option>
                            <option>Gfg</option>
                            <option>Cov</option>
                            <option>Doc</option>
                        </select>
                    </li>
                </ul>
                {/* uom section   */}
                <ul className="flex justify-between mt-1 items-center">
                    <li className="text-[#626973] text-[12px] font-normal leading-[14.52px]">
                        UOM
                    </li>
                    <li>
                        <select className="font-bold text-[#03111F]">
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                        </select>
                    </li>
                </ul>
                <div className="border border-gray-200 mt-2"></div>
                {/* price section  */}
                <ul className="flex justify-between mt-2 items-center">
                    <li className="text-[#03111F] font-normal text-[14px] leading-[16.94px] ">
                        Price
                    </li>
                    <li>
                        <div className="flex space-x-1 items-center">
                            <p>
                                {" "}
                                <del className="text-[#8C9199] text-[12px] font-normal leading-[14.52px]">
                                    &#8377;1000
                                </del>
                            </p>
                            <p className="text-[14px] text-[#03111F] font-medium leading-[16.94px]">
                                &#8377;9000
                            </p>
                        </div>
                    </li>
                </ul>
                {/* apply cupon  */}
                <div className=" text-[12px] font-medium leading-[14.52px] text-[#626973] mt-2">
                    Applied code: AB100
                </div>
                {/* button section   */}
                <div className="flex justify-between mt-2 space-x-4 w-full">
                    <input
                        type="text"
                        id="ContactPerson"
                        className="w-[50%] border border-slate-300 rounded-full placeholder:p-3 font-semibold text-[16px] leading-[19.36px] text-[#03111F] text-center"
                        placeholder="3"
                    />
                    <button className="w-[50%] py-3 px-4  rounded-full bg-[#D9F3E0] text-[#7EB68F] font-bold">
                        Added
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Card;
