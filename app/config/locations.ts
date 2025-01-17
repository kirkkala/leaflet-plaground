export interface Location {
  id: string;
  name: string;
  position: [number, number];
  message: string;
  category: LocationCategory;
}

export type LocationCategory =
  | 'all'
  | 'fun'
  | 'nature'
  | 'culture'
  | 'sports'
  | 'theatre'
  | 'indoor'
  | 'basketball';

export const categories: Record<LocationCategory, { label: string; emoji: string }> = {
  all: { label: 'Kaikki', emoji: '🗺️' },
  fun: { label: 'Huvipuistot ja aktiviteetit', emoji: '🎡' },
  nature: { label: 'Luonto ja eläimet', emoji: '🌳' },
  culture: { label: 'Kulttuuri ja museot', emoji: '🎨' },
  sports: { label: 'Urheilu ja liikunta', emoji: '🎾' },
  theatre: { label: 'Teatteri ja sirkus', emoji: '🎭' },
  indoor: { label: 'Sisäaktiviteetit', emoji: '🏛️' },
  basketball: { label: 'Koripallokentät', emoji: '🏀' }
};

export const locations: Location[] = [
  {
    id: 'linnanmaki',
    name: 'Linnanmäki',
    position: [60.1873, 24.9402],
    message: 'Suomen vanhin ja suosituin huvipuisto! Täältä löytyy hurjia laitteita ja paljon hauskaa tekemistä.',
    category: 'fun'
  },
  {
    id: 'korkeasaari',
    name: 'Korkeasaari Zoo',
    position: [60.1750, 24.9889],
    message: 'Tutustu villieläimiin! Korkeasaaressa voit nähdä yli 150 eläinlajia kaikista maanosista.',
    category: 'nature'
  },
  {
    id: 'sea-life',
    name: 'SEA LIFE Helsinki',
    position: [60.1630, 24.9555],
    message: 'Sukella vedenalaiseen maailmaan! Täällä näet haita, meritähtiä a paljon muita mereneläviä.',
    category: 'nature'
  },
  {
    id: 'lasten-kaupunki',
    name: 'Helsingin lasten kaupunki',
    position: [60.1718, 24.9521],
    message: 'Kaupunginmuseossa sijaitseva Lasten kaupunki on hauska paikka ppia Helsingin historiasta leikkien!',
    category: 'indoor'
  },
  {
    id: 'suomenlinna',
    name: 'Suomenlinna',
    position: [60.1454, 24.9881],
    message: 'Historiallinen merilinnoitus jossa riittää tutkittavaa: unneleita, tykkejä ja museoita. Kesäisin piknik-retkien suosikki!',
    category: 'culture'
  },
  {
    id: 'annantalo',
    name: 'Annantalo',
    position: [60.1676, 24.9394],
    message: 'Lasten ja nuorten taidekeskus, jossa järjestetään työpajoja, äyttelyitä ja tapahtumia.',
    category: 'culture'
  },
  {
    id: 'uimastadion',
    name: 'Uimastadion',
    position: [60.1884, 24.9272],
    message: 'Ulkouimala, jossa on useita altaita, hyppytorneja ja lasten ahluuallas. Kesähelteen pelastus!',
    category: 'sports'
  },
  {
    id: 'toolonlahden-puisto',
    name: 'Töölönlahden puisto',
    position: [60.1762, 24.9349],
    message: 'Kaunis puistoalue keskellä kaupunkia. Täällä voit ruokkia orsia ja nauttia piknikistä.',
    category: 'nature'
  },
  {
    id: 'seurasaari',
    name: 'Seurasaari',
    position: [60.1852, 24.8867],
    message: 'Ulkoilmamuseo ja luontosaari, jossa voit tutustua vanhoihin akennuksiin ja nähdä kesyjä oravia!',
    category: 'culture'
  },
  {
    id: 'heureka',
    name: 'Tiedekeskus Heureka',
    position: [60.2925, 25.0406],
    message: 'Vantaalla sijaitseva huikea tiedekeskus, jossa voit kokeilla ja ppia uutta interaktiivisissa näyttelyissä.',
    category: 'culture'
  },
  {
    id: 'nukketeatteri-sampo',
    name: 'Nukketeatteri Sampo',
    position: [60.1587, 24.9450],
    message: 'Ihastuttava nukketeatteri, jossa esitetään koko perheen äytelmiä ja järjestetään työpajoja.',
    category: 'theatre'
  },
  {
    id: 'hurjaruuth',
    name: 'Tanssiteatteri Hurjaruuth',
    position: [60.1662, 24.9332],
    message: 'Kaapelitehtaalla toimiva tanssiteatteri, joka tunnetaan rityisesti Talvisirkuksestaan.',
    category: 'theatre'
  },
  {
    id: 'ham-tennispalatsi',
    name: 'HAM Tennispalatsi',
    position: [60.1683, 24.9327],
    message: 'Helsingin taidemuseo, jossa on usein lapsille suunnattuja äyttelyitä ja työpajoja.',
    category: 'sports'
  },
  {
    id: 'alppiruusupuisto',
    name: 'Alppiruusupuisto',
    position: [60.1941, 24.9425],
    message: 'Kaunis puisto, joka kukkii upeasti kesäisin. Mukava paikka iknikille ja seikkailuille.',
    category: 'nature'
  },
  {
    id: 'yrjonkadun-uimahalli',
    name: 'Yrjönkadun uimahalli',
    position: [60.1667, 24.9394],
    message: 'Helsingin vanhin uimahalli, jossa on myös lasten uimaopetusta. pea historiallinen miljöö!',
    category: 'sports'
  },
  {
    id: 'sugoi-jpn',
    name: 'Sugoi JPN Shop',
    position: [60.1698, 24.9384],
    message: 'Japanilainen kauppa Kampissa, täynnä hauskoja leluja, pelejä ja akeisia.',
    category: 'culture'
  },
  {
    id: 'jaatelotehdas',
    name: 'Jäätelötehdas',
    position: [60.1864, 24.9602],
    message: 'Suomen vanhin jäätelötehdas Vallilassa, jossa voi maistella rilaisia jäätelömakuja.',
    category: 'culture'
  },
  {
    id: 'termiitti',
    name: 'Lastenmusiikkikauppa Termiitti',
    position: [60.1659, 24.9443],
    message: 'Erikoiskauppa täynnä soittimia, lastenmusiikkia ja usiikkileikkejä.',
    category: 'culture'
  },
  {
    id: 'muumikahvila',
    name: 'Muumikahvila',
    position: [60.1683, 24.9414],
    message: 'Viihtyisä teemakahvila Forumissa, jossa voit tavata uumihahmoja ja nauttia herkkuja.',
    category: 'culture'
  },
  {
    id: 'cirko',
    name: 'Cirko - Uuden sirkuksen keskus',
    position: [60.1897, 24.9674],
    message: 'Sirkuskeskus Suvilahdessa, jossa järjestetään esityksiä ja irkuskoulua lapsille.',
    category: 'theatre'
  },
  {
    id: 'ateneum',
    name: 'Ateneum',
    position: [60.1708, 24.9444],
    message: 'Suomen taidemuseo, jossa järjestetään säännöllisesti lasten yöpajoja ja opastettuja kierroksia perheille.',
    category: 'culture'
  },
  {
    id: 'teatterimuseo',
    name: 'Teatterimuseo',
    position: [60.1662, 24.9332],
    message: 'Interaktiivinen museo Kaapelitehtaalla, jossa voi pukeutua, äytellä ja tutustua teatterin maailmaan.',
    category: 'theatre'
  },
  {
    id: 'luonnontieteellinen-museo',
    name: 'Luonnontieteellinen museo',
    position: [60.1710, 24.9318],
    message: 'Dinosauruksia, mineraaleja ja eläimiä! Täällä pääset utkimusmatkalle luonnon ihmeisiin.',
    category: 'nature'
  },
  {
    id: 'designmuseo',
    name: 'Designmuseo',
    position: [60.1638, 24.9561],
    message: 'Muotoilun museo järjestää lapsille suunnattuja työpajoja ja äyttelyitä. Hauska paikka tutustua designiin!',
    category: 'culture'
  },
  {
    id: 'kaisaniemen-kasvitieteellinen',
    name: 'Kaisaniemen kasvitieteellinen puutarha',
    position: [60.1747, 24.9443],
    message: 'Trooppinen paratiisi keskellä kaupunkia! Kasvihuoneissa voit ähdä eksoottisia kasveja ympäri vuoden.',
    category: 'nature'
  },
  {
    id: 'reaktori',
    name: 'Reaktori',
    position: [60.1698, 24.9384],
    message: 'Messukeskuksessa järjestettävä maksuton nuorten tapahtuma iihtolomalla. Aktiviteetteja ja tekemistä!',
    category: 'indoor'
  },
  {
    id: 'svenska-teatern',
    name: 'Svenska Teatern',
    position: [60.1686, 24.9394],
    message: 'Järjestää säännöllisesti lastennäytelmiä ja musikaaleja myös uomeksi.',
    category: 'theatre'
  },
  {
    id: 'kasityokoulu-robotti',
    name: 'Käsityökoulu Robotti',
    position: [60.1873, 24.9516],
    message: 'Järjestää teknologiapainotteisia käsityökursseja ja työpajoja apsille ja nuorille.',
    category: 'sports'
  },
  {
    id: 'oodi',
    name: 'Helsingin kaupunginkirjasto Oodi',
    position: [60.1743, 24.9380],
    message: 'Moderni kirjasto, jossa pelitilat, työpajoja, tapahtumia ja akerspace nuorille.',
    category: 'indoor'
  },
  {
    id: 'q-teatteri',
    name: 'Q-teatteri',
    position: [60.1864, 24.9516],
    message: 'Esittää säännöllisesti lasten- ja nuortennäytelmiä. Järjestää yös teatterikursseja.',
    category: 'theatre'
  },
  {
    id: 'aurora',
    name: 'Lasten kulttuurikeskus Aurora',
    position: [60.2219, 24.9391],
    message: 'Järjestää monipuolista kulttuuritoimintaa lapsille ja nuorille äpylässä.',
    category: 'culture'
  },
  {
    id: 'kumpulan-kasvitieteellinen',
    name: 'Kumpulan kasvitieteellinen puutarha',
    position: [60.2027, 24.9571],
    message: 'Kaunis ulkopuutarha, jossa voi tutustua eri kasveihin ja auttia piknikistä.',
    category: 'nature'
  },
  {
    id: 'korjaamo',
    name: 'Kulttuuritehdas Korjaamo',
    position: [60.1686, 24.9225],
    message: 'Järjestää lastentapahtumia, teatteria ja työpajoja vanhassa aitiovaunuhallissa.',
    category: 'theatre'
  },
  {
    id: 'kansallisteatteri',
    name: 'Kansallisteatteri',
    position: [60.1714, 24.9442],
    message: 'Esittää säännöllisesti lastennäytelmiä pienellä näyttämöllä.',
    category: 'theatre'
  },
  {
    id: 'sirkus-huima',
    name: 'Sirkus Huima',
    position: [60.1924, 24.9602],
    message: 'Sirkuskoulu, jossa järjestetään kursseja ja leirejä lapsille ja uorille.',
    category: 'theatre'
  },
  {
    id: 'arcade-museum',
    name: 'Arcade Museum Helsinki',
    position: [60.1686, 24.9322],
    message: 'Retropelimuseo, jossa voi pelata klassisia arcade-pelejä.',
    category: 'indoor'
  },
  {
    id: 'villielainsairaala',
    name: 'Korkeasaaren Villieläinsairaala',
    position: [60.1784, 24.9889],
    message: 'Täällä voit tutustua villieläinten hoitoon ja pelastustyöhön.',
    category: 'nature'
  },
  {
    id: 'emma',
    name: 'Emma - Espoon modernin taiteen museo',
    position: [60.1754, 24.8366],
    message: 'Järjestää säännöllisesti lasten työpajoja ja perheille uunnattuja opastuksia.',
    category: 'culture'
  },
  {
    id: 'espoon-kaupunginteatteri',
    name: 'Espoon Kaupunginteatteri',
    position: [60.1754, 24.8366],
    message: 'Esittää lastennäytelmiä ja järjestää teatterikasvatusta.',
    category: 'theatre'
  },
  {
    id: 'skidit-festarit',
    name: 'Skidit Festarit',
    position: [60.1873, 24.9516],
    message: 'Lasten oma festivaali Kalliossa kesäisin. Musiikkia, sirkusta a työpajoja!',
    category: 'fun'
  },
  {
    id: 'virka-galleria',
    name: 'Virka Galleria',
    position: [60.1698, 24.9352],
    message: 'Kaupungintalon galleria järjestää ilmaisia näyttelyitä ja yöpajoja.',
    category: 'indoor'
  },
  {
    id: 'pelimuseo',
    name: 'Helsingin Pelimuseo',
    position: [60.1662, 24.9332],
    message: 'Suomalaisten videopelikulttuurin museo, jossa voi pelata anhoja ja uusia pelejä.',
    category: 'indoor'
  },
  {
    id: 'gardenia',
    name: 'Gardenia',
    position: [60.2103, 25.0081],
    message: 'Viherkeidas Viikissä, jossa järjestetään luontokoulua ja uutarha-aktiviteetteja.',
    category: 'nature'
  },
  {
    id: 'pikku-aurora',
    name: 'Lasten taidekeskus Pikku-Aurora',
    position: [60.1638, 24.7485],
    message: 'Järjestää taidekursseja, näyttelyitä ja tapahtumia lapsille spoossa.',
    category: 'culture'
  },
  {
    id: 'flow-circus',
    name: 'Flow Circus',
    position: [60.1873, 24.9602],
    message: 'Sirkuskoulu, jossa opetetaan akrobatiaa, jongleerausta ja muita irkustaitoja.',
    category: 'fun'
  },
  {
    id: 'game-house-suomenoja',
    name: 'Game House Suomenoja',
    position: [60.1589, 24.7485],
    message: 'Pelikeskus, jossa voi pelata konsolipelejä ja VR-pelejä.',
    category: 'indoor'
  },
  {
    id: 'artsi',
    name: 'Vantaan taidemuseo Artsi',
    position: [60.2925, 25.0406],
    message: 'Järjestää työpajoja ja näyttelyitä, joissa saa koskea eoksiin!',
    category: 'culture'
  },
  {
    id: 'haltialan-kotielaintila',
    name: 'Haltialan kotieläintila',
    position: [60.2627, 24.9516],
    message: 'Ilmainen kotieläintila, jossa voi tutustua maatilan eläimiin ja auttia kahvilan antimista.',
    category: 'indoor'
  },
  {
    id: 'pukinmaen-taidetalo',
    name: 'Pukinmäen taidetalo',
    position: [60.2422, 24.9883],
    message: 'Järjestää taide- ja sirkusopetusta lapsille ja nuorille.',
    category: 'theatre'
  },
  {
    id: 'annantalo-taidekeskus',
    name: 'Annantalon taidekeskus',
    position: [60.1676, 24.9394],
    message: 'Monipuolinen kulttuurikeskus, jossa järjestetään kursseja, yöpajoja ja näyttelyitä.',
    category: 'culture'
  },
  {
    id: 'liikuntamylly',
    name: 'Liikuntamylly',
    position: [60.2154, 25.0083],
    message: 'Valtava sisäliikuntakeskus Myllypurossa. Täällä voi harrastaa iipeilyä, yleisurheilua, pallopelejä ja paljon muuta!',
    category: 'sports'
  },
  {
    id: 'superpark',
    name: 'SuperPark Helsinki',
    position: [60.1686, 24.9322],
    message: 'Sisäaktiviteettipuisto täynnä trampoliineja, seikkailuratoja, elikenttiä ja hauskoja aktiviteetteja.',
    category: 'indoor'
  },
  {
    id: 'amos-rex',
    name: 'Amos Rex',
    position: [60.1701, 24.9366],
    message: 'Moderni taidemuseo kuuluisilla interaktiivisilla äyttelyillään. Ulkona olevat kuplaikkunat ovat jo itsessään elämys!',
    category: 'culture'
  },
  {
    id: 'lammassaari',
    name: 'Lammassaari',
    position: [60.2107, 24.9989],
    message: 'Viikissä sijaitseva luontokohde, jonne pääsee pitkospuita itkin. Hieno paikka tarkkailla lintuja ja nauttia luonnosta.',
    category: 'nature'
  },
  {
    id: 'teatteri-hevosenkenko',
    name: 'Teatteri Hevosenkenkä',
    position: [60.1754, 24.8366],
    message: 'Espoon Tapiolassa sijaitseva lastenteatteri, joka tunnetaan aadukkaista nukketeatteriesityksistään.',
    category: 'theatre'
  },
  {
    id: 'brahenkentta',
    name: 'Brahenkentän koripallokenttä',
    position: [60.1873, 24.9516],
    message: 'Suosittu ulkokenttä Kalliossa. Kentällä on hyvä asfalttipinta ja useita koreja.',
    category: 'basketball'
  },
  {
    id: 'toolo-basketball',
    name: 'Töölön pallokenttä',
    position: [60.1837, 24.9214],
    message: 'Monipuolinen urheilualue, jossa kaksi täysikokoista ulkokoripallokenttää.',
    category: 'basketball'
  },
  {
    id: 'kamppi-basketball',
    name: 'Kampin liikuntakeskus',
    position: [60.1686, 24.9322],
    message: 'Sisäkoripallokenttä, jossa voi pelata ympäri vuoden. Varattavissa myös yksityiskäyttöön.',
    category: 'basketball'
  },
  {
    id: 'jaahalli-basketball',
    name: 'Nordenskiöldinkadun kenttä',
    position: [60.1889, 24.9272],
    message: 'Jäähallin vieressä sijaitseva ulkokenttä, jossa useita koreja ja hyvä valaistus.',
    category: 'basketball'
  },
  {
    id: 'pirkkola-basketball',
    name: 'Pirkkolan liikuntapuisto',
    position: [60.2343, 24.9214],
    message: 'Sekä sisä- että ulkokenttiä. Sisähallissa täysimittainen pelikenttä katsomoineen.',
    category: 'basketball'
  },
  {
    id: 'kontula-basketball',
    name: 'Kontulan liikuntapuisto',
    position: [60.2367, 25.0824],
    message: 'Uudistettu ulkokenttä ja sisäpelimahdollisuus liikuntahallissa.',
    category: 'basketball'
  },
  {
    id: 'myllypuro-basketball',
    name: 'Myllypuron Pallomylly',
    position: [60.2238, 25.0777],
    message: 'Metropolian kampuksen yhteydessä oleva moderni sisäkoripallokenttä.',
    category: 'basketball'
  },
  {
    id: 'herttoniemi-basketball',
    name: 'Herttoniemen liikuntapuisto',
    position: [60.1919, 25.0431],
    message: 'Kunnostettu ulkokenttä ja koripalloteline. Hyvät pukuhuonetilat.',
    category: 'basketball'
  },
  {
    id: 'namika-areena',
    name: 'Namika Areena',
    position: [60.2343, 24.9214],
    message: 'Pakilan koripallohalli, jossa toimii Namika Helsinki. Täysimittainen kenttä ja hyvät harjoitustilat.',
    category: 'basketball'
  },
  {
    id: 'kisahalli-basketball',
    name: 'Kisahalli',
    position: [60.1736, 24.9277],
    message: 'Historiallinen urheiluhalli Töölössä. Useita koripallokenttiä ja aktiivista seuratoimintaa.',
    category: 'basketball'
  },
  {
    id: 'malmi-basketball',
    name: 'Malmin Palloiluhalli',
    position: [60.2508, 25.0075],
    message: 'Monipuolinen sisäliikuntahalli, jossa useita koripallokenttiä. Aktiivista junioritoimintaa.',
    category: 'basketball'
  },
  {
    id: 'munkkiniemi-basketball',
    name: 'Munkkiniemen yhteiskoulu',
    position: [60.1989, 24.8775],
    message: 'Koulun liikuntasali, jossa toimii aktiivinen koripalloseura MuKi. Hyvät harjoitusolosuhteet.',
    category: 'basketball'
  },
  {
    id: 'tapiolan-urheiluhalli',
    name: 'Tapiolan Urheiluhalli',
    position: [60.1754, 24.8066],
    message: 'Espoon suurin koripallohalli. Täysimittainen kenttä ja katsomo. Hongan kotihalli.',
    category: 'basketball'
  },
  {
    id: 'toppelund-basketball',
    name: 'Toppelundin kenttä',
    position: [60.1608, 24.7785],
    message: 'Haukilahdessa sijaitseva ulkokenttä, jossa kaksi koria ja hyvä asfalttipinta.',
    category: 'basketball'
  },
  {
    id: 'ymca-basketball',
    name: 'YMCA Areena',
    position: [60.1686, 24.9225],
    message: 'Helsingin NMKY:n kotihalli. Laadukas sisähalli jossa järjestetään paljon junioriotteluita.',
    category: 'basketball'
  },
  {
    id: 'vuosaari-basketball',
    name: 'Vuosaaren urheilutalo',
    position: [60.2067, 25.1442],
    message: 'Moderni liikuntakeskus, jossa täysimittainen koripallokenttä ja hyvät harjoitustilat.',
    category: 'basketball'
  },
  {
    id: 'hnmky-areena',
    name: 'Namika Areena',
    position: [60.2420654, 24.9285945],
    message: 'Namika Areena on Helsingin NMKY:n urheiluhalli. Areena palvee monipuolista lasten ja nuorten toimintaa sekä Pakilan peruskoulun liikunnanopetusta.',
    category: 'basketball'
  }
];
