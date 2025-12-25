"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis();
        let animationFrameId: number;

        function raf(time: number) {
            lenis.raf(time);
            animationFrameId = requestAnimationFrame(raf);
        }

        animationFrameId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(animationFrameId);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
