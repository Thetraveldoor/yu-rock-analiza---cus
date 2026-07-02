# YU Rock Network – Kako su povezani bendovi jugoslavenske rock scene

**Autor:** Lana Ćus
**Kolegij:** Istraživanje društvenih mreža
**Datum:** 25.05.2026

---
---

### Sažetak
Ovaj rad donosi detaljnu analizu strukture i relacijske kohezije jugoslavenske rock scene putem naprednih metodologija analize društvenih mreža (SNA). Kroz razvoj i implementaciju digitalnog projekta i platforme *"YU Rock Network"*, rad dekonstruira povijesne interakcije, personalne unije, zajedničke diskografske projekte te stilske utjecaje ključnih aktera ex-YU prostora. Nasuprot uvriježenom mitu o monolitnoj, duboko integriranoj i homogenoj glazbenoj zajednici, rezultati ovog istraživanja empirijski pokazuju visoku razinu fragmentacije scene i njezinu podijeljenost na regionalne pod-klastere. Dok se pojedini sastavi, u prvom redu Bijelo Dugme, pojavljuju kao dominantni mrežni čvorovi visoke centralnosti, cjelokupna topologija mreže ukazuje na prevlast autonomnih umjetničkih putanja i površinskih relacija, transformirajući našu percepciju ex-YU rocka iz jedinstvene zajednice u kompleksan skup izoliranih i poluizoliranih narativa.

---

## 1. Uvod

Fenomen jugoslavenske rock glazbe već desetljećima predstavlja nepresušan izvor socioloških, kulturoloških i povijesnih istraživanja. Unutar popularnog diskursa i kolektivnog sjećanja, ex-YU rock scena često se idealizira i percipira kao jedinstven, duboko integriran kulturni prostor. Sugerira se postojanje organske, sveprožimajuće mreže u kojoj su stvaraoci neprekidno surađivali, dijelili resurse i djelovali kao kohezivna fronta nasuprot kulturnom establišmentu. Ta pretpostavljena monolitnost danas se uzima kao aksiom. Međutim, historiografska distanca i alati digitalne humanistike omogućuju nam da točnost ovog narativa podvrgnemo strogoj empirijskoj provjeri.

Stvarna povijest jugoslavenskog rocka — koja se proteže od ranih beat sastava šezdesetih, preko progresivnog i hard rock vala sedamdesetih, pa sve do eksplozije Novog vala (New Wave) i sarajevskog Novog primitivizma osamdesetih — bila je duboko uvjetovana i geografskim, administrativnim te socio-ekonomskim specifičnostima tadašnje federacije. Glazbena produkcija bila je primarno koncentrirana oko velikih urbanih centara: Beograda, Zagreba, Sarajeva, te sekundarnih čvorišta poput Rijeke, Ljubljane i Skoplja. Pitanje koje se postavlja jest u kojoj su mjeri ti centri doista komunicirali na razini neposrednih, dubinskih mrežnih veza, a u kojoj su mjeri funkcionirali kao zatvoreni lokalni ekosustavi.

Središnja figura koja se u svakom površinskom promatranju nameće kao gravitacijsko središte ove scene jest sarajevski sastav Bijelo Dugme. Svojim masovnim tržišnim uspjehom, fuzijom folk motiva i rock standarda (tzv. pastirski rock) te čestim personalnim rotacijama, ovaj je sastav uspostavio posve nove standarde unutar jugoslavenske glazbene industrije. No, je li njihova pozicija tržišnog lidera ujedno značila i ulogu strukturnog integracijskog faktora cjelokupne scene? Da bi se odgovorilo na ovo pitanje, rad uvodi analitički model *"YU Rock Network"* koji teži mapirati stvarne veze i relacije, odvajajući subjektivni dojam bliskosti od egzaktnih mrežnih parametara, istražujući povezanost i razlike u pristupima bendova koji su od lokalnih supkultura gradili općeprihvaćenu društvenu stvarnost.

---

## 2. Metoda

Istraživanje i mrežna rekonstrukcija provedeni su razvojem i korištenjem namjenske digitalne platforme **"YU Rock Network"**, koja se oslanja na algoritme za simulaciju sila i mrežne topologije.

