import { Snowflake } from 'lucide-react';
import { MARQUEE_ITEMS } from '../data/content';

export default function EditorialMarquee() {
    const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
    return (
        <div data-testid="editorial-marquee" className="relative overflow-hidden border-y border-[#DBE7F3] bg-[#EAF2FA] py-5">
            <div className="marquee-track items-center gap-10 pr-10">
                {row.map((item, i) => (
                    <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                        <span className="font-display text-lg sm:text-xl font-semibold tracking-wide text-[#123057]/80">
                            {item}
                        </span>
                        <Snowflake className="h-4 w-4 text-[#1B76C9]/70" strokeWidth={1.5} />
                    </span>
                ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5F9FD] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F5F9FD] to-transparent" />
        </div>
    );
}
