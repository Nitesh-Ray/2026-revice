import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Layout from "./Layout";
import Product from "./pages/Product";
import Blog from "./pages/Blog";


function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
      </Routes>

      <Blog />
    </div>
  );
}

export default App;

// function App() {
//   return (

//     <div>

//     </div>
//   );
// }
// export default App
