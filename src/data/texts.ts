import { Picture } from "./diseases";
import { googleNavigation } from "../components/utlis/navigation";
import { AppTab, tabRoutes } from "./appTabs";

type text = {
    title1: string;
    title2?: string;
    line1: string;
    line2?: string;
    line3?: string;
}

const welcomeText: text = {
    title1: "Poczuj różnicę",
    title2: "krok po kroku",
    line1: "W PodoCare łączymy specjalistyczną wiedzę z indywidualnym podejściem do każdego klienta.",
    line2: "Bez względu na to, czy zmagasz się z dolegliwościami, czy po prostu chcesz zadbać o profilaktykę - jesteśmy tutaj, by pomóc.",
    line3: "Sprawdź, jak łatwo umówić wizytę i zadbaj o komfort każdego kroku."
}

export default welcomeText;

export type employee = {
    name: string;
    desc: string;
    img: Picture;
}

import mariaImg from "../assets/maria1.png"
import olgaImg from "../assets/olga1edit.jpg"

export const employeeData: employee[] = [{
    name: "Maria",
    desc: "Z doświadczeniem, bezpiecznie i z troską o każdy krok.",
    img: {
        src: mariaImg,
        alt:"Employee"
    } 
},
{
    name: "Olga",
    desc: "Profesjonalnie, z delikatnością i pełnym zaangażowaniem.",
    img: {
        src: olgaImg,
        alt:"Employee"
    }
}]

export type aboutUs = {
    title: string;
    desc: string;
}

export const aboutUsData: aboutUs[] = [
  {
    title: "Nie musisz się znać - my wiemy, co robić",
    desc: "Ty odpoczywasz. My działamy - profesjonalnie i bez kompromisów. Zaufaj doświadczeniu - od momentu wejścia do gabinetu jesteś w dobrych rękach. Ty możesz się zrelaksować, my zajmiemy się wszystkim - dokładnie, skutecznie i z troską.",
  },
  {
    title: "Zaufanie zaczyna się od detali",
    desc: "Dezynfekujemy, sterylizujemy, wymieniamy - zawsze, bez wyjątku. Każdy szczegół ma znaczenie - od jednorazowych narzędzi po czyste powierzchnie. Dbamy o najwyższe standardy, aby każdy mógł czuć się w pełni bezpiecznie.",
  },
  {
    title: "Jakość, która zostaje z Tobą na dłużej",
    desc: "Bo dobre efekty to nie chwilowa ulga, tylko trwała zmiana. Nasze zabiegi to nie szybkie poprawki, ale kompleksowe rozwiązania. Skupiamy się na skuteczności, której efekty naprawdę poczujesz.",
  },
  {
    title: "Nie chodź z problemem - chodź do nas",
    desc: "Nie czekaj, aż drobny dyskomfort przerodzi się w poważny problem. Wcześnie wdrożona pomoc to większy komfort i szybsza ulga - a my jesteśmy tu po to, by Ci to zapewnić.",
  }
];

export type thread = {
  header: string;
  text: string;
}

export const firstAppointmentEntryText: thread = {
    header: "Jak się przygotować?",
    text: "Zastosuj takie zasady higieny, jakie stosujesz na co dzień. Jeśli wizyta w naszym gabinecie przypada np. po pracy lub po szkole, nie martw się na miejscu również odświeżymy Twoje stopy, tak abyś czuła/ czuł się komfortowo. Rano nie nakładaj na stopy żadnych kremów ani maści, może to zaburzyć diagnozowanie problemów stóp."
  }

export type activities ={
  category: string;
  activities: string[];
}

export const firstAppointmentActivities: activities[] = [
  {
    category: "To zrób przed",
    activities: [
      "nosisz okulary korekcyjne? - weź je ze sobą",
      "zastanów się przed wizytą, jak długo trwa schorzenie i czy były już jakieś wcześniejsze metody leczenia",
      "przypomnij sobie na co chorujesz i jakie leki przyjmujesz na stałe",
      "odśwież stopy tak, jak robisz to na co dzień",
      "ubierz się wygodnie tak, aby strój nie powodował Twojego dyskomfortu, zostaniesz poproszony/poproszona o zdjęcie butów i odsłonięcie stóp",
      "zmyj lakier klasyczny z paznokci stóp",
    ]
  },
  {
    category: "Tego nie rób",
    activities: [
      "nie stresuj się :)",
      "nie skracaj paznokci kilka dni przed wizytą",
      "nie ścieraj samodzielnie skóry z podeszwy",
      "tego samego dnia nie nakładaj żadnych nawilżających, czy natłuszczających preparatów",
      "nie usuwaj hybrydy samodzielnie w domu, możesz w ten sposób zniszczyć płytkę (powiadom nas, a my pomożemy w jej usunięciu)",
      'nie stosuj żadnych domowych zabiegów "na wszelki wypadek" dzień przed - pozwól nam ocenić sytuację',
    ]
  }
]

