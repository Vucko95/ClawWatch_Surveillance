"use clinet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image"
// import LogoSVG from "./LogoSVG";
import { ModeToggle } from "@/components/ui/mode-toggle"
// import { Button } from "./ui/button";
// import {MobileSidebar} from "@/app/components/mobile-sidebar"
export const Navbar = () => {
    return (
        <div className="w-full z-50">
            <div className="flex justify-center items-center py-2 px-4 border-b-2 h-16">
                <Link href="/">
                    <div className="flex items-center">
                        {/* <LogoSVG /> */}
                        <p>Claw Kube Surveillance</p>
                    </div>
                    
                </Link>
                <div className="absolute top-3 right-3 h-full items-center hidden md:block">
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}