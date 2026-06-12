import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Outlet />
      <hr />
      <Outlet /> {/* child routes render here */}
    </div>
  );
}

export default Layout
