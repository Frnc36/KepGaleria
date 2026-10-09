import { type KepTipus } from "../adatok";
import "./kiskep.css";
import { useKepContext } from "../context/KepContext";

interface KiskepProps {
  kepem: KepTipus;
  index: number;
}

function Kiskep({ kepem, index }: KiskepProps) {
  const { kepKivalaszt } = useKepContext();

  return (
    <>
      <div className="kiskep">
        <img src={kepem.kep} alt={kepem.leiras} />
        <button
          onClick={() => {
            kepKivalaszt(index);
          }}
        >
          Kiválaszt
        </button>
      </div>
    </>
  );
}

export default Kiskep;
