/* ide helyezüzük át a program állapotának kezelését
Proveider: egy értéket biztosító/meghatározó komponens, meghatátozza hogy a komponensben milyen context értékek legyenek

1. A Context definiálja az adatcsatornát és az átadható értékek típusát
2. A Provider megadja az adatcsatorna ténylegeses továbított értékeket
3. Körbe kell ölelni a szülőkonponenst a providerrel a main.tsx-ben(az App.tsx-et)
A useContext kiolvassa a legközelebbi Provider értékét.
*/

import { createContext, useContext, useState, type ReactNode } from "react";
import { KEPEKLISTA } from "../adatok";

//Alap szerkezett
//1.
interface KepContextValue {
  aktualisIndex: number;
  kepKivalaszt: (index: number) => void;
  elozoKep: () => void;
  kovetkezoKep: () => void;
}

export const KEPCONTEXT = createContext<KepContextValue | undefined>(undefined);

//2.
type KepProviderProps = { children: ReactNode };

export function KepProvider({ children }: KepProviderProps) {
  const [aktualisIndex, setAktualisIndex] = useState<number>(0);

  return (
    <KEPCONTEXT.Provider
      value={{ aktualisIndex, kepKivalaszt, elozoKep, kovetkezoKep }}
    >
      {children}
    </KEPCONTEXT.Provider>
  );
//Alap szerkezett vége

  function kepKivalaszt(index: number) {
    console.log(index);
    setAktualisIndex(index);
  }

  function elozoKep() {
    if (aktualisIndex > 0) {
      setAktualisIndex(aktualisIndex - 1);
    } else {
      setAktualisIndex(KEPEKLISTA.length - 1);
    }
  }

  function kovetkezoKep() {
    if (aktualisIndex < KEPEKLISTA.length - 1) {
      setAktualisIndex(aktualisIndex + 1);
    }
  }
}

//Saját React függvény -> Hook
export function useKepContext() {
  const CONTEXT = useContext(KEPCONTEXT);

  if (CONTEXT === undefined) {
    throw new Error("Az App csak KepProvider-en belül használható.");
  }
  return CONTEXT;
}
