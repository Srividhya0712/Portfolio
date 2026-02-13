import Link from "next/link";
// import { api } from "~/trpc/server"; 

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-20 px-4">
      <div className="container flex flex-col items-center justify-center gap-8">

        {/* Hero Section */}
        <div className="text-center space-y-4 z-10">
          <h2 className="text-2xl md:text-3xl font-medium text-beige/80">
            Hey, I&apos;m Srividhya <span className="inline-block animate-wave">👋</span>
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white drop-shadow-2xl">
            AI Engineer
          </h1>
        </div>

        {/* Avatar Placeholder */}
        <div className="relative z-10 my-8 group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal to-sky-blue opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
          <div className="relative h-48 w-48 rounded-full bg-navy border-4 border-white/10 overflow-hidden flex items-center justify-center">
            {/* Replace with actual image later */}
            <span className="text-4xl">👩‍💻</span>
          </div>
        </div>

        {/* Search Bar / Input */}
        <div className="relative w-full max-w-md z-10">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-4 text-beige placeholder:text-beige/40 focus:outline-none focus:ring-2 focus:ring-teal/50 backdrop-blur-sm transition-all shadow-xl"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-teal p-2 text-white hover:bg-teal/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 w-full max-w-4xl z-10">
          {[
            { name: "Me", path: "/about", icon: "☺" },
            { name: "Projects", path: "/projects", icon: "💼" },
            { name: "Skills", path: "/skills", icon: "⚡" },
            { name: "Fun", path: "/fun", icon: "🎉" },
            { name: "Contact", path: "/contact", icon: "📞" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
              <span className="font-medium text-beige/90">{item.name}</span>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
