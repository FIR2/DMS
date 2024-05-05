
import React from "react";
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <div className="w-full  fixed bottom-0 bg-white-500 px-6 py-6 border-gray-500/200 border-t">
          <ul className="flex justify-between mx-auto text-white items-center">
          <li>
            <p className="text-black">Save as Draft</p>
          </li>
          <li>
           <Link href="/" >
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded-full"
            >
              Continue
            </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;