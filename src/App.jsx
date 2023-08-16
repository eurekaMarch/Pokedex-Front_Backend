import { Button, Image } from "antd";
import PokeTitle from "./assets/images/pokedex.png";

function App() {
  return (
    <div>
      <div>App</div>
      <Image width={200} src={PokeTitle} />
      <Button type="primary">Clickme</Button>
    </div>
  );
}

export default App;
