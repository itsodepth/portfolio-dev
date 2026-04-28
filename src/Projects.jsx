export default function Projects() {
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
        <section className="h-screen w-full flex flex-col items-center justify-center px-6 pt-2 md:pt-10 shrink-0 relative">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 md:mb-10 tracking-tight">Projects</h2>

            <div className="inner-scroll-container grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 w-full max-w-5xl overflow-y-auto pr-2 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" style={{ maxHeight: "65vh" }} onWheel={handleInnerScroll}>
                {[
                    { title: "Mini Herbal KKN", desc: "Projek website KKN berisi pengetahuan tanaman herbal", tag: "Web Dev", link: "https://miniherbal-kknt48udb.vercel.app/" },
                    { title: "Desa Prima Kenteng", desc: "Website UMKM Desa Prima di Desa Kenteng, Gunung Kidul", tag: "Web Dev", link: "https://desaprimakenteng.vercel.app/" },
                    { title: "Zenigma", desc: "Website sederhana untuk timer pomodoro bagi mahasiswa", tag: "Web Dev", link: "https://zenigma.vercel.app/" },
                    { title: "Apajatugas", desc: "Website untuk mencatat todo list dengan penyimpanan lokal", tag: "Web Dev", link: "https://apajatugas.vercel.app/" },
                ].map((project, i) => (
                    <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="group block border border-white/10 rounded-2xl p-6 md:p-8 bg-white/2 hover:bg-white/6 hover:border-white/20 transition-all duration-300 cursor-pointer">
                        <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest border border-white/15 rounded-full px-3 py-1 inline-block mb-4">{project.tag}</span>
                        <h3 className="text-white text-lg md:text-xl font-semibold mb-2 group-hover:translate-x-1 transition-transform duration-300">{project.title}</h3>
                        <p className="text-white/50 text-xs md:text-sm leading-relaxed">{project.desc}</p>
                        <span className="text-white/40 text-xs mt-4 inline-block group-hover:text-white transition-colors">
                            Lihat Project ↗
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
}
