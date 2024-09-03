'use client'
import Image from "next/image";
import Link from 'next/link';
import Dropdown from './Dropdown';

export default function Navbar() {
    return (
        <div className="px-3 py-2 m-2 bg-neutral-800 rounded border border-neutral-600 flex justify-between items-center">
            <Link href="/dashboard" className="flex items-center">
                 <Image src="/images/logo.png" alt="Web Wizards Logo"  width={32} height={32} />
                {/* <img src="images/logo.png" alt="Web Wizards Logo" className="h-8" /> */}
                <span className="hidden md:block ml-2 text-white">Web Wizards</span>
            </Link>
            <div className="flex items-center">
                <Dropdown />
            </div>
        </div>
    );
}
