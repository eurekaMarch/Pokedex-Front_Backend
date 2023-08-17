import { useSearchParams } from "react-router-dom";

function PokemonInfo() {
  let [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return <div>Pokemon Info Page : {id}</div>;
}

export default PokemonInfo;
