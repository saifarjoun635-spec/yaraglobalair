import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, MapPin, Phone, Snowflake, Thermometer, Wind } from 'lucide-react';
import MaskedLines from '../components/MaskedLines';
import Reveal from '../components/Reveal';
import { ABOUT_TEXT, COMPANY } from '../data/content';

const EXPERTISES = ['Climatisation', 'Réfrigération', 'Ventilation', 'Chauffage (CVC-R)'];

export default function APropos() {
    return (
        <div data-testid="a-propos-page">
            {/* Header */}
            <section className="hero-grid-bg relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_75%_10%,rgba(27,118,201,0.1),transparent_70%)]" />
                <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-40 sm:px-6 lg:px-8">
                    <p className="font-tech text-xs uppercase tracking-[0.32em] text-[#1B76C9]">À propos</p>
                    <h1 className="font-display mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#123057] sm:text-5xl lg:text-6xl">
                        <MaskedLines
                            delay={0.15}
                            lines={[
                                <>L'expert de votre <span className="text-[#1B76C9]">confort</span></>,
                                <>
                                    thermique et <span className="italic text-[#E07F1F]">écoresponsable.</span>
                                </>,
                            ]}
                        />
                    </h1>
                </div>
            </section>

            {/* Story */}
            <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <Reveal>
                        <div className="rounded-3xl border border-[#DBE7F3] bg-white p-8 shadow-xl shadow-[#123057]/5 sm:p-10">
                            <img
                                src="/assets/logo-full.png"
                                alt="Logo Yara Global Air"
                                className="w-52 max-w-full sm:w-60"
                            />
                            <p className="mt-8 text-lg leading-relaxed text-slate-600">{ABOUT_TEXT.paragraphs[0]}</p>
                            <div className="mt-8 flex flex-wrap gap-2">
                                {EXPERTISES.map((e) => (
                                    <span
                                        key={e}
                                        className="rounded-full border border-[#1B76C9]/25 bg-[#1B76C9]/5 px-4 py-2 text-sm font-medium text-[#1B76C9]"
                                    >
                                        {e}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <div className="space-y-5">
                        {[
                            {
                                icon: BadgeCheck,
                                title: 'Service irréprochable',
                                text: "Une entreprise fondée sur la rigueur : chaque intervention est faite comme si c'était chez nous.",
                            },
                            {
                                icon: MapPin,
                                title: 'Ancrage régional',
                                text: `Basés à ${COMPANY.address}, nous servons ${COMPANY.region} avec un vrai service de proximité.`,
                            },
                            {
                                icon: Wind,
                                title: 'Confort sur mesure',
                                text: 'Maisons, duplex, triplex et condos : des solutions adaptées à votre bâtiment, jamais l’inverse.',
                            },
                        ].map((c, i) => (
                            <Reveal key={c.title} delay={i * 0.08}>
                                <div className="card-glow flex gap-5 rounded-3xl border border-[#DBE7F3] bg-white p-6 shadow-sm">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1B76C9]/10 text-[#1B76C9]">
                                        <c.icon className="h-6 w-6" strokeWidth={1.6} />
                                    </span>
                                    <div>
                                        <h3 className="font-display text-lg font-bold text-[#123057]">{c.title}</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-500">{c.text}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                        <Reveal delay={0.25}>
                            <Link
                                to="/notre-vision"
                                data-testid="about-vision-link"
                                className="group inline-flex items-center gap-2 rounded-full border border-[#1B76C9]/40 px-6 py-3 text-sm font-semibold text-[#1B76C9] transition-colors duration-300 hover:bg-[#1B76C9]/10"
                            >
                                Découvrir notre vision
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Seasons band */}
            <section className="border-y border-[#DBE7F3] bg-[#EAF2FA]">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="flex items-center gap-6 text-[#1B76C9]">
                            <Snowflake className="h-8 w-8 animate-float-y" />
                            <Thermometer className="h-8 w-8 text-[#E07F1F]" />
                            <Wind className="h-8 w-8 animate-float-y" style={{ animationDelay: '1.2s' }} />
                        </div>
                        <h2 className="font-display mx-auto mt-6 max-w-2xl text-2xl font-bold tracking-tight text-[#123057] sm:text-3xl">
                            Du grand froid de janvier aux canicules de juillet — votre confort ne prend jamais de
                            vacances. Le nôtre non plus.
                        </h2>
                        <a
                            href={COMPANY.phoneHref}
                            data-testid="about-cta-call"
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-[#123057] transition-[background-color,transform] duration-300 hover:scale-[1.03] hover:bg-amber-400"
                        >
                            <Phone className="h-4 w-4" /> {COMPANY.phoneDisplay}
                        </a>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
