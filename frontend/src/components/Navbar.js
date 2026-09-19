import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { COMPANY } from '../data/content';

const LINKS = [
    { to: '/', label: 'Accueil', testid: 'nav-link-accueil' },
    { to: '/services', label: 'Services', testid: 'nav-link-services' },
    { to: '/secteurs', label: 'Secteurs', testid: 'nav-link-secteurs' },
    { to: '/blogue', label: 'Blogue', testid: 'nav-link-blogue' },
    { to: '/contact', label: 'Contact', testid: 'nav-link-contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500 ${
                scrolled ? 'glass border-b border-[#1E324D]' : 'border-b border-transparent'
            }`}
        >
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link to="/" data-testid="nav-logo" className="group flex items-center gap-3">
                    <span className="flex h-11 items-center justify-center overflow-hidden rounded-xl bg-white px-2.5 shadow-lg shadow-cyan-500/10 transition-transform duration-500 group-hover:scale-105">
                        <img src="/assets/icon.png" alt="Yara Global Air" className="h-7 w-auto object-contain" />
                    </span>
                    <span className="hidden flex-col leading-none sm:flex">
                        <span className="font-display text-sm font-extrabold tracking-[0.18em] text-white">
                            YARA GLOBAL AIR
                        </span>
                        <span className="font-tech mt-1 text-[10px] uppercase tracking-[0.28em] text-cyan-400">
                            Climatisation · Chauffage
                        </span>
                    </span>
                </Link>

                <div className="hidden items-center gap-1 lg:flex">
                    {LINKS.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            data-testid={l.testid}
                            className={({ isActive }) =>
                                `rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                                    isActive
                                        ? 'bg-cyan-400/10 text-cyan-300'
                                        : 'text-slate-300 hover:text-white'
                                }`
                            }
                        >
                            {l.label}
                        </NavLink>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href={COMPANY.phoneHref}
                        data-testid="nav-phone-link"
                        className="hidden items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition-colors duration-300 hover:bg-cyan-400/20 md:flex"
                    >
                        <Phone className="h-4 w-4" />
                        {COMPANY.phoneDisplay}
                    </a>
                    <button
                        data-testid="nav-menu-toggle"
                        onClick={() => setOpen(!open)}
                        aria-label="Menu"
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1E324D] text-slate-200 lg:hidden"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="glass overflow-hidden border-b border-[#1E324D] lg:hidden"
                    >
                        <div className="flex flex-col gap-1 px-4 py-4">
                            {LINKS.map((l, i) => (
                                <motion.div
                                    key={l.to}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * i }}
                                >
                                    <NavLink
                                        to={l.to}
                                        data-testid={`mobile-${l.testid}`}
                                        className={({ isActive }) =>
                                            `block rounded-xl px-4 py-3 font-display text-lg font-semibold transition-colors duration-300 ${
                                                isActive ? 'bg-cyan-400/10 text-cyan-300' : 'text-slate-200'
                                            }`
                                        }
                                    >
                                        {l.label}
                                    </NavLink>
                                </motion.div>
                            ))}
                            <a
                                href={COMPANY.phoneHref}
                                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 font-display font-bold text-[#0A121E]"
                            >
                                <Phone className="h-4 w-4" /> {COMPANY.phoneDisplay}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
