import { Route, Routes } from "react-router-dom";
import Landing from "./Routes/Landing.jsx";
import HomePage from "./Routes/HomePage.jsx";
import ProtectedRoute from "./Routes/Protected/ProtectedRoute";
import { TMDBProvider } from "./Context/ApiContext";
import Search from "./Routes/Search.jsx";
import Layout from "./Components/Layout.jsx";

function App() {
  return (
    <TMDBProvider>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route element={<ProtectedRoute requiresAuth={false} />}>
            <Route path="/login" element={<Landing />} />
          </Route>

          {/* Private Routes with Layout */}
          <Route element={<ProtectedRoute requiresAuth={true} />}>
            {/*<Route element={<Layout />}>*/}
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<Search />} />
            {/*</Route>*/}
          </Route>
        </Routes>
      </Layout>
    </TMDBProvider>
  );
}

export default App;
