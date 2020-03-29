import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import TypeNotFound from "./TypeNotFound";

// React Router does not have any opinions about
// how you should parse URL query strings.
//
// If you use simple key=value query strings and
// you do not need to support IE 11, you can use
// the browser's built-in URLSearchParams API.
//
// If your query strings contain array or object
// syntax, you'll probably need to bring your own
// query parsing function.

export default function QueryParamsExample() {
  return (
    <Router>
      <QueryParamsDemo />
    </Router>
  );
}

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function QueryParamsDemo() {
  let query = useQuery();

  return (
    <div>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/typenotfound?name=thing">Netflix</Link>
          </li>
          <li>
            <Link to="/account?name=zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/account?name=yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/account?name=modus-create">Modus Create</Link>
          </li>
        </ul>

       <Route path="/typenotfound">
            <TypeNotFound name={query.get("name")}/>
       </Route>

        
      </div>
    </div>
  );
}

function Child({ name }) {
  return (
    <div>
      <TypeNotFound name={name}/>
    </div>
  );
}
