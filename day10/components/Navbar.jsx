import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const activeStyle = { fontWeight: 'bold', textDecoration: 'underline' };

  return (
    <nav style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
      <NavLink
        to="/"
        end  // important for exact match of "/"
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Contact
      </NavLink>
      <NavLink
        to="/product"
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Product
      </NavLink>
      <NavLink
        to="/blog"
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Blog
      </NavLink>
      <NavLink
        to="/blogpost"
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Blog Post
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        products
      </NavLink>
    </nav>
  );
}

export default Navbar;