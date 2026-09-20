import { Award, Handshake, HeartHandshake, Leaf, Phone } from 'lucide-react';
import MaskedLines from '../components/MaskedLines';
import Reveal from '../components/Reveal';
import { COMPANY, VISION_TEXT } from '../data/content';

const ICONS = { award: Award, handshake: Handshake, heart: HeartHandshake, leaf: Leaf };

export default function NotreVision() {
    return (
        <div data-testid="notre-vision-page">
            {/* Header */}
            <section className="hero-grid-bg relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_25%_10%,rgba(224,127,31,0.08),transparent_70%)]" />
                <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-40 sm:px-6 lg:px-8">
                    <p className="font-tech text-xs uppercase tracking-[0.32em] text-[#1B76C9]">Notre vision</p>
                    <h1 className="font-display mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#123057] sm:text-5xl lg:text-6xl">
                        <MaskedLines
                            delay={0.15}
                            lines={[
                                <>
                                    La <span className="text-[#1B76C9]">référence</span> de notre
                                </>,
                                <>
                                    région, <span className="italic text-[#E07F1F]">tout simplement.</span>
                                </>,
                            ]}
                        />
                    </h1>
                    <Reveal delay={0.55}>
                        <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                            {VISION_TEXT.lead}
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Values */}
            <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
                <div className="grid gap-5 md:grid-cols-2">
                    {VISION_TEXT.values.map((v, i) => {
                        const Icon = ICONS[v.icon];
                        return (
                            <Reveal key={v.title} delay={i * 0.08}>
                                <article
                                    data-testid={`vision-value-${v.icon}`}
                                    className="card-glow h-full rounded-3xl border border-[#DBE7F3] bg-white p-8 shadow-sm sm:p-10"
                                >
                                    <div className="flex items-start justify-between">
                                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1B76C9]/10 text-[#1B76C9]">
                                            <Icon className="h-7 w-7" strokeWidth={1.5} />
                                        </span>
                                        <span className="font-tech text-outline text-5xl font-semibold">
                                            0{i + 1}
                                        </span>
                                    </div>
                                    <h2 className="font-display mt-6 text-xl font-bold text-[#123057] sm:text-2xl">
                                        {v.title}
                                    </h2>
                                    <p className="mt-3 leading-relaxed text-slate-500">{v.text}</p>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            {/* Image + CTA */}
            <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="relative overflow-hidden rounded-3xl border border-[#DBE7F3] shadow-xl shadow-[#123057]/10">
                        <img
                            src="https://images.pexels.com/photos/38067300/pexels-photo-38067300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1400"
                            alt="Thermopompe moderne installée dans un environnement résidentiel"
                            loading="lazy"
                            className="h-80 w-full object-cover sm:h-96"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#123057]/85 via-[#123057]/30 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-end sm:justify-between sm:p-12">
                            <h2 className="font-display max-w-md text-2xl font-bold leading-snug text-white sm:text-3xl">
                                Un savoir-faire rigoureux, un service de proximité incomparable.
                            </h2>
                            <a
                                href={COMPANY.phoneHref}
                                data-testid="vision-cta-call"
                                className="flex shrink-0 items-center gap-3 rounded-full bg-amber-500 px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-[#123057] transition-[background-color,transform] duration-300 hover:scale-[1.03] hover:bg-amber-400"
                            >
                                <Phone className="h-4 w-4" /> {COMPANY.phoneDisplay}
                            </a>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
