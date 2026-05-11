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
    { id: "m1", name: "Goran Bregović", type: "Musician", details: { uloge: ["gitarist", "skladatelj", "vođa sastava", "producent"], instrumenti: ["gitara", "bas-gitara"], znacaj: "Glavni strateg Bijelog dugmeta; pionir folk-rocka i 'pastirskog rocka'; kasnije svjetski priznat skladatelj filmske glazbe" } },
    { id: "m2", name: "Branimir Štulić Johnny", type: "Musician", details: { uloge: ["vokalist", "gitarist", "skladatelj", "tekstopisac"], instrumenti: ["gitara"], znacaj: "Vođa Azre; simbol beskompromisnog novog vala i društvene kritike; kultna figura ex-YU scene" } },
    { id: "m3", name: "Željko Bebek", type: "Musician", details: { uloge: ["vokalist", "basist"], instrumenti: ["vokal", "bas-gitara"], znacaj: "Prvi i najprepoznatljiviji pjevač Bijelog dugmeta; sudionik projekta YU Rock Misija" } },
    { id: "m4", name: "Milan Mladenović", type: "Musician", details: { uloge: ["vokalist", "gitarist", "skladatelj"], instrumenti: ["gitara"], znacaj: "Član Šarlo akrobate i osnivač EKV-a; smatran 'glazbenim bogom' i pjesnikom urbane generacije" } },
    { id: "m5", name: "Mladen Vojičić Tifa", type: "Musician", details: { uloge: ["vokalist"], instrumenti: ["vokal"], znacaj: "Pjevač Bijelog dugmeta, Vatrenog poljupca i Divljih jagoda; prepoznatljiv po hrapavom rock vokalu" } },
    { id: "m6", name: "Alen Islamović", type: "Musician", details: { uloge: ["vokalist", "basist"], instrumenti: ["vokal"], znacaj: "Pjevač Divljih jagoda i kasnije Bijelog dugmeta; sudionik YU Rock Misije" } },
    { id: "m7", name: "Boris Leiner", type: "Musician", details: { uloge: ["bubnjar", "vokalist"], instrumenti: ["bubnjevi"], znacaj: "Dugogodišnji bubnjar Azre; kasnije član sastava Vještice" } },
    { id: "m8", name: "Jura Stublić", type: "Musician", details: { uloge: ["vokalist", "skladatelj"], instrumenti: ["vokal"], znacaj: "Frontmen grupe Film; kratko pjevač Azre; autor antiratnih i ljubavnih himni" } },
    { id: "m9", name: "Marina Perazić", type: "Musician", details: { uloge: ["vokalistica"], instrumenti: ["vokal"], znacaj: "Vokal dua Denis & Denis; seks-simbol 80-ih; pionirka synth-popa u Jugoslaviji" } },
    { id: "m10", name: "Bora Đorđević", type: "Musician", details: { uloge: ["vokalist", "tekstopisac"], instrumenti: ["vokal"], znacaj: "Vođa Riblje čorbe; autor provokativnih socijalnih i političkih stihova" } },
    { id: "m11", name: "Vlatko Stefanovski", type: "Musician", details: { uloge: ["gitarist", "skladatelj"], instrumenti: ["gitara"], znacaj: "Vođa grupe Leb i sol; jedan od najboljih rock gitarista ex-YU; poznat po spoju rocka i makedonskog melosa" } },
    { id: "m12", name: "Laza Ristovski", type: "Musician", details: { uloge: ["klavijaturist"], instrumenti: ["sintisajzer", "klavir"], znacaj: "Ključni klavijaturist Bijelog dugmeta i Smaka; pionir elektroničkog zvuka u rocku" } },
    { id: "m13", name: "Anja Rupel", type: "Musician", details: { uloge: ["vokalistica"], instrumenti: ["vokal"], znacaj: "Liderica slovenskog synth-pop sastava Videosex; sudionica YU Rock Misije" } },
    { id: "m14", name: "Arsen Dedić", type: "Musician", details: { uloge: ["kantautor", "skladatelj"], instrumenti: ["vokal", "klavir", "gitara"], znacaj: "Jedan od najcjenjenijih kantautora inspiriran francuskom šansonom i rockom" } },
    
    { id: "b1", name: "Bijelo dugme", type: "Band", details: { sjediste: "Sarajevo", zanrovi: ["hard rock", "folk rock", "new wave", "pop rock"], period: "1974–1989", znacaj: "Najpopularniji i najprodavaniji sastav u povijesti Jugoslavije; fenomen 'dugmemanije'" } },
    { id: "b2", name: "Azra", type: "Band", details: { sjediste: "Zagreb", zanrovi: ["new wave", "rock"], period: "1977–1988", znacaj: "Najutjecajniji novovalni sastav; poznat po društveno angažiranim tekstovima" } },
    { id: "b3", name: "Šarlo akrobata", type: "Band", details: { sjediste: "Beograd", zanrovi: ["post-punk", "ska", "new wave"], period: "1980–1981", znacaj: "Kultni trio beogradskog novog vala; preteča EKV-a i Discipline kičme" } },
    { id: "b4", name: "Denis & Denis", type: "Band", details: { sjediste: "Rijeka", zanrovi: ["synth-pop"], period: "1982–1988", znacaj: "Najistaknutiji predstavnici jugoslavenskog synth-popa" } },
    { id: "b5", name: "Riblja čorba", type: "Band", details: { sjediste: "Beograd", zanrovi: ["hard rock", "rock"], period: "1978–danas", znacaj: "Jedan od najvažnijih i najpopularnijih rock sastava u povijesti Jugoslavije" } },
    
    { id: "a1", name: "Paket aranžman", type: "Album", details: { izvodjaci: ["Idoli", "Šarlo akrobata", "Električni orgazam"], godina: 1981, znacaj: "Manifest beogradskog novog vala; smatra se jednim od najvažnijih albuma ex-YU rocka" } },
    { id: "a2", name: "Bitanga i princeza", type: "Album", details: { izvodjac: "Bijelo dugme", godina: 1979, znacaj: "Najambiciozniji rad Bijelog dugmeta bez folk utjecaja" } },
    { id: "a3", name: "Odbrana i poslednji dani", type: "Album", details: { izvodjac: "Idoli", godina: 1982, znacaj: "Često proglašavan najboljim jugoslavenskim rock albumom svih vremena" } },
    { id: "a4", name: "Istina", type: "Album", details: { izvodjac: "Riblja čorba", godina: 1985, znacaj: "Album koji sadrži pjesmu 'Pogledaj dom svoj, anđele', proglašenu najboljom rock pjesmom svih vremena" } },
    { id: "a5", name: "Kost u grlu", type: "Album", details: { izvodjac: "Riblja čorba", godina: 1979, znacaj: "Debitantski album sastava" } },
    
    { id: "s1", name: "Za milion godina", type: "Song", details: { izvodjac: "YU Rock Misija", godina: 1985, znacaj: "Humanitarni singl za pomoć gladnima u Africi; ujedinio vrh ex-YU scene" } },
    { id: "s2", name: "Pogledaj dom svoj, anđele", type: "Song", details: { izvodjac: "Riblja čorba", godina: 1985, znacaj: "Kultna rock himna s albuma 'Istina'" } }
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
    { source: "m12", target: "b1", type: "pripadnost", description: "Klavijaturist u dva navrata (1976-78, 1984-89)" },
    { source: "m9", target: "b4", type: "pripadnost", description: "Ženski vokal i zaštitno lice" },
    { source: "m3", target: "s1", type: "sudjelovanje", description: "Vokal u projektu YU Rock Misija" },
    { source: "m11", target: "s1", type: "sudjelovanje", description: "Odigrao solo dionicu na gitari" },
    { source: "m9", target: "s1", type: "sudjelovanje", description: "Vokal u YU Rock Misiji" },
    { source: "m13", target: "s1", type: "sudjelovanje", description: "Vokal u YU Rock Misiji" },
    { source: "m10", target: "s1", type: "sudjelovanje", description: "Vokal u YU Rock Misiji" },
    { source: "b1", target: "a2", type: "izdavanje", year: 1979 },
    { source: "b3", target: "a1", type: "izdavanje", description: "Jedan od tri benda na kompilaciji Paket aranžman" },
    { source: "m10", target: "b5", type: "pripadnost", description: "Osnivač, vokalist i glavni autor" },
    { source: "m10", target: "b1", type: "suradnja", description: "Gostujući vokal na albumu 'Bijelo dugme'" },
    { source: "m10", target: "m14", type: "suradnja", description: "Zajednički bootleg nastup 1987" },
    { source: "b5", target: "a4", type: "izdavanje", year: 1985 },
    { source: "b5", target: "a5", type: "izdavanje", year: 1979 },
    { source: "b5", target: "s2", type: "izdanje_pjesme", description: "Pjesma s albuma 'Istina'" },
    { source: "b5", target: "b1", type: "konkurencija", description: "Glavni konkurenti na sceni 80-ih" }
  ]
};
