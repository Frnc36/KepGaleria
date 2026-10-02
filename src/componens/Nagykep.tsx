import { type KepTipus } from "../adatok";
interface NagyKepProps {
  kepem: KepTipus;
  elozoKep: () => void;
  kovetkezoKep: () => void;
}
function Nagykep({ kepem, elozoKep, kovetkezoKep }: NagyKepProps) {
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
