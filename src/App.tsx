import "./App.css";
import { KEPEKLISTA } from "./adatok";
import Nagykep from "./componens/Nagykep";
import Galeria from "./componens/Galeria";
import { useKepContext } from "./context/KepContext";

function App() {
  const NEV = "Mágori Ferenc Ferdinánd";
  const H1 = "KépGaléria";

  const { aktualisIndex } = useKepContext();

  return (
    <>
      <header>
        <h1>{H1}</h1>
      </header>
      <section>
        <Nagykep kepem={KEPEKLISTA[aktualisIndex]} />
      </section>
      <article>
        <Galeria lista={KEPEKLISTA} />
      </article>
      <footer>
        <p>&copy; {NEV}</p>
      </footer>
    </>
  );
}

export default App;
