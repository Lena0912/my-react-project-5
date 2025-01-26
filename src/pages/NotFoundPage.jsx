import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <Link to="/">Go Back Home</Link>
    </div>
  );
  
};
