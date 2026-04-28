import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaFigma } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiCanva } from "react-icons/si";

export default function Skills() {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center px-6 pt-2 md:pt-10 shrink-0 relative">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 md:mb-10">Skills</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
                {[
                    { name: "HTML", level: "85%", icon: FaHtml5, color: "text-orange-500" },
                    { name: "CSS", level: "80%", icon: FaCss3Alt, color: "text-blue-500" },
                    { name: "JavaScript", level: "45%", icon: SiJavascript, color: "text-yellow-400" },
                    { name: "React", level: "30%", icon: FaReact, color: "text-cyan-400" },
                    { name: "Tailwind CSS", level: "50%", icon: SiTailwindcss, color: "text-teal-400" },
                    { name: "Bootstrap", level: "70%", icon: FaBootstrap, color: "text-purple-500" },
                    { name: "Canva", level: "80%", icon: SiCanva, color: "text-blue-400" },
                    { name: "Figma", level: "80%", icon: FaFigma, color: "text-pink-400" },
                ].map((skill, i) => (
                    <div key={i} className="border border-white/10 rounded-2xl p-5 md:p-6 bg-white/2 hover:bg-white/6 hover:border-white/20 transition-all duration-300 text-center group flex flex-col items-center">
                        <skill.icon className={`text-4xl md:text-5xl mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                        <h3 className="text-white text-sm md:text-base font-semibold mb-3">{skill.name}</h3>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-linear-to-r from-white/60 to-white rounded-full transition-all duration-700 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]" style={{ width: skill.level }} />
                        </div>
                        <p className="text-white/40 text-xs mt-2">{skill.level}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
