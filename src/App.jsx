import { useState, useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Certificate from "./Certificate";
import Footer from "./Footer";

export default function App() {
    const [activeSection, setActiveSection] = useState(0);
    const isScrolling = useRef(false);

    // State untuk mendeteksi touch / swipe di mobile
    const touchStartY = useRef(0);
    const touchEndY = useRef(0);

    // Total sesuai jumlah slide/section yang kita miliki (Hero, Experience, Projects, Skills, Certificate, Footer)
    const totalSections = 6;

    const handleTouchStart = (e) => {
        touchStartY.current = e.touches[0].clientY;
        touchEndY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
        touchEndY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        if (isScrolling.current) return;

        // Cek apakah area yang di-swipe adalah area yang bisa di-scroll ke dalam (seperti list projects)
        const innerScrollEl = e.target.closest(".inner-scroll-container");
        if (innerScrollEl) {
            const isAtTop = innerScrollEl.scrollTop === 0;
            const isAtBottom = Math.abs(innerScrollEl.scrollHeight - innerScrollEl.scrollTop - innerScrollEl.clientHeight) <= 1;

            const distanceInner = touchStartY.current - touchEndY.current;

            // Jika lagi ngescroll konten di dalam yang belum mentok, jangan ganti slide
            if (distanceInner > 0 && !isAtBottom) return;
            if (distanceInner < 0 && !isAtTop) return;
        }

        const distance = touchStartY.current - touchEndY.current;
        const minSwipeDistance = 40; // Sensitivitas swipe

        if (distance > minSwipeDistance && activeSection < totalSections - 1) {
            // Swipe ke atas -> Slide ke bawah (next)
            setActiveSection((prev) => prev + 1);
            triggerCooldown();
        } else if (distance < -minSwipeDistance && activeSection > 0) {
            // Swipe ke bawah -> Slide ke atas (prev)
            setActiveSection((prev) => prev - 1);
            triggerCooldown();
        }
    };

    // Fungsi custom buat mendeteksi scroll mouse / trackpad
    const handleWheel = (e) => {
        // Jika sedang animasi pindah slide, abaikan scroll baru (cooldown)
        if (isScrolling.current) return;

        // Threshold sensitivitas (supaya scroll dikit nggak langsung ganti)
        if (Math.abs(e.deltaY) > 40) {
            if (e.deltaY > 0 && activeSection < totalSections - 1) {
                // Turun
                setActiveSection((prev) => prev + 1);
                triggerCooldown();
            } else if (e.deltaY < 0 && activeSection > 0) {
                // Naik
                setActiveSection((prev) => prev - 1);
                triggerCooldown();
            }
        }
    };

    const triggerCooldown = () => {
        isScrolling.current = true;
        // Animasi diset durasi 1000ms, jadi kita kunci scroll selama itu juga
        setTimeout(() => {
            isScrolling.current = false;
        }, 1000);
    };

    return (
        <div className="h-screen w-full overflow-hidden bg-[#080616] font-jakarta relative" onWheel={handleWheel} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            {/* Global Navbar */}
            <Navbar setActiveSection={setActiveSection} />

            {/* Container Slide yang Bergerak */}
            <div className="h-full w-full transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]" style={{ transform: `translateY(-${activeSection * 100}vh)` }}>
                <Hero />
                <Experience />
                <Projects />
                <Skills />
                <Certificate />
                <Footer />
            </div>
        </div>
    );
}
