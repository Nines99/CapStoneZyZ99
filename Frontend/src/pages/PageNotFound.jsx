import { Link, useNavigate } from "react-router-dom";

function PageNotFound() {

  const navigate = useNavigate();

  return (
    <div className="PageNotFound">
      <h1>Page Not Found</h1>
      <p>
        What were you looking for? Maybe going back <Link to="/">home</Link> will help you find it.
      </p>
      <button onClick={() => navigate(-1)}>Back</button>

    </div>
  );
}

export default PageNotFound;

// Save as PageNotFound.jsx in the 'pages' folder
// ++ Add a Back button to navigate one page back in the history
// ++ Add a standard <a href> link as well and observe the difference
