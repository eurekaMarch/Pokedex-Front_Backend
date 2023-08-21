import { regions } from "./helper";

function Test() {
  return (
    <div>
      {regions.map((r) => {
        return {
          ...r,
          key: r.name,
          value: r.name,
          label: `${r.name} (${r.offset} - ${r.limit + r.offset})`,
        };
      })}
    </div>
  );
}

export default Test;
