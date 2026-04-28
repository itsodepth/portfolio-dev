import logoSot from "./assets/logo-sot.png";

export default function Experience() {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center px-6 pt-2 md:pt-10 shrink-0 relative">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-8 md:mb-12 tracking-tight">Experience</h2>

            <div className="w-full max-w-4xl border border-white/10 p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4 md:gap-6">
                        {/* Logo Box */}
                        <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-xl bg-white/10 flex items-center justify-center p-2 border border-white/10 shadow-inner">
                            <img src={logoSot} alt="Seputar Otaku Logo" className="w-full h-full object-contain" />
                        </div>

                        {/* Title and Company */}
                        <div className="flex flex-col pt-1">
                            <h3 className="text-white text-lg md:text-xl font-bold">Social Media Contributor</h3>
                            <a href="https://www.instagram.com/seputarotaku/" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors mt-1">
                                Seputar Otaku ↗
                            </a>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="text-gray-400 text-sm font-medium sm:pt-2 sm:text-right">Mar 2026 - Present</div>
                </div>

                {/* Bullet Points */}
                <div className="mt-6 sm:mt-4 sm:ml-22 md:ml-22">
                    <ul className="list-disc list-outside text-gray-300 space-y-2.5 text-sm md:text-base leading-relaxed ml-4">
                        <li>Melakukan riset tren dan topik terkini untuk memastikan konten tetap relevan</li>
                        <li>Berkolaborasi dengan tim dalam perencanaan dan publikasi konten.</li>
                        <li>Menulis caption informatif dan menarik untuk meningkatkan engagement audiens.</li>
                        <li>Membuat konten media sosial bertema anime, manga, dan budaya Jepang.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
