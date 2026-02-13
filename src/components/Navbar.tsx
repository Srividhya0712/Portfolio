"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-navy/80 px-4 py-2 backdrop-blur-md shadow-lg">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${isActive
                                    ? "bg-teal/20 text-sky-blue"
                                    : "text-beige/70 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {item.name}
                        </Link>
                    )
                })}
            </div>
        </nav>
    );
}
