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


function AppRoutes(props) {
  return (
    <Routes>
      {/* nested routes, matches on /dash/tasks etc */}
      <Route index element={
          <ProtectedRoute>
            <ProfilePage {...props} />
          </ProtectedRoute>
        }
      >
      
      </Route>
      <Route path="login" element={<Login/>} />
      <Route path="/signup" element={<SignUpPage {...props} />} />
      <Route path="/mainpage" element={<MainPage {...props} />} />
      <Route path="/sp_request" element={<SinglePlayerRequestPage {...props} />} />
      <Route path="/mp_request" element={<MultiPlayerRequestPage {...props} />} />


        {/* <Route index element={<RequestsList />} />
        <Route path=":id" element={<Request />} />
      </Route> */}

      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
