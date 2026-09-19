import { CheckCircle2, Gauge, Leaf, Phone, Sparkles, Wrench } from 'lucide-react';
import MaskedLines from '../components/MaskedLines';
import Reveal from '../components/Reveal';
import SavingsCalculator from '../components/SavingsCalculator';
import { COMPANY, SERVICES } from '../data/content';

const ICONS = { sparkles: Sparkles, gauge: Gauge, wrench: Wrench, leaf: Leaf };

export default function Services() {
    return (
        <div data-testid="services-page">
            {/* Header */}
            <section className="hero-grid-bg relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_75%_10%,rgba(6,182,212,0.12),transparent_70%)]" />
                <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-40 sm:px-6 lg:px-8">
                    <p className="font-tech text-xs uppercase tracking-[0.32em] text-cyan-400">
                        Nos domaines de service
                    </p>
                    <h1 className="font-display mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                        <MaskedLines
                            delay={0.15}
                            lines={[
                                <>L'expertise CVC,</>,
                                <>
                                    <span className="text-cyan-400">de l'inspection</span>
                                </>,
                                <>
                                    à la <span className="italic text-amber-400">réparation.</span>
                                </>,
                            ]}
                        />
                    </h1>
                    <Reveal delay={0.6}>
                        <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                            Quatre domaines d'intervention complémentaires pour garder vos systèmes de climatisation,
                            de chauffage et de réfrigération performants, sécuritaires et économes — toute l'année.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Chapters */}
            <section className="mx-auto max-w-7xl space-y-6 px-4 pb-24 sm:px-6 lg:px-8">
                {SERVICES.map((s, i) => {
                    const Icon = ICONS[s.icon];
                    return (
                        <Reveal key={s.id} delay={0.05}>
                            <article
                                id={s.id}
                                data-testid={`service-detail-${s.id}`}
                                className="card-glow scroll-mt-28 rounded-3xl border border-[#1E324D] bg-[#0F1C2E] p-8 sm:p-12"
                            >
                                <div className="grid gap-10 lg:grid-cols-[auto_1fr]">
                                    <div className="flex items-start gap-6 lg:flex-col lg:gap-8">
                                        <span className="font-tech text-outline text-6xl font-semibold sm:text-7xl">
                                            {s.num}
                                        </span>
                                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                                            <Icon className="h-7 w-7" strokeWidth={1.5} />
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-tech text-[11px] uppercase tracking-[0.28em] text-amber-400">
                                            {s.tagline}
                                        </p>
                                        <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                            {s.title}
                                        </h2>
                                        <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">{s.description}</p>
                                        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                                            {s.points.map((p) => (
                                                <li key={p} className="flex items-start gap-3 text-sm text-slate-300">
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    );
                })}
            </section>

            {/* Calculator */}
            <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
                <SavingsCalculator />
            </section>

            {/* CTA */}
            <section className="border-t border-[#132238] bg-[#0C1727]">
                <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
                    <Reveal>
                        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            Prêt à redonner vie à votre système ?
                        </h2>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                href={COMPANY.phoneHref}
                                data-testid="services-cta-call"
                                className="flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-[#0A121E] transition-[background-color,transform] duration-300 hover:scale-[1.03] hover:bg-amber-400"
                            >
                                <Phone className="h-4 w-4" /> {COMPANY.phoneDisplay}
                            </a>
                            <a
                                href={COMPANY.smsHref}
                                data-testid="services-cta-sms"
                                className="rounded-full border border-cyan-400/40 px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-cyan-300 transition-colors duration-300 hover:bg-cyan-400/10"
                            >
                                Envoyer un texto
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
