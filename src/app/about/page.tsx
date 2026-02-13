export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-32 px-4 pb-16">
            <div className="container max-w-4xl space-y-12">

                {/* Header */}
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">About Me</h1>
                    <p className="text-xl text-beige/80 max-w-2xl mx-auto">
                        Passionate AI Engineer dedicated to building intelligent systems that solve real-world problems.
                    </p>
                </div>

                {/* Content Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-lg text-beige/90 leading-relaxed">
                        <p>
                            Hello! I&apos;m Srividhya, an AI Engineer with a strong foundation in machine learning, deep learning, and software development. I specialize in creating scalable AI solutions and intuitive user experiences.
                        </p>
                        <p>
                            My journey in tech is driven by curiosity and a desire to innovate. Whether it&apos;s training complex models or designing pixel-perfect interfaces, I enjoy every aspect of the development lifecycle.
                        </p>
                        <p>
                            When I&apos;m not coding, you can find me exploring new technologies, reading about AI ethics, or enjoying a good cup of coffee.
                        </p>
                    </div>

                    {/* Stats / Highlights */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "Experience", value: "2+ Years" },
                            { label: "Projects", value: "15+" },
                            { label: "Coffee", value: "∞" },
                            { label: "Bugs Fixed", value: "Countless" }
                        ].map((stat) => (
                            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                                <div className="text-3xl font-bold text-sky-blue mb-2">{stat.value}</div>
                                <div className="text-sm text-beige/70 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
