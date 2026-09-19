import { useEffect, useRef } from 'react';

export default function AirflowCanvas({ className }) {
    const ref = useRef(null);

    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let raf;
        let w = 0;
        let h = 0;
        const DPR = Math.min(window.devicePixelRatio || 1, 2);

        const resize = () => {
            w = canvas.offsetWidth;
            h = canvas.offsetHeight;
            canvas.width = w * DPR;
            canvas.height = h * DPR;
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        };
        resize();
        window.addEventListener('resize', resize);

        const N = 80;
        const parts = Array.from({ length: N }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            s: 0.35 + Math.random() * 1.1,
            a: 0.05 + Math.random() * 0.3,
            off: Math.random() * Math.PI * 2,
            hue: Math.random() < 0.85 ? '56,189,248' : '249,115,22',
        }));

        let t = 0;
        const draw = () => {
            t += 0.0045;
            ctx.clearRect(0, 0, w, h);

            for (const p of parts) {
                p.x += p.s;
                const y = p.y + Math.sin(t * 2 + p.off + p.x * 0.004) * 20;
                if (p.x > w + 24) {
                    p.x = -24;
                    p.y = Math.random() * h;
                }
                ctx.beginPath();
                ctx.arc(p.x, y, p.s * 1.7, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.hue},${p.a})`;
                ctx.fill();
            }

            ctx.lineWidth = 1;
            for (let i = 0; i < 5; i++) {
                ctx.beginPath();
                const yBase = h * (0.12 + i * 0.19);
                for (let x = 0; x <= w; x += 18) {
                    const y = yBase + Math.sin(x * 0.006 + t * 3 + i * 1.7) * 24;
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.strokeStyle = `rgba(56,189,248,${0.04 + 0.02 * i})`;
                ctx.stroke();
            }

            raf = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={ref} className={className} aria-hidden="true" />;
}
