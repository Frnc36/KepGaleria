import { type KepTipus } from "../adatok";

interface KiskepProps {
  kepem: KepTipus;
  index: number;
  kepKivalaszt:(index:number)=>void
}

function Kiskep({ kepem, index,kepKivalaszt }: KiskepProps) {
  return (
    <>
      <div className="kiskep">
        <img src={kepem.kep} alt={kepem.leiras} />
        <button onClick={()=>{kepKivalaszt(index)}}>Kiválaszt</button>
      </div>
    </>
  );
}

export default Kiskep;
