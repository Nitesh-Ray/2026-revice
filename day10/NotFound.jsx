import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>404 – Page Not Found</h2>
      <Link to="/">Go back home</Link>
      <button onClick={() => navigate("/")}>Home</button>;
    </div>
  );
}
