import { useMemo, useState } from 'react';
import { TrendingDown, CalendarClock, Zap } from 'lucide-react';
import Reveal from './Reveal';

const RATES = { 'lt1': 0.12, '1-3': 0.22, 'gt3': 0.32, never: 0.4 };
const LABELS = [
    { key: 'lt1', label: "Moins d'un an" },
    { key: '1-3', label: '1 à 3 ans' },
    { key: 'gt3', label: 'Plus de 3 ans' },
    { key: 'never', label: 'Jamais' },
];

export default function SavingsCalculator() {
    const [bill, setBill] = useState(220);
    const [last, setLast] = useState('1-3');

    const yearly = useMemo(() => Math.round(((bill * 12 * RATES[last]) / 10) * 10), [bill, last]);
    const percent = Math.round(RATES[last] * 100);

    return (
        <Reveal>
            <div
                data-testid="savings-calculator"
                className="relative overflow-hidden rounded-3xl border border-[#DBE7F3] bg-white p-8 shadow-xl shadow-[#123057]/5 sm:p-12"
            >
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#1B76C9]/10 blur-3xl" />
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    <div className="space-y-7">
                        <div>
                            <p className="font-tech text-xs uppercase tracking-[0.3em] text-[#1B76C9]">
                                Estimation interactive
                            </p>
                            <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-[#123057] sm:text-3xl">
                                Combien un entretien pourrait-il vous faire économiser ?
                            </h3>
                        </div>

                        <div>
                            <div className="mb-3 flex items-center justify-between text-sm">
                                <span className="text-slate-500">Votre facture mensuelle de chauffage/climatisation</span>
                                <span className="font-tech font-semibold text-[#1B76C9]">{bill} $</span>
                            </div>
                            <input
                                type="range"
                                min="80"
                                max="600"
                                step="10"
                                value={bill}
                                data-testid="calculator-slider"
                                onChange={(e) => setBill(Number(e.target.value))}
                                className="w-full accent-[#1B76C9]"
                            />
                        </div>

                        <div>
                            <p className="mb-3 text-sm text-slate-500">Votre dernier entretien professionnel</p>
                            <div className="flex flex-wrap gap-2">
                                {LABELS.map((l) => (
                                    <button
                                        key={l.key}
                                        data-testid={`calculator-option-${l.key}`}
                                        onClick={() => setLast(l.key)}
                                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                                            last === l.key
                                                ? 'border-[#1B76C9] bg-[#1B76C9]/10 text-[#1B76C9]'
                                                : 'border-[#DBE7F3] text-slate-500 hover:border-[#1B76C9]/40 hover:text-[#123057]'
                                        }`}
                                    >
                                        {l.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div className="rounded-2xl border border-[#1B76C9]/30 bg-[#1B76C9]/5 p-6">
                            <div className="flex items-center gap-3 text-[#1B76C9]">
                                <TrendingDown className="h-5 w-5" />
                                <span className="font-tech text-xs uppercase tracking-[0.24em]">
                                    Économies potentielles
                                </span>
                            </div>
                            <p data-testid="calculator-result" className="font-display mt-4 text-4xl font-extrabold text-[#123057] sm:text-5xl">
                                {yearly.toLocaleString('fr-CA')} $
                                <span className="ml-2 text-base font-medium text-slate-500">/ année</span>
                            </p>
                            <p className="mt-2 text-sm text-slate-500">
                                soit jusqu'à <span className="font-semibold text-[#1B76C9]">{percent} %</span> de votre
                                budget énergie
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-2xl border border-[#DBE7F3] bg-[#F5F9FD] p-5">
                                <Zap className="h-5 w-5 text-[#E07F1F]" />
                                <p className="font-display mt-3 font-bold text-[#123057]">Rendement restauré</p>
                                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                                    Un système propre consomme moins pour le même confort.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-[#DBE7F3] bg-[#F5F9FD] p-5">
                                <CalendarClock className="h-5 w-5 text-[#E07F1F]" />
                                <p className="font-display mt-3 font-bold text-[#123057]">Durée de vie prolongée</p>
                                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                                    Jusqu'à 5 années supplémentaires pour votre équipement.
                                </p>
                            </div>
                        </div>
                        <p className="text-[11px] leading-relaxed text-slate-400">
                            Estimation indicative basée sur des moyennes d'industrie. Les économies réelles varient
                            selon l'équipement et le bâtiment.
                        </p>
                    </div>
                </div>
            </div>
        </Reveal>
    );
}
