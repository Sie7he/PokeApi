
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Pokemon from "../pages/Pokemon";
import PokemonHome from "../pages/PokemonHome";



const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonHome />
    
  },
  {
    path: "/:id",
    element: <Pokemon />
  }
]);

function AppRouter() {
    return <RouterProvider router={router} />; 
}

export default AppRouter;