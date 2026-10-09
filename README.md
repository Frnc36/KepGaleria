# Kép Galéria - React projekt Context-tel

## Pages Link : *https://github.com/Frnc36/KepGaleria.git*

## Használt technológiák
- React (Komponensalapú)
- TypeScript
- React Context (Globális állapotkezelés)

## Alapfogalmak
**Komponnes (Components):** Olyan önálló, **újrafelhasználható kis kódblokkok** (függvények), amelyek HTML-hez hasonló elemeket (JSX-et) adnak vissza.

**Props**: Egy olyan mechanizmus, amellyel **felülről lefelé** (a szülőkomponenstől a gyermekkomponens felé) adatokat tudunk átadni. A props-ok csak olvashatók (read-only), a gyermek nem módosíthatja közvetlenül a kapott értéket.

**TypeScript Interface-ek (interface és type):** Segítenek meghatározni, hogy **egy objektumnak vagy függvénynek milyen tulajdonságai vannak**, és azok milyen típusúak (pl. szám, szöveg, függvény). Ez védi a fejlesztőt a hibáktól.

**State / Állapotkezelés (useState):** Ha egy adat megváltozik a state-ben, a React automatikusan **újrarendereli** a képernyőt, hogy a legfrissebb állapot látszódjon.

**Context:** Egy olyan adatkezelési eszköz, amellyel elkerülhető a **prop drilling** (azaz amikor egy adatot több egymás alatti komponensen kellene átadgatni kézzel, csak azért, hogy egy mélyen lévő gyerek eléri). A Context olyan, mint egy globális "adatcsatorna", ahonnan bárki közvetlenül elkérheti az adatokat.

**Provider:** Egy olyan komponens, amely **"körbeöleli"** a többi komponenst, és biztosítja számukra a közös adatokat és függvényeket.

**createContext:** Létrehozza magát a Contextet (az adatcsatornát). Itt adjuk meg azt is, hogy milyen típusú adatokat fog tárolni.

**useContext Hook:** Ezzel a függvénnyel tudjuk kiolvasni a Contextben tárolt adatokat és függvényeket közvetlenül az adott komponensben, anélkül, **hogy props-on keresztül kéne azokat átvenni**.

## Projekt szerkezet
```text
src/
│
├── adatok.tsx                # A képek listája és a TypeScript típusok
├── App.tsx                  # A gyökérkomponens
├── App.css                  
├── main.tsx                 # Itt történik a Provider-rel való körbeölelés
│
├── componens/               # Komponensek mappája
│   ├── Galeria.tsx          # A kisképeket listázó komponens
│   ├── galeria.css
│   ├── Kiskep.tsx           # Egyetlen kisképet és a kiválasztó gombot megjelenítő komponens
│   ├── kiskep.css
│   └── Nagykep.tsx          # Az aktuális nagy képet és a lapozógombokat tartalmazó komponens
│
└── context/                 # Context mappája
    └── KepContext.tsx       # A globális állapotkezelés és a useKepContext hook (saját hook)   
```

## Főbb Komponensek és Szerepük

### App.tsx:
- Összefogja az alkalmazás nagyobb blokkjait: a nagy képet (<Nagykep />), a galériát (<Galeria />).

### Nagykep.tsx: 
- Megjeleníti az aktuálisan kiválasztott nagy képet és a hozzá tartozó leírást.
- "Balra" és "Jobbra" gombokkal biztosítja a képek közötti léptetést a Context segítségével.

### Galeria.tsx:
- Végigmegy a KEPEKLISTA elemein a .map() metódussal, és mindegyik elemhez generál egy Kiskep komponenst.

### Kiskep.tsx:
- Megjeleníti a kisképet, valamint egy "Kiválaszt" gombot, amellyel a felhasználó közvetlenül beállíthatja az adott képet nagyképként.

### KepContext.tsx:
- Itt található a KepProvider és a useKepContext hook. Kezeli az aktualisIndex state-et, valamint a képválasztási (kepKivalaszt) és lapozási (elozoKep, kovetkezoKep) logikát (beleértve a végtelenített körbefutást is).

## Telepítés és Futtatás
1. Nyiss meg egy terminált a projekt mappájában.

2. Telepítsd a függőségeket:
```text
npm install
```
*Minden le clone-ozott projektnél kell*

3. Indítsd el a fejlesztői szervert:
```text
npm run dev
```

4. Nyisd meg a terminálban megjelenő helyi linken (*http://localhost:5173*) elérhető weboldalt a böngésződben.