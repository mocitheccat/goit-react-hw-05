import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import HomePage from "./Components/HomePage.jsx";
import ProtectedRoute from "./Components/Protected/ProtectedRoute.jsx";
import ProtectedLogin from "./Components/Protected/ProtectedLogin.jsx";

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <ProtectedLogin>
            <Landing />
          </ProtectedLogin>
        }
      />
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
