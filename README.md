# Kép Galéria - React projekt Context-tel

## Alapfogalmak
**Komponnes (Components):** Olyan önálló, **újrafelhasználható kis kódblokkok** (függvények), amelyek HTML-hez hasonló elemeket (JSX-et) adnak vissza.

**Props**: Egy olyan mechanizmus, amellyel **felülről lefelé** (a szülőkomponenstől a gyermekkomponens felé) adatokat tudunk átadni. A props-ok csak olvashatók (read-only), a gyermek nem módosíthatja közvetlenül a kapott értéket.

**TypeScript Interface-ek (interface és type):** Segítenek meghatározni, hogy **egy objektumnak vagy függvénynek milyen tulajdonságai vannak**, és azok milyen típusúak (pl. szám, szöveg, függvény). Ez védi a fejlesztőt a hibáktól.

**State / Állapotkezelés (useState):** Ha egy adat megváltozik a state-ben, a React automatikusan **újrarendereli** a képernyőt, hogy a legfrissebb állapot látszódjon.

**Context:** Egy olyan adatkezelési eszköz, amellyel elkerülhető a **prop drilling** (azaz amikor egy adatot több egymás alatti komponensen kellene átadgatni kézzel, csak azért, hogy egy mélyen lévő gyerek eléri). A Context olyan, mint egy globális "adatcsatorna", ahonnan bárki közvetlenül elkérheti az adatokat.

**Provider:** Egy olyan komponens, amely **"körbeöleli"** a többi komponenst, és biztosítja számukra a közös adatokat és függvényeket.

**createContext:** Létrehozza magát a Contextet (az adatcsatornát). Itt adjuk meg azt is, hogy milyen típusú adatokat fog tárolni.

**useContext Hook:** Ezzel a függvénnyel tudjuk kiolvasni a Contextben tárolt adatokat és függvényeket közvetlenül az adott komponensben, anélkül, **hogy props-on keresztül kéne azokat átvenni**.

