"use client";

import { useEffect, useState } from "react";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    const handleNavClick = () => {
        setMobileOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-border-light"
                    : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <a
                    href="#hero"
                    className="text-xl font-bold text-accent tracking-tight hover:text-accent-dark transition-colors"
                >
                    S.
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.slice(1);
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${isActive
                                        ? "bg-accent-soft text-accent-dark"
                                        : "text-text-secondary hover:text-text-primary hover:bg-bg-warm"
                                    }`}
                            >
                                {item.name}
                            </a>
                        );
                    })}
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-border-light px-6 py-4 space-y-1">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.slice(1);
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={handleNavClick}
                                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all ${isActive
                                        ? "bg-accent-soft text-accent-dark"
                                        : "text-text-secondary hover:text-text-primary hover:bg-bg-warm"
                                    }`}
                            >
                                {item.name}
                            </a>
                        );
                    })}
                </div>
            )}
        </nav>
    );
}
