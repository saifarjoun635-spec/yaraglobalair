import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Phone, Timer } from 'lucide-react';
import Reveal from '../components/Reveal';
import { ARTICLES, COMPANY } from '../data/content';

export default function Article() {
    const { slug } = useParams();
    const article = ARTICLES.find((a) => a.slug === slug);

    if (!article) return <Navigate to="/blogue" replace />;

    return (
        <div data-testid="article-page">
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A121E] via-[#0A121E]/85 to-[#0A121E]/50" />
                </div>
                <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-44 sm:px-6 lg:px-8">
                    <Link
                        to="/blogue"
                        data-testid="article-back-link"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors duration-300 hover:text-cyan-200"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                        Retour au blogue
                    </Link>
                    <p className="font-tech mt-8 text-[11px] uppercase tracking-[0.28em] text-amber-400">
                        {article.tag}
                    </p>
                    <h1 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        {article.title}
                    </h1>
                    <div className="mt-6 flex items-center gap-6 font-tech text-xs uppercase tracking-[0.18em] text-slate-400">
                        <span className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4" /> {article.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <Timer className="h-4 w-4" /> {article.readTime} de lecture
                        </span>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
                <div data-testid="article-body" className="space-y-7">
                    {article.body.map((p, i) => (
                        <Reveal key={i} delay={Math.min(i * 0.05, 0.2)}>
                            <p
                                className={`leading-relaxed ${
                                    i === 0 ? 'text-lg text-slate-200 sm:text-xl' : 'text-base text-slate-400'
                                }`}
                            >
                                {p}
                            </p>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.1}>
                    <div className="mt-16 rounded-3xl border border-cyan-400/30 bg-cyan-400/5 p-8 text-center sm:p-10">
                        <h2 className="font-display text-2xl font-bold text-white">
                            Besoin d'un expert pour votre système ?
                        </h2>
                        <p className="mx-auto mt-3 max-w-md text-sm text-slate-400">
                            Diagnostic, entretien ou réparation — parlez directement à un technicien certifié.
                        </p>
                        <div className="mt-7 flex flex-wrap justify-center gap-4">
                            <a
                                href={COMPANY.phoneHref}
                                data-testid="article-cta-call"
                                className="flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-[#0A121E] transition-[background-color,transform] duration-300 hover:scale-[1.03] hover:bg-amber-400"
                            >
                                <Phone className="h-4 w-4" /> {COMPANY.phoneDisplay}
                            </a>
                            <a
                                href={COMPANY.emailHref}
                                data-testid="article-cta-email"
                                className="rounded-full border border-cyan-400/40 px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-cyan-300 transition-colors duration-300 hover:bg-cyan-400/10"
                            >
                                Nous écrire
                            </a>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
