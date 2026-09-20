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
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_75%_10%,rgba(27,118,201,0.1),transparent_70%)]" />
                <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-40 sm:px-6 lg:px-8">
                    <p className="font-tech text-xs uppercase tracking-[0.32em] text-[#1B76C9]">
                        Nos domaines de service
                    </p>
                    <h1 className="font-display mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#123057] sm:text-5xl lg:text-6xl">
                        <MaskedLines
                            delay={0.15}
                            lines={[
                                <>L'expertise CVC-R,</>,
                                <>
                                    <span className="text-[#1B76C9]">de l'inspection</span>
                                </>,
                                <>
                                    à la <span className="italic text-[#E07F1F]">réparation.</span>
                                </>,
                            ]}
                        />
                    </h1>
                    <Reveal delay={0.6}>
                        <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                            Quatre domaines d'intervention complémentaires pour garder vos systèmes de climatisation,
                            de chauffage et de réfrigération performants, sécuritaires et économes — toute l'année.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Chapters with photos */}
            <section className="mx-auto max-w-7xl space-y-8 px-4 pb-24 sm:px-6 lg:px-8">
                {SERVICES.map((s, i) => {
                    const Icon = ICONS[s.icon];
                    return (
                        <Reveal key={s.id} delay={0.05}>
                            <article
                                id={s.id}
                                data-testid={`service-detail-${s.id}`}
                                className="card-glow grid scroll-mt-28 overflow-hidden rounded-3xl border border-[#DBE7F3] bg-white shadow-sm lg:grid-cols-2"
                            >
                                <div className={`relative h-64 lg:h-auto ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <img
                                        src={s.image}
                                        alt={s.title}
                                        loading="lazy"
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#123057]/35 to-transparent" />
                                    <span className="font-tech absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-[#1B76C9] backdrop-blur">
                                        {s.num}
                                    </span>
                                </div>
                                <div className="p-8 sm:p-10">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1B76C9]/10 text-[#1B76C9]">
                                        <Icon className="h-6 w-6" strokeWidth={1.6} />
                                    </span>
                                    <p className="font-tech mt-5 text-[11px] uppercase tracking-[0.28em] text-[#E07F1F]">
                                        {s.tagline}
                                    </p>
                                    <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-[#123057] sm:text-3xl">
                                        {s.title}
                                    </h2>
                                    <p className="mt-4 leading-relaxed text-slate-500">{s.description}</p>
                                    <ul className="mt-7 grid gap-3">
                                        {s.points.map((p) => (
                                            <li key={p} className="flex items-start gap-3 text-sm text-slate-600">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1B76C9]" />
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
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
            <section className="bg-[#123057]">
                <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
                    <Reveal>
                        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            Prêt à redonner vie à votre système ?
                        </h2>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                href={COMPANY.phoneHref}
                                data-testid="services-cta-call"
                                className="flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-[#123057] transition-[background-color,transform] duration-300 hover:scale-[1.03] hover:bg-amber-400"
                            >
                                <Phone className="h-4 w-4" /> {COMPANY.phoneDisplay}
                            </a>
                            <a
                                href={COMPANY.smsHref}
                                data-testid="services-cta-sms"
                                className="rounded-full border border-sky-300/40 px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-sky-300 transition-colors duration-300 hover:bg-sky-300/10"
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