### 2.1 Prikupljanje podataka i formiranje korpusa
U primarni uzorak uvršteni su profili najznačajnijih bendova i solista ex-YU rock scene (od formativnih sastava sedamdesetih do ključnih aktera novovalne ere). Podaci su prikupljani i trijangulirani iz relevantnih rock enciklopedija (npr. Janjatovićeva *Ex YU rock enciklopedija*), arhivskih materijala diskografskih kuća (*Jugoton, PGP-RTB, Suzy*), biografskih monografija te digitalnih repozitorija pop-kulture. Ovim postupkom osigurana je visoka faktografska točnost unesenih relacija.

### 2.2 Kategorizacija i taksonomija čvorova
Entiteti unutar mreže precizno su podijeljeni i vizualno diferencirani kako bi se omogućilo intuitivno snalaženje u grafu:
* **Autori i bendovi (Intelektualni i kreativni nositelji):** Prikazani kao kružni čvorovi, diferencirani po regionalnoj pripadnosti ili matičnom gradu.
* **Glazbeni pravci i stilske formacije (Tematske okosnice):** Prikazani kao trokutasti čvorovi koji služe za prepoznavanje konceptualne srodnosti.
* **Ključni povijesni događaji i festivali (Identitetski izvori):** Prikazani kao dijamantni čvorovi koji djeluju kao privremena mrežna stjecišta (npr. *BOOM festival, Subotički festival*).

### 2.3 Analiza i klasifikacija veza (Edges)
Unutar sustava definirane su tri jasne kategorije relacija, pri čemu je svaka veza popraćena kvalitativnim opisom i preciznim utemeljenjem:
1.  **Personalna unija i fluktuacija članova:** Slučajevi kada su glazbenici svirali ili gostovali u više različitih sastava (npr. Milić Vukašinović, Boris Bele).
2.  **Izravna kreativna suradnja i zajednički nastupi:** Dokumentirane zajedničke turneje, gostovanja na albumima ili zajednički studijski projekti (npr. *Paket aranžman*).
3.  **Konceptualni i stilski utjecaji:** Indirektne veze izgrađene na temelju pripadnosti istom estetskom kodu ili preuzimanja specifičnih glazbenih obrazaca.

### 2.4 AI proširenje i detekcija skrivenih relacija
S ciljem otkrivanja implicitnih veza koje nisu vidljive kroz puko praćenje personalnih unija, u sustav je implementiran **Google Gemini API**. Koristeći naprednu analizu diskursa i povijesnih tekstova (kritika, recenzija iz časopisa *Džuboks* i *Polet*), AI komponenta je detektirala suptilne slojeve estetskog i društvenog kontinuiteta. Sustav je tako identificirao zajedničke stilske i tekstualne idiome te ponudio automatizirane sugestije za povezivanje čvorova koji su geografski ili kronološki bili udaljeni, ali su dijelili identičnu poziciju unutar šireg kulturnog polja.

---

## 3. Arhitektura podataka i vizualna mreža identiteta

Aplikacija "YU Rock Network" koristi relacijski sustav za generiranje interaktivnih grafova. Donji grafički model prikazuje relacijske sile unutar sučelja, koristeći kolorističko kodiranje (nježno plava za bendove, svijetlo roza za festivale i stilske okosnice) na svijetlo ljubičastoj pozadini, čime se postiže estetski sklad i maksimalna preglednost:
Dobro, očito je da se GitHubov Mermaid parser opasno svađa s okolnim Markdown tekstom i da nam kida živce. Kada Mermaid ne surađuje, idemo na elegantnije, stabilnije i 100% neprobojno rješenje koje GitHub nikada neće krivo protumačiti: Markdown tablični graf (ASCII/Unicode Art) kombiniran s jasnim tekstualnim mapiranjem relacija.

Ovaj pristup koristi standardne tekstualne simbole za prikaz strukture, što znači da nema parsera, nema vanjskih dodataka i renderira se instantno i savršeno na bilo kojem uređaju.

Evo cijelog rada s novim, nepogrešivim vizualnim prikazom mreže:

Markdown
# Mreža Jugoslavenskog Rocka: Analiza Relacijske Kohezije i Strukture Scene

