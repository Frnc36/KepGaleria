import { useState } from "react"; // 1. lépés: Importáljuk a useState-et
import "./App.css";
import { KEPEKLISTA } from "./adatok";
import Nagykep from "./componens/Nagykep";
import Galeria from "./componens/Galeria";

function App() {
  // 2. lépés: Létrehozunk egy állapotot az éppen kiválasztott kép indexének.
  // Kezdőértéknek a 0-t (az első képet) adjuk meg.
  const [aktualisIndex, setAktualisIndex] = useState<number>(0);
  //                        |->ez egy setter
  // 3. lépés: A függvényben frissítjük a state-et a kapott indexre
  function kepKivalaszt(index: number) {
    console.log(
      index,
    ); /* Tudjuk hányadik képre click, melyik képre kell betölteni a nagyképre */
    /*módosítjuk az index értékét
    i++ -> ezt tilos
    setAktualisIndex(12) -> ezt lehet;
    setAktualisIndex(i++); -> ezt lehet azért nem i=i+1
    setAktualisIndex(i+1); -> ezt lehet
    */
    setAktualisIndex(index);
  }
  function elozoKep() {
    if (aktualisIndex > 0) {
      setAktualisIndex(aktualisIndex - 1);
    } else {
      setAktualisIndex(KEPEKLISTA.length - 1);
    }
  }

  function kovetkezoKep() {
    if (aktualisIndex < KEPEKLISTA.length - 1) {
      setAktualisIndex(aktualisIndex + 1);
    }
  }
    return (
      <>
        <header>
          <h1>KépGaleria</h1>
        </header>
        <section>
          {/* 4. lépés: A fix [0] helyett a state-ben lévő index alapján adjuk át a képet */}
          <Nagykep
            kepem={KEPEKLISTA[aktualisIndex]}
            elozoKep={elozoKep}
            kovetkezoKep={kovetkezoKep}
          />
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
