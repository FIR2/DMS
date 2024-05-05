import Image from "next/image";
import React from "react";

const qrscaner = () => {
    return (
        <div className="relative w-full h-[400px]">
         <Image 
            src="/images/scan img 1.png" 
            alt="qrcode" 
            layout="fill"
            style={{objectFit:"cover"}}
            className="rounded-[8px]"
          
        />
    </div>
    );
};

export default qrscaner;
