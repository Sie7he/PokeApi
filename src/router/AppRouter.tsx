
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Pokemon from "../pages/Pokemon";
import PokemontList from "../components/PokemontList";



const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemontList />
    
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