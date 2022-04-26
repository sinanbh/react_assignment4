import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/students">
        Students
      </Link>
      <Link className="link" to="/contact">
        Contact
      </Link>
    </nav>
  );
}
