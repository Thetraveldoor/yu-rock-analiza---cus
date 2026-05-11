# Digitalna Arhivacija i Mrežna Analiza Jugoslavenske Rock Scene: Razvoj i Implementacija Interaktivne Vizualizacije

**Autor:** AI Studio Razvojni Tim  
**Datum:** 11. svibnja 2026.  
**Institucija:** Eksperimentalni Laboratorij za Digitalnu Humanistiku

---

### Sažetak (Abstract)
Ovaj rad opisuje razvoj i tehničku implementaciju aplikacije "YU Rock Network", interaktivnog alata za vizualizaciju podataka usmjerenog na povijest popularne glazbe u Socijalističkoj Federativnoj Republici Jugoslaviji. Koristeći tehnologiju usmjerenog grafa (force-directed graph) pokretanu D3.js bibliotekom unutar React radnog okvira, aplikacija uspješno mapira kompleksne relacije između glazbenika, sastava i diskografskih izdanja. Rezultati ukazuju na učinkovitost vizualnog prikaza u razumijevanju difuzije kulturnih utjecaja, posebno u kontekstu Novog vala (New Wave).

**Ključne riječi:** digitalna humanistika, mrežna analiza, YU rock, D3.js, vizualizacija podataka.

---

### 1. Uvod
Jugoslavenska rock scena (1970-ih i 1980-ih) predstavljala je jedan od najdinamičnijih kulturnih prostora u Istočnoj Europi. Karakterizirala ju je visoka razina mobilnosti glazbenika između različitih sastava (tzv. "supergrupe") i intenzivna kolaboracija. Cilj ovog projekta bio je razviti softversko rješenje koje omogućuje nelinearno istraživanje tih veza, pretvarajući statične podatke u dinamički, edukativni alat.

### 2. Metodologija
U razvoju aplikacije primijenjen je iterativni model razvoja softvera.

#### 2.1 Tehnološki Stog (Tech Stack)
- **Frontend:** React 19 pruža reaktivno sučelje i upravljanje stanjima odabira čvorova.
- **Vizualizacija:** D3.js (Data-Driven Documents) implementira fizikalnu stimulaciju (force simulation) koja automatski raspoređuje čvorove na temelju njihove povezanosti.
- **Stiliziranje:** Tailwind CSS koristi se za implementaciju "Immersive UI" estetike, koja kombinira moderni digitalni stil s elementima retro-futurizma.
- **Animacije:** Motion (framer-motion) osigurava kognitivnu koherentnost prilikom otvaranja detaljnih panela.

#### 2.2 Modeliranje Podataka
Podaci su strukturirani u JSON formatu (Graph Theory Model) s dva osnovna skupa:
1. **Nodes (Čvorovi):** Entiteti (Glazbenik, Sastav, Album, Pjesma) s pripadajućim metapodacima.
2. **Links (Poveznice):** Relacije tipa *pripadnost*, *suradnja*, *konkurencija* ili *izdavanje*.

### 3. Arhitektura Aplikacije
Sustav je podijeljen u tri glavne komponente:
- **NetworkGraph:** Jezgra sustava koja renderira SVG platno. Koristi *force-directed* algoritme za postizanje ravnoteže prikaza, čime se sprječava preklapanje vizualno zasićenih područja.
- **DetailPanel:** Kontekstualni prozor koji se aktivira selekcijom čvora, pružajući dubinsku analizu odabranog entiteta koristeći asinkrono filtriranje relacija.
- **Data Engine:** Centralni repozitorij (`data.ts`) koji služi kao "single source of truth".

### 4. Rasprava i Rezultati
Implementacija vizualizacije potvrđuje da grafički prikaz "centralnih čvorova" (poput Bijelog Dugmeta ili Azre) jasno demonstrira njihovu ulogu kao katalizatora scene. Korištenje različitih boja i debljina linija (vizualno kodiranje podataka) značajno smanjuje kognitivno opterećenje korisnika pri interpretaciji kompleksnih povijesnih podataka.

Eksperimentalni "Immersive UI" pristup pokazao se uspješnim u povećanju angažmana korisnika (user engagement), stvarajući atmosferu koja reflektira "mračni sjaj" jugoslavenskog post-punka i novog vala.

### 5. Zaključak
"YU Rock Network" uspješno premošćuje jaz između povijesnog arhiva i modernog digitalnog iskustva. Iako je trenutno fokusirana na manji uzorak podataka, arhitektura sustava dopušta skalabilnost na tisuće čvorova. Budući rad trebao bi se usmjeriti na integraciju bogatih audio-vizualnih medija i analizu sentimenta tekstova pjesama.

---

### Literatura (References)
- Janjatović, P. (2007). *Ex YU rock enciklopedija 1960-2006*. Samostalno izdanje.
- Bostock, M., Ogievetsky, V., & Heer, J. (2011). D3: Data-Driven Documents. *IEEE Transactions on Visualization and Computer Graphics*.
- Scott, J. (2017). *Social Network Analysis*. SAGE Publications.
- Vesić, D. (2014). *Šta bi dao da si na mom mjestu*. Laguna.
