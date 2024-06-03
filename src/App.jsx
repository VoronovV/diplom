import Main_page from "./pages/Main_page/Main_page";
import LoginPage from "./pages/login/LoginPage";
import CoursePage from "./pages/Course/CoursePage.jsx";
import RegistrationPage from "./pages/registration/RegistrationPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_page />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegistrationPage />,
  },
  {
    path: "/course",
    element: <CoursePage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
