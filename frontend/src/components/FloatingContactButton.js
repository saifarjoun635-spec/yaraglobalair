import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Facebook, Mail, MessageSquare, Phone, X } from 'lucide-react';
import { COMPANY } from '../data/content';

const ACTIONS = [
    { href: COMPANY.phoneHref, label: 'Appeler', icon: Phone, testid: 'float-action-call' },
    { href: COMPANY.smsHref, label: 'Texto', icon: MessageSquare, testid: 'float-action-sms' },
    { href: COMPANY.emailHref, label: 'Courriel', icon: Mail, testid: 'float-action-email' },
    { href: COMPANY.facebook, label: 'Facebook', icon: Facebook, testid: 'float-action-facebook', external: true },
];

export default function FloatingContactButton() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
            <AnimatePresence>
                {open &&
                    ACTIONS.map((a, i) => (
                        <motion.a
                            key={a.testid}
                            href={a.href}
                            {...(a.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                            data-testid={a.testid}
                            initial={{ opacity: 0, y: 16, scale: 0.85 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            transition={{ duration: 0.28, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-3 rounded-full border border-[#DBE7F3] bg-white/95 py-2.5 pl-4 pr-5 text-sm font-semibold text-[#123057] shadow-xl shadow-[#123057]/15 backdrop-blur transition-colors duration-300 hover:border-[#1B76C9]/50 hover:text-[#1B76C9]"
                        >
                            <a.icon className="h-4 w-4 text-[#1B76C9]" />
                            {a.label}
                        </motion.a>
                    ))}
            </AnimatePresence>

            <motion.button
                data-testid="floating-contact-button"
                onClick={() => setOpen(!open)}
                aria-label={open ? 'Fermer le menu contact' : 'Contacter Yara Global Air'}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
                className={`relative flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-colors duration-300 ${
                    open ? 'bg-[#123057] text-white' : 'animate-soft-blink bg-amber-500 text-[#123057] hover:bg-amber-400'
                }`}
            >
                {!open && (
                    <>
                        <span className="animate-pulse-ring absolute inset-0 rounded-full bg-amber-500" />
                        <span
                            className="animate-pulse-ring absolute inset-0 rounded-full bg-amber-500"
                            style={{ animationDelay: '1.05s' }}
                        />
                    </>
                )}
                {open ? <X className="relative h-6 w-6" /> : <Phone className="relative h-6 w-6" />}
            </motion.button>
        </div>
    );
}
