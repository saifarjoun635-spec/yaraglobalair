import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Timer } from 'lucide-react';
import MaskedLines from '../components/MaskedLines';
import Reveal from '../components/Reveal';
import { ARTICLES } from '../data/content';

export default function Blogue() {
    return (
        <div data-testid="blogue-page">
            <section className="hero-grid-bg relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_75%_10%,rgba(27,118,201,0.1),transparent_70%)]" />
                <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-40 sm:px-6 lg:px-8">
                    <p className="font-tech text-xs uppercase tracking-[0.32em] text-[#1B76C9]">Le blogue</p>
                    <h1 className="font-display mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#123057] sm:text-5xl lg:text-6xl">
                        <MaskedLines
                            delay={0.15}
                            lines={[
                                <>Conseils, guides et</>,
                                <>
                                    <span className="text-[#1B76C9]">coulisses</span> du métier.
                                </>,
                            ]}
                        />
                    </h1>
                    <Reveal delay={0.5}>
                        <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                            Entretien de thermopompe, qualité de l'air, réglementation : nos experts partagent ce
                            qu'ils voient sur le terrain, en langage clair.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8">
                <div className="grid gap-6 md:grid-cols-2">
                    {ARTICLES.map((a, i) => (
                        <Reveal key={a.slug} delay={i * 0.07}>
                            <Link
                                to={`/blogue/${a.slug}`}
                                data-testid={`blogue-card-${a.slug}`}
                                className="card-glow group flex h-full flex-col overflow-hidden rounded-3xl border border-[#DBE7F3] bg-white shadow-sm"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={a.image}
                                        alt={a.title}
                                        loading="lazy"
                                        className={`h-full w-full transition-transform duration-[1.2s] group-hover:scale-105 ${a.fit === 'contain' ? 'bg-white object-contain' : 'object-cover'}`}
                                    />
                                    <span className="absolute left-4 top-4 rounded-full border border-[#DBE7F3] bg-white/90 px-3 py-1 font-tech text-[10px] uppercase tracking-[0.22em] text-[#E07F1F] backdrop-blur">
                                        {a.tag}
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col p-7">
                                    <div className="flex items-center gap-5 font-tech text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                        <span className="flex items-center gap-1.5">
                                            <CalendarDays className="h-3.5 w-3.5" /> {a.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Timer className="h-3.5 w-3.5" /> {a.readTime}
                                        </span>
                                    </div>
                                    <h2 className="font-display mt-4 text-xl font-bold leading-snug text-[#123057] sm:text-2xl">
                                        {a.title}
                                    </h2>
                                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{a.excerpt}</p>
                                    <span className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#1B76C9]">
                                        Lire l'article
                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                                    </span>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>
        </div>
    );
}
