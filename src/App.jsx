import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import HomePage from "./Components/HomePage";
import ProtectedRoute from "./Components/Protected/ProtectedRoute";
import { TMDBProvider } from "./Context/ApiContext";

function App() {
  return (
    <TMDBProvider>
      <Routes>
        <Route element={<ProtectedRoute requiresAuth={false} />}>
          <Route path="/login" element={<Landing />} />
        </Route>
        <Route element={<ProtectedRoute requiresAuth={true} />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        {/* <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/tv/:id" element={<TV />} />
          <Route path="/person/:id" element={<Person />} />
          <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </TMDBProvider>
  );
}

export default App;
