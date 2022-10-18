import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState(0);

  const dataHandle = (e) => {
    setData(e.target.value);
  };

  const factoriel = (number) => {
    let i,
      f = 1;
    for (i = 1; i <= number; i++) {
      f *= i;
    }
    return f;
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const fact = factoriel(data);
    alert(`la factorielle de ${data} est ${fact}`);
  };

  return (
    <div className="App">
      <form onSubmit={submitHandle}>
        <label htmlFor="nombre">
          Saisissez le nombre <br />
          <br />
          <input type="number" value={data} onChange={dataHandle} />
        </label>
        {" | "}
        <input type="submit" value="Calculer" />
      </form>
    </div>
  );
}
