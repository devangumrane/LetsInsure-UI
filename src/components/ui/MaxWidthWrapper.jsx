import { cn } from "../lib/utils";

export default function MaxWidthWrapper({ className, children }) {
    return (
        <div className={cn("max-w-[1020px] mx-auto px-5 w-full", className)}>
            {children}
        </div>
    );
}
