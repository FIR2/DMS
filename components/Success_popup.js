import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import Link from "next/link";

const Success_popup = ({ title, description, button, url }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger>Open</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div>
                        <Image
                            src="/success_popup/79e1155864e71aac5379e016b4020aee.gif"
                            objectPosition="center"
                            objectFit="contain" 
                            // layout="fill"
                            width="120"
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
                        <AlertDialogAction>{button}</AlertDialogAction>
                    </Link>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default Success_popup;
