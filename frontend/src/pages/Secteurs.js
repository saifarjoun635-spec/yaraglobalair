import { ArrowUpRight, Building2, CheckCircle2, Home as HomeIcon, Phone } from 'lucide-react';
import MaskedLines from '../components/MaskedLines';
import Reveal from '../components/Reveal';
import { COMPANY, SECTORS } from '../data/content';

const SECTOR_ICONS = { residentiel: HomeIcon, commercial: Building2 };

export default function Secteurs() {
    return (
        <div data-testid="secteurs-page">
            {/* Header */}
            <section className="hero-grid-bg relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_25%_10%,rgba(249,115,22,0.08),transparent_70%)]" />
                <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-40 sm:px-6 lg:px-8">
                    <p className="font-tech text-xs uppercase tracking-[0.32em] text-cyan-400">Nos secteurs cibles</p>
                    <h1 className="font-display mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                        <MaskedLines
                            delay={0.15}
                            lines={[
                                <>Du <span className="text-cyan-400">foyer</span> familial</>,
                                <>
                                    au <span className="italic text-amber-400">commerce</span> de quartier.
                                </>,
                            ]}
                        />
                    </h1>
                    <Reveal delay={0.55}>
                        <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                            Deux univers, une même exigence : des espaces sains, confortables et des équipements
                            fiables. Découvrez nos approches adaptées à chaque réalité.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Sector panels */}
            <section className="mx-auto max-w-7xl space-y-8 px-4 pb-24 sm:px-6 lg:px-8">
                {SECTORS.map((s, i) => {
                    const Icon = SECTOR_ICONS[s.id];
                    return (
                        <Reveal key={s.id}>
                            <article
                                id={s.id}
                                data-testid={`sector-panel-${s.id}`}
                                className="scroll-mt-28 overflow-hidden rounded-3xl border border-[#1E324D] bg-[#0F1C2E]"
                            >
                                <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                                    <div className="relative h-72 lg:h-auto">
                                        <img
                                            src={s.image}
                                            alt={s.title}
                                            loading="lazy"
                                            className="absolute inset-0 h-full w-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F1C2E]/40" />
                                    </div>
                                    <div className="p-8 sm:p-12">
                                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                                            <Icon className="h-7 w-7" strokeWidth={1.5} />
                                        </span>
                                        <p className="font-tech mt-6 text-[11px] uppercase tracking-[0.28em] text-amber-400">
                                            {s.subtitle}
                                        </p>
                                        <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                            {s.title}
                                        </h2>
                                        <p className="mt-4 leading-relaxed text-slate-400">{s.description}</p>
                                        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                                            {s.items.map((item) => (
                                                <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                                                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <a
                                            href={COMPANY.phoneHref}
                                            data-testid={`sector-cta-${s.id}`}
                                            className="group mt-10 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-6 py-3 text-sm font-semibold text-cyan-300 transition-colors duration-300 hover:bg-cyan-400/10"
                                        >
                                            <Phone className="h-4 w-4" />
                                            Parler à un expert
                                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    );
                })}
            </section>
        </div>
    );
}
