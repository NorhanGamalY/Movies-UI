import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
const Layout = lazy(()=>import("./components/Layout"));
const Parent =lazy(()=>import("./components/Parent"));
const About =lazy(()=>import("./components/About"));
const Bonus =lazy(()=>import("./components/Bonus"));
const MoviesApi =lazy(()=>import("./components/MoviesApi"));
const MovieDetails =lazy(()=>import("./components/MovieDetails"));
const NotFound =lazy(()=>import("./components/NotFound"));
const  MoviesModule=lazy(()=>import("./components/MoviesModule"));
const Register =lazy(()=>import('./components/register/Register'));
const Profile =lazy(()=>import('./components/Profile'));
import { MoviesContextProvider } from "./contexts/MoviesContextProvider";
import { UserProvider } from "./contexts/UserContextProvider";
import Loading from "./components/Loading";
import Favorites from "./components/Favorites";
import { Provider } from "react-redux";
import store from './redux/store/store';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,       
    children: [
      { index: true, element: <MoviesApi /> },     
      { path: "addpost", element: <Parent /> },      
      { path: "about", element: <About /> },         
      { path: "gallery", element: <Bonus /> },
      { path: "register", element: <Register /> }, 
      { path: "profile",  element: <Profile />  },
      { path: "favorites",  element: <Favorites />  },

       

      {
        path: "movies",
        element: <MoviesModule />,  
        children: [
          { index: true, element: <MoviesApi /> },   
          { path: ":id", element: <MovieDetails /> }, 
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
    <Suspense fallback={<Loading />}>

    <MoviesContextProvider>
            <UserProvider>

      <RouterProvider router={routes} />
      </UserProvider>
    </MoviesContextProvider>
      </Suspense>
</Provider>
  );
}
