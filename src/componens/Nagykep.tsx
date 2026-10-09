import { type KepTipus } from "../adatok";
import { useKepContext } from "../context/KepContext";

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
      <div>
        <img src={kepem.kep} alt={kepem.leiras} />
      </div>
      <p>{kepem.leiras}</p>
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
