"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function HeroIntro() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const progress = Math.min(window.scrollY / 500, 1);
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const fadeOut = 1 - scrollProgress;
    const scaleUp = 1 + scrollProgress * 0.08;
    const blurAmount = scrollProgress * 10;

    return (
        <div
            className="fixed inset-0 z-40 pointer-events-none"
            style={{
                opacity: fadeOut,
                visibility: scrollProgress >= 1 ? "hidden" : "visible",
            }}
        >
            {/* Background matching image's dark tone */}
            <div className="absolute inset-0 bg-[#B8A99A]" />

            {/* Character image — fills entire viewport */}
            <div
                className="relative w-full h-full flex flex-col items-center justify-center"
                style={{
                    transform: `scale(${scaleUp})`,
                    filter: `blur(${blurAmount}px)`,
                    transition: "filter 0.05s ease-out",
                }}
            >
                <div className="relative w-full h-full">
                    <Image
                        src="/hero-character.jpg"
                        alt="Srividhya — 3D character illustration"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                </div>

                {/* Name + tagline overlay at the bottom */}
                <div className="absolute bottom-12 sm:bottom-16 text-center z-10">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#3D2E22] tracking-tight">
                        Srividhya
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-[#6B5B4E] mt-3 tracking-wide">
                        Full-Stack Developer · Data · Cloud
                    </p>

                    {/* Scroll prompt */}
                    <div className="mt-6 flex flex-col items-center gap-2 text-[#8B7B6E] animate-pulse">
                        <span className="text-sm sm:text-base tracking-[0.25em] uppercase">Scroll to explore</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
