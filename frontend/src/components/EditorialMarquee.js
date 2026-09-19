import { Snowflake } from 'lucide-react';
import { MARQUEE_ITEMS } from '../data/content';

export default function EditorialMarquee() {
    const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
    return (
        <div data-testid="editorial-marquee" className="relative overflow-hidden border-y border-[#1E324D] bg-[#0C1727] py-5">
            <div className="marquee-track items-center gap-10 pr-10">
                {row.map((item, i) => (
                    <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                        <span className="font-display text-lg sm:text-xl font-semibold tracking-wide text-slate-300">
                            {item}
                        </span>
                        <Snowflake className="h-4 w-4 text-cyan-400/70" strokeWidth={1.5} />
                    </span>
                ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A121E] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A121E] to-transparent" />
        </div>
    );
}
