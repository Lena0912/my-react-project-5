import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">Go Back Home</Link>
    </div>
  );
  
};
