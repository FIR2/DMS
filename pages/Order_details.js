import React from "react";

const Order_details = () => {
    return (
        <div className="w-full bg-[#FFFFFF] border-[1px] border-[#000000] rounded-[8px] p-6">
            <div>
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <h2 className="text-[20px] leading-[24.2px] text-[#03111F] font-semibold ">
                            Order Details
                        </h2>
                        <ul className="flex  space-x-2">
                            <li className="text-[#626973] text-[14px] font-normal leading-[16.94px]">
                                Total Amount
                            </li>
                            <li className="text-[16px] font-semibold leading-[19.96px] text-[#03111F]">
                                &#8377;45000
                            </li>
                        </ul>
                    </div>
                    <div className='h-[1.5px] w-full my-[8px]  bg-[#A0A0A0]'></div>
                </div>
                <div className="space-y-6 mt-2 gap-24">
                    <div className="flex justify-between items-center">
                        <ul className="space-y-1">
                            <h2 className="font-normal text-[12px] leading-[14.52px] text-[#626973]">
                                Order Type
                            </h2>
                            <p className="rounded-[8px] text-[14px]">
                                Credit Order
                            </p>
                        </ul>
                        <ul className="gap-8 space-y-1">
                            <h2 className="font-normal text-[12px] leading-[14.52px] text-[#626973]">
                                Purchase Number
                            </h2>
                            <p className="rounded-[8px] text-[14px]">
                                3120601039
                            </p>
                        </ul>
                        <ul className="gap-8 space-y-1">
                            <h2 className="font-normal text-[12px] leading-[14.52px] text-[#626973]">
                                Purchase Date
                            </h2>
                            <p className="rounded-[8px] text-[14px]">
                                25-11-2023
                            </p>
                        </ul>
                    </div>
                    <div className="flex justify-between">
                        <div className="gap-8 w-[250px] space-y-1">
                            <h2 className="font-normal text-[12px] leading-[14.52px] text-[#626973]">
                                Hospital Name
                            </h2>
                            <p className="rounded-[8px] font-normal text-[14px] leading-[16.94px] text-[#03111F]">
                                Catalyst Clinic
                            </p>
                        </div>
                        <div className="gap-8 w-full space-y-1">
                            <h2 className="font-normal text-[12px] leading-[14.52px] text-[#626973]">
                                Remarks
                            </h2>
                            <p className="rounded-[8px] font-normal text-[14px] leading-[16.94px] text-[#03111F]">
                                Lorem ipsum dolor sit amet consectetur.
                                Facilisis tincidunt turpis turpis interdumc
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="gap-8 w-[250px] space-y-1">
                            <h2 className="font-normal text-[12px] leading-[14.52px] text-[#626973]">
                                Bill To Party
                            </h2>
                            <p className="rounded-[8px] font-normal text-[14px] leading-[16.94px] text-[#03111F]">
                                2002049
                            </p>
                        </div>
                        <div className="gap-8 w-full space-y-1">
                            <h2 className="font-normal text-[12px] leading-[14.52px] text-[#626973]">
                                Billing Address
                            </h2>
                            <p className="rounded-[8px] font-normal text-[14px] leading-[16.94px] text-[#03111F]">
                                T.F- 26, Patel Avanue, S.G. Highway,Bodakdev,
                                Ahmedabad, Ta: Bodakdev,(Ahmedabad -
                                Ii),Ahmedabad, Ahmedabad, Gujarat, India
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="gap-8 w-[250px] space-y-1">
                            <h2 className="font-normal text-[12px] leading-[14.52px] text-[#626973]">
                                Ship To Party
                            </h2>
                            <p className="rounded-[8px] font-normal text-[14px] leading-[16.94px] text-[#03111F]">
                                2002049
                            </p>
                        </div>
                        <div className="gap-8 w-full space-y-1">
                            <h2 className="font-normal text-[12px] leading-[14.52px] text-[#626973]">
                                Shipping Address
                            </h2>
                            <p className="rounded-[8px] font-normal text-[14px] leading-[16.94px] text-[#03111F]">
                                T.F- 26, Patel Avanue, S.G. Highway,Bodakdev,
                                Ahmedabad, Ta: Bodakdev,(Ahmedabad -
                                Ii),Ahmedabad, Ahmedabad, Gujarat, India
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order_details;