**Autor:** Lana Ćus  
**Institucija:** Filozofski fakultet u Rijeci  
**Kolegij:** Istraživanje društvenih mreža  
**Datum:** 25. svibnja 2026.  

---

### Sažetak
Ovaj rad donosi detaljnu analizu strukture i relacijske kohezije jugoslavenske rock scene putem naprednih metodologija analize društvenih mreža (SNA). Kroz razvoj i implementaciju digitalnog projekta i platforme *"YU Rock Network"*, rad dekonstruira povijesne interakcije, personalne unije, zajedničke diskografske projekte te stilske utjecaje ključnih aktera ex-YU prostora. Nasuprot uvriježenom mitu o monolitnoj, duboko integriranoj i homogenoj glazbenoj zajednici, rezultati ovog istraživanja empirijski pokazuju visoku razinu fragmentacije scene i njezinu podijeljenost na regionalne pod-klastere. Dok se pojedini sastavi, u prvom redu Bijelo Dugme, pojavljuju kao dominantni mrežni čvorovi visoke centralnosti, cjelokupna topologija mreže ukazuje na prevlast autonomnih umjetničkih putanja i površinskih relacija, transformirajući našu percepciju ex-YU rocka iz jedinstvene zajednice u kompleksan skup izoliranih i poluizoliranih narativa.

---

## 1. Uvod

Fenomen jugoslavenske rock glazbe već desetljećima predstavlja nepresušan izvor socioloških, kulturoloških i povijesnih istraživanja. Unutar popularnog diskursa i kolektivnog sjećanja, ex-YU rock scena često se idealizira i percipira kao jedinstven, duboko integriran kulturni prostor. Sugerira se postojanje organske, sveprožimajuće mreže u kojoj su stvaraoci neprekidno surađivali, dijelili resurse i djelovali kao kohezivna fronta nasuprot kulturnom establišmentu. Ta pretpostavljena monolitnost danas se uzima kao aksiom. Međutim, historiografska distanca i alati digitalne humanistike omogućuju nam da točnost ovog narativa podvrgnemo strogoj empirijskoj provjeri.

Stvarna povijest jugoslavenskog rocka — koja se proteže od ranih beat sastava šezdesetih, preko progresivnog i hard rock vala sedamdesetih, pa sve do eksplozije Novog vala (New Wave) i sarajevskog Novog primitivizma osamdesetih — bila je duboko uvjetovana i geografskim, administrativnim te socio-ekonomskim specifičnostima tadašnje federacije. Glazbena produkcija bila je primarno koncentrirana oko velikih urbanih centara: Beograda, Zagreba, Sarajeva, te sekundarnih čvorišta poput Rijeke, Ljubljane i Skoplja. Pitanje koje se postavlja jest u kojoj su mjeri ti centri doista komunicirali na razini neposrednih, dubinskih mrežnih veza, a u kojoj su mjeri funkcionirali kao zatvoreni lokalni ekosustavi.

Središnja figura koja se u svakom površinskom promatranju nameće kao gravitacijsko središte ove scene jest sarajevski sastav Bijelo Dugme. Svojim masovnim tržišnim uspjehom, fuzijom folk motiva i rock standarda (tzv. pastirski rock) te čestim personalnim rotacijama, ovaj je sastav uspostavio posve nove standarde unutar jugoslavenske glazbene industrije. No, je li njihova pozicija tržišnog lidera ujedno značila i ulogu strukturnog integracijskog faktora cjelokupne scene? Da bi se odgovorilo na ovo pitanje, rad uvodi analitički model *"YU Rock Network"* koji teži mapirati stvarne veze i relacije, odvajajući subjektivni dojam bliskosti od egzaktnih mrežnih parametara, istražujući povezanost i razlike u pristupima bendova koji su od lokalnih supkultura gradili općeprihvaćenu društvenu stvarnost.

---

## 2. Metoda

Istraživanje i mrežna rekonstrukcija provedeni su razvojem i korištenjem namjenske digitalne platforme **"YU Rock Network"**, koja se oslanja na algoritme za simulaciju sila i mrežne topologije.

