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
  category: string;
}

export default function Home() {
  const icons = useMapIcon();
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const categories = {
    all: '🗺️ Kaikki',
    fun: '🎡 Huvipuistot ja aktiviteetit',
    nature: '🌳 Luonto ja eläimet',
    culture: '🎨 Kulttuuri ja museot',
    sports: '🎾 Urheilu ja liikunta',
    theatre: '🎭 Teatteri ja sirkus',
    indoor: '🏛️ Sisäaktiviteetit'
  };

  const locations: Location[] = [
    {
      name: '🎡 Linnanmäki',
      position: [60.1873, 24.9402],
      message: 'Suomen vanhin ja suosituin huvipuisto! Täältä löytyy hurjia laitteita ja paljon hauskaa tekemistä.',
      category: 'fun'
    },
    {
      name: '🦁 Korkeasaari Zoo',
      position: [60.1750, 24.9889],
      message: 'Tutustu villieläimiin! Korkeasaaressa voit nähdä yli 150 eläinlajia kaikista maanosista.',
      category: 'nature'
    },
    {
      name: '🐠 SEA LIFE Helsinki',
      position: [60.1630, 24.9555],
      message: 'Sukella vedenalaiseen maailmaan! Täällä näet haita, meritähtiä ja paljon muita mereneläviä.',
      category: 'nature'
    },
    {
      name: '🏛️ Helsingin lasten kaupunki',
      position: [60.1718, 24.9521],
      message: 'Kaupunginmuseossa sijaitseva Lasten kaupunki on hauska paikka oppia Helsingin historiasta leikkien!',
      category: 'indoor'
    },
    {
      name: '🏰 Suomenlinna',
      position: [60.1454, 24.9881],
      message: 'Historiallinen merilinnoitus jossa riittää tutkittavaa: tunneleita, tykkejä ja museoita. Kesäisin piknik-retkien suosikki!',
      category: 'culture'
    },
    {
      name: '🎨 Annantalo',
      position: [60.1676, 24.9394],
      message: 'Lasten ja nuorten taidekeskus, jossa järjestetään työpajoja, näyttelyitä ja tapahtumia.',
      category: 'culture'
    },
    {
      name: '🌊 Uimastadion',
      position: [60.1884, 24.9272],
      message: 'Ulkouimala, jossa on useita altaita, hyppytorneja ja lasten kahluuallas. Kesähelteen pelastus!',
      category: 'sports'
    },
    {
      name: '🦆 Töölönlahden puisto',
      position: [60.1762, 24.9349],
      message: 'Kaunis puistoalue keskellä kaupunkia. Täällä voit ruokkia sorsia ja nauttia piknikistä.',
      category: 'nature'
    },
    {
      name: '🎪 Seurasaari',
      position: [60.1852, 24.8867],
      message: 'Ulkoilmamuseo ja luontosaari, jossa voit tutustua vanhoihin rakennuksiin ja nähdä kesyjä oravia!',
      category: 'culture'
    },
    {
      name: '🔬 Tiedekeskus Heureka',
      position: [60.2925, 25.0406],
      message: 'Vantaalla sijaitseva huikea tiedekeskus, jossa voit kokeilla ja oppia uutta interaktiivisissa näyttelyissä.',
      category: 'culture'
    },
    {
      name: '🎭 Nukketeatteri Sampo',
      position: [60.1587, 24.9450],
      message: 'Ihastuttava nukketeatteri, jossa esitetään koko perheen näytelmiä ja järjestetään työpajoja.',
      category: 'theatre'
    },
    {
      name: '🎪 Tanssiteatteri Hurjaruuth',
      position: [60.1662, 24.9332],
      message: 'Kaapelitehtaalla toimiva tanssiteatteri, joka tunnetaan erityisesti Talvisirkuksestaan.',
      category: 'theatre'
    },
    {
      name: '🎨 HAM Tennispalatsi',
      position: [60.1683, 24.9327],
      message: 'Helsingin taidemuseo, jossa on usein lapsille suunnattuja näyttelyitä ja työpajoja.',
      category: 'sports'
    },
    {
      name: '🌳 Alppiruusupuisto',
      position: [60.1941, 24.9425],
      message: 'Kaunis puisto, joka kukkii upeasti kesäisin. Mukava paikka piknikille ja seikkailuille.',
      category: 'nature'
    },
    {
      name: '🏊‍♂️ Yrjönkadun uimahalli',
      position: [60.1667, 24.9394],
      message: 'Helsingin vanhin uimahalli, jossa on myös lasten uimaopetusta. Upea historiallinen miljöö!',
      category: 'sports'
    },
    {
      name: '🎮 Sugoi JPN Shop',
      position: [60.1698, 24.9384],
      message: 'Japanilainen kauppa Kampissa, täynnä hauskoja leluja, pelejä ja makeisia.',
      category: 'culture'
    },
    {
      name: '🍦 Jäätelötehdas',
      position: [60.1864, 24.9602],
      message: 'Suomen vanhin jäätelötehdas Vallilassa, jossa voi maistella erilaisia jäätelömakuja.',
      category: 'culture'
    },
    {
      name: '🎵 Lastenmusiikkikauppa Termiitti',
      position: [60.1659, 24.9443],
      message: 'Erikoiskauppa täynnä soittimia, lastenmusiikkia ja musiikkileikkejä.',
      category: 'culture'
    },
    {
      name: '🦖 Muumikahvila',
      position: [60.1683, 24.9414],
      message: 'Viihtyisä teemakahvila Forumissa, jossa voit tavata Muumihahmoja ja nauttia herkkuja.',
      category: 'culture'
    },
    {
      name: '🎪 Cirko - Uuden sirkuksen keskus',
      position: [60.1897, 24.9674],
      message: 'Sirkuskeskus Suvilahdessa, jossa järjestetään esityksiä ja sirkuskoulua lapsille.',
      category: 'theatre'
    },
    {
      name: '🎨 Ateneum',
      position: [60.1708, 24.9444],
      message: 'Suomen taidemuseo, jossa järjestetään säännöllisesti lasten työpajoja ja opastettuja kierroksia perheille.',
      category: 'culture'
    },
    {
      name: '🎭 Teatterimuseo',
      position: [60.1662, 24.9332],
      message: 'Interaktiivinen museo Kaapelitehtaalla, jossa voi pukeutua, näytellä ja tutustua teatterin maailmaan.',
      category: 'theatre'
    },
    {
      name: '🦕 Luonnontieteellinen museo',
      position: [60.1710, 24.9318],
      message: 'Dinosauruksia, mineraaleja ja eläimiä! Täällä pääset tutkimusmatkalle luonnon ihmeisiin.',
      category: 'nature'
    },
    {
      name: '🎨 Designmuseo',
      position: [60.1638, 24.9561],
      message: 'Muotoilun museo järjestää lapsille suunnattuja työpajoja ja näyttelyitä. Hauska paikka tutustua designiin!',
      category: 'culture'
    },
    {
      name: '🌺 Kaisaniemen kasvitieteellinen puutarha',
      position: [60.1747, 24.9443],
      message: 'Trooppinen paratiisi keskellä kaupunkia! Kasvihuoneissa voit nähdä eksoottisia kasveja ympäri vuoden.',
      category: 'nature'
    },
    {
      name: '🎪 Reaktori',
      position: [60.1698, 24.9384],
      message: 'Messukeskuksessa järjestettävä maksuton nuorten tapahtuma hiihtolomalla. Aktiviteetteja ja tekemistä!',
      category: 'indoor'
    },
    {
      name: '🎭 Svenska Teatern',
      position: [60.1686, 24.9394],
      message: 'Järjestää säännöllisesti lastennäytelmiä ja musikaaleja myös suomeksi.',
      category: 'theatre'
    },
    {
      name: '🎨 Käsityökoulu Robotti',
      position: [60.1873, 24.9516],
      message: 'Järjestää teknologiapainotteisia käsityökursseja ja työpajoja lapsille ja nuorille.',
      category: 'sports'
    },
    {
      name: '🎮 Helsingin kaupunginkirjasto Oodi',
      position: [60.1743, 24.9380],
      message: 'Moderni kirjasto, jossa pelitilat, työpajoja, tapahtumia ja makerspace nuorille.',
      category: 'indoor'
    },
    {
      name: '🎭 Q-teatteri',
      position: [60.1864, 24.9516],
      message: 'Esittää säännöllisesti lasten- ja nuortennäytelmiä. Järjestää myös teatterikursseja.',
      category: 'theatre'
    },
    {
      name: '🎪 Lasten kulttuurikeskus Aurora',
      position: [60.2219, 24.9391],
      message: 'Järjestää monipuolista kulttuuritoimintaa lapsille ja nuorille Käpylässä.',
      category: 'culture'
    },
    {
      name: '🌳 Kumpulan kasvitieteellinen puutarha',
      position: [60.2027, 24.9571],
      message: 'Kaunis ulkopuutarha, jossa voi tutustua eri kasveihin ja nauttia piknikistä.',
      category: 'nature'
    },
    {
      name: '🎨 Kulttuuritehdas Korjaamo',
      position: [60.1686, 24.9225],
      message: 'Järjestää lastentapahtumia, teatteria ja työpajoja vanhassa raitiovaunuhallissa.',
      category: 'theatre'
    },
    {
      name: '🎭 Kansallisteatteri',
      position: [60.1714, 24.9442],
      message: 'Esittää säännöllisesti lastennäytelmiä pienellä näyttämöllä.',
      category: 'theatre'
    },
    {
      name: '🎪 Sirkus Huima',
      position: [60.1924, 24.9602],
      message: 'Sirkuskoulu, jossa järjestetään kursseja ja leirejä lapsille ja nuorille.',
      category: 'theatre'
    },
    {
      name: '🎮 Arcade Museum Helsinki',
      position: [60.1686, 24.9322],
      message: 'Retropelimuseo, jossa voi pelata klassisia arcade-pelejä.',
      category: 'indoor'
    },
    {
      name: '🦁 Korkeasaaren Villieläinsairaala',
      position: [60.1784, 24.9889],
      message: 'Täällä voit tutustua villieläinten hoitoon ja pelastustyöhön.',
      category: 'nature'
    },
    {
      name: '🎨 Emma - Espoon modernin taiteen museo',
      position: [60.1754, 24.8366],
      message: 'Järjestää säännöllisesti lasten työpajoja ja perheille suunnattuja opastuksia.',
      category: 'culture'
    },
    {
      name: '🎭 Espoon Kaupunginteatteri',
      position: [60.1754, 24.8366],
      message: 'Esittää lastennäytelmiä ja järjestää teatterikasvatusta.',
      category: 'theatre'
    },
    {
      name: '🎪 Skidit Festarit',
      position: [60.1873, 24.9516],
      message: 'Lasten oma festivaali Kalliossa kesäisin. Musiikkia, sirkusta ja työpajoja!',
      category: 'fun'
    },
    {
      name: '🎨 Virka Galleria',
      position: [60.1698, 24.9352],
      message: 'Kaupungintalon galleria järjestää ilmaisia näyttelyitä ja työpajoja.',
      category: 'indoor'
    },
    {
      name: '🎮 Helsingin Pelimuseo',
      position: [60.1662, 24.9332],
      message: 'Suomalaisten videopelikulttuurin museo, jossa voi pelata vanhoja ja uusia pelejä.',
      category: 'indoor'
    },
    {
      name: '🌳 Gardenia',
      position: [60.2103, 25.0081],
      message: 'Viherkeidas Viikissä, jossa järjestetään luontokoulua ja puutarha-aktiviteetteja.',
      category: 'nature'
    },
    {
      name: '🎨 Lasten taidekeskus Pikku-Aurora',
      position: [60.1638, 24.7485],
      message: 'Järjestää taidekursseja, näyttelyitä ja tapahtumia lapsille Espoossa.',
      category: 'culture'
    },
    {
      name: '🎪 Flow Circus',
      position: [60.1873, 24.9602],
      message: 'Sirkuskoulu, jossa opetetaan akrobatiaa, jongleerausta ja muita sirkustaitoja.',
      category: 'fun'
    },
    {
      name: '🎮 Game House Suomenoja',
      position: [60.1589, 24.7485],
      message: 'Pelikeskus, jossa voi pelata konsolipelejä ja VR-pelejä.',
      category: 'indoor'
    },
    {
      name: '🎨 Vantaan taidemuseo Artsi',
      position: [60.2925, 25.0406],
      message: 'Järjestää työpajoja ja näyttelyitä, joissa saa koskea teoksiin!',
      category: 'culture'
    },
    {
      name: '🦁 Haltialan kotieläintila',
      position: [60.2627, 24.9516],
      message: 'Ilmainen kotieläintila, jossa voi tutustua maatilan eläimiin ja nauttia kahvilan antimista.',
      category: 'indoor'
    },
    {
      name: '🎪 Pukinmäen taidetalo',
      position: [60.2422, 24.9883],
      message: 'Järjestää taide- ja sirkusopetusta lapsille ja nuorille.',
      category: 'theatre'
    },
    {
      name: '🎨 Annantalon taidekeskus',
      position: [60.1676, 24.9394],
      message: 'Monipuolinen kulttuurikeskus, jossa järjestetään kursseja, työpajoja ja näyttelyitä.',
      category: 'culture'
    },
    {
      name: '🎾 Liikuntamylly',
      position: [60.2154, 25.0083],
      message: 'Valtava sisäliikuntakeskus Myllypurossa. Täällä voi harrastaa kiipeilyä, yleisurheilua, pallopelejä ja paljon muuta!',
      category: 'sports'
    },
    {
      name: '🎪 SuperPark Helsinki',
      position: [60.1686, 24.9322],
      message: 'Sisäaktiviteettipuisto täynnä trampoliineja, seikkailuratoja, pelikenttiä ja hauskoja aktiviteetteja.',
      category: 'indoor'
    },
    {
      name: '🎨 Amos Rex',
      position: [60.1701, 24.9366],
      message: 'Moderni taidemuseo kuuluisilla interaktiivisilla näyttelyillään. Ulkona olevat kuplaikkunat ovat jo itsessään elämys!',
      category: 'culture'
    },
    {
      name: '🌳 Lammassaari',
      position: [60.2107, 24.9989],
      message: 'Viikissä sijaitseva luontokohde, jonne pääsee pitkospuita pitkin. Hieno paikka tarkkailla lintuja ja nauttia luonnosta.',
      category: 'nature'
    },
    {
      name: '🎭 Teatteri Hevosenkenkä',
      position: [60.1754, 24.8366],
      message: 'Espoon Tapiolassa sijaitseva lastenteatteri, joka tunnetaan laadukkaista nukketeatteriesityksistään.',
      category: 'theatre'
    }
  ];

  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || location.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleLocationClick = (location: Location) => {
    setActiveLocation(location);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Search and Filter Bar */}
      <div className="p-4 bg-white shadow-md z-10">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Etsi paikkoja..."
            className="p-2 border rounded flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border rounded"
          >
            {Object.entries(categories).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Locations List */}
        <div className="w-1/3 bg-white overflow-y-auto h-[calc(100vh-64px)] shadow-md z-10">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Kohteet ({filteredLocations.length})</h2>
            {filteredLocations.map(location => (
              <div
                key={location.name}
                className={`p-3 rounded cursor-pointer hover:bg-gray-100 mb-2 ${
                  activeLocation?.name === location.name ? 'bg-blue-50' : ''
                }`}
                onClick={() => handleLocationClick(location)}
              >
                <h3 className="font-bold">{location.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="flex-1">
          {isClient && icons.default && icons.highlighted ? (
            <MapContainer
              center={activeLocation?.position || [60.1699, 24.9384]}
              zoom={activeLocation ? 14 : 12}
              style={{ height: 'calc(100vh - 64px)', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
              />
              {filteredLocations.map((location) => (
                <Marker
                  key={location.name}
                  position={location.position}
                  icon={icons.default && icons.highlighted ?
                    (location.name === activeLocation?.name ? icons.highlighted : icons.default)
                    : undefined}
                  eventHandlers={{
                    click: () => handleLocationClick(location)
                  }}
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
      </div>
    </div>
  );
}
