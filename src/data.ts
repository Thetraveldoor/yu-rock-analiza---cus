export interface Node {
  id: string;
  name: string;
  type: 'Musician' | 'Band' | 'Album' | 'Song';
  details: any;
}

export interface Link {
  source: string;
  target: string;
  type: string;
  description?: string;
  year?: number;
}

export const DATA: { nodes: Node[], links: Link[] } = {
  nodes: [
    { id: "m1", name: "Goran Bregović", type: "Musician", details: { uloge: ["gitarist", "skladatelj", "producent", "vođa"], instrumenti: ["gitara", "bas-gitara"], znacaj: "Glavni autor Bijelog dugmeta; pionir 'pastirskog rocka'; osnivač izdavačke kuće Kamarad [1-3]." } },
    { id: "m2", name: "Branimir Štulić Johnny", type: "Musician", details: { uloge: ["vokalist", "gitarist", "tekstopisac"], instrumenti: ["gitara"], znacaj: "Lider Azre; simbol beskompromisnog novog vala; poznat po paranoji od politike i 'Rusâ' [4-6]." } },
    { id: "m3", name: "Željko Bebek", type: "Musician", details: { uloge: ["vokalist", "basist"], instrumenti: ["vokal", "bas-gitara"], znacaj: "Prvi i najprepoznatljiviji pjevač Bijelog dugmeta; sudionik projekta YU Rock Misija" } },
    { id: "m4", name: "Milan Mladenović", type: "Musician", details: { uloge: ["vokalist", "gitarist", "skladatelj"], instrumenti: ["gitara"], znacaj: "Član Šarlo akrobate i osnivač EKV-a; smatran 'glazbenim bogom' i pjesnikom urbane generacije" } },
    { id: "m5", name: "Mladen Vojičić Tifa", type: "Musician", details: { uloge: ["vokalist"], instrumenti: ["vokal"], znacaj: "Pjevač Bijelog dugmeta, Vatrenog poljupca i Divljih jagoda; prepoznatljiv po hrapavom rock vokalu" } },
    { id: "m6", name: "Alen Islamović", type: "Musician", details: { uloge: ["vokalist", "basist"], instrumenti: ["vokal"], znacaj: "Pjevač Divljih jagoda i kasnije Bijelog dugmeta; sudionik YU Rock Misije" } },
    { id: "m7", name: "Boris Leiner", type: "Musician", details: { uloge: ["bubnjar", "vokalist"], instrumenti: ["bubnjevi"], znacaj: "Dugogodišnji bubnjar Azre; kasnije član sastava Vještice" } },
    { id: "m8", name: "Jura Stublić", type: "Musician", details: { uloge: ["vokalist", "skladatelj"], instrumenti: ["vokal"], znacaj: "Frontmen grupe Film; kratko pjevač Azre; autor antiratnih i ljubavnih himni" } },
    { id: "m9", name: "Marina Perazić", type: "Musician", details: { uloge: ["vokalistica"], instrumenti: ["vokal"], znacaj: "Vokal dua Denis & Denis; seks-simbol 80-ih; pionirka synth-popa u Jugoslaviji" } },
    { id: "m10", name: "Bora Đorđević", type: "Musician", details: { uloge: ["vokalist", "tekstopisac"], instrumenti: ["vokal"], znacaj: "Vođa Riblje čorbe; autor provokativnih tekstova koji su izjednačavali mafiju s partijom [13-15]." } },
    { id: "m11", name: "Vlatko Stefanovski", type: "Musician", details: { uloge: ["gitarist", "skladatelj"], instrumenti: ["gitara"], znacaj: "Vođa grupe Leb i sol; jedan od najboljih rock gitarista ex-YU; poznat po spoju rocka i makedonskog melosa" } },
    { id: "m12", name: "Laza Ristovski", type: "Musician", details: { uloge: ["klavijaturist", "aranžer"], instrumenti: ["sintisajzer", "klavir"], znacaj: "Član Bijelog dugmeta i Smaka; pionir elektroničkog zvuka [14-16]." } },
    { id: "m13", name: "Anja Rupel", type: "Musician", details: { uloge: ["vokalistica"], instrumenti: ["vokal"], znacaj: "Liderica slovenskog synth-pop sastava Videosex; sudionica YU Rock Misije" } },
    { id: "m14", name: "Arsen Dedić", type: "Musician", details: { uloge: ["vokalist", "skladatelj", "pjesnik"], instrumenti: ["vokal", "flauta", "klavir"], znacaj: "Vrhunski šansonijer; suradnik rockera; autor stihova koji su spajali visoku kulturu i pop [7-9]." } },
    
    { id: "b1", name: "Bijelo dugme", type: "Band", details: { sjediste: "Sarajevo", zanrovi: ["hard rock", "folk rock", "new wave"], period: "1974–1989", znacaj: "Najveći bend SFRJ; album 'Doživjeti stotu' označio je njihov prelazak u novi val [1, 2, 5]." } },
    { id: "b2", name: "Azra", type: "Band", details: { sjediste: "Zagreb", zanrovi: ["new wave", "rock"], period: "1977-1990", znacaj: "Kultni novovalni bend; inicijalna postava: Štulić, Sacher, Leiner [18-20]." } },
    { id: "b3", name: "Šarlo akrobata", type: "Band", details: { sjediste: "Beograd", zanrovi: ["post-punk", "ska", "new wave"], period: "1980–1981", znacaj: "Kultni trio beogradskog novog vala; preteča EKV-a i Discipline kičme" } },
    { id: "b4", name: "Denis & Denis", type: "Band", details: { sjediste: "Rijeka", zanrovi: ["synth-pop"], period: "1982–1988", znacaj: "Najistaknutiji predstavnici jugoslavenskog synth-popa" } },
    { id: "b5", name: "Riblja čorba", type: "Band", details: { sjediste: "Beograd", zanrovi: ["hard rock", "rock"], period: "1978–danas", znacaj: "Jedan od najvažnijih i najpopularnijih rock sastava u povijesti Jugoslavije" } },
    
    { id: "a1", name: "Paket aranžman", type: "Album", details: { izvodjaci: ["Idoli", "Šarlo akrobata", "Električni orgazam"], godina: 1981, znacaj: "Manifest beogradskog novog vala; smatra se jednim od najvažnijih albuma ex-YU rocka" } },
    { id: "a2", name: "Bitanga i princeza", type: "Album", details: { izvodjac: "Bijelo dugme", godina: 1979, znacaj: "Najambiciozniji rad Bijelog dugmeta bez folk utjecaja" } },
    { id: "a3", name: "Odbrana i poslednji dani", type: "Album", details: { izvodjac: "Idoli", godina: 1982, znacaj: "Često proglašavan najboljim jugoslavenskim rock albumom svih vremena" } },
    { id: "a4", name: "Istina", type: "Album", details: { izvodjac: "Riblja čorba", godina: 1985, znacaj: "Album koji sadrži pjesmu 'Pogledaj dom svoj, anđele', proglašenu najboljom rock pjesmom svih vremena" } },
    { id: "a5", name: "Kost u grlu", type: "Album", details: { izvodjac: "Riblja čorba", godina: 1979, znacaj: "Debitantski album sastava" } },
    
    { id: "s1", name: "YU rock misija (Za milion godina)", type: "Song", details: { izvodjac: "YU Rock Misija", godina: 1985, znacaj: "Humanitarni projekt podrške Live Aidu koji je ujedinio samu elitu Ex-YU scene.", tekst: `Čujem tvoj glas u tišini, tvoj osmeh mi daje moć
Znam da smo negde blizu, mrak polako gubi moć
I pružam ruku ka tebi, oseti njen topli sjaj
U ovom svetu tame, ti budi moj večni raj

Za milion godina kad nas ne bude više
Neko će čitati stihove ove što vetar piše
Za milion godina kad prođu svi ovi ljudi
Pesma će živeti, pesma će reći šta ljubav nudi

Spojićemo ruke mi, nek vide ljudi svi
Da ljubav uvek pobeđuje, da ljubav uvek pobeđuje!` } },
    { id: "s2", name: "Pogledaj dom svoj, anđele", type: "Song", details: { izvodjac: "Riblja čorba", godina: 1985, znacaj: "Kultna rock himna s albuma 'Istina', proglašena jednom od najboljih pjesama bivše države.", tekst: `Pogledaj dom svoj, anđele
I skini paučinu s očiju
Videćeš prizore potresne
Videćeš nesrećne i bolesne
Videćeš čitav bedni svet
I oslepećeš od suza

Pasivni očajnici i jadnici
Koji u redu čekaju i trpe
Nisu heroji, nego samo robovi
Koji se kriju iza sopstvene krpe

Podigni mač svoj, anđele
I kazni grešnike i prevarante
Nek gori vatra, nek pucketa slama
Nek stigne kazna sve koji nas gaze` } },
    { id: "s3", name: "Balkan", type: "Song", details: { izvodjac: "Azra", godina: 1979, znacaj: "Kultni buntovni singl Azre koji je definirao Johnnyjev iskren i sirov rock izraz.", tekst: `Jednog dana nema me da nikada ne dođem
Prijatelju moj, srušili smo sve fontane
Sad su druge stvari važne, sad se živi drukčije
Nekad bila si mi draga, sad si samo deo prošlosti

Balkan, Balkan, Balkan moj
Budi mi silan i dobro mi stoj

Mi smo ljudi od kamena, niko nas ne može slomiti
Uvek na nogama stojimo i u mraku svetlimo
Sviramo rock n roll dok se zora ne zabeleli
Pesma nas spaja, pesma nas sve veseli!` } },
    { id: "s4", name: "Par godina za nas", type: "Song", details: { izvodjac: "Ekatarina Velika (EKV)", godina: 1989, znacaj: "Suptilno, melankolično i proročansko remek-djelo Milana Mladenovića i Margite Stefanović.", tekst: `Moj prijatelj i ja sedimo na klupi
Gledamo zvezde, slušamo vesti što su upravo stigle
Kažu da imamo još samo par godina za nas

Imamo li? Par godina za nas?
Zemlja drhti, svemir se vrti
Vreme leti, a niko ne preti
Da li je ovo stvarno kraj?

Ovaj krug smo slupali, novi smo napravili
Samo par godina za nas
Da li još uvek sanjaš u boji
Ili se plašiš onog što dolazi` } },
    { id: "s5", name: "Lipe cvatu", type: "Song", details: { izvodjac: "Bijelo dugme", godina: 1984, znacaj: "Folk-rock stadion megahit s prepoznatljivim hrapavim vokalom Mladena Vojičića Tife.", tekst: `Ljeto ide, kako si mi ti
Gdje si, s kim si, kako provodiš dane
Da li ponekad na me pomisliš
Dok ti vjetar mrsi kose plave

Lipe cvatu, sve je isto k'o i lani
Samo srce moje plače, ne može bez tebe više
Lipe cvatu, sve je isto k'o i lani
Sve je isto, samo tebe nema

Neka cveta, neka miriše celi svet
Ja bez tebe nemam gde, bez tebe sam samo sena
Otišla si drumovima dalekim
Ostala je samo tuga i magla` } },
    { id: "s6", name: "Ena", type: "Song", details: { izvodjac: "Haustor", godina: 1985, znacaj: "Reggae-rock pop klasik s Rundekovim teatralnim pjevanjem i sjajnim porukama.", tekst: `Ena je divna žena, Ena dobro zna
Da su moji dani odbrojani
I da svaki dan može biti zadnji
I zato me ne pita kamo odlazim

Ena, Ena, nemoj plakati
Ena, Ena, sve će proći, sve će nestati

Skrivam se u senci njenih očiju toplih
Ona je moja luka, moja tiha reka
Ali glas me zove, drumska vatra gori
Moram da krenem, tamo me istina čeka` } },
    { id: "s7", name: "Maljčiki", type: "Song", details: { izvodjac: "Idoli", godina: 1981, znacaj: "Izvrsna parodija socijalističkog realizma i sovjetskog radničkog zanosa s Paket aranžmana.", tekst: `Plamene zore bude me iz sna
Fabrička jutra, dim iz dimnjaka
Pesma se ori, čuje se iz daleka
Radnički narod stupa na posao

Kakav radostan dan, crna hronika je puna
Kakav radostan dan, kakva predivna sloboda

Svi mi zdušno radimo za opšte dobro
Nosićemo cigle, gradićemo mostove
Sreća se deli, radost sipa u čaše
Slava i čast pripadaju nama!` } },
    { id: "s8", name: "Zenica blues", type: "Song", details: { izvodjac: "Zabranjeno pušenje", godina: 1984, znacaj: "Garažni punk-folk klasik kojim dominiraju sarajevski humor i Novi primitivizam.", tekst: `U Zenicu kada pođem ja
Prati me ekipa stopesna
Svi pevaju, vesela je ulica
Raduje se moja majčica

Samo ja sam tužan, plačem ja
Jer u Zenici me čeka robija
Dvanaest godina, dvanaest godina
Moja mladost prođe tamo ja

Obećo sam dragoj da ću se vratiti
Al' me sudac poslao u večni mrak
Zato pevam plavi blues, zato plačem ja
Dok me stražar vodi kroz ta tesna vrata` } },
    { id: "s9", name: "Bolje biti pijan nego star", type: "Song", details: { izvodjac: "Plavi orkestar", godina: 1985, znacaj: "Zasigurno najprepoznatljivija pop-rock himna sarajevskog novopartizanskog vala.", tekst: `Kad pomislim na tebe, stara ljubavi
Žao mi je što smo se rastali
Godine prolaze, a u srcu mom
Još uvijek stoji tvoja slika

Bolje biti pijan nego star
Bolje biti pijan nego star
Vino ne zna da smo nekad bili sretni par
Bolje biti pijan nego star

Suza u oku, čaša u ruci
Pitam se gde si u ovoj hladnoj noći
Da li se i ti sećaš naših dana
Ili si srećna u zagrljaju drugog` } },
    { id: "s10", name: "Bacila je sve niz rijeku", type: "Song", details: { izvodjac: "Indexi", godina: 1974, znacaj: "Melankolično remek-djelo Indexa o jednoj dalekoj, izgubljenoj sarajevskoj ljubavi.", tekst: `Stajala je usred bašte
Ko opijena nekom čudnom strašću
I činilo se da joj ništa na svijetu, na svijetu
Ne može odnijeti taj osmijeh s lica

Bacila je sve niz rijeku
I pošla putom koji sama bira
A ja sam ostao na obali da plačem
Za onom koju volim najviše

U pola dva se budim iz sna
I mislim na nju, da li me se seća?
Nosim u sebi tugu i bol
Jer znam da je više nikada neću videti` } },
    { id: "s11", name: "O jednoj mladosti", type: "Song", details: { izvodjac: "Josipa Lisac", godina: 1973, znacaj: "Kultna i nadasve emotivna pjesma iz remek-djela 'Dnevnik jedne ljubavi'.", tekst: `Jedna mladost, jedan san u njoj
Mala kuća, miran topli dom
Sve je to nestalo u trenu tom
Ostala je samo tuga i bol

O jednoj mladosti ja pjevam sad
Koju odnio je vjetar dalek i hladan
Dok u tami tražim svjetlosti sjaj
Znam da svemu mora doći kraj

Ali ljubav naša večna je i čista
Iznad svih oluja ona uvek blista
I kad prođu stotine dugih godina
Naša će pesma živeti u senci zvezda` } },
    { id: "s12", name: "Princeza", type: "Song", details: { izvodjac: "Slađana Milošević & Dado Topić", godina: 1984, znacaj: "Najbolji rock-duet jugoslavenske scene izveden na Jugoviziji 1984. u Skoplju.", tekst: `U mome svetu ti si princeza
U senci prošlih, dugih, pustih godina
Ja sam samo putnik što te traži
Dok vetar nosi miris tvojih dodira

Digni me u nebo, pokaži mi put
Tamo gde zvezde pišu naš san
Princeza, princeza, ti si moja princeza

I ne boj se oluja što dolaze s tami
U našem kraljevstvu nikad nismo sami
Sve dok nas spaja srebrna nit
Ljubav će uvek biti naš jedini štit` } },
    { id: "s13", name: "Teške boje", type: "Song", details: { izvodjac: "Majke", godina: 2011, znacaj: "Snažni, sirovi i duboko proživljeni blues-rock hit Gorana Bareta i Majki.", tekst: `Teške boje, teške dane
Ja nosim od ranog jutra
Da li ima nade za nas
Da li postoji neko sutra

Gledam u nebo, tražim spas
A oko mene samo tišina
Teške boje, prazan stan
Moja duša je puna gorčina

Budi ponosan, budi jak
I kad te slome teške noći
Proći će i ovaj mrak
Svjetlo će ponovo doći` } },
    { id: "s14", name: "Zašto praviš slona od mene", type: "Song", details: { izvodjac: "Dino Dvornik", godina: 1989, znacaj: "Plesna eksplozija i revolucionarni funk-pop hit koji je u potpunosti izmijenio regionalnu scenu.", tekst: `Znam da ti se sviđa ritam ovaj lud
Znam da tražiš pesmu, da ne gubiš trud
Ali zašto uvek pričaš istu stvar
Zašto kažeš da nismo dobar par

Zašto praviš slona od mene
Zar ne vidiš da u meni krv vri
Zašto praviš slona od mene
Hajde igraj, hajde pleši ti

Ovo je ritam koji pokreće svet
Ovo je moj mali, šareni let
Samo se opusti, zaboravi bol
U tvojim venama teče rock n roll` } },
    { id: "s15", name: "Zemlja", type: "Song", details: { izvodjac: "Ekatarina Velika (EKV)", godina: 1987, znacaj: "Hipnotička, melodična himna EKV-a s kultnog albuma 'Ljubav', prepuna dubokih, proročkih motiva.", tekst: `Ovo je zemlja za nas, ovo je zemlja za sve naše ljude
Ovo je kuća za nas, ovo je kuća za svu našu decu
Pogledaj me, o pogledaj me očima deteta

U svakom porazu ja sam video deo pobede
I kad je teško, ja ne gubim nadu u tebe
Zemlja drhti, nebo gori, vetar nosi glas
Da li u sebi još uvek čuvaš spas?

Ovo je zemlja za nas, svetli krug u tami
U ovoj borbi mi nikada nismo sami
Sve dok nam srca kucaju u istom taktu
Istina će uvek živeti na ovom tlu!` } },
    { id: "s16", name: "Loše vino", type: "Song", details: { izvodjac: "Zdravko Čolić / Bijelo Dugme", godina: 1975, znacaj: "Bezvremenska balada koju su stvorili Bregović i Dedić, apsolutni simbol boemske melankolije.", tekst: `Ne vjeruj mi noćas, svakog časa piši
Sve što kažem, samo loše vino govori
Jer u mome srcu neka hladna kiša ludi
Koju tvoja ruka ne može da umiri

To je samo loše vino, ne vjeruj mi sad
Dok se svetla gase, dok propada grad
To je samo loše vino, stara ljubavi
Znak da smo se davno rastali

Oprosti mi noćas, nemam snage više
Da se borim sa senkama iz prošlosti
Sve se briše kad se čaša prelije
Ostala je samo tuga, moja najdraža` } },
    { id: "s17", name: "Nadalina", type: "Song", details: { izvodjac: "Oliver Dragojević & Boris Dvornik", godina: 1980, znacaj: "Kultni, veseli splitski hit koji spaja dalmatinski melos, glumačku karizmu i mediteranski duh.", tekst: `Kad Nadalina muti jaja, cil Split poludi
U svakoj kući odma radost se budi
Ona je lipa, ona je mlada i fina
Najdraža cura našeg malog mista užežin

Nadalina, Nadalina, muti jaja fina
Nadalina, Nadalina, ti si naša vilo
Kad se tvoj osmijeh preko rive prolije
Svako srce od sriće proplače

Sviraju gitare, piva cila ulica
Dok Nadalina hoda, njiše bokovima
Nema joj ravne na ovome svitu
Ona nosi sunce u najlipšem cvitu!` } },
    { id: "s18", name: "Dodirni mi kolena", type: "Song", details: { izvodjac: "Zana", godina: 1982, znacaj: "Megahit jugoslavenskog synth-popa, prepoznatljiv po provokativnom, zaraznom tekstu Marine Tucaković.", tekst: `Dodirni mi kolena, to bih baš volela
Da se ne lažemo, dobro se slažemo
Noć je tako topla, zvezda ima puno
Hajde budi nežan, ne budi blesav

Ova pesma svira samo za nas dvoje
Dok se u tami dodiruju ruke tvoje
Neka vreme stane, neka prođe sve
Samo nemoj reći da me ne voliš, ne

Dodirni mi kolena, to bih baš volela
Zapevajmo pesmu, nek gori cela ulica
Sutra je novi dan, sve će proći znam
Budi moja sreća, moj najlepši san` } },
    { id: "s19", name: "Sve će to, o mila moja, prekriti ruzmarin, snijeg i šaš", type: "Song", details: { izvodjac: "Bijelo dugme", godina: 1979, znacaj: "Simfo-rock kolos s albuma 'Bitanga i princeza', bogat orkestralnim aranžmanima i visokom poetskom sjetom.", tekst: `Sve će to, o mila moja, prekriti ruzmarin, snijeg i šaš
I dvije tople suze što na mom dlanu ostavljaš
A ti ćeš otići u some daleke, tuđe gradove
I zaboravićeš naše zime i snežne tragove

Jer sve prolazi, sve se u prah pretvara
Samo ljubav u nekom kutu srca večito kuca
I kad pokriju nas godine i tihi, hladni mrak
Ostala je naša pesma, naš poslednji znak

Sve će to, o mila moja, pokriti trava zelena
Samo tišina ostaće, pusta, beskrajna
I vetar će pevati stihove ove turobne
Što podsećaju na dane naše izgubljene` } },
    { id: "s20", name: "Ima neka tajna veza", type: "Song", details: { izvodjac: "Bijelo dugme", godina: 1974, znacaj: "Metafizička, duboko filozofska balada o neraskidivim životnim vezama nastala na stihove Duška Trifunovića.", tekst: `Ima neka tajna veza, za sve ljude što se vole
Ima neka tajna veza, što nas spaja, što nas boli
I kad misliš da si sam, da te niko ne čeka
Svetli ruka tvoja izdaleka

Ima neka tajna veza, žica koja uvek zvoni
Sidro koje nas u dubini drži i brani
Nije to samo ljubav, nego reč što se piše
Snaga koja u nama uvek diše

Ima neka tajna veza, tajna veza
Unutar našeg srca, iznad svih nebesa
Ona nas vodi kroz oluje i mrak
To je naš jedini, večni i najsvetliji znak` } },
    
    { id: "m15", name: "Vlada Divljan", type: "Musician", details: { uloge: ["vokalist", "gitarist", "skladatelj", "tekstopisac"], instrumenti: ["gitara"], znacaj: "Glavni autor većine pjesama Idola; ključna figura beogradskog novog vala" } },
    { id: "m16", name: "Husein Hasanefendić Hus", type: "Musician", details: { uloge: ["gitarist", "skladatelj", "vođa sastava"], instrumenti: ["gitara"], znacaj: "Glavni autor i pokretačka snaga Parnog valjka; suradnik Johnnyja Štulića u ranoj fazi" } },
    { id: "m17", name: "Darko Rundek", type: "Musician", details: { uloge: ["vokalist", "skladatelj", "tekstopisac"], instrumenti: ["gitara"], znacaj: "Lider grupe Haustor; poznat po teatralnom pristupu i intelektualnim tekstovima" } },
    { id: "m18", name: "Zdravko Čolić", type: "Musician", details: { uloge: ["vokalist", "solo izvođač"], instrumenti: ["vokal"], znacaj: "Najveća pop zvijezda Jugoslavije; bivši član Ambasadora i Korni grupe" } },
    { id: "m19", name: "Oliver Dragojević", type: "Musician", details: { uloge: ["vokalist", "pijanist"], instrumenti: ["vokal", "klavir"], znacaj: "Simbol dalmatinske šansone i popa; suradnik Zdenka Runjića" } },
    { id: "m20", name: "Karlo Metikoš (Matt Collins)", type: "Musician", details: { uloge: ["skladatelj", "vokalist", "producent"], instrumenti: ["vokal"], znacaj: "Pionir rocka; autor ključnog albuma 'Dnevnik jedne ljubavi' za Josipu Lisac" } },
    { id: "m21", name: "Duško Trifunović", type: "Musician", details: { uloge: ["pjesnik", "tekstopisac"], instrumenti: ["pero"], znacaj: "Ključni autor stihova za sarajevsku školu pop-rocka (Dugme, Indeksi, Čolić) [3, 6, 7]." } },
    { id: "m22", name: "Marina Tucaković", type: "Musician", details: { uloge: ["tekstopisac"], instrumenti: ["pero"], znacaj: "Najutjecajnija autorica pop i rock tekstova 80-ih (Zana, Mirzino jato) [8, 9]." } },
    { id: "m23", name: "Zdenko Runjić", type: "Musician", details: { uloge: ["skladatelj"], instrumenti: ["klavir"], znacaj: "Glavni autor dalmatinskog pop zvuka Olivera Dragojevića [10, 11]." } },
    
    { id: "b6", name: "Idoli", type: "Band", details: { sjediste: "Beograd", zanrovi: ["new wave", "pop rock"], period: "1980–1984", znacaj: "Autori albuma 'Odbrana i poslednji dani', proglašenog najboljim ex-YU albumom svih vremena" } },
    { id: "b7", name: "Parni valjak", type: "Band", details: { sjediste: "Zagreb", zanrovi: ["rock", "pop rock"], period: "1975–danas", znacaj: "Jedan od najdugovječnijih i najpopularnijih rock sastava na Balkanu" } },
    { id: "b8", name: "Zabranjeno pušenje", type: "Band", details: { sjediste: "Sarajevo", zanrovi: ["rock", "punk", "garage rock"], period: "1980–danas", znacaj: "Predvodnici pokreta Novi primitivizam" } },
    { id: "b9", name: "Zana", type: "Band", details: { sjediste: "Beograd", zanrovi: ["pop rock", "synth-pop"], period: "1980–danas", znacaj: "Popularni beogradski pop-rock sastav najpoznatiji po hitu 'Dodirni mi kolena'" } },
    
    { id: "m24", name: "Jasenko Houra", type: "Musician", details: { uloge: ["gitarist", "glavni autor", "vođa sastava"], instrumenti: ["gitara"], znacaj: "Osnivač i kreativni motor Prljavog kazališta; autor kultnih pjesama poput 'Mojoj majci'" } },
    { id: "m25", name: "Davorin Bogović", type: "Musician", details: { uloge: ["vokalist"], instrumenti: ["vokal"], nadimak: "Rinči", znacaj: "Prvi pjevač Prljavog kazališta; simbol rane punk faze benda i albuma 'Crno-bijeli svijet'" } },
    { id: "m26", name: "Saša Lošić", type: "Musician", details: { uloge: ["vokalist", "skladatelj", "frontmen"], instrumenti: ["vokal"], znacaj: "Lider Plavog orkestra; ključna figura sarajevskog 'novog patriotizma' i pop-rocka 80-ih" } },
    { id: "m27", name: "Srđan Gojković Gile", type: "Musician", details: { uloge: ["vokalist", "gitarist", "autor"], instrumenti: ["gitara"], znacaj: "Osnivač Električnog orgazma; donio prvi punk zvuk u Beograd iz Londona" } },
    { id: "m28", name: "Margita Stefanović Magi", type: "Musician", details: { uloge: ["klavijaturistica", "skladateljica"], instrumenti: ["klavijature"], znacaj: "Ikona EKV-a; svojom virtuoznošću i pojavom definirala zvuk beogradske alternative" } },
    { id: "m29", name: "Davorin Popović", type: "Musician", details: { uloge: ["vokalist"], instrumenti: ["vokal"], nadimak: "Pimpek", znacaj: "Legendarni pjevač Indexa; zaštitno lice sarajevske pop-rock škole" } },
    { id: "m30", name: "Massimo Savić", type: "Musician", details: { uloge: ["vokalist", "gitarist"], instrumenti: ["gitara", "vokal"], znacaj: "Vođa art-rock grupe Dorian Gray; kasnije izuzetno uspješan pop solist" } },
    { id: "m36", name: "Josipa Lisac", type: "Musician", details: { uloge: ["vokalistica"], instrumenti: ["vokal"], znacaj: "Ikona art-rocka; izvođačica prvog rock konceptualnog albuma 'Dnevnik jedne ljubavi' [6, 16, 17]." } },
    
    { id: "b11", name: "Ekatarina Velika (EKV)", type: "Band", details: { sjediste: "Beograd", zanrovi: ["post-punk", "art rock"], period: "1982–1994", znacaj: "Simbol urbane poetike i beogradske alternative; Milan Mladenović kao centralna figura [14, 21, 22]." } },
    { id: "b12", name: "Indexi", type: "Band", details: { sjediste: "Sarajevo", zanrovi: ["progresivni rock", "pop"], period: "1962–2001", znacaj: "Temelj sarajevske škole i prvi autorski rock sastav [7, 20]." } },
    { id: "b13", name: "Električni orgazam", type: "Band", details: { sjediste: "Beograd", zanrovi: ["punk", "post-punk", "psychedelic rock"], period: "1980–danas", znacaj: "Jedan od tri ključna benda s 'Paket aranžmana'" } },
    { id: "b14", name: "Prljavo kazalište", type: "Band", details: { sjediste: "Zagreb", zanrovi: ["punk", "new wave", "rock"], period: "1977–danas", znacaj: "Jedan od najpopularnijih hrvatskih bendova; evoluirali od punka do stadionskog rocka" } },
    { id: "b15", name: "Plavi orkestar", type: "Band", details: { sjediste: "Sarajevo", zanrovi: ["pop rock", "folk rock"], period: "1983–danas", znacaj: "Autori mega-hita 'Bolje biti pijan nego star'; predvodnici 'New Partisans' pokreta" } },
    
    { id: "m31", name: "Siniša Škarica", type: "Musician", details: { uloge: ["glavni urednik", "producent"], instrumenti: ["uho"], znacaj: "Ključna figura Jugotona koja je oblikovala diskografiju novog vala [12, 13]." } },
    { id: "m32", name: "Shefqet Hoxha-Sheki", type: "Musician", details: { uloge: ["basist", "skladatelj"], instrumenti: ["bas-gitara"], znacaj: "Član Vatrenog poljupca i osnivač Detektora laži [17]." } },
    { id: "p1", name: "Novi primitivizam", type: "Band", details: { sjediste: "Sarajevo", zanrovi: ["subkultura", "humor"], period: "1980-ih", znacaj: "Subkulturni pokret temeljen na humoru i uličnom duhu (Zabranjeno pušenje, Elvis J. Kurtović) [23, 24]." }, },
    { id: "b16", name: "Vatreni poljubac", type: "Band", details: { sjediste: "Sarajevo", zanrovi: ["hard rock", "heavy metal"], period: "1977–danas", znacaj: "Kultni tročlani rock sastav kojeg je osnovao Milić Vukašinović" } },
    
    // Novo proširenje: jugoslavenska_glazbena_mreza_finalna_ekspanzija
    { id: "m33", name: "Aki Rahimovski", type: "Musician", details: { uloge: ["vokalist", "frontmen"], bend: "Parni valjak", znacaj: "Jedan od najprepoznatljivijih vokala rock scene; sudionik YU Rock Misije [1]" } },
    { id: "m34", name: "Đorđe Balašević", type: "Musician", details: { uloge: ["vokalist", "tekstopisac", "skladatelj"], bendovi: ["Žetva", "Rani mraz"], znacaj: "Legendarni panonski šansonijer poznat po poetskim baladama i humoru [2]" } },
    { id: "m35", name: "Momčilo Bajagić Bajaga", type: "Musician", details: { uloge: ["gitarist", "vokalist", "autor"], bendovi: ["Riblja čorba", "Bajaga i Instruktori"], znacaj: "Bivši član Riblje čorbe koji je ostvario jednu od najuspješnijih solo karijera [3]" } },
    { id: "m38", name: "Kornelije Kovač", type: "Musician", details: { uloge: ["klavijaturist", "skladatelj", "producent"], bendovi: ["Indexi", "Korni grupa"], znacaj: "Ključni autor koji je prešao iz Indexa u Beograd kako bi osnovao Korni grupu [6]" } },
    { id: "m39", name: "Dušan Kojić Koja", type: "Musician", details: { uloge: ["basist", "vokalist", "autor"], bendovi: ["Šarlo akrobata", "Disciplina kičme"], znacaj: "Radikalna figura beogradskog novog vala i pionir noise-funka [7, 8]" } },
    { id: "m40", name: "Slađana Milošević", type: "Musician", details: { uloge: ["vokalistica", "kantautorica", "multiinstrumentalistica"], znacaj: "Princeza jugoslavenskog rocka; poznata po duetu s Dadom Topićem [9, 10]" } },
    { id: "m41", name: "Kemal Monteno", type: "Musician", details: { uloge: ["vokalist", "skladatelj"], znacaj: "Simbol sarajevske škole šansone; prvi pobjednik festivala 'Vaš šlager sezone' [11, 12]" } },
    { id: "m42", name: "Toma Zdravković", type: "Musician", details: { uloge: ["vokalist", "autor"], znacaj: "Boem i ikona narodne glazbe čije su pjesme postale kavanski klasici [13]" } },
    { id: "m43", name: "Dado Topić", type: "Musician", details: { uloge: ["vokalist", "gitarist", "skladatelj"], znacaj: "Legendarni rock vokalist, vođa grupe Time i suradnik Slađane Milošević na hitu 'Princeza'" } },
    { id: "b17", name: "Film", type: "Band", details: { sjediste: "Zagreb", zanrovi: ["Novi val", "pop rock"], period: "1978–danas", znacaj: "Jedan od nositelja zagrebačkog novog vala; proizašli iz rane faze Azre [14, 15]" } },
    { id: "b18", name: "Haustor", type: "Band", details: { sjediste: "Zagreb", zanrovi: ["Novi val", "reggae", "art rock"], period: "1979–1990", znacaj: "Bend poznat po intelektualnim tekstovima i teatralnom nastupu [16, 17]" } },
    { id: "b19", name: "Leb i sol", type: "Band", details: { sjediste: "Skoplje", zanrovi: ["jazz rock", "ethno rock"], period: "1976–danas", znacaj: "Vrhunski instrumentalisti koji su spojili makedonski melos s rockom [11, 18]" } },
    { id: "m50", name: "Ivica Čuljak (Satan Panonski)", type: "Musician", details: { uloge: ["vokalist", "body art umjetnik", "pjesnik"], instrumenti: ["vokal"], znacaj: "Pionir autodestruktivnog body arta u RH; 'punk-prosvjetitelj'; autor zbirke 'Mentalni ranjenik' [10-12]." } },
    { id: "m51", name: "Gabi Novak", type: "Musician", details: { uloge: ["vokalistica", "interpretatorica šansona"], instrumenti: ["vokal"], znacaj: "Jedna od najpoznatijih pjevačica zabavne glazbe i šansone; dugogodišnja životna i umjetnička partnerica Arsena Dedića [23]." } },
    { id: "m53", name: "Goran Bare", type: "Musician", details: { uloge: ["vokalist", "tekstopisac", "vođa sastava"], instrumenti: ["vokal"], znacaj: "Frontmen rock grupe Majke; prepoznatljiv po sirovoj energiji i duboko osobnim stihovima [34]." } },
    { id: "m46", name: "Boris Dvornik", type: "Musician", details: { uloge: ["glumac", "pjevač"], instrumenti: ["vokal"], znacaj: "Jedan od najvećih glumaca u povijesti ex-YU kinematografije; snimio legendarne glazbene duete i splitske pjesme [24, 35]." } },
    { id: "m47", name: "Dino Dvornik", type: "Musician", details: { uloge: ["vokalist", "skladatelj", "producent"], instrumenti: ["vokal"], znacaj: "Kralj hrvatskog funka; pionir plesne i funk glazbe na ovim prostorima [24, 35]." } }
  ],
  links: [
    { source: "m1", target: "b1", type: "pripadnost", description: "Osnivač, gitarist i glavni autor" },
    { source: "m3", target: "b1", type: "pripadnost", description: "Glavni vokal (1974–1984)" },
    { source: "m5", target: "b1", type: "pripadnost", description: "Vokal na albumu 'Bijelo dugme' (1984)" },
    { source: "m6", target: "b1", type: "pripadnost", description: "Vokal na albumima 'Pljuni i zapjevaj moja Jugoslavijo' i 'Ćiribiribela'" },
    { source: "m2", target: "b2", type: "pripadnost", description: "Frontmen, vokal i gitarist" },
    { source: "m7", target: "b2", type: "pripadnost", description: "Bubnjar" },
    { source: "m8", target: "b2", type: "suradnja", description: "Bio pjevač u ranoj fazi Azre prije osnivanja grupe Film" },
    { source: "m4", target: "b3", type: "pripadnost", description: "Gitarist i vokalist" },
    { source: "m12", target: "b1", type: "rivalstvo/clanstvo", description: "Laza Ristovski prešao iz Smaka u Bijelo dugme 1976., što je bio veliki medijski skandal [2, 28]." },
    { source: "m9", target: "b4", type: "pripadnost", description: "Ženski vokal i zaštitno lice" },
    { source: "m3", target: "s1", type: "sudjelovanje", description: "Vokal u projektu YU Rock Misija" },
    { source: "m11", target: "s1", type: "sudjelovanje", description: "Vlatko Stefanovski odsvirao je gitarski solo na pjesmi 'Za milion godina' [22, 29]." },
    { source: "m9", target: "s1", type: "sudjelovanje", description: "Vokal u YU Rock Misiji" },
    { source: "m13", target: "s1", type: "sudjelovanje", description: "Vokal u YU Rock Misiji" },
    { source: "m10", target: "s1", type: "sudjelovanje", description: "Vokal u YU Rock Misiji" },
    { source: "b1", target: "a2", type: "izdavanje", year: 1979 },
    { source: "b3", target: "a1", type: "izdavanje", description: "Jedan od tri benda na kompilaciji Paket aranžman" },
    { source: "m10", target: "b5", type: "pripadnost", description: "Osnivač, vokalist i glavni autor" },
    { source: "m14", target: "m51", type: "brak", description: "Dugogodišnji bračni i umjetnički partneri [23]." },
    { source: "m10", target: "m14", type: "suradnja", description: "Zajednički bootleg nastup 1987" },
    { source: "b5", target: "a4", type: "izdavanje", year: 1985 },
    { source: "b5", target: "a5", type: "izdavanje", year: 1979 },
    { source: "b5", target: "s2", type: "izdanje_pjesme", description: "Pjesma s albuma 'Istina'" },
    { source: "b5", target: "b1", type: "rivalstvo", description: "Bili su najveći konkurenti na tržištu rock glazbe 80-ih [13, 15]." },
    
    { source: "m15", target: "b6", type: "pripadnost", description: "Glavni skladatelj i vođa Idola" },
    { source: "m16", target: "b7", type: "pripadnost", description: "Osnivač i autor većine hitova Parnog valjka" },
    { source: "m20", target: "m14", type: "suradnja", description: "Skladao glazbu za ključne albume Josipe Lisac" },
    { source: "m21", target: "b1", type: "suradnja", description: "Duško Trifunović napisao je ključne tekstove poput 'Glavni junak jedne knjige' i 'Pristao sam biću sve što hoće' [6, 25]." },
    { source: "m21", target: "m18", type: "suradnja", description: "Autor brojnih tekstova za hitove Zdravka Čolića" },
    { source: "m23", target: "m19", type: "suradnja", description: "Skladateljski motor iza Oliverovih najvećih uspjeha poput 'Galeb i ja' [10, 11]." },
    { source: "m22", target: "b9", type: "suradnja", description: "Marina Tucaković napisala tekst za megahit 'Dodirni mi kolena' [9, 28]." },
    { source: "m1", target: "m18", type: "suradnja", description: "Napisao pjesmu 'Loše vino' za Zdravka Čolića" },
    { source: "m14", target: "m18", type: "suradnja", description: "Arsen Dedić je koautor pjesme 'Loše vino' koju izvodi Čolić" },
    { source: "m2", target: "b7", type: "clanstvo_kratko", description: "Johnny Štulić je nakratko svirao drugu gitaru u Valjku prije uspona Azre [18]." },
    
    { source: "m24", target: "b14", type: "pripadnost", description: "Glavni kompozitor i kompozicijski motor Prljavog kazališta" },
    { source: "m25", target: "b14", type: "pripadnost", description: "Prvi vokalist; pjevao na kultnom albumu 'Crno-bijeli svijet'" },
    { source: "m26", target: "b15", type: "pripadnost", description: "Skladatelj i vokalist Plavog orkestra" },
    { source: "m29", target: "b12", type: "pripadnost", description: "Dugogodišnji vokalist i zaštitno lice Indexa" },
    { source: "m28", target: "b11", type: "pripadnost", description: "Klavijaturistica i ikona EKV-a" },
    { source: "m27", target: "b13", type: "pripadnost", description: "Osnivač i glavni autor Električnog orgazma" },
    { source: "m4", target: "b11", type: "pripadnost", description: "Milan Mladenović osniva EKV nakon raspada Šarlo akrobate" },
    { source: "m8", target: "m27", type: "suradnja", description: "Jura Stublić i Gile sudjelovali u antiratnom projektu Rimtutituki" },
    { source: "m21", target: "b12", type: "suradnja", description: "Napisao tekstove za Indexe, uključujući antologijsku 'Ima neka tajna veza' [22, 26]." },
      { source: "b12", target: "b1", type: "suradnja", description: "Indexi su bili izravni uzor i preteča Bijelom dugmetu" },
    { source: "m20", target: "m36", type: "suradnja", description: "Skladao glazbu za ključne albume Josipe Lisac, uključujući 'Dnevnik jedne ljubavi'" },
    { source: "m1", target: "m14", type: "umjetnicka_suradnja", description: "Bregović i Arsen Dedić koautori su pjesme 'Loše vino' za Zdravka Čolića [7]." },
    { source: "m31", target: "b1", type: "producent_↔_izvodjac", description: "Glavni urednik Jugotona koji je promovirao 'pastirski rock' i novi val [29, 30]." },
    { source: "m32", target: "b16", type: "pripadnost", description: "Hoxha-Sheki bio je basist u bendu Milića Vukašinovića (Vatreni poljubac) [17]." },
    { source: "b8", target: "p1", type: "pripadnost", description: "Vodeći bend pokreta Novi primitivizam [23, 30]." },
    { source: "m1", target: "b15", type: "suradnja", description: "Bregovićev folk-rock zvuk iz 1984. snažno je utjecao na pojavu 'New Partisans' pokreta Plavog orkestra [15, 31]." },
    
    // Nove veze iz finalnog proširenja i ispravci ID-jeva
    { source: "m38", target: "b12", type: "pripadnost", description: "Kornelije Kovač bio je ključni član Indexa prije odlaska u Korni grupu [6]" },
    { source: "m35", target: "b5", type: "pripadnost", description: "Bajaga je bio gitarist Riblje čorbe prije osnivanja Instruktora [3]" },
    { source: "m8", target: "b17", type: "pripadnost", description: "Jura Stublić osnovao Film nakon raskola s Štulićem u Azri [14]" },
    { source: "m11", target: "b1", type: "suradnja", description: "Vlatko Stefanovski gostovao kao gitarist na Dugmetovom albumu 'Uspavanka za Radmilu M.' [21]" },
    { source: "m10", target: "b1", type: "umjetnicka_suradnja", description: "Bora Đorđević pjevao prateće vokale i suautor je pjesme 'Pediculis pubis' [25, 26]." },
    { source: "m1", target: "m18", type: "suradnja", description: "Bregović je skladao neke od najvećih Čolićevih hitova, uključujući 'Loše vino' i 'Pusti, pusti modu' [24, 25]" },
    { source: "m40", target: "m43", type: "suradnja", description: "Slađana Milošević i Dado Topić izveli su kultnu baladu 'Princeza' [10]" },
    { source: "b3", target: "b11", type: "suradnja", description: "Nakon raspada Šarlo akrobate, Milan Mladenović osniva Katarinu II (kasnije EKV) [8, 26]" },
    { source: "b3", target: "m39", type: "suradnja", description: "Nakon Šarlo akrobate, Koja osniva Disciplinu kičme [7, 8]" },
    
    // Nove veze iz nadogradnje arhiv_v3
    { source: "m41", target: "m29", type: "tekstopisac_↔_pjevac", description: "Monteno je napisao 'Bacila je sve niz rijeku' za Davorina, pjesma je o Popovićevoj bivšoj ljubavi [31, 32]." },
    { source: "m9", target: "m35", type: "prijateljstvo/ljubavna_veza", description: "Pjesma 'Voli me još ovu noć' posvećena je Bajagi [33]." },
    { source: "m50", target: "m53", type: "prijateljstvo/utjecaj", description: "Zajednička vinkovačka matrica; pojam 'lajferizam' ili život kao tekst [34]." },
    { source: "m46", target: "m47", type: "obiteljska_veza", description: "Otac i sin; obojica ključne kultne figure [24, 35]." },
    { source: "m24", target: "b14", type: "autorstvo/pjesma", description: "Pjesma 'Tu noć kad si se udavala' inspirirana je Hourom i njegovom bivšom djevojkom [27]." },

    // Poveznice novih popularnih pjesama
    { source: "s3", target: "b2", type: "izdanje_pjesme", description: "Jedan od najvećih vanvremenskih hitova sastava Azra" },
    { source: "s3", target: "m2", type: "autorstvo/pjesma", description: "Balkan je napisao Branimir Štulić Johnny" },
    { source: "s4", target: "b11", type: "izdanje_pjesme", description: "Apokaliptično remek-djelo na albumu 'Samo par godina za nas'" },
    { source: "s4", target: "m4", type: "autorstvo/pjesma", description: "Tekst i muziku napisao Milan Mladenović" },
    { source: "s4", target: "m28", type: "suradnja", description: "Margita Magi Stefanović koautorica je aranžmana i melodije" },
    { source: "s5", target: "b1", type: "izdanje_pjesme", description: "Mega-hit s istoimenog albuma iz 1984. ('Bijelo dugme')" },
    { source: "s5", target: "m1", type: "autorstvo/pjesma", description: "Skladao Goran Bregović inspiriran tradicionalnim melosom" },
    { source: "s5", target: "m5", type: "sudjelovanje", description: "Mladen Vojičić Tifa otpjevao je prepoznatljivi moćni vokal" },
    { source: "s6", target: "b18", type: "izdanje_pjesme", description: "Pjesma s albuma 'Bolero' grupe Haustor" },
    { source: "s6", target: "m17", type: "autorstvo/pjesma", description: "Napisao i otpjevao Darko Rundek" },
    { source: "s7", target: "b6", type: "izdanje_pjesme", description: "Glavni hit Idola, objavljen na Paket aranžmanu" },
    { source: "s7", target: "m15", type: "autorstvo/pjesma", description: "Napisao Vlada Divljan kao satiru socijalističke estetike" },
    { source: "s7", target: "a1", type: "izdanje_pjesme", description: "Pjesma objavljena na kultnoj kompilaciji Paket aranžman" },
    { source: "s8", target: "b8", type: "izdanje_pjesme", description: "Pjesma s kultnog debitantskog albuma 'Das ist Walter'" },
    { source: "s9", target: "b15", type: "izdanje_pjesme", description: "Najveći hit Plavog orkestra s albuma 'Soldatski bal'" },
    { source: "s9", target: "m26", type: "autorstvo/pjesma", description: "Muziku i tekst napisao Saša Lošić Loša" },
    { source: "s10", target: "b12", type: "izdanje_pjesme", description: "Najpoznatija pjesma legendarnih sarajevskih Indexa" },
    { source: "s10", target: "m29", type: "sudjelovanje", description: "Otpjevao neponovljivi vokalista Davorin Popović Pimpek" },
    { source: "s10", target: "m41", type: "autorstvo/pjesma", description: "Glazbu napisao Kemal Monteno" },
    { source: "s11", target: "m36", type: "izdanje_pjesme", description: "Legendarna pjesma s albuma 'Dnevnik jedne ljubavi'" },
    { source: "s11", target: "m20", type: "autorstvo/pjesma", description: "Skladao Karlo Metikoš posebno za Josipu" },
    { source: "s12", target: "m40", type: "sudjelovanje", description: "Otpjevala Slađana Milošević" },
    { source: "s12", target: "m43", type: "sudjelovanje", description: "Otpjevao i koautorirao Dado Topić" },

    // Poveznice novih pjesama s umjetnicima i bendovima
    { source: "s13", target: "m53", type: "autorstvo/pjesma", description: "Pjesmu 'Teške boje' napisao je i izveo Goran Bare sa sastavom Majke" },
    { source: "s13", target: "m31", type: "producent_↔_izvodjac", description: "Diskografsku objavu albuma 'Teške boje' pratio je Siniša Škarica pod okriljem Croatia Recordsa" },
    
    { source: "s14", target: "m47", type: "autorstvo/pjesma", description: "Glazbu za pjesmu skladao je i izveo Dino Dvornik" },
    { source: "s14", target: "m22", type: "autorstvo/pjesma", description: "Tekst za ovaj bezvremenski plesni hit napisala je sestra novog zvuka Marina Tucaković" },
    { source: "s14", target: "m31", type: "producent_↔_izvodjac", description: "Siniša Škarica uočio je revolucionarnu kvalitetu pjesme i odobrio njezino izdanje u Jugotonu" },
    
    { source: "s15", target: "b11", type: "izdanje_pjesme", description: "Zemlja je jedna od najznačajnijih rock himni i simbola sjetnog sastava Ekatarina Velika (EKV)" },
    { source: "s15", target: "m4", type: "autorstvo/pjesma", description: "Napisao Milan Mladenović kao melankoličnu odu slobodi jedne generacije" },
    { source: "s15", target: "m28", type: "suradnja", description: "Margita Magi Stefanović odsvirala je legendarne minimalističke klavijaturističke dionice" },
    
    { source: "s16", target: "m18", type: "izdanje_pjesme", description: "Zdravko Čolić izveo je ovaj bezvremenski klasik na albumu 'Ako priđeš bliže'" },
    { source: "s16", target: "m1", type: "autorstvo/pjesma", description: "Goran Bregović je skladao dirljivu prateću rock-baladnu glazbenu temu" },
    { source: "s16", target: "m14", type: "suradnja", description: "Arsen Dedić napisao je prekrasan poetski i melankoličan tekst o prolaznosti" },
    
    { source: "s17", target: "m19", type: "izdanje_pjesme", description: "Zajednički megahit splitske glazbene scene koji predvodi Oliver Dragojević" },
    { source: "s17", target: "m46", type: "sudjelovanje", description: "Kultni glumac Boris Dvornik sudjeluje sa svojim prepoznatljivim šarmantnim recitalima" },
    { source: "s17", target: "m23", type: "autorstvo/pjesma", description: "Prepoznatljivu i veselu glazbenu temu te aranžman skladao je Zdenko Runjić" },
    
    { source: "s18", target: "b9", type: "izdanje_pjesme", description: "Najveći hit i prijelomna točka u synth-pop karijeri sastava Zana" },
    { source: "s18", target: "m22", type: "autorstvo/pjesma", description: "Kultni i provokativni tekst pun lakih melodija napisala je Marina Tucaković" },
    
    { source: "s19", target: "b1", type: "izdanje_pjesme", description: "Epska, simfonična balada uvrštena na epohalnom albumu 'Bitanga i princeza'" },
    { source: "s19", target: "m1", type: "autorstvo/pjesma", description: "Glazbeni projekt i poetski proplamsaj u potpunosti napisao Goran Bregović" },
    
    { source: "s20", target: "b1", type: "izdanje_pjesme", description: "Najrašireniju i najpopularniju studijsku verziju ove balade izveo je sastav Bijelo dugme" },
    { source: "s20", target: "b12", type: "izdanje_pjesme", description: "Indexi su snimili prvu, zaboravljenu akustičnu verziju pjesme 1974. za televizijski film" },
    { source: "s20", target: "m21", type: "autorstvo/pjesma", description: "Filozofske stihove iz izvorne zatvorske pjesme napisao je veliki pjesnik Duško Trifunović" },
    { source: "s20", target: "s1", type: "tematska_poveznica", description: "Obje pjesme ('Ima neka tajna veza' i 'Za milion godina') bave se metaforom vječnog i nepobjedivog ljudskog spajanja" },

    // Povezivanje izoliranih dijelova u jedinstvenu cjelinu (m50, m53, m46, m47 u centar)
    { source: "m47", target: "m19", type: "suradnja", description: "Dino Dvornik i Oliver Dragojević snimili su upečatljive vokalne improvizacije za splitske festivale te često nastupali uživo" },
    { source: "m46", target: "m19", type: "prijateljstvo/utjecaj", description: "Boris Dvornik i Oliver Dragojević bili su nerazdvojni splitski boemi, prijatelji i umjetnička podrška" },
    { source: "m53", target: "m31", type: "producent_↔_izvodjac", description: "Siniša Škarica je u Croatia Recordsu odobrio i objavio epohalne rane albume Majki ('Razdor' i 'Milost')" },
    { source: "m53", target: "m2", type: "prijateljstvo/utjecaj", description: "Goran Bare ističe Branimira Štulića Johnnyja kao ultimativni rock uzor, a Johnny je hvalio sirovost ranih Majki" },
    { source: "m50", target: "b3", type: "prijateljstvo/utjecaj", description: "Satan Panonski je crpio svoj divlji ekspresionizam i avangardu iz radikalnog post-punka Šarlo akrobate i rane Azrine buntovne faze" },

    // Tematsko, stilsko i tekstualno umrežavanje pjesama (stil_teksta & tematska_poveznica)
    { source: "s4", target: "s15", type: "stil_teksta", description: "EKV-ov specifičan hermetičan i melankoličan izraz; suočavanje s krajem ('Par godina za nas') i sjetni optimizam ('Zemlja')" },
    { source: "s13", target: "s2", type: "stil_teksta", description: "Težak, egzistencijalni stil sa snažnim, potresnim i tamnim biblijskim motivima u 'Teške boje' i 'Pogledaj dom svoj, anđele'" },
    { source: "s3", target: "s8", type: "tematska_poveznica", description: "Ulični bunt, sirovi realizam i portret lokalnog mentaliteta u pjesmama 'Balkan' i 'Zenica blues'" },
    { source: "s9", target: "s16", type: "stil_teksta", description: "Nostalgična ljubavna tuga, salonska boemština i motivi vina/alkohola za ublažavanje boli u 'Bolje biti pijan' i 'Loše vino'" },
    { source: "s10", target: "s16", type: "tematska_poveznica", description: "Motiv melankoličnog i trajnog gubitka prve i najveće ljubavi koja nestaje u prošlosti ('Bacila je sve' i 'Loše vino')" },
    { source: "s12", target: "s11", type: "stil_teksta", description: "Eteričan, visoko sofisticirani melodramatski i umjetnički rock izričaj u 'Princeza' i 'O jednoj mladosti'" },
    { source: "s17", target: "s5", type: "tematska_poveznica", description: "Upečatljiv regionalni folklorni duh ukomponiran u akustični rok ('Nadalina' s primorskim, a 'Lipe cvatu' s kontinentalnim melosom)" },
    { source: "s7", target: "s6", type: "stil_teksta", description: "Socio-politička satira i pobuna; otpor prema društvenom bontonu i strukturama u radovima 'Maljčiki' i 'Ena'" }
  ]
};
