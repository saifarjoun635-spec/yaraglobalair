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
                className="relative overflow-hidden rounded-3xl border border-[#1E324D] bg-gradient-to-br from-[#0F1C2E] to-[#0A121E] p-8 sm:p-12"
            >
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    <div className="space-y-7">
                        <div>
                            <p className="font-tech text-xs uppercase tracking-[0.3em] text-cyan-400">
                                Estimation interactive
                            </p>
                            <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                Combien un entretien pourrait-il vous faire économiser ?
                            </h3>
                        </div>

                        <div>
                            <div className="mb-3 flex items-center justify-between text-sm">
                                <span className="text-slate-400">Votre facture mensuelle de chauffage/climatisation</span>
                                <span className="font-tech font-semibold text-cyan-300">{bill} $</span>
                            </div>
                            <input
                                type="range"
                                min="80"
                                max="600"
                                step="10"
                                value={bill}
                                data-testid="calculator-slider"
                                onChange={(e) => setBill(Number(e.target.value))}
                                className="w-full accent-cyan-400"
                            />
                        </div>

                        <div>
                            <p className="mb-3 text-sm text-slate-400">Votre dernier entretien professionnel</p>
                            <div className="flex flex-wrap gap-2">
                                {LABELS.map((l) => (
                                    <button
                                        key={l.key}
                                        data-testid={`calculator-option-${l.key}`}
                                        onClick={() => setLast(l.key)}
                                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                                            last === l.key
                                                ? 'border-cyan-400 bg-cyan-400/15 text-cyan-300'
                                                : 'border-[#1E324D] text-slate-400 hover:border-cyan-400/40 hover:text-slate-200'
                                        }`}
                                    >
                                        {l.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 p-6">
                            <div className="flex items-center gap-3 text-cyan-300">
                                <TrendingDown className="h-5 w-5" />
                                <span className="font-tech text-xs uppercase tracking-[0.24em]">
                                    Économies potentielles
                                </span>
                            </div>
                            <p data-testid="calculator-result" className="font-display mt-4 text-4xl font-extrabold text-white sm:text-5xl">
                                {yearly.toLocaleString('fr-CA')} $
                                <span className="ml-2 text-base font-medium text-slate-400">/ année</span>
                            </p>
                            <p className="mt-2 text-sm text-slate-400">
                                soit jusqu'à <span className="font-semibold text-cyan-300">{percent} %</span> de votre
                                budget énergie
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-2xl border border-[#1E324D] bg-[#0F1C2E] p-5">
                                <Zap className="h-5 w-5 text-amber-400" />
                                <p className="font-display mt-3 font-bold text-white">Rendement restauré</p>
                                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                                    Un système propre consomme moins pour le même confort.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-[#1E324D] bg-[#0F1C2E] p-5">
                                <CalendarClock className="h-5 w-5 text-amber-400" />
                                <p className="font-display mt-3 font-bold text-white">Durée de vie prolongée</p>
                                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                                    Jusqu'à 5 années supplémentaires pour votre équipement.
                                </p>
                            </div>
                        </div>
                        <p className="text-[11px] leading-relaxed text-slate-500">
                            Estimation indicative basée sur des moyennes d'industrie. Les économies réelles varient
                            selon l'équipement et le bâtiment.
                        </p>
                    </div>
                </div>
            </div>
        </Reveal>
    );
}
