import { useState } from 'react';
import { Clock, Facebook, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';
import MaskedLines from '../components/MaskedLines';
import Reveal from '../components/Reveal';
import { COMPANY } from '../data/content';

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
        'w-full rounded-xl border border-[#DBE7F3] bg-[#F5F9FD] px-4 py-3 text-sm text-[#123057] placeholder-slate-400 outline-none transition-colors duration-300 focus:border-[#1B76C9]/60';

    return (
        <div data-testid="contact-page">
            <section className="hero-grid-bg relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(27,118,201,0.1),transparent_70%)]" />
                <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-40 sm:px-6 lg:px-8">
                    <p className="font-tech text-xs uppercase tracking-[0.32em] text-[#1B76C9]">Contact</p>
                    <h1 className="font-display mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#123057] sm:text-5xl lg:text-6xl">
                        <MaskedLines
                            delay={0.15}
                            lines={[
                                <>Parlez à un expert,</>,
                                <>
                                    <span className="text-[#1B76C9]">pas à un</span>{' '}
                                    <span className="italic text-[#E07F1F]">robot.</span>
                                </>,
                            ]}
                        />
                    </h1>
                    <Reveal delay={0.5}>
                        <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                            Pas de formulaire perdu dans le vide : chaque canal vous connecte directement à notre
                            équipe. Choisissez celui qui vous convient.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8">
                <Reveal>
                    <div
                        data-testid="contact-layout"
                        className="grid overflow-hidden rounded-3xl border border-[#DBE7F3] shadow-xl shadow-[#123057]/8 lg:grid-cols-[1fr_1.15fr]"
                    >
                        {/* Left : direct channels on navy panel */}
                        <div className="relative bg-[#123057] p-8 sm:p-12">
                            <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-sky-400/10 blur-2xl" />
                            <p className="font-tech text-xs uppercase tracking-[0.3em] text-sky-300">
                                Coordonnées directes
                            </p>
                            <h2 className="font-display mt-4 text-2xl font-bold text-white sm:text-3xl">
                                On répond. Vraiment.
                            </h2>

                            <ul className="mt-10 space-y-6">
                                <li>
                                    <a
                                        href={COMPANY.phoneHref}
                                        data-testid="contact-phone-link"
                                        className="group flex items-center gap-4"
                                    >
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sky-300 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-[#123057]">
                                            <Phone className="h-5 w-5" />
                                        </span>
                                        <span>
                                            <span className="block font-tech text-[10px] uppercase tracking-[0.24em] text-slate-400">
                                                Téléphone
                                            </span>
                                            <span className="font-display text-lg font-bold text-white">
                                                {COMPANY.phoneDisplay}
                                            </span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={COMPANY.smsHref}
                                        data-testid="contact-sms-link"
                                        className="group flex items-center gap-4"
                                    >
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sky-300 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-[#123057]">
                                            <MessageSquare className="h-5 w-5" />
                                        </span>
                                        <span>
                                            <span className="block font-tech text-[10px] uppercase tracking-[0.24em] text-slate-400">
                                                Texto (SMS)
                                            </span>
                                            <span className="font-display text-lg font-bold text-white">
                                                {COMPANY.phoneDisplay}
                                            </span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={COMPANY.emailProHref}
                                        data-testid="contact-email-link"
                                        className="group flex items-center gap-4"
                                    >
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sky-300 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-[#123057]">
                                            <Mail className="h-5 w-5" />
                                        </span>
                                        <span>
                                            <span className="block font-tech text-[10px] uppercase tracking-[0.24em] text-slate-400">
                                                Courriel
                                            </span>
                                            <span className="font-display break-all text-lg font-bold text-white">
                                                {COMPANY.emailPro}
                                            </span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={COMPANY.facebook}
                                        target="_blank"
                                        rel="noreferrer"
                                        data-testid="contact-facebook-link"
                                        className="group flex items-center gap-4"
                                    >
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sky-300 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-[#123057]">
                                            <Facebook className="h-5 w-5" />
                                        </span>
                                        <span>
                                            <span className="block font-tech text-[10px] uppercase tracking-[0.24em] text-slate-400">
                                                Facebook
                                            </span>
                                            <span className="font-display text-lg font-bold text-white">
                                                Yara Global Air
                                            </span>
                                        </span>
                                    </a>
                                </li>
                            </ul>

                            <div className="mt-10 space-y-4 border-t border-white/10 pt-8 text-sm text-slate-300">
                                <p data-testid="contact-address" className="flex items-start gap-3">
                                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                                    <span>
                                        {COMPANY.address}
                                        <span className="block text-xs text-slate-400">
                                            Nous desservons aussi la région de Québec
                                        </span>
                                    </span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <Clock className="h-4 w-4 shrink-0 text-amber-400" />
                                    Réponse rapide · 7 jours sur 7
                                </p>
                            </div>
                        </div>

                        {/* Right : mailto form */}
                        <div className="bg-white p-8 sm:p-12">
                            <p className="font-tech text-xs uppercase tracking-[0.3em] text-[#1B76C9]">
                                Soumission rapide
                            </p>
                            <h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-[#123057] sm:text-3xl">
                                Racontez-nous votre besoin.
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-slate-500">
                                Ce formulaire ouvre votre application courriel avec votre message déjà rédigé — rien
                                n'est enregistré sur nos serveurs.
                            </p>
                            <form onSubmit={submit} data-testid="contact-form" className="mt-8 grid gap-4">
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
                                    className="group flex items-center justify-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-[#123057] transition-[background-color,transform] duration-300 hover:scale-[1.02] hover:bg-amber-400"
                                >
                                    Envoyer par courriel
                                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                                </button>
                            </form>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
