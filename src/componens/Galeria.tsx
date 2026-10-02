import Kiskep from "./Kiskep";
import { KEPEKLISTA, type KepTipus } from "../adatok";
import "./galeria.css";
import { useState } from "react";

interface GaleriaProps {
  lista: KepTipus[];
  kepKivalaszt: (index: number) => void;
}

export default function Galeria({ lista, kepKivalaszt }: GaleriaProps) {



  return (
    <>
      {lista.map((e, i) => {
        return (
          <Kiskep kepem={e} key={i} index={i} kepKivalaszt={kepKivalaszt} />
        );
      })}
    </>
  );
}