export const firstAppointmentProcess: thread  = {
    header: "Przebieg wizyty",
    text: "Niezależnie od tego jaką usługę wybierzesz, na początku pierwszej wizyty będziemy przeprowadzać wywiad, wypełniając tym samym kartę klienta, zawierającą wszystkie podstawowe dane. Obejrzymy dokładnie Twoje stopy zarówno skórę, jak i paznokcie, aby dokładnie określić schorzenie, które Ciebie dotyczy. Opowiemy jak będzie przebiegała wizyta, jakie będą jej koszty oraz jak długo będzie trwała. Przez okres trwania wizyty będziesz mogła/ mógł zadać wszystkie nurtujące Cię pytania, pomożemy rozwiać wszelkie wątpliwości."
  }


  export type contactRoute = {
    line: string;
    subLine?: string;
    src: string;
    alt: string;
    text: string;
    href: string;
    hrefText: string;
    action?: "call" | "mail" | "navigate" | "route";
    tab?: AppTab;
  }

  import addressIcon from "../assets/c-address.svg"
  import mailIcon from "../assets/c-mail.svg"
  import phoneIcon from "../assets/c-phone.svg"
  import instagramIcon from "../assets/c-ig.svg"
  import facebookIcon from "../assets/c-fb.svg"

export const contactData: contactRoute[] = [
  {
    line: "ul. Warszawska 51/3",
    subLine: "61-028 Poznań",
    src: addressIcon,
    alt: "Address",
    text:"Odwiedź nas",
    href: googleNavigation,
    hrefText:"Zobacz na Google Maps",
    action: "navigate"
  },
  {
    line:"Szybka odpowiedź gwarantowana.",
    src: mailIcon,
    alt: "Mail",
    text:"Napisz",
    href:"",
    hrefText:"podocare.poznan@gmail.com",
    action: "mail",
  },
  {
    line: "W godzinach pracy gabinetu.",
    src: phoneIcon,
    alt: "Phone",
    text:"Zadzwoń",
    href:"",
    hrefText:"+48 725-868-735",
    action: "call",
  },
  {
    line: "Odwiedź nas na Instagramie.",
    src: instagramIcon,
    alt: "Instagram",
    text: AppTab.INSTAGRAM,
    href: tabRoutes[AppTab.INSTAGRAM],
    hrefText:"@podocare.poznan",
    tab: AppTab.INSTAGRAM
  },
  {
    line: "Odwiedź nas na Facebooku.",
    src: facebookIcon,
    alt: "Facebook",
    text: AppTab.FACEBOOK,
    href:tabRoutes[AppTab.FACEBOOK],
    hrefText:"podocare.poznan",
    tab: AppTab.FACEBOOK
  },
]

export const navigationData: thread = {
  header:"Jak do nas dotrzeć?",
  text: "Do naszego gabinetu z łatwością możesz dotrzeć komunikacją miejską - tramwajem nr 6 lub autobusem nr 184. Poruszając się tramwajem należy wysiąść na przystanku św. Michała lub Termalna, natomiast autobusem na przystanku Termalna. Oba przystanki oddalone są od gabinetu o około 500m. Dla przyjezdnych samochodem miejsce parkingowe znajduje się przed budynkiem."
}

export const contactFormData: thread = {
  header: "Napisz do nas!",
  text: "Jeśli chcesz się umówić, bądź skontaktować w innej sprawie użyj tego formularza. Postaramy się odpowiedzieć możliwie najszybciej!"
}

export type textLines = {
  line1: string;
  line2: string;
}

export const zabiegiIntroInformations: textLines = {
  line1: "W przypadku umówienia się na zabieg w niższym zakresie niż wymagają tego stopy, usługa zostanie dostosowana do faktycznych potrzeb i przeprowadzona w odpowiedniej, szerszej wersji, aby zapewnić pełną skuteczność i najlepsze rezultaty.",
  line2: "Spokojnie - wiemy, że wybór może czasem sprawiać trudność, dlatego ostateczna decyzja dotycząca zakresu zabiegu zawsze zostanie podjęta przez podologa podczas wizyty :)"
}