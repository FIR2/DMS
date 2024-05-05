import React from "react";
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
import Image from "next/image";
import Link from "next/link";

const Success_popup_bg_btn_white = ({ title, description, button, url }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger>Open</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="mx-auto">
                        <Image
                            src="/success_popup/79e1155864e71aac5379e016b4020aee.gif"
                            width="110"
                            height="120"
                        />
                    </div>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Link href={`${url}`}>
                        <AlertDialogAction className="bg-white text-[#5291CD] border-[1px] border-[#5291CD]">{button}</AlertDialogAction>
                    </Link>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
    pr;
};

export default Success_popup_bg_btn_white;
