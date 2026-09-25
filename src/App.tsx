import "./App.css";
import { KEPEKLISTA } from "./adatok";
import Nagykep from "./componens/Nagykep";
import Galeria from "./componens/Galeria";

function App() {
  function kepKivalaszt(index:number) {
    console.log(index);
  }

  return (
    <>
      <header>
        <h1>KépGaleria</h1>
      </header>
      <section>
        <Nagykep kepem={KEPEKLISTA[0]} />
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
