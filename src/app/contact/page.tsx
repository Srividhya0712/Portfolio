export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-32 px-4 pb-16">
            <div className="container max-w-2xl space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Get in Touch</h1>
                    <p className="text-xl text-beige/80">
                        Have a project in mind or just want to say hi? I&apos;d love to hear from you.
                    </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-beige">Name</label>
                            <input type="text" id="name" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all" placeholder="John Doe" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-beige">Email</label>
                            <input type="email" id="email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-beige">Message</label>
                            <textarea id="message" rows={4} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all" placeholder="Tell me about your project..."></textarea>
                        </div>

                        <button type="submit" className="w-full rounded-lg bg-teal py-3 font-semibold text-white hover:bg-teal/80 transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="flex justify-center gap-8 pt-8 border-t border-white/10">
                    {[
                        { name: "GitHub", href: "https://github.com/Srividhya0712", icon: "🐙" },
                        { name: "LinkedIn", href: "#", icon: "💼" },
                        { name: "Twitter", href: "#", icon: "🐦" },
                        { name: "Email", href: "mailto:hello@example.com", icon: "📧" }
                    ].map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-beige/70 hover:text-white hover:scale-110 transition-all"
                            title={social.name}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

            </div>
        </main>
    );
}
