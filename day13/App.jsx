import {Routes, Route} from "react-router-dom"; // 👈 Import these
import LandingPage from "./pages/LandingPage"; // 👈 Import your page, http://localhost:5173/landing

function App() {
  return (
    <div className="min-h-screen bg-gray-100  items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 underline">
        Hello Tailwind!
      </h1>

      <div className="flex gap-4 m-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Primary
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          Danger
        </button>
        <button className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-2 px-4 rounded">
          Outline
        </button>
      </div>

      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src="https://i.pravatar.cc/300?img=5"
          alt="Avatar"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
          <p className="text-gray-600 mt-2">
            Frontend developer who loves React and coffee.
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            View Profile
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center my-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold">Card {i}</h3>
              <p className="text-gray-500">This card adapts to screen size.</p>
            </div>
          ))}
        </div>
      </div>

      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-2 sm:mb-0">Logo</div>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="hover:text-blue-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="dark">
        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4">
          <p>Light background white, dark background gray‑800.</p>
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <h1>Home Page, use router here, http://localhost:5173/landing</h1>
          }
        />
        <Route path="/landing" element={<LandingPage />} />{" "}
        {/* 👈 Your route */}
      </Routes>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Free",
              price: "$0",
              features: ["1 Project", "Basic Support"],
              highlighted: false,
            },
            {
              title: "Pro",
              price: "$29",
              features: ["10 Projects", "Priority Support", "Analytics"],
              highlighted: true,
            },
            {
              title: "Enterprise",
              price: "$99",
              features: ["Unlimited", "24/7 Support", "SSO"],
              highlighted: false,
            },
          ].map((plan) => (
            <div
              key={plan.title}
              className={`bg-white dark:bg-gray-700 p-8 rounded-xl text-center ${
                plan.highlighted
                  ? "border-2 border-blue-500 shadow-xl scale-105"
                  : "border border-gray-200 dark:border-gray-600 shadow"
              }`}
            >
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <p className="text-4xl font-bold mt-4">
                {plan.price}
                <span className="text-lg">/mo</span>
              </p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="text-gray-600 dark:text-gray-300">
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 py-2 px-6 rounded-full font-bold ${
                  plan.highlighted
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
                }`}
              >
                Choose {plan.title}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
