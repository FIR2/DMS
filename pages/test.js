import React from "react";
;
const yourInventory = () => {
    const info = [
        {
            product_code: "DDLN33M",
            batch_no: "DFA06",
            material_group: "13-01-2024",
            gtin: "1456",
            image: "/images/image 2.png",
        },
        {
            product_code: "DDLN33M",
            batch_no: "DFA06",
            material_group: "13-01-2024",
            gtin: "5432",
            image: "/images/image 2.png",
        },
        {
            product_code: "DDLN33M",
            batch_no: "DFA06",
            material_group: "13-01-2024",
            gtin: "8765",
            image: "/images/image 2.png",
        },
    ];
    return (
        <div>
            <p className="">30 Products Selected </p>
            <div className="divide-y-[1px]">
                {info.map((info) => {
                    return (
                        <div className="flex justify-between py-4 px-0  space-y-4">
                            <div className="relative pr-[6px] pb-[9px] pl-[7px] pt-[10px] ">
                                <img src={info.image} className="" />
                            </div>
                            {/* <div className="flex">
                                <div className="flex justify-between gap-4 space-x-3"> */}
                                    <div className="gap-1">
                                        <label className="text-[#03111F] text-[18px] leading-normal font-semibold whitespace-nowrap">
                                            Defodil Neo
                                        </label>
                                        <p className="text-sm">
                                            {info.product_code}
                                        </p>
                                    </div>
                                    <div className="gap-1">
                                        <label className="text-[#626973] text-xs whitespace-nowrap">
                                            Batch No
                                        </label>
                                        <p className="text-sm">
                                            {info.batch_no}
                                        </p>
                                    </div>
                                    <div className="gap-1">
                                        <label className="text-[#626973] text-xs whitespace-nowrap">
                                            Material Group
                                        </label>
                                        <p className="text-sm">
                                            {info.material_group}
                                        </p>
                                    </div>
                                    <div className="gap-1">
                                        <label className="text-[#626973] text-xs whitespace-nowrap">
                                            GTIN
                                        </label>
                                        <p className="text-sm">{info.gtin}</p>
                                    </div>
                                    <div className="gap-1 mt-2 ml-[30px]">
                                        <div className="rounded-full bg-[#E0F0FF] px-2 py-1 text-[#03111F] font-medium text-xs whitespace-nowrap  ">
                                            x 10
                                        </div>
                                    </div>
                                {/* </div>
                            </div> */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default yourInventory;
