import { Route, Routes } from "react-router-dom";
import LoginPage from "./Routes/LoginPage.jsx";
import HomePage from "./Routes/HomePage.jsx";
import ProtectedRoute from "./Routes/Protected/ProtectedRoute";
import { TMDBProvider } from "./Context/ApiContext";
import Layout from "./Components/Layout.jsx";
import MediaDetailPage from "./Routes/MediaDetailPage.jsx";
import UserSavesList from "./Routes/UserSavesList.jsx";
import Search from "./Routes/Search.jsx";

function App() {
  return (
    <TMDBProvider>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />

          {/* Private Routes with Layout */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <Search />
              </ProtectedRoute>
            }
          />

          {/* Media Detail Routes (combined for movies and tv shows) */}
          <Route
            path="/:mediaType/:id"
            element={
              <ProtectedRoute>
                <MediaDetailPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile/my-list"
            element={
              <ProtectedRoute>
                <UserSavesList />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </TMDBProvider>
  );
}

export default App;
