export default function Navbar({ setActiveSection }) {
    return (
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
    );
}
