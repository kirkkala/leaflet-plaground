'use client';

import { useEffect, useState } from 'react';
import { useMapIcon } from './map/components/MapIcon';
import dynamic from 'next/dynamic';

// Dynamically import the map components with ssr disabled
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

interface Location {
  name: string;
  position: [number, number];
  message: string;
}

export default function Home() {
  const icon = useMapIcon();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const locations: Location[] = [
    {
      name: '🎡 Linnanmäki',
      position: [60.1873, 24.9402],
      message: 'Suomen vanhin ja suosituin huvipuisto! Täältä löytyy hurjia laitteita ja paljon hauskaa tekemistä.'
    },
    {
      name: '🦁 Korkeasaari Zoo',
      position: [60.1750, 24.9889],
      message: 'Tutustu villieläimiin! Korkeasaaressa voit nähdä yli 150 eläinlajia kaikista maanosista.'
    },
    {
      name: '🐠 SEA LIFE Helsinki',
      position: [60.1630, 24.9555],
      message: 'Sukella vedenalaiseen maailmaan! Täällä näet haita, meritähtiä ja paljon muita mereneläviä.'
    },
    {
      name: '🏛️ Helsingin lasten kaupunki',
      position: [60.1718, 24.9521],
      message: 'Kaupunginmuseossa sijaitseva Lasten kaupunki on hauska paikka oppia Helsingin historiasta leikkien!'
    },
    {
      name: '🏰 Suomenlinna',
      position: [60.1454, 24.9881],
      message: 'Historiallinen merilinnoitus jossa riittää tutkittavaa: tunneleita, tykkejä ja museoita. Kesäisin piknik-retkien suosikki!'
    },
    {
      name: '🎨 Annantalo',
      position: [60.1676, 24.9394],
      message: 'Lasten ja nuorten taidekeskus, jossa järjestetään työpajoja, näyttelyitä ja tapahtumia.'
    },
    {
      name: '🌊 Uimastadion',
      position: [60.1884, 24.9272],
      message: 'Ulkouimala, jossa on useita altaita, hyppytorneja ja lasten kahluuallas. Kesähelteen pelastus!'
    },
    {
      name: '🦆 Töölönlahden puisto',
      position: [60.1762, 24.9349],
      message: 'Kaunis puistoalue keskellä kaupunkia. Täällä voit ruokkia sorsia ja nauttia piknikistä.'
    },
    {
      name: '🎪 Seurasaari',
      position: [60.1852, 24.8867],
      message: 'Ulkoilmamuseo ja luontosaari, jossa voit tutustua vanhoihin rakennuksiin ja nähdä kesyjä oravia!'
    },
    {
      name: '🔬 Tiedekeskus Heureka',
      position: [60.2925, 25.0406],
      message: 'Vantaalla sijaitseva huikea tiedekeskus, jossa voit kokeilla ja oppia uutta interaktiivisissa näyttelyissä.'
    },
    {
      name: '🎭 Nukketeatteri Sampo',
      position: [60.1587, 24.9450],
      message: 'Ihastuttava nukketeatteri, jossa esitetään koko perheen näytelmiä ja järjestetään työpajoja.'
    },
    {
      name: '🎪 Tanssiteatteri Hurjaruuth',
      position: [60.1662, 24.9332],
      message: 'Kaapelitehtaalla toimiva tanssiteatteri, joka tunnetaan erityisesti Talvisirkuksestaan.'
    },
    {
      name: '🎨 HAM Tennispalatsi',
      position: [60.1683, 24.9327],
      message: 'Helsingin taidemuseo, jossa on usein lapsille suunnattuja näyttelyitä ja työpajoja.'
    },
    {
      name: '🌳 Alppiruusupuisto',
      position: [60.1941, 24.9425],
      message: 'Kaunis puisto, joka kukkii upeasti kesäisin. Mukava paikka piknikille ja seikkailuille.'
    },
    {
      name: '🏊‍♂️ Yrjönkadun uimahalli',
      position: [60.1667, 24.9394],
      message: 'Helsingin vanhin uimahalli, jossa on myös lasten uimaopetusta. Upea historiallinen miljöö!'
    },
    {
      name: '🎮 Sugoi JPN Shop',
      position: [60.1698, 24.9384],
      message: 'Japanilainen kauppa Kampissa, täynnä hauskoja leluja, pelejä ja makeisia.'
    },
    {
      name: '🍦 Jäätelötehdas',
      position: [60.1864, 24.9602],
      message: 'Suomen vanhin jäätelötehdas Vallilassa, jossa voi maistella erilaisia jäätelömakuja.'
    },
    {
      name: '🎵 Lastenmusiikkikauppa Termiitti',
      position: [60.1659, 24.9443],
      message: 'Erikoiskauppa täynnä soittimia, lastenmusiikkia ja musiikkileikkejä.'
    },
    {
      name: '🦖 Muumikahvila',
      position: [60.1683, 24.9414],
      message: 'Viihtyisä teemakahvila Forumissa, jossa voit tavata Muumihahmoja ja nauttia herkkuja.'
    },
    {
      name: '🎪 Cirko - Uuden sirkuksen keskus',
      position: [60.1897, 24.9674],
      message: 'Sirkuskeskus Suvilahdessa, jossa järjestetään esityksiä ja sirkuskoulua lapsille.'
    },
    {
      name: '🎨 Ateneum',
      position: [60.1708, 24.9444],
      message: 'Suomen taidemuseo, jossa järjestetään säännöllisesti lasten työpajoja ja opastettuja kierroksia perheille.'
    },
    {
      name: '🎭 Teatterimuseo',
      position: [60.1662, 24.9332],
      message: 'Interaktiivinen museo Kaapelitehtaalla, jossa voi pukeutua, näytellä ja tutustua teatterin maailmaan.'
    },
    {
      name: '🦕 Luonnontieteellinen museo',
      position: [60.1710, 24.9318],
      message: 'Dinosauruksia, mineraaleja ja eläimiä! Täällä pääset tutkimusmatkalle luonnon ihmeisiin.'
    },
    {
      name: '🎨 Designmuseo',
      position: [60.1638, 24.9561],
      message: 'Muotoilun museo järjestää lapsille suunnattuja työpajoja ja näyttelyitä. Hauska paikka tutustua designiin!'
    },
    {
      name: '🌺 Kaisaniemen kasvitieteellinen puutarha',
      position: [60.1747, 24.9443],
      message: 'Trooppinen paratiisi keskellä kaupunkia! Kasvihuoneissa voit nähdä eksoottisia kasveja ympäri vuoden.'
    },
    {
      name: '🎪 Reaktori',
      position: [60.1698, 24.9384],
      message: 'Messukeskuksessa järjestettävä maksuton nuorten tapahtuma hiihtolomalla. Aktiviteetteja ja tekemistä!'
    },
    {
      name: '🎭 Svenska Teatern',
      position: [60.1686, 24.9394],
      message: 'Järjestää säännöllisesti lastennäytelmiä ja musikaaleja myös suomeksi.'
    },
    {
      name: '🎨 Käsityökoulu Robotti',
      position: [60.1873, 24.9516],
      message: 'Järjestää teknologiapainotteisia käsityökursseja ja työpajoja lapsille ja nuorille.'
    },
    {
      name: '🎮 Helsingin kaupunginkirjasto Oodi',
      position: [60.1743, 24.9380],
      message: 'Moderni kirjasto, jossa pelitilat, työpajoja, tapahtumia ja makerspace nuorille.'
    },
    {
      name: '🎭 Q-teatteri',
      position: [60.1864, 24.9516],
      message: 'Esittää säännöllisesti lasten- ja nuortennäytelmiä. Järjestää myös teatterikursseja.'
    },
    {
      name: '🎪 Lasten kulttuurikeskus Aurora',
      position: [60.2219, 24.9391],
      message: 'Järjestää monipuolista kulttuuritoimintaa lapsille ja nuorille Käpylässä.'
    },
    {
      name: '🌳 Kumpulan kasvitieteellinen puutarha',
      position: [60.2027, 24.9571],
      message: 'Kaunis ulkopuutarha, jossa voi tutustua eri kasveihin ja nauttia piknikistä.'
    },
    {
      name: '🎨 Kulttuuritehdas Korjaamo',
      position: [60.1686, 24.9225],
      message: 'Järjestää lastentapahtumia, teatteria ja työpajoja vanhassa raitiovaunuhallissa.'
    },
    {
      name: '🎭 Kansallisteatteri',
      position: [60.1714, 24.9442],
      message: 'Esittää säännöllisesti lastennäytelmiä pienellä näyttämöllä.'
    },
    {
      name: '🎪 Sirkus Huima',
      position: [60.1924, 24.9602],
      message: 'Sirkuskoulu, jossa järjestetään kursseja ja leirejä lapsille ja nuorille.'
    },
    {
      name: '🎮 Arcade Museum Helsinki',
      position: [60.1686, 24.9322],
      message: 'Retropelimuseo, jossa voi pelata klassisia arcade-pelejä.'
    },
    {
      name: '🦁 Korkeasaaren Villieläinsairaala',
      position: [60.1784, 24.9889],
      message: 'Täällä voit tutustua villieläinten hoitoon ja pelastustyöhön.'
    },
    {
      name: '🎨 Emma - Espoon modernin taiteen museo',
      position: [60.1754, 24.8366],
      message: 'Järjestää säännöllisesti lasten työpajoja ja perheille suunnattuja opastuksia.'
    },
    {
      name: '🎭 Espoon Kaupunginteatteri',
      position: [60.1754, 24.8366],
      message: 'Esittää lastennäytelmiä ja järjestää teatterikasvatusta.'
    },
    {
      name: '🎪 Skidit Festarit',
      position: [60.1873, 24.9516],
      message: 'Lasten oma festivaali Kalliossa kesäisin. Musiikkia, sirkusta ja työpajoja!'
    },
    {
      name: '🎨 Virka Galleria',
      position: [60.1698, 24.9352],
      message: 'Kaupungintalon galleria järjestää ilmaisia näyttelyitä ja työpajoja.'
    },
    {
      name: '🎮 Helsingin Pelimuseo',
      position: [60.1662, 24.9332],
      message: 'Suomalaisten videopelikulttuurin museo, jossa voi pelata vanhoja ja uusia pelejä.'
    },
    {
      name: '🌳 Gardenia',
      position: [60.2103, 25.0081],
      message: 'Viherkeidas Viikissä, jossa järjestetään luontokoulua ja puutarha-aktiviteetteja.'
    },
    {
      name: '🎨 Lasten taidekeskus Pikku-Aurora',
      position: [60.1638, 24.7485],
      message: 'Järjestää taidekursseja, näyttelyitä ja tapahtumia lapsille Espoossa.'
    },
    {
      name: '🎪 Flow Circus',
      position: [60.1873, 24.9602],
      message: 'Sirkuskoulu, jossa opetetaan akrobatiaa, jongleerausta ja muita sirkustaitoja.'
    },
    {
      name: '🎮 Game House Suomenoja',
      position: [60.1589, 24.7485],
      message: 'Pelikeskus, jossa voi pelata konsolipelejä ja VR-pelejä.'
    },
    {
      name: '🎨 Vantaan taidemuseo Artsi',
      position: [60.2925, 25.0406],
      message: 'Järjestää työpajoja ja näyttelyitä, joissa saa koskea teoksiin!'
    },
    {
      name: '🦁 Haltialan kotieläintila',
      position: [60.2627, 24.9516],
      message: 'Ilmainen kotieläintila, jossa voi tutustua maatilan eläimiin ja nauttia kahvilan antimista.'
    },
    {
      name: '🎪 Pukinmäen taidetalo',
      position: [60.2422, 24.9883],
      message: 'Järjestää taide- ja sirkusopetusta lapsille ja nuorille.'
    },
    {
      name: '🎨 Annantalon taidekeskus',
      position: [60.1676, 24.9394],
      message: 'Monipuolinen kulttuurikeskus, jossa järjestetään kursseja, työpajoja ja näyttelyitä.'
    },
    {
      name: '🎾 Liikuntamylly',
      position: [60.2154, 25.0083],
      message: 'Valtava sisäliikuntakeskus Myllypurossa. Täällä voi harrastaa kiipeilyä, yleisurheilua, pallopelejä ja paljon muuta!'
    },
    {
      name: '🎪 SuperPark Helsinki',
      position: [60.1686, 24.9322],
      message: 'Sisäaktiviteettipuisto täynnä trampoliineja, seikkailuratoja, pelikenttiä ja hauskoja aktiviteetteja.'
    },
    {
      name: '🎨 Amos Rex',
      position: [60.1701, 24.9366],
      message: 'Moderni taidemuseo kuuluisilla interaktiivisilla näyttelyillään. Ulkona olevat kuplaikkunat ovat jo itsessään elämys!'
    },
    {
      name: '🌳 Lammassaari',
      position: [60.2107, 24.9989],
      message: 'Viikissä sijaitseva luontokohde, jonne pääsee pitkospuita pitkin. Hieno paikka tarkkailla lintuja ja nauttia luonnosta.'
    },
    {
      name: '🎭 Teatteri Hevosenkenkä',
      position: [60.1754, 24.8366],
      message: 'Espoon Tapiolassa sijaitseva lastenteatteri, joka tunnetaan laadukkaista nukketeatteriesityksistään.'
    }
  ];

  const centerPosition: [number, number] = [60.1699, 24.9384];

  return (
    <div className="min-h-screen">
      <style jsx global>{`
        @import 'leaflet/dist/leaflet.css';
      `}</style>

      {isClient && icon ? (
        <MapContainer center={centerPosition} zoom={12} style={{ height: '100vh', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
          />
          {locations.map((location) => (
            <Marker
              key={location.name}
              position={location.position}
              icon={icon}
            >
              <Popup>
                <strong>{location.name}</strong>
                <br />
                {location.message}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      ) : null}
    </div>
  );
}
