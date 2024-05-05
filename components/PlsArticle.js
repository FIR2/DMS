import React from "react";

const PlsArticle = ({ imageUrl, date, title, paragraph }) => {
    return (
        <div className="rounded-[8px] bg-[#FFFFFF] overflow-hidden shadow">
            <img className="" width="552" height="362" src={imageUrl} alt="Post" />
            <div className="space-y-2 px-2 py-3">
                <div className="space-y-1">
                    <span className="font-normal text-[12px]  leading-normal text-[#626973] font-[inter]">
                        {date}
                    </span>
                    <div className="text-[16px] leading-[19.36px] font-normal font-[inter] text-[#03111F]">{title}</div>
                </div>
                <div>
                    <p className="text-[12px] leading-normal font-normal text-[#626973] font-[inter]">{paragraph}</p>
                </div>
            </div>
        </div>
    );
};

export default PlsArticle;
