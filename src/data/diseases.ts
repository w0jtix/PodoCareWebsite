type Disease = {
  name: string;
  shortDesc: string;
  folder: string;
  pictures?: Picture[];
}

export type Picture = {
  src: string;
  alt: string;
}

const diseases: Disease[] = [
    {
      name: "Odciski",
      shortDesc:
        "Twarde zgrubienia naskórka powstające w wyniku nadmiernego nacisku lub tarcia. Często dające spore dolegliwości podczas chodzenia.",
      folder: "odciski",
    },
    {
      name: "Modzele",
      shortDesc:
        "Rozległe, żółtawe zrogowacenia skóry występujące najczęściej na podeszwach stóp lub dłoniach. Powstają przez długotrwały nacisk.",
      folder: "modzele",
    },
    {
      name: "Pękające pięty",
      shortDesc:
        "Nadmiernie zrogowaciała i przesuszona skóra pięt z czasem pęka tworząc rozpadliny. Takie miejsca mogą krwawić, sprawiać dyskomfort lub powodować ból.",
      folder: "pekajace_piety",
    },
    {
      name: "Brodawki wirusowe",
      shortDesc:
        'Pot. "kurzajki", to zmiany skórne wywołane przez wirusa HPV. Najczęściej nie powodują bólu. Znajdują się głównie na stopach i dłoniach, mają tendencję do rozprzestrzeniania.',
      folder: "brodawki_wirusowe",
    },
    {
      name: "Onycholiza",
      shortDesc:
        "Oddzielenie się płytki paznokcia od łożyska. Może być spowodowane urazem, infekcją lub chorobami ogólnoustrojowymi.",
      folder: "onycholiza",
    },
    {
      name: "Wrastające paznokcie",
      folder: "wrastajace_paznokcie",
      shortDesc:
        "Stan, w którym krawędź paznokcia wrasta w skórę. Powoduje ból, zaczerwienienie i często prowadzi do stanu zapalnego.",
    },
    {
      name: "Zielona bakteria",
      folder: "zielona_bakteria",
      shortDesc:
        "Infekcja bakteryjna objawiająca się zielonym przebarwieniem paznokcia. Wymaga specjalistycznego leczenia.",
    },
    {
      name: "Pedicure podologiczny",
      shortDesc:
        "Zabieg pielęgnacyjny i leczniczy stóp wykonywany przez specjalistę. Obejmuje usunięcie zrogowaceń, odcisków i korekcję paznokci.",
      folder: "pedicure_podologiczny",
    },
  ];
  
  export default diseases;
  