### 2.1 Prikupljanje podataka i formiranje korpusa
U primarni uzorak uvršteni su profili najznačajnijih bendova i solista ex-YU rock scene (od formativnih sastava sedamdesetih do ključnih aktera novovalne ere). Podaci su prikupljani i trijangulirani iz relevantnih rock enciklopedija (npr. Janjatovićeva *Ex YU rock enciklopedija*), arhivskih materijala diskografskih kuća (*Jugoton, PGP-RTB, Suzy*), biografskih monografija te digitalnih repozitorija pop-kulture. Ovim postupkom osigurana je visoka faktografska točnost unesenih relacija.

### 2.2 Kategorizacija i taksonomija čvorova
Entiteti unutar mreže precizno su podijeljeni i vizualno diferencirani kako bi se omogućilo intuitivno snalaženje u grafu:
* **Autori i bendovi (Intelektualni i kreativni nositelji):** Prikazani kao kružni čvorovi, diferencirani po regionalnoj pripadnosti ili matičnom gradu.
* **Glazbeni pravci i stilske formacije (Tematske okosnice):** Prikazani kao trokutasti čvorovi koji služe za prepoznavanje konceptualne srodnosti.
* **Ključni povijesni događaji i festivali (Identitetski izvori):** Prikazani kao dijamantni čvorovi koji djeluju kao privremena mrežna stjecišta (npr. *BOOM festival, Subotički festival*).

### 2.3 Analiza i klasifikacija veza (Edges)
Unutar sustava definirane su tri jasne kategorije relacija, pri čemu je svaka veza popraćena kvalitativnim opisom i preciznim utemeljenjem:
1.  **Personalna unija i fluktuacija članova:** Slučajevi kada su glazbenici svirali ili gostovali u više različitih sastava (npr. Milić Vukašinović, Boris Bele).
2.  **Izravna kreativna suradnja i zajednički nastupi:** Dokumentirane zajedničke turneje, gostovanja na albumima ili zajednički studijski projekti (npr. *Paket aranžman*).
3.  **Konceptualni i stilski utjecaji:** Indirektne veze izgrađene na temelju pripadnosti istom estetskom kodu ili preuzimanja specifičnih glazbenih obrazaca.

### 2.4 AI proširenje i detekcija skrivenih relacija
S ciljem otkrivanja implicitnih veza koje nisu vidljive kroz puko praćenje personalnih unija, u sustav je implementiran **Google Gemini API**. Koristeći naprednu analizu diskursa i povijesnih tekstova (kritika, recenzija iz časopisa *Džuboks* i *Polet*), AI komponenta je detektirala suptilne slojeve estetskog i društvenog kontinuiteta. Sustav je tako identificirao zajedničke stilske i tekstualne idiome te ponudio automatizirane sugestije za povezivanje čvorova koji su geografski ili kronološki bili udaljeni, ali su dijelili identičnu poziciju unutar šireg kulturnog polja.

---

## 3. Arhitektura podataka i vizualna mreža identiteta

Aplikacija "YU Rock Network" koristi relacijski sustav za generiranje topoloških prikaza. Kako bismo izbjegli nestabilnosti eksternih parsera, struktura relacijskih sila i regionalne fragmentacije scene prikazana je kroz fiksni topološki dijagram strukture:

