import Kiskep from "./Kiskep";
import { type KepTipus } from "../adatok";
import "./galeria.css";
import { useKepContext } from "../context/KepContext";

interface GaleriaProps {
  lista: KepTipus[];
}

export default function Galeria({ lista }: GaleriaProps) {
  const { kepKivalaszt } = useKepContext();

  return (
    <>
      {lista.map((e, i) => {
        return <Kiskep kepem={e} key={i} index={i} />;
      })}
    </>
  );
}
