import { useState, useRef } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function App() {
    const [activeSection, setActiveSection] = useState(0);
    const isScrolling = useRef(false);

    // State untuk mendeteksi touch / swipe di mobile
    const touchStartY = useRef(0);
    const touchEndY = useRef(0);

    // Total sesuai jumlah slide/section yang kita miliki (Hero, Projects, Skills, Contact, Experience)
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

    // Fungsi pintar untuk elemen di dalam slide yang butuh di-scroll panjang
    const handleInnerScroll = (e) => {
        const el = e.currentTarget;
        const isAtTop = el.scrollTop === 0;
        const isAtBottom = Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) <= 1;

        if (e.deltaY > 0 && !isAtBottom) {
            e.stopPropagation(); // Jangan pindah slide kalau belum mentok bawah
        } else if (e.deltaY < 0 && !isAtTop) {
            e.stopPropagation(); // Jangan pindah slide kalau belum mentok atas
        }
    };

    return (
        <div className="h-screen w-full overflow-hidden bg-[#080616] font-jakarta relative" onWheel={handleWheel} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            {/* Global Navbar (Dikeluarkan dari container slide yang bergerak) */}
            <div className="absolute top-0 left-0 w-full flex justify-center pt-6 px-4 md:pt-9 md:px-6 z-50 pointer-events-none">
                <nav className="pointer-events-auto flex-nowrap flex items-center justify-between border border-white/15 rounded-full px-5 py-2.5 md:px-10 md:py-3.5 w-full max-w-5xl bg-white/2 backdrop-blur-md shadow-lg">
                    <span className="text-white font-semibold text-lg md:text-2xl tracking-wide cursor-pointer" onClick={() => setActiveSection(0)}>
                        depth.
                    </span>
                    <div className="flex gap-4 md:gap-7">
                        {["Experience", "Projects", "Skills", "Certificate", "CV"].map((item, index) => (
                            <button key={item} onClick={() => setActiveSection(index + 1)} className="text-white/80 text-xs md:text-sm hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 outline-none whitespace-nowrap">
                                {item}
                            </button>
                        ))}
                    </div>
                </nav>
            </div>

            {/* 
                DI SINI CARA MENGATUR SMOOTHNESS-NYA!
                -------------------------------------------------
                1. duration-[1000ms] : Mengatur LAMA animasi pindah slide
                   -> Coba ganti ke duration-[1200ms] (lebih lambat) atau duration-[800ms] (lebih cepet).
                2. ease-[cubic-bezier(...)] : Mengatur "KARAKTER / GAYA" mulusnya
                   -> cubic-bezier(0.65,0,0.35,1) adalah efek "Slow-Fast-Slow" yang sinematik (sering dipakai di Apple dll).
                   -> Kalau mau coba yang lain, misal: ease-in-out, atau ease-[cubic-bezier(0.25,1,0.5,1)] buat efek yang beda.
            */}
            <div className="h-full w-full transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]" style={{ transform: `translateY(-${activeSection * 100}vh)` }}>
                {/* ===== SLIDE 1: Hero ===== */}
                <section className="h-screen w-full flex flex-col relative shrink-0">
                    {/* Hero Content */}
                    <div className="flex-1 flex items-center px-6 md:px-0 md:pl-[24%]">
                        <div className="max-w-xl">
                            <p className="text-white/55 text-base md:text-xl mb-1.5">Hi! Im..</p>
                            <h1 className="text-white text-3xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">Muh Devano Alfarizy</h1>
                            <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-5 md:mb-7">I am an Informatics Engineering student focused on Front-End Development and UI/UX Design. I am able to work in a team, have strong problem-solving skills, and am eager to learn new technologies.</p>

                            {/* Social Icons + Line */}
                            <div className="flex items-center gap-3">
                                <a href="#" className="rounded-lg flex items-center justify-center">
                                    <FaLinkedin className="text-white text-xl md:text-2xl hover:text-white/60 transition-colors" />
                                </a>
                                <a href="#" className="rounded-lg flex items-center justify-center">
                                    <FaInstagram className="text-white text-xl md:text-2xl hover:text-white/60 transition-colors" />
                                </a>
                                <div className="w-32 md:w-64 h-px bg-white/25" />
                            </div>
                        </div>
                    </div>

                    {/* Marquee Bar (Sekarang posisinya absolute di bawah slide 1) */}
                    <div className="bg-white py-3 md:py-4 overflow-hidden absolute bottom-0 w-full z-10">
                        <div className="flex w-max animate-marquee">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="flex items-center gap-3 pr-6 md:gap-4 md:pr-8 whitespace-nowrap">
                                    {["Web Developer", "UI/UX Designer", "Student", "Front-End Developer"].map((label) => (
                                        <span key={label} className="flex items-center gap-3 md:gap-4">
                                            <span className="text-[#0a0a14] text-sm md:text-xl font-semibold">{label}</span>
                                            <span className="text-[#0a0a14] text-lg md:text-2xl">✦</span>
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== SLIDE 2: Experience ===== */}
                <section className="h-screen w-full flex flex-col items-center justify-center px-6 pt-2 md:pt-10 shrink-0 relative">
                    <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 md:mb-10">Experience</h2>
                    <div className="flex flex-row justify-between items-start w-full max-w-4xl border border-white/10 p-6 rounded-2xl bg-white/2">
                        <div className="flex flex-col max-w-[70%]">
                            <h4 className="text-white text-md md:text-xl font-bold mb-2">Social Media Contributor</h4>
                            <p className="text-white/60 text-xs md:text-sm mb-0">
                                <a href="https://www.instagram.com/seputarotaku/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Seputar Otaku
                                </a>
                            </p>
                        </div>
                        <h4 className="text-white/60 text-xs md:text-sm shrink-0 mt-1.5">2026 - Now</h4>
                    </div>
                </section>

                {/* ===== SLIDE 3: Projects ===== */}
                <section className="h-screen w-full flex flex-col items-center justify-center px-6 pt-2 md:pt-10 shrink-0 relative">
                    <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 md:mb-10">Projects</h2>

                    <div className="inner-scroll-container grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 w-full max-w-5xl overflow-y-auto pr-2 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" style={{ maxHeight: "65vh" }} onWheel={handleInnerScroll}>
                        {[
                            { title: "E-Commerce App", desc: "A modern shopping platform built with React & Node.js", tag: "Web Dev" },
                            { title: "Task Manager", desc: "Productivity tool with drag-and-drop kanban board", tag: "UI/UX" },
                            { title: "Weather Dashboard", desc: "Real-time weather data visualization with charts", tag: "API" },
                            { title: "Portfolio Website", desc: "Personal portfolio with smooth animations", tag: "Design" },
                            { title: "Mobile UI Kit", desc: "Comprehensive design system for iOS applications", tag: "UI/UX" },
                            { title: "SEO Analyzer", desc: "Tool to analyze and improve website search rankings", tag: "Web Dev" },
                            { title: "Social Media API", desc: "RESTful backend service for a social platform", tag: "API" },
                            { title: "Landing Page", desc: "High-conversion landing page for SaaS products", tag: "Design" },
                        ].map((project, i) => (
                            <div key={i} className="group border border-white/10 rounded-2xl p-6 md:p-8 bg-white/2 hover:bg-white/6 hover:border-white/20 transition-all duration-300 cursor-pointer">
                                <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest border border-white/15 rounded-full px-3 py-1 inline-block mb-4">{project.tag}</span>
                                <h3 className="text-white text-lg md:text-xl font-semibold mb-2 group-hover:translate-x-1 transition-transform duration-300">{project.title}</h3>
                                <p className="text-white/50 text-xs md:text-sm leading-relaxed">{project.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== SLIDE 4: Skills ===== */}
                <section className="h-screen w-full flex flex-col items-center justify-center px-6 pt-2 md:pt-10 shrink-0 relative">
                    <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 md:mb-10">Skills</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
                        {[
                            { name: "React", level: "90%" },
                            { name: "JavaScript", level: "85%" },
                            { name: "Tailwind CSS", level: "90%" },
                            { name: "Figma", level: "80%" },
                            { name: "Node.js", level: "70%" },
                            { name: "TypeScript", level: "65%" },
                            { name: "Git", level: "85%" },
                            { name: "UI/UX Design", level: "80%" },
                        ].map((skill, i) => (
                            <div key={i} className="border border-white/10 rounded-2xl p-5 md:p-6 bg-white/2 hover:bg-white/6 hover:border-white/20 transition-all duration-300 text-center group">
                                <h3 className="text-white text-sm md:text-base font-semibold mb-3">{skill.name}</h3>
                                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-linear-to-r from-white/60 to-white rounded-full transition-all duration-700 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]" style={{ width: skill.level }} />
                                </div>
                                <p className="text-white/40 text-xs mt-2">{skill.level}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== SLIDE 6: Certificate ===== */}
                <section className="h-screen w-full flex flex-col items-center justify-center px-6 pt-2 md:pt-10 shrink-0 relative">
                    <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 md:mb-10">Certificate</h2>
                </section>

                {/* ===== SLIDE 6: Contact / Footer ===== */}
                <section className="h-screen w-full flex flex-col items-center justify-center px-6 pt-2 md:pt-10 shrink-0 relative">
                    <p className="text-white/40 text-sm md:text-base uppercase tracking-[0.3em] mb-4">Get In Touch</p>
                    <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-6">Let's Work Together</h2>
                    <p className="text-white/50 text-sm md:text-base max-w-lg text-center mb-8 md:mb-10 leading-relaxed">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>

                    <div className="flex gap-4 mb-12">
                        <a href="#" className="border border-white/20 text-white text-xs md:text-sm px-6 py-3 rounded-full hover:bg-white hover:text-[#080616] transition-all duration-300">
                            Download CV
                        </a>
                        <a href="mailto:devano@example.com" className="bg-white text-[#080616] text-xs md:text-sm px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-all duration-300">
                            Say Hello 👋
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="#" className="text-white/50 hover:text-white transition-colors">
                            <FaLinkedin className="text-xl md:text-2xl" />
                        </a>
                        <a href="#" className="text-white/50 hover:text-white transition-colors">
                            <FaInstagram className="text-xl md:text-2xl" />
                        </a>
                    </div>

                    <p className="absolute bottom-6 text-white/20 text-xs">© 2026 Devano. All rights reserved.</p>
                </section>
            </div>
        </div>
    );
}
