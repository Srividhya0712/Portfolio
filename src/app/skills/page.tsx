const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Python", "tRPC", "Prisma", "PostgreSQL"] },
    { category: "AI / ML", items: ["TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "NLP"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "VS Code"] },
];

export default function Skills() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-32 px-4 pb-16">
            <div className="container max-w-4xl space-y-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Skills & Expertise</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                            <h3 className="text-2xl font-bold text-sky-blue mb-6 border-b border-white/10 pb-2">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item) => (
                                    <span key={item} className="px-4 py-2 rounded-lg bg-navy/50 text-beige border border-white/5 hover:border-teal/50 hover:text-teal transition-all cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
