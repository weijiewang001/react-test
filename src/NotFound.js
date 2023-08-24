import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center mt-5">
      <h1 className="display-1">404</h1>
      <p className="lead">The page you are looking for does not exist.</p>
      <p>Return to <Link to="/">Home</Link></p>
    </div>
  );
}

export default NotFound;
