import { Routes, Route } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import PageNotFound from "../pages/PageNotFound";
import SignUpPage from "../pages/SignUpPage";
import MainPage from "../pages/MainPage";
// import { RequestsList, Request } from "../components/RequestsList";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../components/Login";
import SinglePlayerRequestPage from "../pages/SinglePlayerRequestPage";
import MultiPlayerRequestPage from "../pages/MultiPlayerRequestPage";
import HomePage from "../pages/Homepage";
import Applications from "../pages/Applications";

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<HomePage />} />

      {/* nested routes, matches on /dash/tasks etc */}
      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <ProfilePage {...props} />
          </ProtectedRoute>
        }
      ></Route>
      
      <Route path="login" element={<Login />} />
      <Route path="/signup" element={<SignUpPage {...props} />} />

      <Route
        path="/mainpage"
        element={
          <ProtectedRoute>
            <MainPage {...props} />
          </ProtectedRoute>
        }
      />

      <Route
        path="/solo_request"
        element={
          <ProtectedRoute>
            <SinglePlayerRequestPage {...props} />
          </ProtectedRoute>
        }
      />

      <Route
        path="/team_request"
        element={
          <ProtectedRoute>
            <MultiPlayerRequestPage {...props} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/applications"
        element={
          <ProtectedRoute>
            <Applications {...props} />
          </ProtectedRoute>
        }
      />


      {/* <Route index element={<RequestsList />} />
        <Route path=":id" element={<Request />} />
      </Route> */}

      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
