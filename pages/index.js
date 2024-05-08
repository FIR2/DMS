
import { Inter } from "next/font/google";

import Success_popup from "@/components/Success_popup";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div>
            <Success_popup
                title="Purchage Order Created"
                description="Your PO with #3120601039 has been created successfully and under review by our order management team"
                button="Okey"
            />
        </div>
    );
}
