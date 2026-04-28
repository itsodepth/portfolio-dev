import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center px-6 pt-2 md:pt-10 shrink-0 relative">
            <p className="text-white/40 text-sm md:text-base uppercase tracking-[0.3em] mb-4">Get In Touch</p>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-6">Let's Work Together</h2>
            <p className="text-white/50 text-sm md:text-base max-w-lg text-center mb-8 md:mb-10 leading-relaxed">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>

            <div className="flex gap-4 mb-12">
                <a href="#" className="border border-white/20 text-white text-xs md:text-sm px-6 py-3 rounded-full hover:bg-white hover:text-[#080616] transition-all duration-300">
                    Download CV
                </a>
                <a href="mailto:devanoalfarizy04@gmail.com" className="bg-white text-[#080616] text-xs md:text-sm px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-all duration-300">
                    Get in touch
                </a>
            </div>

            <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/devanoalfarizy/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                    <FaLinkedin className="text-xl md:text-2xl" />
                </a>
                <a href="https://www.instagram.com/itsodepth/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                    <FaInstagram className="text-xl md:text-2xl" />
                </a>
            </div>

            <p className="absolute bottom-6 text-white/20 text-xs">© 2026 Devano. All rights reserved.</p>
        </section>
    );
}
