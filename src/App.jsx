import Main_page from "./pages/Main_page/Main_page";
import LoginPage from "./pages/login/LoginPage";
import CoursePage from "./pages/Course/CoursePage.jsx";
import RegistrationPage from "./pages/registration/RegistrationPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IsAuthProvider from "./firebase/isAuthProvider.jsx";

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
    <IsAuthProvider>
      <RouterProvider router={router} />
    </IsAuthProvider>
  );
}

export default App;
