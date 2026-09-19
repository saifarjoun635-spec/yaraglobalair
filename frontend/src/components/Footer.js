import { Link } from 'react-router-dom';
import { Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY } from '../data/content';

export default function Footer() {
    return (
        <footer data-testid="site-footer" className="border-t border-[#1E324D] bg-[#070D17]">
            <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div className="space-y-5">
                    <div className="flex items-center gap-3">
                        <span className="flex h-12 items-center justify-center overflow-hidden rounded-xl bg-white px-3">
                            <img src="/assets/icon.png" alt="Yara Global Air" className="h-8 w-auto object-contain" />
                        </span>
                        <div className="leading-tight">
                            <p className="font-display font-extrabold tracking-[0.14em] text-white">YARA GLOBAL AIR</p>
                            <p className="font-tech text-[10px] uppercase tracking-[0.24em] text-cyan-400">
                                Certifié expert
                            </p>
                        </div>
                    </div>
                    <p className="max-w-xs text-sm leading-relaxed text-slate-400">
                        Climatisation, chauffage et réfrigération. Nettoyage, diagnostic, réparation et gestion
                        écoresponsable des fluides frigorigènes — au service du résidentiel et des PME.
                    </p>
                    <a
                        href={COMPANY.facebook}
                        target="_blank"
                        rel="noreferrer"
                        data-testid="footer-facebook-link"
                        className="inline-flex items-center gap-2 rounded-full border border-[#1E324D] px-4 py-2 text-sm text-slate-300 transition-colors duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                        <Facebook className="h-4 w-4" /> Suivez-nous sur Facebook
                    </a>
                </div>

                <div>
                    <p className="font-tech mb-5 text-xs uppercase tracking-[0.3em] text-cyan-400">Navigation</p>
                    <ul className="space-y-3 text-sm">
                        {[
                            ['/', 'Accueil'],
                            ['/services', 'Nos services'],
                            ['/secteurs', 'Secteurs desservis'],
                            ['/blogue', 'Blogue'],
                            ['/contact', 'Contact'],
                        ].map(([to, label]) => (
                            <li key={to}>
                                <Link
                                    to={to}
                                    className="text-slate-400 transition-colors duration-300 hover:text-cyan-300"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="font-tech mb-5 text-xs uppercase tracking-[0.3em] text-cyan-400">Contact direct</p>
                    <ul className="space-y-4 text-sm">
                        <li>
                            <a
                                href={COMPANY.phoneHref}
                                className="flex items-center gap-3 text-slate-300 transition-colors duration-300 hover:text-cyan-300"
                            >
                                <Phone className="h-4 w-4 text-amber-400" /> {COMPANY.phoneDisplay}
                            </a>
                        </li>
                        <li>
                            <a
                                href={COMPANY.emailHref}
                                className="flex items-center gap-3 break-all text-slate-300 transition-colors duration-300 hover:text-cyan-300"
                            >
                                <Mail className="h-4 w-4 shrink-0 text-amber-400" /> {COMPANY.email}
                            </a>
                        </li>
                        <li className="flex items-center gap-3 text-slate-400">
                            <MapPin className="h-4 w-4 shrink-0 text-amber-400" /> {COMPANY.region}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-[#132238] py-6">
                <p className="mx-auto max-w-7xl px-4 text-center font-tech text-[11px] uppercase tracking-[0.22em] text-slate-500 sm:px-6 lg:px-8">
                    © {new Date().getFullYear()} Yara Global Air — Climatisation · Chauffage · Réfrigération
                </p>
            </div>
        </footer>
    );
}
