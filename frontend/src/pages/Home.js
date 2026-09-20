import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    ArrowUpRight,
    BadgeCheck,
    Gauge,
    Leaf,
    MapPin,
    Phone,
    ShieldCheck,
    Sparkles,
    Wind,
    Wrench,
} from 'lucide-react';
import AirflowCanvas from '../components/AirflowCanvas';
import MaskedLines from '../components/MaskedLines';
import Reveal from '../components/Reveal';
import EditorialMarquee from '../components/EditorialMarquee';
import { ABOUT_TEXT, ARTICLES, COMPANY, SERVICES } from '../data/content';

const ICONS = { sparkles: Sparkles, gauge: Gauge, wrench: Wrench, leaf: Leaf };

export default function Home() {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 700], [0, 140]);
    const heroOpacity = useTransform(scrollY, [0, 550], [1, 0.15]);

    return (
        <div data-testid="home-page">
            {/* ---------- HERO ---------- */}
            <section className="relative flex min-h-screen items-center overflow-hidden">
                <div className="hero-grid-bg absolute inset-0" />
                <AirflowCanvas className="absolute inset-0 h-full w-full" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(27,118,201,0.1),transparent_70%)]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F5F9FD] to-transparent" />

                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-36 sm:px-6 lg:px-8"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="font-tech mb-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-[#1B76C9] sm:text-xs"
                    >
                        <Wind className="h-4 w-4" />
                        Climatisation — Chauffage — Réfrigération
                    </motion.p>

                    <h1 className="font-display max-w-4xl text-5xl font-extrabold leading-[1.04] tracking-tight text-[#123057] sm:text-6xl lg:text-7xl">
                        <MaskedLines
                            delay={0.3}
                            lines={[
                                <>Un air plus pur.</>,
                                <>
                                    Une <span className="text-[#1B76C9]">performance</span>
                                </>,
                                <>
                                    qui <span className="italic text-[#E07F1F]">dure.</span>
                                </>,
                            ]}
                        />
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="mt-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
                    >
                        Nettoyage approfondi, diagnostic technique et réparation de thermopompes et systèmes CVC-R.
                        Service certifié, humain et de proximité — {COMPANY.region}.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.05 }}
                        className="mt-10 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href={COMPANY.phoneHref}
                            data-testid="hero-cta-call"
                            className="group flex items-center gap-3 rounded-full bg-amber-500 px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-[#123057] shadow-xl shadow-amber-500/25 transition-[background-color,transform] duration-300 hover:scale-[1.03] hover:bg-amber-400"
                        >
                            <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                            Appeler le {COMPANY.phoneDisplay}
                        </a>
                        <Link
                            to="/services"
                            data-testid="hero-cta-services"
                            className="group flex items-center gap-2 rounded-full border border-[#1B76C9]/40 px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-[#1B76C9] transition-colors duration-300 hover:bg-[#1B76C9]/10"
                        >
                            Découvrir nos services
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.3 }}
                        className="mt-14 flex flex-wrap gap-x-8 gap-y-3"
                    >
                        {[
                            { icon: BadgeCheck, label: 'Techniciens certifiés' },
                            { icon: ShieldCheck, label: 'Fluides gérés écoresponsablement' },
                            { icon: MapPin, label: 'Victoriaville · Centre-du-Québec' },
                        ].map((b) => (
                            <span key={b.label} className="flex items-center gap-2 text-sm text-slate-600">
                                <b.icon className="h-4 w-4 text-[#1B76C9]" /> {b.label}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1 }}
                    className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
                >
                    <div className="flex h-12 w-7 items-start justify-center rounded-full border border-slate-300 p-2">
                        <span className="animate-scroll-dot h-2 w-2 rounded-full bg-[#1B76C9]" />
                    </div>
                </motion.div>
            </section>

            <EditorialMarquee />

            {/* ---------- ABOUT TEASER ---------- */}
            <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
                <Reveal>
                    <div className="grid items-center gap-10 rounded-3xl border border-[#DBE7F3] bg-white p-8 shadow-xl shadow-[#123057]/5 sm:p-12 lg:grid-cols-[auto_1fr]">
                        <div className="mx-auto flex items-center justify-center rounded-3xl bg-white p-6 lg:mx-0">
                            <img
                                src="/assets/logo-full.png"
                                alt="Logo Yara Global Air — Climatisation, chauffage et réfrigération, certifié expert"
                                className="w-56 max-w-full sm:w-64"
                            />
                        </div>
                        <div>
                            <p className="font-tech text-xs uppercase tracking-[0.3em] text-[#1B76C9]">À propos</p>
                            <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-[#123057] sm:text-4xl">
                                {ABOUT_TEXT.tagline}
                            </h2>
                            <p className="mt-5 max-w-2xl leading-relaxed text-slate-600">{ABOUT_TEXT.paragraphs[0]}</p>
                            <Link
                                to="/a-propos"
                                data-testid="home-about-link"
                                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1B76C9] transition-colors duration-300 hover:text-[#123057]"
                            >
                                Découvrir l'entreprise
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* ---------- SERVICES PREVIEW ---------- */}
            <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8">
                <Reveal className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="font-tech text-xs uppercase tracking-[0.3em] text-[#1B76C9]">Nos domaines de service</p>
                        <h2 className="font-display mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-[#123057] sm:text-4xl">
                            Quatre expertises, un seul objectif : votre confort.
                        </h2>
                    </div>
                    <Link
                        to="/services"
                        data-testid="home-services-link"
                        className="group flex items-center gap-2 text-sm font-semibold text-[#1B76C9] transition-colors duration-300 hover:text-[#123057]"
                    >
                        Tous les détails
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                </Reveal>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((s, i) => {
                        const Icon = ICONS[s.icon];
                        return (
                            <Reveal key={s.id} delay={i * 0.08} className={i === 0 || i === 3 ? 'lg:col-span-2' : ''}>
                                <Link
                                    to={`/services#${s.id}`}
                                    data-testid={`service-card-${s.id}`}
                                    className="card-glow group flex h-full flex-col justify-between rounded-3xl border border-[#DBE7F3] bg-white p-8 shadow-sm"
                                >
                                    <div>
                                        <div className="flex items-start justify-between">
                                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1B76C9]/10 text-[#1B76C9]">
                                                <Icon className="h-6 w-6" strokeWidth={1.6} />
                                            </span>
                                            <span className="font-tech text-outline text-4xl font-semibold">{s.num}</span>
                                        </div>
                                        <h3 className="font-display mt-6 text-xl font-bold text-[#123057]">{s.title}</h3>
                                        <p className="mt-3 text-sm leading-relaxed text-slate-500">{s.description}</p>
                                    </div>
                                    <span className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#1B76C9]">
                                        En savoir plus
                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                                    </span>
                                </Link>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            {/* ---------- BLOG TEASER ---------- */}
            <section className="border-y border-[#DBE7F3] bg-[#EAF2FA]">
                <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
                    <Reveal className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="font-tech text-xs uppercase tracking-[0.3em] text-[#1B76C9]">Le blogue</p>
                            <h2 className="font-display mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-[#123057] sm:text-4xl">
                                Conseils d'experts, en français.
                            </h2>
                        </div>
                        <Link
                            to="/blogue"
                            data-testid="home-blog-link"
                            className="group flex items-center gap-2 text-sm font-semibold text-[#1B76C9] transition-colors duration-300 hover:text-[#123057]"
                        >
                            Tous les articles
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                    </Reveal>

                    <div className="grid gap-6 md:grid-cols-3">
                        {ARTICLES.slice(0, 3).map((a, i) => (
                            <Reveal key={a.slug} delay={i * 0.08}>
                                <Link
                                    to={`/blogue/${a.slug}`}
                                    data-testid={`blog-card-${a.slug}`}
                                    className="card-glow group flex h-full flex-col overflow-hidden rounded-3xl border border-[#DBE7F3] bg-white shadow-sm"
                                >
                                    <div className="h-44 overflow-hidden">
                                        <img
                                            src={a.image}
                                            alt={a.title}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <p className="font-tech text-[11px] uppercase tracking-[0.24em] text-[#E07F1F]">
                                            {a.tag} · {a.readTime}
                                        </p>
                                        <h3 className="font-display mt-3 text-lg font-bold leading-snug text-[#123057]">
                                            {a.title}
                                        </h3>
                                        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{a.excerpt}</p>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------- CTA BAND ---------- */}
            <section className="relative overflow-hidden bg-[#123057]">
                <AirflowCanvas className="absolute inset-0 h-full w-full opacity-70" />
                <div className="relative mx-auto max-w-7xl px-4 py-28 text-center sm:px-6 lg:px-8">
                    <Reveal>
                        <h2 className="font-display mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                            Une panne ? Une question ?{' '}
                            <span className="text-sky-300">Un appel suffit.</span>
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-slate-300">
                            Intervention rapide, soumission claire, service humain. Parlez directement à un expert —
                            sans formulaire compliqué.
                        </p>
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                            <a
                                href={COMPANY.phoneHref}
                                data-testid="cta-band-call"
                                className="flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-[#123057] transition-[background-color,transform] duration-300 hover:scale-[1.03] hover:bg-amber-400"
                            >
                                <Phone className="h-4 w-4" /> {COMPANY.phoneDisplay}
                            </a>
                            <a
                                href={COMPANY.emailProHref}
                                data-testid="cta-band-email"
                                className="rounded-full border border-sky-300/40 px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-sky-300 transition-colors duration-300 hover:bg-sky-300/10"
                            >
                                {COMPANY.emailPro}
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
