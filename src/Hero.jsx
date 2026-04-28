import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="h-screen w-full flex flex-col relative shrink-0">
            {/* Hero Content */}
            <div className="flex-1 flex items-center px-6 md:px-0 md:pl-[24%]">
                <div className="max-w-xl">
                    <p className="text-white/55 text-base md:text-xl mb-1.5">Hi! Im..</p>
                    <h1 className="text-white text-3xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">Muh Devano Alfarizy</h1>
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-5 md:mb-7">I am an Informatics Engineering student focused on Front-End Development and UI/UX Design. I am able to work in a team, have strong problem-solving skills, and am eager to learn new technologies.</p>

                    {/* Social Icons + Line */}
                    <div className="flex items-center gap-3">
                        <a href="https://www.linkedin.com/in/devanoalfarizy/" target="_blank" rel="noopener noreferrer" className="rounded-lg flex items-center justify-center">
                            <FaLinkedin className="text-white text-xl md:text-2xl hover:text-white/60 transition-colors" />
                        </a>
                        <a href="https://www.instagram.com/itsodepth/" target="_blank" rel="noopener noreferrer" className="rounded-lg flex items-center justify-center">
                            <FaInstagram className="text-white text-xl md:text-2xl hover:text-white/60 transition-colors" />
                        </a>
                        <div className="w-32 md:w-64 h-px bg-white/25" />
                    </div>
                </div>
            </div>

            {/* Marquee Bar */}
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
    );
}
