const projects = [
    {
        title: "Project Alpha",
        description: "An AI-powered dashboard for anomaly detection using Next.js and Python.",
        tags: ["Next.js", "Python", "TensorFlow"],
        link: "#",
    },
    {
        title: "Project Beta",
        description: "Real-time chat application with tRPC and WebSockets.",
        tags: ["tRPC", "React", "Socket.io"],
        link: "#",
    },
    {
        title: "Project Gamma",
        description: "E-commerce platform with stripe integration.",
        tags: ["Next.js", "Stripe", "Tailwind CSS"],
        link: "#",
    },
    {
        title: "Project Delta",
        description: "Automated trading bot using reinforcement learning.",
        tags: ["Python", "PyTorch", "Finance"],
        link: "#",
    },
];

export default function Projects() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-32 px-4 pb-16">
            <div className="container max-w-6xl space-y-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center">My Projects</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                            <h3 className="text-2xl font-bold text-sky-blue mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                            <p className="text-beige/80 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-teal/20 text-teal border border-teal/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} className="absolute inset-0 z-10" aria-label={`View ${project.title}`}></a>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
