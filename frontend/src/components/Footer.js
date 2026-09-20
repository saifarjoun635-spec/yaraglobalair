import { Link } from 'react-router-dom';
import { Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY } from '../data/content';

export default function Footer() {
    return (
        <footer data-testid="site-footer" className="bg-[#123057]">
            <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div className="space-y-5">
                    <div>
                        <span className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-4">
                            <img
                                src="/assets/logo-full.png"
                                alt="Yara Global Air — Climatisation, chauffage et réfrigération, certifié expert"
                                className="h-16 w-auto object-contain"
                            />
                        </span>
                    </div>
                    <p className="max-w-xs text-sm leading-relaxed text-slate-300">
                        Climatisation, chauffage, réfrigération et ventilation. Nettoyage, diagnostic, réparation et
                        gestion écoresponsable des fluides frigorigènes — au service du résidentiel.
                    </p>
                    <a
                        href={COMPANY.facebook}
                        target="_blank"
                        rel="noreferrer"
                        data-testid="footer-facebook-link"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-slate-200 transition-colors duration-300 hover:border-sky-300/50 hover:text-sky-300"
                    >
                        <Facebook className="h-4 w-4" /> Suivez-nous sur Facebook
                    </a>
                </div>

                <div>
                    <p className="font-tech mb-5 text-xs uppercase tracking-[0.3em] text-sky-300">Navigation</p>
                    <ul className="space-y-3 text-sm">
                        {[
                            ['/', 'Accueil'],
                            ['/a-propos', 'À propos'],
                            ['/services', 'Service'],
                            ['/notre-vision', 'Notre vision'],
                            ['/blogue', 'Blogue'],
                            ['/contact', 'Contact'],
                        ].map(([to, label]) => (
                            <li key={to}>
                                <Link
                                    to={to}
                                    className="text-slate-300 transition-colors duration-300 hover:text-sky-300"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="font-tech mb-5 text-xs uppercase tracking-[0.3em] text-sky-300">Contact direct</p>
                    <ul className="space-y-4 text-sm">
                        <li>
                            <a
                                href={COMPANY.phoneHref}
                                className="flex items-center gap-3 text-slate-200 transition-colors duration-300 hover:text-sky-300"
                            >
                                <Phone className="h-4 w-4 shrink-0 text-amber-400" /> {COMPANY.phoneDisplay}
                            </a>
                        </li>
                        <li>
                            <a
                                href={COMPANY.emailProHref}
                                className="flex items-center gap-3 break-all text-slate-200 transition-colors duration-300 hover:text-sky-300"
                            >
                                <Mail className="h-4 w-4 shrink-0 text-amber-400" /> {COMPANY.emailPro}
                            </a>
                        </li>
                        <li>
                            <a
                                href={COMPANY.emailHref}
                                className="flex items-center gap-3 break-all text-slate-300 transition-colors duration-300 hover:text-sky-300"
                            >
                                <Mail className="h-4 w-4 shrink-0 text-amber-400" /> {COMPANY.email}
                            </a>
                        </li>
                        <li className="flex items-start gap-3 text-slate-300">
                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                            <span>
                                {COMPANY.address}
                                <span className="block text-xs text-slate-400">
                                    Nous desservons aussi la région de Québec
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white/10 py-6">
                <p className="mx-auto max-w-7xl px-4 text-center font-tech text-[11px] uppercase tracking-[0.22em] text-slate-400 sm:px-6 lg:px-8">
                    © {new Date().getFullYear()} Yara Global Air — Climatisation · Chauffage · Réfrigération
                </p>
            </div>
        </footer>
    );
}
