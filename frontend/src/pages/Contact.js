import { useState } from 'react';
import { Facebook, Mail, MessageSquare, Phone, Send } from 'lucide-react';
import MaskedLines from '../components/MaskedLines';
import Reveal from '../components/Reveal';
import { COMPANY } from '../data/content';

const CHANNELS = [
    {
        icon: Phone,
        title: 'Téléphone',
        value: COMPANY.phoneDisplay,
        href: COMPANY.phoneHref,
        note: 'Le plus rapide — parlez directement à un technicien.',
        testid: 'contact-phone-link',
    },
    {
        icon: MessageSquare,
        title: 'Texto (SMS)',
        value: COMPANY.phoneDisplay,
        href: COMPANY.smsHref,
        note: 'Décrivez votre besoin en quelques mots, on vous rappelle.',
        testid: 'contact-sms-link',
    },
    {
        icon: Mail,
        title: 'Courriel',
        value: COMPANY.email,
        href: COMPANY.emailHref,
        note: 'Pour les soumissions détaillées et les photos de votre installation.',
        testid: 'contact-email-link',
    },
    {
        icon: Facebook,
        title: 'Facebook',
        value: 'Yara Global Air',
        href: COMPANY.facebook,
        note: 'Suivez nos projets et écrivez-nous par Messenger.',
        testid: 'contact-facebook-link',
        external: true,
    },
];

export default function Contact() {
    const [form, setForm] = useState({ nom: '', tel: '', sujet: 'Entretien / nettoyage', message: '' });

    const submit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`[Site web] ${form.sujet} — ${form.nom}`);
        const body = encodeURIComponent(
            `Nom : ${form.nom}\nTéléphone : ${form.tel}\nSujet : ${form.sujet}\n\n${form.message}`
        );
        window.location.href = `${COMPANY.emailHref}?subject=${subject}&body=${body}`;
    };

    const inputCls =
        'w-full rounded-xl border border-[#1E324D] bg-[#0A121E] px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors duration-300 focus:border-cyan-400/60';

    return (
        <div data-testid="contact-page">
            <section className="hero-grid-bg relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(6,182,212,0.12),transparent_70%)]" />
                <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-40 sm:px-6 lg:px-8">
                    <p className="font-tech text-xs uppercase tracking-[0.32em] text-cyan-400">Contact</p>
                    <h1 className="font-display mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                        <MaskedLines
                            delay={0.15}
                            lines={[
                                <>Parlez à un expert,</>,
                                <>
                                    <span className="text-cyan-400">pas à un</span>{' '}
                                    <span className="italic text-amber-400">robot.</span>
                                </>,
                            ]}
                        />
                    </h1>
                    <Reveal delay={0.5}>
                        <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                            Pas de formulaire perdu dans le vide : chaque canal vous connecte directement à notre
                            équipe. Choisissez celui qui vous convient.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {CHANNELS.map((c, i) => (
                        <Reveal key={c.testid} delay={i * 0.07}>
                            <a
                                href={c.href}
                                {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                                data-testid={c.testid}
                                className="card-glow flex h-full flex-col rounded-3xl border border-[#1E324D] bg-[#0F1C2E] p-7"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                                    <c.icon className="h-6 w-6" strokeWidth={1.6} />
                                </span>
                                <p className="font-tech mt-6 text-[11px] uppercase tracking-[0.26em] text-amber-400">
                                    {c.title}
                                </p>
                                <p className="font-display mt-2 break-all text-lg font-bold text-white">{c.value}</p>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{c.note}</p>
                            </a>
                        </Reveal>
                    ))}
                </div>

                {/* Mailto form */}
                <Reveal delay={0.1}>
                    <div className="mt-16 grid gap-10 rounded-3xl border border-[#1E324D] bg-[#0F1C2E] p-8 sm:p-12 lg:grid-cols-[1fr_1.2fr]">
                        <div>
                            <p className="font-tech text-xs uppercase tracking-[0.3em] text-cyan-400">
                                Soumission rapide
                            </p>
                            <h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                Racontez-nous votre besoin.
                            </h2>
                            <p className="mt-4 text-sm leading-relaxed text-slate-400">
                                Ce formulaire ouvre votre application courriel avec votre message déjà rédigé — rien
                                n'est enregistré sur nos serveurs, votre vie privée reste entre vos mains.
                            </p>
                            <div className="mt-8 space-y-3 font-tech text-xs uppercase tracking-[0.2em] text-slate-500">
                                <p>Réponse rapide · 7 jours sur 7</p>
                                <p>{COMPANY.region}</p>
                            </div>
                        </div>
                        <form onSubmit={submit} data-testid="contact-form" className="grid gap-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <input
                                    required
                                    data-testid="contact-form-name"
                                    placeholder="Votre nom"
                                    value={form.nom}
                                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                                    className={inputCls}
                                />
                                <input
                                    data-testid="contact-form-phone"
                                    placeholder="Votre téléphone (optionnel)"
                                    value={form.tel}
                                    onChange={(e) => setForm({ ...form, tel: e.target.value })}
                                    className={inputCls}
                                />
                            </div>
                            <select
                                data-testid="contact-form-subject"
                                value={form.sujet}
                                onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                                className={inputCls}
                            >
                                <option>Entretien / nettoyage</option>
                                <option>Inspection / diagnostic</option>
                                <option>Réparation / dépannage</option>
                                <option>Fluides frigorigènes</option>
                                <option>Projet commercial (PME)</option>
                                <option>Autre demande</option>
                            </select>
                            <textarea
                                required
                                rows={5}
                                data-testid="contact-form-message"
                                placeholder="Décrivez votre besoin : type d'équipement, problème observé, disponibilités…"
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                className={`${inputCls} resize-none`}
                            />
                            <button
                                type="submit"
                                data-testid="contact-form-submit"
                                className="group flex items-center justify-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-[#0A121E] transition-[background-color,transform] duration-300 hover:scale-[1.02] hover:bg-amber-400"
                            >
                                Envoyer par courriel
                                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                            </button>
                        </form>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
