import { useState } from "react"; // 1. lépés: Importáljuk a useState-et
import "./App.css";
import { KEPEKLISTA } from "./adatok";
import Nagykep from "./componens/Nagykep";
import Galeria from "./componens/Galeria";

function App() {
  // 2. lépés: Létrehozunk egy állapotot az éppen kiválasztott kép indexének.
  // Kezdőértéknek a 0-t (az első képet) adjuk meg.
  const [aktualisIndex, setAktualisIndex] = useState<number>(0);

  // 3. lépés: A függvényben frissítjük a state-et a kapott indexre
  function kepKivalaszt(index: number) {
    setAktualisIndex(index);
  }

  return (
    <>
      <header>
        <h1>KépGaleria</h1>
      </header>
      <section>
        {/* 4. lépés: A fix [0] helyett a state-ben lévő index alapján adjuk át a képet */}
        <Nagykep kepem={KEPEKLISTA[aktualisIndex]} />
      </section>
      <article>
        <Galeria lista={KEPEKLISTA} kepKivalaszt={kepKivalaszt} />
      </article>
      <footer>
        <p>&copy; Mágori Ferenc Ferdinánd</p>
      </footer>
    </>
  );
}

export default App;
