"use client";

import { Link } from "@heroui/react";
import Image from "next/image";



const FacebookIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const PinterestIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);


const Logo = () => (

    <div className="flex items-center justify-start mb-4">
        <Image src={'/images/logo.png'} width={100} height={60} alt="logo" className="w-full object-contain h-[70px]"></Image>
    </div>

);


const footerLinks = [
    {
        heading: "Product",
        links: ["Job discovery", "Worker AI", "Companies", "Salary data"],
    },
    {
        heading: "Navigations",
        links: ["Help center", "Career library", "Contact"],
    },
    {
        heading: "Resources",
        links: ["Brand Guideline", "Newsroom"],
    },
];

const socialLinks = [
    { icon: <FacebookIcon />, href: "#", label: "Facebook" },
    { icon: <PinterestIcon />, href: "#", label: "Pinterest", accent: true },
    { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
];


export default function Footer() {
    return (
        <footer className="w-full bg-[#0d0d0f] border-t border-white/[0.06] font-sans">
         
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
            />

            <div className="relative  container mx-auto px-6 sm:px-10">
                {/* ── Top section ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-7 py-14 lg:py-16">
                    {/* Brand column */}
                    <div className="flex flex-col items-center pr-10">
                        <Logo />
                        <p className="text-[#8a8a9a] text-sm leading-relaxed max-w-[240px]">
                            The AI-native career platform. Built for people who take their work
                            seriously.
                        </p>
                    </div>

                    {/* Link columns */}
                    {footerLinks.map(({ heading, links }) => (
                        <div key={heading} className="flex flex-col gap-3 mt-4 pl-27">
                            <h3 className="text-[#045cdb] font-semibold text-sm tracking-wide uppercase">
                                {heading}
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <Link
                                            href="#"
                                            className="text-[#9b9bab] hover:text-white text-sm transition-colors duration-200 no-underline"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ── Divider ── */}
                <div className="w-full h-px bg-white/[0.07]" />

                {/* ── Bottom bar ── */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-5 py-6">
                    {/* Social icons */}
                    <div className="flex items-center gap-3 order-2 sm:order-1">
                        {socialLinks.map(({ icon, href, label, accent }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className={`
                  w-9 h-9 rounded-xl flex items-center justify-center
                  transition-all duration-200 hover:scale-110 hover:brightness-125
                  ${accent
                                        ? "bg-[#045cdb] text-white shadow-md shadow-purple-900/40"
                                        : "bg-[#1a1a24] text-[#8a8a9a] hover:text-white border border-white/[0.08]"
                                    }
                `}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright + legal */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 order-1 sm:order-2 text-center">
                        <span className="text-[#5a5a6e] text-xs">
                            Copyright 2026 — HIRELOOP
                        </span> 
                        <div className="flex items-center gap-4">
                            <Link
                                href="#"
                                className="text-[#9b9bab] hover:text-white text-xs transition-colors duration-200 no-underline"
                            >
                                Terms &amp; Policy
                            </Link>
                            <span className="text-[#3a3a4e] text-xs">-</span>
                            <Link
                                href="#"
                                className="text-[#9b9bab] hover:text-white text-xs transition-colors duration-200 no-underline"
                            >
                                Privacy Guideline
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}