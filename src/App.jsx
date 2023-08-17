import { Route, Routes, BrowserRouter } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import PokemonInfo from "./components/PokemonInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/pokemon" element={<PokemonInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
