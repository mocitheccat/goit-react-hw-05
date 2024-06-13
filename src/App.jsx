// import { Route, Routes } from "react-router-dom";
// import LoginPage from "./Routes/LoginPage.jsx";
// import HomePage from "./Routes/HomePage.jsx";
// import ProtectedRoute from "./Routes/Protected/ProtectedRoute";
// import { TMDBProvider } from "./Context/ApiContext";
// import SearchPage from "./Routes/SearchPage.jsx";
// import Layout from "./Components/Layout.jsx";
// import MediaDetailPage from "./Routes/MediaDetailPage.jsx";

// function App() {
//   return (
//     <TMDBProvider>
//       <Layout>
//         <Routes>
//           {/* Public Routes */}
//           <Route element={<ProtectedRoute requiresAuth={false} />}>
//             <Route path="/login" element={<LoginPage />} />
//           </Route>

//           {/* Private Routes with Layout */}
//           <Route element={<ProtectedRoute requiresAuth={true} />}>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/search" element={<SearchPage />} />
//             <Route path="/movie/:id" element={<MediaDetailPage />} />
//             <Route path="/tv/:id" element={<MediaDetailPage />} />
//           </Route>
//         </Routes>
//       </Layout>
//     </TMDBProvider>
//   );
// }

// export default App;


import { Route, Routes } from "react-router-dom";
import LoginPage from "./Routes/LoginPage.jsx";
import HomePage from "./Routes/HomePage.jsx";
import ProtectedRoute from "./Routes/Protected/ProtectedRoute";
import { TMDBProvider } from "./Context/ApiContext";
import SearchPage from "./Routes/SearchPage.jsx";
import Layout from "./Components/Layout.jsx";
import MediaDetailPage from "./Routes/MediaDetailPage.jsx";

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
                <SearchPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <ProtectedRoute>
                <MediaDetailPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tv/:id"
            element={
              <ProtectedRoute>
                <MediaDetailPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </TMDBProvider>
  );
}

export default App;