import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Secteurs from './pages/Secteurs';
import Blogue from './pages/Blogue';
import Article from './pages/Article';
import Contact from './pages/Contact';

function ScrollManager() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const t = setTimeout(() => {
                const el = document.querySelector(hash);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 120);
            return () => clearTimeout(t);
        }
        window.scrollTo(0, 0);
    }, [pathname, hash]);
    return null;
}

export default function App() {
    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
        let id;
        const raf = (time) => {
            lenis.raf(time);
            id = requestAnimationFrame(raf);
        };
        id = requestAnimationFrame(raf);
        return () => {
            cancelAnimationFrame(id);
            lenis.destroy();
        };
    }, []);

    return (
        <BrowserRouter>
            <div className="min-h-screen bg-[#0A121E] text-slate-100 antialiased">
                <ScrollManager />
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/secteurs" element={<Secteurs />} />
                        <Route path="/blogue" element={<Blogue />} />
                        <Route path="/blogue/:slug" element={<Article />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>
                <Footer />
                <FloatingContactButton />
            </div>
        </BrowserRouter>
    );
}
