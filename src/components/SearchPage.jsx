import { Button, Image } from "antd";
import PokeTitle from "../assets/images/pokedex.png";

function SearchPage() {
  return (
    <div>
      <Image width={200} src={PokeTitle} />
      <Button type="primary">Click me</Button>
    </div>
  );
}

export default SearchPage;
