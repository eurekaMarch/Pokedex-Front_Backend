import {
  Route,
  // Routes,
  // BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";
import PokemonInfoPage from "./components/PokemonInfoPage/PokemonInfoPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<SearchPage />} />
        <Route path="/pokemon" element={<PokemonInfoPage />} />
      </Route>
    )
  );

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<SearchPage />} />
    //     <Route path="/pokemon" element={<PokemonInfo />} />
    //   </Routes>
    // </BrowserRouter>

    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
