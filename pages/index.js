// import Image from "next/image";
import { Inter } from "next/font/google";
// import Seaech from "@/pages/Seaech"
// import Header from "@/pages/Header"
// import Footer from "@/pages/Footer";
// import Order_details from "@/components/Order_details";
// import Card from "@/pages/card";
import Success_popup from "@/components/Success_popup";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div>
            {/* <Header /> */}
            {/* <Seaech />  */}
            {/* <Footer /> */}
            {/* <Card />  */}
            {/* <Order_details />   */}
            <Success_popup
                title="Purchage Order Created"
                description="Your PO with #3120601039 has been created successfully and under review by our order management team"
                button="Okey"
            />
        </div>
    );
}
