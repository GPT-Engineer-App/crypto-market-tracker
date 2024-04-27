import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navigation from "./components/Navigation.jsx";
import Admin from "./pages/Admin.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navigation />
              <Index />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <Navigation />
              <Admin />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
