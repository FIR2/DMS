  
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Qrscaner from "../qrscaner";
import Addmanually from "../addmanually";
import Test from "../test";
import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const invicereturnproductpopup = () => {
    return (
   
        <div className="p-4 rounded-4 space-y-4 w-screen">
            <Tabs defaultValue="account">
                <div className="space-y-3">
                    <div className="flex justify-between">
                        <p className=" text-[24px] text-[#03111F] font-medium leading-[29.05px]">
                            Inward Product
                        </p>
                        <p>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"
                                    stroke="#03111F"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </p>
                    </div>
                    <div className=" flex space-x-3">
                        <TabsList>
                            <TabsTrigger value="account">
                                Scan QR Code
                            </TabsTrigger>
                            <TabsTrigger value="password">
                                Add Manually
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <div className="h-[1px] bg-slate-200 w-full"></div>
                    <div className="flex space-x-6">
                        <div className="w-[40%]">
                            <TabsContent value="account">
                                <Qrscaner />
                            </TabsContent>
                            <TabsContent value="password">
                                {" "}
                                <Addmanually />
                            </TabsContent>
                        </div>
                        <div className="w-[60%]">
                            <Test />
                        </div>
                    </div>
                </div>
            </Tabs>
            <Button className="absolute right-4 bottom-3 text-[16px] leading-[19.36px] font-semibold">
                Inward Products
            </Button>
        </div>
     
    );
};

export default invicereturnproductpopup;
