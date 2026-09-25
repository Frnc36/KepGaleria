
import type { KepTipus } from "../adatok";

interface NagyKepProps {
  kepem: KepTipus;
}

function Nagykep({ kepem }: NagyKepProps) {
  return (
    <div className="nagykep">
      <div>
        <img src={kepem.kep} alt={kepem.leiras} />
      </div>
      <p>{kepem.leiras}</p>
    </div>
  );
}

export default Nagykep;
