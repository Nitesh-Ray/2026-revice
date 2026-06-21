import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">ReactTail</span>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-blue-500">Features</a>
            <a href="#testimonials" className="hover:text-blue-500">Testimonials</a>
            <a href="#footer" className="hover:text-blue-500">Contact</a>
            <button
              onClick={() => setDark(!dark)}
              className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded"
            >
              {dark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Build Faster with <span className="text-blue-600">React + Tailwind</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Utility‑first CSS that lets you design directly in your JSX.
        </p>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 px-8 rounded-full">
          Get Started
        </button>
      </section>

      {/* Features Grid */}
      <section id="features" className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Fast', desc: 'Build UIs quickly with pre‑built classes.' },
              { title: 'Responsive', desc: 'Mobile‑first breakpoints built in.' },
              { title: 'Customizable', desc: 'Tailor everything in config.' },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { name: 'Alice', text: 'Tailwind made my workflow 10x faster.' },
            { name: 'Bob', text: 'I can’t imagine going back to plain CSS.' },
            { name: 'Carol', text: 'Perfect for React development.' },
            { name: 'Dan', text: 'Clean, maintainable, and fun.' },
          ].map((t) => (
            <div
              key={t.name}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow border-l-4 border-blue-500"
            >
              <p className="italic">“{t.text}”</p>
              <p className="mt-4 font-bold">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-800 dark:bg-black text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 ReactTail. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}