import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@/components/ui/button";



const addmanually = () => {
    return (
        <div className="py-4 px-4">
            <div className="space-y-4">
                <div className="">
                    <div className="space-y-[6px]">
                        <Label htmlFor="hospital">Hospital Name</Label>
                        <Input type="text" id="hospital" />
                    </div>

                    <div className="space-y-[6px]">
                        <Label htmlFor="PersonName">Contact Person Name</Label>
                        <Input type="text" id="ContactPerson" />
                    </div>
                    <div className="space-y-[6px]">
                        <Label htmlFor="PersonNumber">
                            Contact Person Number
                        </Label>
                        <Input type="text" id="PersonNumber" />
                    </div>
                    <div className="space-y-[6px]">
                        <Label htmlFor="Address">Address</Label>
                        <Input type="text" id="Address" />
                    </div>
                </div>
                <div className="flex">
                    <Link href="">
                        <Button className="py-4 px-6  bg-[#5291CD] text-[#FDFFFC]">
                            Add
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default addmanually;
