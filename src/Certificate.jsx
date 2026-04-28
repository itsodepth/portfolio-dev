export default function Certificate() {
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
        <section className="h-screen w-full flex flex-col items-center justify-center px-6 pt-2 md:pt-10 shrink-0 relative">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-10 md:mb-10 tracking-tight">Certificates</h2>

            <div className="inner-scroll-container grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 w-full max-w-5xl overflow-y-auto pr-2 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" style={{ maxHeight: "65vh" }} onWheel={handleInnerScroll}>
                {[
                    { title: "Sertifikat Kelas Belajar Dasar HTML", desc: "Sertifikat pencapaian kelas belajar dasar HTML", tag: "CODEPOLITAN", link: "https://www.codepolitan.com/c/4QLUZPH/" },
                    { title: "Sertifikat Kelas Belajar Dasar CSS", desc: "Sertifikat pencapaian kelas belajar dasar CSS", tag: "CODEPOLITAN", link: "https://www.codepolitan.com/c/I4QBKOZ/" },
                    { title: "Sertifikat Kelas Belajar Bootstrap CSS Framework", desc: "Sertifikat pencapaian kelas belajar framework Bootstrap", tag: "CODEPOLITAN", link: "https://www.codepolitan.com/c/8H2B1MG/" },
                    { title: "Intro to Software Engineering", desc: "Sertifikat pencapaian kelas belajar dasar HTML, CSS, Javascript", tag: "RevoU", link: "https://drive.google.com/file/d/1-RF8gO2uJ_dG2mJcQarPM1W173tjqORx/view" },
                    { title: "Code Generation and Optimization Using IBM Granite", desc: "Sertifikat pencapaian kelas belajar optimisasi kode menggunakan IBM Granite", tag: "IBM", link: "https://www.credly.com/badges/5ca7a01c-ec36-4c60-b42c-c6554b45ebe3/linked_in_profile" },
                    { title: "Belajar Dasar AI", desc: "Sertifikat pencapaian kelas belajar pengenalan AI", tag: "Dicoding Indonesia", link: "https://www.dicoding.com/certificates/RVZKGRKDOXD5" },
                    { title: "Belajar Dasar Pemrograman Web", desc: "Sertifikat pencapaian kelas belajar dasar Pemrograman Web", tag: "Dicoding Indonesia", link: "https://www.dicoding.com/certificates/L4PQ2EGY2ZO1" },
                    { title: "Belajar Dasar Pemrograman JavaScript", desc: "Sertifikat pencapaian kelas belajar dasar pemrograman Javascript", tag: "Dicoding Indonesia", link: "https://www.dicoding.com/certificates/JLX15JOK5Z72" },
                ].map((project, i) => (
                    <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="group block border border-white/10 rounded-2xl p-6 md:p-8 bg-white/2 hover:bg-white/6 hover:border-white/20 transition-all duration-300 cursor-pointer">
                        <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest border border-white/15 rounded-full px-3 py-1 inline-block mb-4">{project.tag}</span>
                        <h3 className="text-white text-lg md:text-xl font-semibold mb-2 group-hover:translate-x-1 transition-transform duration-300">{project.title}</h3>
                        <p className="text-white/50 text-xs md:text-sm leading-relaxed">{project.desc}</p>
                        <span className="text-white/40 text-xs mt-4 inline-block group-hover:text-white transition-colors">Lihat Sertifikat ↗</span>
                    </a>
                ))}
            </div>
        </section>
    );
}
