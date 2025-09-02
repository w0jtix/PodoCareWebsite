import { AppTab } from "./appTabs";

export type FaqItem = {
    question: string;
    answer: string;
    actionText?: string;
    serviceName?: string;
    redirectTab?: AppTab;
    booksy?: boolean;
    buttonText?: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Kiedy warto się zgłosić do podologa?",
    answer:
      "Podolog specjalizuje się w diagnozowaniu i leczeniu problemów związanych ze stopami - od odcisków, modzeli i pękających pięt, po wrastające paznokcie i grzybicę. Warto zgłosić się zarówno w przypadku dolegliwości, jak i profilaktycznie, aby na czas zapobiegać wyżej wymienionym problemom.",
  },
  {
    question: "Jak wygląda pierwsza wizyta?",
    answer:
      "Pierwsza wizyta rozpoczyna się od szczegółowego wywiadu medycznego i oceny stanu stóp. Na tej podstawie podolog proponuje odpowiedni plan terapii lub zabiegu, dostosowany do potrzeb klienta. Szczególnie polecamy rozpoczęcie od konsultacji podologicznej która umożliwia dokładne poznanie problemu i dobór właściwej formy terapii w spokojnej, bezpiecznej atmosferze. Dzięki temu dalsze działania mogą być zaplanowane w sposób przemyślany i indywidualnie dopasowany.",
      actionText: "Dowiedz się więcej o konsultacji podologicznej",
      serviceName: "Konsultacja podologiczna",
      buttonText: "Sprawdź"
  },
  {
    question: "Czy zabiegi są bolesne?",
    answer:
      'Nasze zabiegi podologiczne w zdecydowanej większości przypadków są całkowicie bezbolesne. Zdarza się, że mogą powodować niewielki dyskomfort, co zależy od indywidualnej wrażliwości klienta. Zawsze pracujemy z najwyższą starannością, a komfort osoby korzystającej z naszych usług jest dla nas absolutnym priorytetem. To klient wyznacza granicę - w każdym momencie może użyć hasła "stop", a my natychmiast reagujemy i dostosowujemy przebieg zabiegu do jego potrzeb i odczuć.',
  },
  {
    question: "Jak przygotować się do wizyty w gabinecie podologicznym?",
    answer:
      "Na pierwszą wizytę podologiczną wystarczy zadbać o podstawową higienę stóp oraz unikać stosowania kremów i maści na 24 godziny przed spotkaniem. Zalecamy takżem aby nie usuwać samodzielnie zmian ani nie skracaj paznokci. Jeśli posiadasz dokumentację medyczną - zabierz ją ze sobą. Jeśli chcesz dowiedzieć się więcej kliknij w przycisk poniżej.",
      actionText: "Pierwsza wizyta? Sprawdź jak się przygotować",
      redirectTab: AppTab.PRZED_WIZYTA,
      buttonText: "Sprawdź",
  },
  {
    question: "Czy mogę zapisać się na wizytę online?",
    answer:
      "Tak, oferujemy wygodny system rezerwacji online, dzięki któremu możesz szybko i łatwo wybrać dogodny termin wizyty.",
    booksy: true,
    buttonText: "Umów wizytę",
  },
];
