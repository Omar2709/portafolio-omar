import {
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function Reveal({
    children,
    className,
    delay = 0,
}: RevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) {
            return;
        }

        if (!("IntersectionObserver" in window)) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    return;
                }

                setIsVisible(true);
                observer.unobserve(entry.target);
            },
            {
                threshold: 0.15,
            },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={elementRef}
            className={cn(
                "scroll-reveal",
                isVisible && "is-visible",
                className,
            )}
            style={{
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}