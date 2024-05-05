import Image from "next/image";
import React from "react";

const Header = () => {
    return (
        <div className="w-full fixed top-0 bg-white-500 px-8 py-6 border-gray-500/200 border-b">
            <div className="flex justify-between items-center w-ful  ">
                <div className="flex justify-between items-center space-x-4 ">
                    <div>
                        <Image
                            src="/Screenshot.png"
                            height={100}
                            width={100}
                            alt="logo"
                        />
                    </div>
                    <p className="text-[18px] font-bold">
                        Distributor Onboarding
                    </p>
                </div>
                <ul className="flex space-x-4 items-center">
                    <li>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="#021425"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </li>
                    <li>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z"
                                stroke="#021425"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </li>
                    <li>
                        <button>
                            <svg
                                width="60"
                                height="32"
                                viewBox="0 0 60 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="16" cy="16" r="16" fill="#DEC4FF" />
                                <path
                                    d="M10.4943 22H6.88494V11.8182H10.5241C11.5483 11.8182 12.4299 12.022 13.169 12.4297C13.9081 12.834 14.4766 13.4157 14.8743 14.1747C15.2753 14.9337 15.4759 15.8419 15.4759 16.8991C15.4759 17.9598 15.2753 18.8712 14.8743 19.6335C14.4766 20.3958 13.9048 20.9808 13.1591 21.3885C12.4167 21.7962 11.5284 22 10.4943 22ZM9.03764 20.1555H10.4048C11.0412 20.1555 11.5765 20.0429 12.0107 19.8175C12.4482 19.5888 12.7763 19.2358 12.995 18.7585C13.2171 18.2779 13.3281 17.6581 13.3281 16.8991C13.3281 16.1468 13.2171 15.532 12.995 15.0547C12.7763 14.5774 12.4498 14.2261 12.0156 14.0007C11.5814 13.7753 11.0462 13.6626 10.4098 13.6626H9.03764V20.1555ZM16.2179 13.593V11.8182H24.5801V13.593H21.4629V22H19.335V13.593H16.2179Z"
                                    fill="#33115D"
                                />
                                <path
                                    d="M42 13L48 19L54 13"
                                    stroke="#021425"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
