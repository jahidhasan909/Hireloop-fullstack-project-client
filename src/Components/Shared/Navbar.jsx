"use client";

import { use, useState } from "react";
import { Link, Button, Avatar } from "@heroui/react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const { isPending, data } = authClient.useSession()

    const user = data?.user

    if (isPending) {
        return <div>loading...</div>
    }



    const navItems = [
        { name: "Browse Jobs", href: "/jobs" },
        { name: "Company", href: "#" },
        { name: "Pricing", href: "/subscription" },
    ];

    const dashboardNavlinks = {
        seeker: '/Dashboard/seeker',
        recruiter: '/Dashboard/recruiter',
        admin:'/Dashboard/admin'
    }

    if (user?.email) {
        navItems.push(
            {
                name: "Dashboard",
                href: dashboardNavlinks[user?.role || 'seeker']
            }
        )
    }



    return (
        <nav className="fixed absolute top-0 z-50  w-full bg-transparent py-4">
            <div className="mx-auto flex container items-center justify-between px-4 py-5 md:px-8">

                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image src={'/images/logo.png'} width={60} height={60} alt="logo" className="w-full h-[47px]"></Image></Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-10 rounded-2xl border border-white/10 bg-white/5 px-8 py-3 backdrop-blur-lg md:flex  z-50">
                    {navItems.map((item, index) => (
                        <div key={item.name} className="flex items-center gap-8">
                            <Link
                                href={item.href}
                                className="text-sm font-medium text-gray-300 transition hover:text-white no-underline"
                            >
                                {item.name}
                            </Link>


                        </div>
                    ))}



                    <div className="h-5 w-px bg-white/10" />

                    {
                        user ?
                            <ul className="flex items-center gap-2">
                                <li>
                                    <Avatar>
                                        <Avatar.Image alt="user img" src={user?.image} />
                                        <Avatar.Fallback>{user?.name.charAt(0, 2)}</Avatar.Fallback>
                                    </Avatar>
                                </li>
                                <li>
                                    <Button onClick={() => authClient.signOut()} variant="" className={'text-sm font-semibold no-underline hover:text-violet-300 text-gray-300'}>Sign Out</Button>
                                </li>
                            </ul>

                            :

                            <Link
                                href="/singin"
                                className="text-sm font-semibold no-underline hover:text-violet-300"
                            >
                                Sign In
                            </Link>
                    }

                    <Button

                        className="bg-white rounded-lg px-7 font-semibold text-black hover:bg-gray-200"
                    >
                        Get Started
                    </Button>
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
                >
                    {isMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="border-t border-white/10 bg-[#0B0B12] md:hidden">
                    <div className="space-y-4 px-6 py-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-base text-gray-300 hover:text-white"
                            >
                                {item.name}
                            </Link>
                        ))}

                        <Link
                            href="/singin"
                            className="block text-base font-semibold text-violet-400"
                        >
                            Sign In
                        </Link>

                        <Button
                            fullWidth
                            radius="lg"
                            className="bg-white font-semibold text-black"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}