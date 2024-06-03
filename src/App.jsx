import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import HomePage from "./Components/HomePage.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Landing />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      {/* <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/tv/:id" element={<TV />} />
        <Route path="/person/:id" element={<Person />} />
        <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