```text
=================================================================================
                      CENTRALNI STRUKTURNI HUB (SARAJEVO)
=================================================================================
                                [BIJELO DUGME]
                                      │
             ┌────────────────────────┼────────────────────────┐
             ▼                        ▼                        ▼
      (BOOM Festival)        [Milić Vukašinović]      Regionalni Utjecaj
             │                        │                        │
             ▼                        ▼                        ▼
       [Leb i Sol]            [Vatreni Poljubac]       [Beogradski Klaster]
      ((Skoplje))                ((Hard Rock))                 │
                                                               ░ (Slaba veza)
                                                               ▼
                                                       [Zagrebački Klaster]

=================================================================================
                       REGIONALNI POD-KLASTERI (NOVI VAL)
=================================================================================

    A) BEOGRADSKI KLASTER (SKC)               B) ZAGREBAČKI KLASTER
    ───────────────────────────               ─────────────────────
          [Beograd (SKC)]                           [Zagreb]
                 │                                     │
         ┌───────┼───────┐                     ┌───────┼───────┐
         ▼       ▼       ▼                     ▼       ▼       ▼
      [Idoli] [Šarlo] [Orgazam]             [Azra]  [Film]  [Haustor]
         │
         ▼
  (Paket aranžman)

---

## 4. Rezultati

Kvantitativna i kvalitativna analiza topologije mreže rezultirala je neočekivanim i znanstveno izazovnim nalazima koji redefiniraju standardne postavke o ex-YU rocku:

* **Centralnost i uloga Bijelog Dugmeta kao mrežnog središta (Hub):** Analiza je potvrdila da sastav *Bijelo Dugme* posjeduje najviši stupanj centralnosti (*degree centrality*) u cijelom grafu. Zahvaljujući čestim promjenama postave (kroz bend prolaze glazbenici iz raznih sarajevskih i regionalnih sastava) te masovnim turnejama, ovaj čvor funkcionira kao primarni mrežni 'hub'. Međutim, računalna analiza pokazuje da je ova centralnost uvelike limitirana na komercijalnu i logističku sferu, te da se utjecaj sastava dramatično smanjuje unutar alternativnih i novovalnih mrežnih pod-klastera.
* **Visoka fragmentacija i regionalna autonomija:** Nasuprot tezi o kohezivnoj zajednici, mreža je otkrila postojanje izraženih, relativno izoliranih regionalnih klastera. Mrežna gustoća (*network density*) unutar zagrebačkog novovalnog kruga (*Azra, Film, Haustor*) ili beogradskog kruga oko SKC-a (*Idoli, Šarlo Akrobata, Električni Orgazam*) iznimno je visoka, ali su veze *između* tih klastera iznenađujuće rijetke i tanke. Većina bendova djelovala je unutar strogo definiranih lokalnih mikrosustava, dok je cjelokupna scena funkcionirala kao skup paralelnih, autonomnih priča, a ne kao integrirana cjelina.
* **Nužnost konstrukcije sintetičkih veza:** Tijekom modeliranja uočeno je da se graf, ako se oslanja isključivo na izravne personalne unije, raspada na niz nepovezanih komponenti. Kako bi mreža postala koherentna i analitički prohodna, u model su morali biti uvršteni širi relacijski parametri: pripadnost istoj generacijskoj epohi, zajednički nastupi na saveznim festivalima (npr. *BOOM festival*) i slični žanrovski kodovi. Ova činjenica empirijski dokazuje da je duboka povezanost scene bila više površinska i kontekstualna nego strukturna.
* **Žanrovska evolucija i dinamika transmisije:** Prateći mrežne transformacije kroz vrijeme, uočava se jasna evolucijska putanja jugoslavenskog rock identiteta, koja se može periodizirati kroz četiri ključne faze:
    1.  *Faza autohtonog emuliranja i rane akumulacije:* Sakupljanje vanjskih utjecaja i postavljanje baze (šezdesete i rane sedamdesete).
    2.  *Faza institucionalizacije i estradizacije:* Pojava velikih sistema predvođenih Bijelim Dugmetom i uspostavljanje rocka kao legitimne masovne kulture.
    3.  *Faza novovalne eksplozije i žanrovske diferencijacije:* Vrhunac kreativne fragmentacije u kojoj nastaju najgušći, ali ujedno i najizoliraniji kreativni klasteri (kraj sedamdesetih i prva polovica osamdesetih).
    4.  *Suvremena faza arhiviranja i teorijske dekonstrukcije:* Transformacija proživljene stvarnosti u povijesni narativ i digitalne repozitorije (21. stoljeće).

---

## 5. Bio-bibliografski i mrežni podaci ključnih aktera ex-YU rock scene

| Izvođač / Sastav | Životni vijek / Era | Dominantni žanrovi | Ključna ostvarenja i projekti | Glavna mrežna i identitetska uloga |
| :--- | :--- | :--- | :--- | :--- |
| **Bijelo Dugme** | 1974. – 1989. | Hard rock, pastirski rock, pop-rock | *Kad bi' bio bijelo dugme* (1974.), *Bitanga i princeza* (1979.) | Apsolutni mrežni 'hub'; čvor s najvišim stupnjem centralnosti koji povezuje estradne elemente i masovnu kulturu cijele federacije. |
| **Azra** | 1977. – 1988. | Novi val, punk rock, rock | *Azra* (1980.), *Sunčana strana ulice* (1981.), *Ravno do dna* (1982.) | Središnji čvor zagrebačkog novovalnog klastera; simbol beskompromisne urbane kritike i visoke autorske autonomije. |
| **Ekatarina Velika (EKV)** | 1982. – 1994. | Post-punk, alt-rock, dark wave | *Katarina II* (1984.), *S vetrom uz lice* (1986.), *Dum Dum* (1991.) | Konceptualni integrator; mrežni most između beogradske avangardne scene i šireg alternativnog kruga u regiji. |
| **Idoli** | 1980. – 1984. | Novi val, art rock, synth-pop | *Paket aranžman* (1981.), *Odbrana i poslednji dani* (1982.) | Intelektualni dekonstruktor; ključni čvor beogradskog paketa suradnje koji uvodi ironiju i postmodernu u rock diskurs. |
| **Leb i Sol** | 1976. – 1995. | Jazz fusion, etno-rock, prog rock | *Leb i sol* (1978.), *Ručni rad* (1979.), *Kao kakao* (1987.) | Regionalni stabilizator; mrežna poveznica južnog makro-regionalnog kruga s centralnim diskografskim kućama u Zagrebu i Beogradu. |
| **Pankrti** | 1977. – 1987. | Punk rock, politički rock | *Dolgcajt* (1980.), *Državni ljubimci* (1982.) | Ideološki i geografski pokretač; mrežna točka proboja zapadnih supkulturnih utjecaja i otvaranja prostora za društvenu kritiku. |
| **Zabranjeno Pušenje** | 1980. – danas | Novi primitivizam, garažni rock | *Das ist Walter* (1984.), *Dok čekaš sabah sa šejtanom* (1985.) | Utemeljitelj specifičnog sarajevskog narativnog mikro-klastera; fuzija uličnog humora, lokalne mitologije i rock verizma. |
| **Buldožer** | 1975. – 1990. | Avant-garde rock, prog rock | *Pljuni istini u oči* (1975.), *Zabranjeno plakatirati* (1977.) | Mrežni provokator i preteča; postavlja temelje za kasniju novovalnu ironizaciju stvarnosti i rušenje estradnih konvencija. |

---

## 6. Rasprava: Legende i narativi kao modifikatori identiteta

Dobiveni mrežni podaci jasno upućuju na to da jugoslavenska rock scena nije funkcionirala kao statični, homogeni prostor, već kao visoko dinamičan proces neprekidnog pregovaranja o kulturnom identitetu. Mitovi i legende o sveopćoj povezanosti koji su se konstruirali u kasnijim razdobljima (osobito kroz retroaktivnu nostalgiju i dokumentarne filmove u 21. stoljeću) zapravo su služili kao retrospektivni modifikatori identiteta. Oni su imali zadatak stvoriti osjećaj jedinstva tamo gdje je u stvarnosti postojala izražena estetska i tržišna kompeticija.

Primjerice, subotički Omladinski festival ili BOOM festivali sedamdesetih u mreži se ne pojavljuju kao trajna integrativna tkiva, već kao privremena stjecišta (*transient hubs*) koja bi na nekoliko dana spojila udaljene autore, da bi se oni potom odmah vraćali u svoje izolirane regionalne tokove. Kreativna i personalna unifikacija odvijala se u valovima, pod jakim utjecajem globalnih glazbenih trendova. Ključni ex-YU rock autori (poput Branimira Štulića, Milana Mladenovića ili Gorana Bregovića) uzimali su fragmente lokalne zbilje, urbanog asfalta ili balkanskog folklora te ih kodificirali u univerzalni jezik rock mitologije. Time su osigurali da lokalni urbani narativi nadvladaju geografsku izoliranost i uđu u sferu trajne kulturne baštine regije.

---

## 7. Zaključak: Integracija tradicije i tehnologije kroz digitalnu humanistiku

Istraživanje i prostorno-tematsko mapiranje ex-YU rock scene provedeno u okviru ovog seminarskog rada bjelodano pokazuje kako je glazbeni identitet promatranog razdoblja živ i kompleksan organizam koji se neprekidno transformira u kolektivnom pamćenju. Različitost autorskih i žanrovskih pristupa — od sirovog supkulturnog punk izričaja (*Pankrti*) preko intelektualnog art-rocka (*Idoli*) do visokokomercijalnih formi (*Bijelo Dugme*) — ne narušava strukturu ove mreže, već joj osigurava nužnu elastičnost, dubinu i povijesnu relevantnost.

Ključni doprinos ovog rada ne leži isključivo u teorijskoj reevaluaciji povijesnih narativa, već u samom osmišljavanju i tehničkoj izvedbi interaktivne web aplikacije **"YU Rock Network"**. Ovaj digitalni projekt izravno premošćuje jaz između klasične muzikološke historiografije i inovativnih metodologija digitalne humanistike:

1.  **D3.js interaktivna vizualizacija kao istraživački alat:** Implementirani graf sa simulacijom mrežnih sila u stvarnom vremenu omogućuje korisnicima, studentima i istraživačima da neposredno istražuju skrivene niti povijesti popularne kulture. Interaktivnim povlačenjem i izoliranjem čvorova može se eksperimentalno testirati stabilnost mreže. Primjerice, simulirano uklanjanje ključnih čvorišta poput *Bijelog Dugmeta* ili paketa zajedničkih albuma zorno demonstrira u kojoj se mjeri i kojom brzinom cjelokupna mreža grana na posve izolirane regionalne otoke.
2.  **Obogaćeni sustav metapodataka za naprednu analizu:** Aplikacija nadilazi osnovne prikaze uvođenjem slojevitih parametara poput kronoloških era djelovanja, žanrovskih klasifikacija i precizno definiranih vrsta veza. Time interaktivno sučelje postaje napredno nastavno pomagalo koje na klik miša generira sveobuhvatne bio-bibliografske profile s egzaktnim tragovima suradnji, utjecaja i pripadnosti određenom estetskom krugu.
3.  **Inteligentna ekstenzivnost pomoću Gemini AI-ja:** Prepoznajući činjenicu da glazbena scena nije statičan povijesni spomenik nego dinamičan sustav, ugrađena je mogućnost proširenja baze podataka putem server-side proxyja prema Google Gemini API-ju. Prilikom unosa novog izvođača ili zaboravljenog demo sastava, umjetna inteligencija analizira kontekstualni doprinos i automatski generira nove relacijske veze prema postojećim čvorovima na temelju tekstualnih i stilskih preklapanja, jamčeći dugoročnu održivost i skalabilnost platforme.
4.  **Spoj arhivske estetike i suvremenog korisničkog iskustva:** Cjelokupni vizualni dizajn aplikacije pažljivo spaja elemente retro rock tiska s čistom modernističkom tipografijom, profinjenim mikro-tranzicijama i animacijama. Takvo rješenje u potpunosti odražava temeljnu ideju rada: duboko poštovanje prema arhivskoj građi i povijesnim činjenicama uz njezinu beskompromisnu prilagodbu digitalnom dobu i zahtjevima suvremenog korisnika.

U konačnici, ova platforma zorno dokazuje da digitalna humanistika posjeduje iznimnu moć transformacije i reevaluacije nematerijalne kulturne baštine. Kroz sinergiju softverskog inženjerstva, sociologije i kulturne antropologije, istraživači i ljubitelji ex-YU zvuka dobili su inovativan instrument koji im omogućuje da glazbenu povijest spoznaju ne kao skup neprovjerenih mitova, već kao fascinantnu, višeslojnu mrežu u kojoj kreativna iskra trajno i neraskidivo nastavlja prkositi vremenu.

---

## 8. Literatura

1.  Scott, J. (2000). *Social Network Analysis: A Handbook*. Sage Publications.
2.  Wasserman, S., & Faust, K. (1994). *Social Network Analysis: Methods and Applications*. Cambridge University Press.
3.  Janjatović, P. (2007). *Ex YU rock enciklopedija 1960. – 2006.*. Vlastito izdanje.
4.  Vesić, D. (2014). *Bijelo Dugme: Šta bi dao da si na mom mjestu*. Laguna.
5.  Mirković, I. (2003). *Sretno dijete*. Profil.
6.  *YU Rock Network: Interaktivni arhiv jugoslavenske rock scene* (Digitalni artefakt, 2026).
