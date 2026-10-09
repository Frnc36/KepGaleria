import { type KepTipus } from "../adatok";
import { useKepContext } from "../context/KepContext";
import "./Nagykep.css";

interface NagyKepProps {
  kepem: KepTipus;
}

function Nagykep({ kepem }: NagyKepProps) {
  const { elozoKep, kovetkezoKep } = useKepContext();

  return (
    <div className="nagykep">
      <button
        onClick={() => {
          elozoKep();
        }}
      >
        Balra
      </button>
      <div className="kep-kontener">
        <img src={kepem.kep} alt={kepem.leiras} />
      <p>{kepem.leiras}</p>
      </div>
      <button
        onClick={() => {
          kovetkezoKep();
        }}
      >
        Jobbra
      </button>
    </div>
  );
}

export default Nagykep;
