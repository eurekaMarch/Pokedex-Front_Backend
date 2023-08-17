import { useSearchParams } from "react-router-dom";

function PokemonInfo() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return <div>Pokemon Info Page : {id}</div>;
}

export default PokemonInfo;
