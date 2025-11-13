
export interface ContentItem {
  type: 'paragraph' | 'list' | 'nested_list';
  text: string;
  items?: Array<{
    text: string;
    subitems?: string[];
  }>;
}

export interface Section {
    id: number;
    title?: string;
    content: ContentItem[];
}

export interface TermsData {
    title: string;
    sections: Section[];
    dateUpdated: string,
    footer: string;
    promotionTerms?: {
        title: string;
        sections: Section[];
        dateUpdated: string,
        footer: string;
    }
}

export enum TermType {
    GENERAL = 'general',
    PROMOTION = 'promotion'
}

export const termsData: TermsData = {
    title: "REGULAMIN ŚWIADCZENIA USŁUG",
    dateUpdated: "01.11.2025 roku.",
    footer: "REGULAMIN GABINETU PODOCARE V. 1.0 z dnia ",
    sections: [
        {
            id: 1,
            title: "I. POSTANOWIENIA OGÓLNE - INFORMACJA O GABINECIE",
            content: [
                {
                    type: "paragraph",
                    text: '1.	Droga Klientko, Drogi Kliencie masz przed sobą Regulamin, który określa zasady rezerwacji wizyt oraz zasady świadczenia usług podologicznych oferowanych przez Gabinet PodoCare (dalej "Gabinet"), w tym zasady składania reklamacji, podstawy odmowy wykonania usług przez Gabinet. Przed rezerwacją wizyty i realizacją jakiejkolwiek usługi w naszym Gabinecie - prosimy o zapoznanie się z treścią niniejszego Regulaminu. Poprzez dokonanie Rezerwacji Klienta wyraża zgodę na treść niniejszego Regulaminu. Regulamin prezentowany jest również klientowi do wglądu przed rozpoczęciem usługi. Dostępny jest również w widocznym miejscu w Gabinecie.'
                },
                {
                    type: "paragraph",
                    text: '2.	Gabinet prowadzony jest przez Wojciecha Piechowiaka prowadzącego działalność gospodarczą (na podstawie wpisu w Centralnej Ewidencji i Informacji o Działalności Gospodarczej), pod firmą: "PodoCare Wojciech Piechowiak z siedzibą w Poznaniu (61-028), ul. Warszawska 51/3, NIP: 7822883348, REGON: 386225872"; e-mail: podocare.poznan@gmail.com.'
                },
                {
                    type: "paragraph",
                    text: "3.	Klient zobowiązany jest respektować zasady bezpieczeństwa i higieny w Gabinecie, a także postanowienia niniejszego Regulaminu."
                }               
            ]
        },
        {
            id: 2,
            title: "II. KTO MOŻE ZOSTAĆ KLIENTEM GABINETU PODOCARE",
            content: [
                {
                    type: "paragraph",
                    text: "1.	Gabinet świadczy usługi na rzecz osób pełnoletnich powyżej 18. roku życia posiadające pełną zdolność do czynności prawnych."
                },
                {
                    type: "paragraph",
                    text: "2.	Osoby niepełnoletnie lub nieposiadające pełnej zdolności do czynności prawnych mogą skorzystać z naszych usług jedynie za zgodą rodzica/ opiekuna prawnego. Zgoda powinna być udzielona przez rodzica/ opiekuna prawnego osobiście podczas wizyty w Gabinecie. W przypadku braku stosownej zgody możemy odmówić wykonania usługi."
                }
            ]
        },
        {
            id: 3,
            title: "III. ZASADY REZERWACJI WIZYT - POTWIERDZENIE REZERWACJI",
            content: [
                {
                    type: "paragraph",
                    text: "1.	Wizytę w Gabinecie można zarezerwować maksymalnie z __2 miesięcznym wyprzedzeniem__. Brak jest możliwości dokonania rezerwacji z wcześniejszą datą."
                },
                {
                    type: "nested_list",
                    text: "2.	Wizytę w Gabinecie Klient może zarezerwować (określony termin oraz godzina wraz ze wskazaniem usługi i wybranego specjalisty):",
                    items: [
                        {
                            text: 'a)	za pośrednictwem platformy Booksy - aplikacja mobilna lub strona www (dalej "Booksy"),'
                        },
                        {
                            text: "b)	za pośrednictwem social mediów prowadzonych przez Gabinet - Instagram i Facebook,"
                        },
                        {
                            text: "c)	poprzez skontaktowanie się bezpośrednio z Gabinetem pod numerem telefonicznym Gabinetu lub za pośrednictwem wiadomości e-mail: podocare.poznan@gmail.com,"
                        },
                        {
                            text: "d)	osobiście w Gabinecie przy ul. Warszawska 51/3 w Poznaniu. Wybierając określony dostępny termin i godzinę wizyty wraz ze wskazaniem konkretnej usługi. Czas rezerwacji może się różnić zależnie od wybranej usługi."
                        }
                    ]
                },
                {
                    type: "nested_list",
                    text: "3.	Do umówienia wizyty i zawarcia umowy z Gabinetem dochodzi:",
                    items: [
                        {
                            text: "a)	w przypadku rezerwacji wizyty za pośrednictwem Booksy z chwilą potwierdzenia wizyty przez Gabinet (po sprawdzeniu dostępności terminu),"
                        },
                        {
                            text: "b)	w przypadku rezerwacji wizyty w sposób tradycyjny (wiadomość SMS, telefon, e-mail, social media Gabinetu) - z chwilą odesłania stosownego potwierdzenia wizyty przez Gabinet (po sprawdzeniu dostępności terminu),"
                        },
                        {
                            text: "c)	w przypadku rezerwacji wizyty osobiście w Gabinecie - z chwilą ustalenia terminu i wpisania go do kalendarza Gabinetu."
                        },
                    ]
                },
                {
                    type: "paragraph",
                    text: "4.	Gabinet nie gwarantuje, że usługa objęta rezerwacją zostanie w każdym przypadku wykonana przez wybranego przez Klienta specjalistę, niemniej jednak robimy wszystko, aby wyjść naprzeciw oczekiwaniom Klientów. Gabinet zastrzega sobie możliwość zmiany specjalisty świadczącego usługi na rzecz Klienta, bez podania przyczyny."
                }
                ]
        },
        {
            id: 4,
            title: "IV. ZASADY I KOSZTY ODWOŁYWANIA WIZYT - NIEOBECNOŚĆ KLIENTA, SPÓŹNIENIA, CHOROBA",
            content: [
                {
                    type: "paragraph",
                    text: "1.	Wizytę możesz odwołać bezpłatnie (tj. bez obciążeń), do 24 godzin przed planowanym terminem wizyty."
                },
                {
                    type: "paragraph",
                    text: "2.	W przypadku nieobecności lub odwołania wizyty w czasie krótszym niż 24 godziny przed planowanym terminem wizyty - __jako Gabinet będziemy uprawnieni do doliczenia do ceny kolejnej wizyty 80% (wg. Cennika z chwili rezerwacji) wartości zaplanowanej usługi, która nie odbyła się na skutek nieobecności Klienta. (niezależnie od powodu nieobecności)__."
                },
                {
                    type: "paragraph",
                    text: "3.	Dopuszcza się możliwość spóźnienia się klienta o 15 minut, w stosunku do planowanej godziny rozpoczęcia świadczenia usługi."
                },
                {
                    type: "nested_list",
                    text: "4.	W przypadku, gdy spóźnienie ze strony klienta jest większe niż 15 minut Gabinet wedle własnego wyboru:",
                    items: [
                        {
                            text: "a)	dopuszcza rozpoczęcie wizyty niemniej jednak Klient przyjmuje do wiadomości, że zakres usługi objętej rezerwacją może być okrojony w celu zapewnienia zakończenia usługi w czasie, (cena usługi nie zostanie jednak obniżona) lub"
                        },
                        {
                            text: "b)	może odmówić wykonania usługi - jeśli charakter spóźnienia uniemożliwia jej wykonanie nawet w ograniczonym zakresie - i opóźnienie takie potraktować jak nieobecność."
                        }
                    ]
                },
                {
                    type: "nested_list",
                    text: "5.	Punktualność dotyczy również Gabinetu i jego personelu. Gabinet stara się o nią dbać, jednak __w przypadku opóźnienia uniemożliwiającego wykonanie usługi w terminie ustalonym z Klientem (data i godzina)__:",
                    items: [
                        {
                            text: "a)	prosimy Klienta o cierpliwość i informujemy o możliwości rozpoczęcia realizacji usługi tego samego dnia o późniejszej niż planowana godzinie pod warunkiem wyrażenia na to zgody przez klienta,"
                        },
                        {
                            text: "b)	w przypadku, gdy Klient nie wyrazi zgody na oczekiwanie lub zmianę terminu na inną godzinę - Gabinet proponuje wykonanie usługi w pierwszym możliwym dostępnym terminie."
                        }
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "V. ZAKRES USŁUG ŚWIADCZONYCH PRZEZ GABINET",
            content: [
                {
                    type: "paragraph",
                    text: '1.	Gabinet świadczy usługi w zakresie i cenach określonych w cenniku udostępnionym za pośrednictwem platformy Booksy oraz na stronie Gabinetu pod linkiem: [https://podocare.com.pl/#/cennik](https://podocare.com.pl/#/cennik) (dalej "Cennik").'
                },
                {
                    type: "paragraph",
                    text: "2.	Gabinet zastrzega sobie prawo zmiany Cennika, zarówno w ramach: zakresu usług (dodanie nowej usługi, wycofanie z oferty jakiejkolwiek z usług) jak i w zakresie cen wskazanych w Cenniku (obniżenie lub podwyższenie Ceny). Zmiany treści Cennika nie wpływają na rezerwacje dokonane przed wejściem w życie nowej wersji Cennika. Jeśli jednak Klient przed rozpoczęciem wizyty w ramach zarezerwowanego terminu, wybierze inną usługę - dla ustalenia ceny usługi brany pod uwagę będzie Cennik z chwili dokonania zmiany zakresu Rezerwacji, a nie z chwili dokonania pierwotnej Rezerwacji."
                },
                {
                    type: "paragraph",
                    text: "3.	Gabinet oferuje swoim Klientom możliwość skorzystania z usługi premium (dalej „Usługi VIP”). Usługa VIP polega na możliwości rezerwacji i wykonania usługi poza standardowymi godzinami pracy Gabinetu. Cena Usługi VIP wynosi 140% ceny określonej w Cenniku (zmiana Cennika nie wpływa na rezerwacje Usługi VIP dokonanej przez wejściem w życie zmian)."
                },
            ]
        },
        {
            id: 6,
            title: "VI. ZASADY HIGIENY I BEZPIECZEŃSTWA ŚWIADCZENIA USŁUG W GABINECIE - ODMOWA WYKONANIA USŁUGI",
            content: [
                {
                    type: "paragraph",
                    text: "1.	Gabinet zastrzega sobie możliwość odmówienia realizacji usługi w przypadku, gdy klient zjawi się w Gabinecie chory - co może zagrażać zdrowiu pracowników Gabinetu jak i jego pozostałych klientów. __Przypadek taki, traktowany jest jako nieobecność klienta.__"
                },
                {
                    type: "paragraph",
                    text: "2.	Gabinet może ponadto odmówić wykonania usługi w przypadku, gdy występują przeciwskazania medyczne lub w świetle profesjonalnej wiedzy, nie można wykonać usługi wybranej przez klienta, a stan klienta zakwalifikować należy jako wymagający konsultacji i zabiegu ze strony lekarza odpowiedniej specjalizacji."
                },
                {
                    type: "paragraph",
                    text: "3.	Na terenie Gabinetu obowiązuje całkowity zakaz palenia i używania tytoniu oraz wyrobów tytoniowych i nikotynowych, w tym papierosów elektronicznych, oraz innego rodzaju używek i środków odurzających. Jak również obowiązuje całkowity zakaz spożywania własnych napojów alkoholowych."
                },
                {
                    type: "paragraph",
                    text: "4.	Gabinet może odmówić wykonania usługi, gdy Klient odmówi wypełnienia zaprezentowanej mu karty klienta - zwłaszcza jeśli uzyskanie informacji o jakie prosi Gabinet będzie konieczne dla wykonania usługi w sposób bezpieczny i zgodny z zasadami sztuki."
                },
            ]
        },
        {
            id: 7,
            title: "VII. PROCEDURA REKLAMACYJNA",
            content: [
                {
                    type: "paragraph",
                    text: "1.	Klient ma prawo do złożenia reklamacji wykonanej usługi. Dla skuteczności złożenia reklamacji konieczne jest udowodnienie wykonania usługi w Gabinecie w dowolnej formie."
                },
                {
                    type: "paragraph",
                    text: "2.	Reklamację Klient może złożyć w każdej dowolnej formie, w tym w szczególności telefonicznie, za pośrednictwem wiadomości SMS lub wiadomości w social mediach Gabinetu (oficjalne konta). Do reklamacji Klient powinien załączyć zdjęcia - co pozwoli skutecznie zweryfikować zasadnośc reklamacji. "
                },
                {
                    type: "paragraph",
                    text: "3.	Gabinet uznaje reklamacje jedynie w przypadku, gdy wada powstała na skutek okoliczności niezawinionych przez Klienta, a sama reklamacja została zgłoszona w terminie 7 dni kalendarzowych od wykonania usługi."
                },
                {
                    type: "nested_list",
                    text: "4.	Odmowę uznania reklamacji powodują w szczególności:",
                    items: [
                        {
                            text: "a)	stwierdzenie dokonania przez Klienta samodzielnej ingerencji,"
                        },
                        {
                            text: "b)	uszkodzenia mechaniczne spowodowane przez Klienta,",
                        },
                        {
                            text: "c)	działania osób trzecich, w tym innych specjalistów/ podologów."
                        }
                    ]
                },
                {
                    type: "paragraph",
                    text: "5.	Gabinet rozpatruje reklamację niezwłocznie, nie później jednak niż w terminie 14 dni od daty otrzymania reklamacji."
                },
                {
                    type: "paragraph",
                    text: "6.	W przypadku uznania reklamacji, Gabinet wykonuje usługę gwarantująca efekt końcowy na rzecz Klienta bezpłatnie (poprawa usług) lub w przypadku sformułowania takiego żądania przez Klienta - dokonuje zwrotu zapłaconego przez Klienta wynagrodzenia za wykonaną Usługę."
                },
                {
                    type: "paragraph",
                    text: "7.	W przypadku odmowy uznania reklamacji Klientowi przysługuje prawo do odwołania się od tej decyzji w terminie 14 dni. W postępowaniu odwoławczym powyższe postanowienia stosuje się odpowiednio."
                },
                {
                    type: "paragraph",
                    text: "8.	W przypadku kwestionowania jakości wykonania Usługi zaraz po jej wykonaniu, Klient nie jest zwolniony z zapłaty za wykonaną usługę. Ma jednak prawo do złożenia reklamacji."
                },
                {
                    type: "paragraph",
                    text: "9.	Gabinet oświadcza, że nie wyraża zgody na rozwiązanie sporu konsumenckiego pozasądowo - w rozumieniu ustawy z dnia 23 września 2016 roku o pozasądowym rozwiązywaniu sporów konsumenckich (Dz. U. z 2016 r. poz. 1823)."
                },
            ]
        },
        {
            id:8,
            title: "VIII. DANE OSOBOWE",
            content: [
                {
                    type: "paragraph",
                    text: '1.	Szanowny Kliencie zgodnie z treścią rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE, zwanym dalej "RODO", Gabinet przetwarza Twoje dane osobowe. Podanie przez Ciebie danych osobowych jest dobrowolne, lecz niezbędne do zawarcia i wykonania umowy o świadczenie usług kosmetycznych.',
                },
                {
                    type: "paragraph",
                    text: "2.	Klient rezerwując termin oświadcza, iż w sposób jasny i zrozumiały został poinformowany przez Gabinet o przysługujących mu prawach związanych z ochroną danych osobowych, w szczególności o prawie żądania od administratora danych osobowych dostępu do nich, sprostowania, usunięcia lub ograniczenia przetwarzania, wniesienia sprzeciwu wobec przetwarzania, przenoszenia danych, a także o prawie do wystąpienia ze skargą do organu nadzorczego oraz możliwości wycofania zgody na ich przetwarzanie.",
                },
                {
                    type: "paragraph",
                    text: "3.	Klient zobowiązany jest do zapoznania się z klauzulą informacyjną RODO Gabinetu i przystępując do wykonania Usługi potwierdza, że zapoznał się z treścią Klauzuli informacyjnej RODO Gabinetu, która stanowi integralną część umowy o świadczenie usług podologicznych.",
                },
                {
                    type: "nested_list",
                    text: "4.	W przypadku Rezerwacji dokonywanych za pośrednictwem Booksy, informacje dot. przetwarzania danych osobowych Klienta dostępne są pod adresem:",
                    items: [
                        {
                            text: "[https://booksy.com/pl-pl/p/privacy](https://booksy.com/pl-pl/p/privacy)"
                        }
                    ]
                }
            ]
        },
        {
            id: 9,
            title: "IX. POSTANOWIENIA KOŃCOWE",
            content: [
                {
                    type: "paragraph",
                    text: "1.	Prawem właściwym dla Regulaminu oraz zawartej z Gabinetem umowy o świadczenie usług jest prawo polskie."
                },
                {
                    type: "paragraph",
                    text: "2.	Niniejszy Regulamin wchodzi w życie w dniu 01.11.2025 roku i jego postanowienia mają zastosowanie do wszystkich Rezerwacji Usług dokonanych po dniu jego wejścia w życie."
                },
                {
                    type: "paragraph",
                    text: "3.	Gabinet zastrzega sobie prawo do wprowadzenia zmian w Regulaminie, w każdym czasie na zasadach opisanych poniżej."
                },
                {
                    type: "nested_list",
                    text: "4.	Zmiana Regulaminu może nastąpić z następujących przyczyn:",
                    items: [
                        {
                            text: "a)	zmiany przepisów prawa powszechnie obowiązującego w Polsce mających wpływ na treść Regulaminu lub obowiązków Gabinetu względem Klienta,",
                        },
                        {
                            text: "b)	zmian zakresu świadczonych przez Gabinet Usług oraz kwestii dot. procedury reklamacyjnej i zasad pobierania zadatku lub kaucji,",
                        },
                        {
                            text: "c)	zmian redakcyjnych lub językowych,",
                        },
                        {
                            text: "d)	zmian organizacyjnych,",
                        },
                        {
                            text: "e)	ze względów bezpieczeństwa lub ochrony prywatności",
                        },
                    ]
                },
                {
                    type: "paragraph",
                    text: "5.	O dokonanych zmianach w Regulaminie Klient zostanie powiadomiony za pośrednictwem komunikatu na stronie internetowej pod adresem: [https://podocare.com.pl/](https://podocare.com.pl/) najpóźniej na 14 dni przed ich wejściem w życie, chyba że co innego będzie wynikać z powszechnie obowiązujących przepisów prawa. Gabinet może dokonać zmiany Regulaminu bez zachowania terminu, o którym mowa w zdaniu poprzednim, jeżeli wymagają tego przepisy prawa lub jest to niezbędne dla zapewnienia bezpieczeństwa Gabinetu, jego pracowników lub Klientów."
                }
            ]
        }
    ],
    promotionTerms: {
        title:"REGULAMIN PROMOCJI ZOSTAW OPINIĘ O WIZYCIE",
        dateUpdated: "15.09.2025 roku.",
        footer: "REGULAMIN PROMOCJI ZOSTAW OPINIĘ O WIZYCIE z dnia ",
        sections: [
            {
            id: 1,
            title: "I. ORGANIZATOR AKCJI",
            content: [
                {
                    type: "paragraph",
                    text: '1.	Organizatorem promocji jest PodoCare Wojciech Piechowiak z siedzibą w Poznaniu (61-028), ul. Warszawska 51/3, NIP: 7822883348, REGON: 386225872.'
                }            
                ]
            },
            {
                id: 2,
            title: "II. CZAS TRWANIA AKCJI",
            content: [
                {
                    type: "paragraph",
                    text: '1.	Promocja obowiązuje od dnia 15.09.2025 roku do odwołania. Organizator zastrzega sobie prawo do zakończenia akcji w dowolnym momencie.'
                }            
                ]
            },
            {
                id: 3,
            title: "III. ZASADY  PROMOCJI",
            content: [
                {
                    type: "paragraph",
                    text: '1.	Uczestnik promocji, który po wizycie w gabinecie pozostawi opinię o usługach gabinetu w serwisie Google (profil Google Business), otrzymuje rabat w wysokości 5% na kolejną wizytę.'
                },
                {
                    type: "paragraph",
                    text: '2.	Rabat przysługuje wyłącznie osobie, która faktycznie pozostawiła opinię.'
                },
                {
                    type: "paragraph",
                    text: '3.	Rabat naliczany jest jednorazowo i dotyczy jednej kolejnej wizyty.'
                }                
                ]
            },
            {
                id: 4,
            title: "IV. ZAKRES PROMOCJI",
            content: [
                {
                    type: "paragraph",
                    text: '1.	Rabat obejmuje wyłącznie usługi podologiczne.'
                },
                {
                    type: "paragraph",
                    text: '2.	Rabat nie dotyczy zakupu kosmetyków ani produktów dostępnych w gabinecie.'
                },
                {
                    type: "paragraph",
                    text: '3.	Rabat nie łączy się z innymi promocjami i rabatami.'
                }                
                ]
            },
            {
                id: 5,
            title: "V. SPOSÓB NALICZANIA RABATU",
            content: [
                {
                    type: "paragraph",
                    text: '1.	Rabat w wysokości 5% naliczany jest przy rozliczeniu kolejnej wizyty po okazaniu potwierdzenia pozostawienia opinii.'
                },
                {
                    type: "paragraph",
                    text: '2.	Organizator ma prawo do weryfikacji pozostawienia opinii.'
                }             
                ]
            },
            {
                id: 6,
            title: "VI. POSTANOWIENIA KOŃCOWE",
            content: [
                {
                    type: "paragraph",
                    text: '1.	Udział w promocji oznacza akceptację niniejszego regulaminu.'
                },
                {
                    type: "paragraph",
                    text: '2.	Regulamin dostępny jest w gabinecie Organizatora oraz na stronie internetowej www.podocare.com.pl/#/regulamin.'
                },
                {
                    type: "paragraph",
                    text: '3.	W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa polskiego.'
                }                
                ]
            }
        ]
    }
}

export const rodoData: TermsData = {
    title: "POLITYKA PRYWATNOŚCI - RODO",
    dateUpdated: "01.11.2025 roku.",
    footer: "POLITYKA PRYWATNOŚCI GABINETU PODOCARE V. 1.0 z dnia ",
    sections: [
        {
            id: 1,
            content: [
                {
                    type: "paragraph",
                    text: 'Szanowni Państwo, mając na względzie dbałość o właściwe dysponowanie danymi osobowymi zgodnie z treścią rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE, zwanym dalej "RODO" a w szczególności art. 13 i 15 RODO, informuję, że:'
                },
                {
                    type: "paragraph",
                    text: '1.	Administratorem Pani/ Pana danych osobowych jest Wojciech Piechowiak prowadzący działalność gospodarczą "PodoCare Wojciech Piechowiak z siedzibą w Poznaniu (61-028), ul. Warszawska 51/3, NIP: 7822883348, REGON: 386225872".'
                },
                {
                    type: "paragraph",
                    text: "2.	Pani/ Pana dane osobowe przetwarzane będą w celu wykonania umowy, której stroną jest osoba, której dane dotyczą, lub do podjęcia działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy; oraz przetwarzanie jest niezbędne do wypełnienia obowiązku prawnego ciążącego na Administratorze na podstawie art. 6 ust. 1 ppkt. b i c ogólnego rozporządzenia o ochronie danych osobowych z dnia 27 kwietnia 2016 r."
                },
                {
                    type: "paragraph",
                    text: "3.	Odbiorcami Pani/ Pana danych osobowych mogą być podmioty związane umowami."
                },
                {
                    type: "paragraph",
                    text: "4.	Administrator nie planuje przekazywać danych osobowych do państwa trzeciego lub organizacji międzynarodowej."
                },
                {
                    type: "paragraph",
                    text: "5.	Przekazane dane osobowe Administrator będzie przetwarzał do czasu realizacji umowy, oraz przez okres w jakim możliwe jest dochodzenie roszczeń wynikających z wiążącego strony stosunku umownego."
                },
                {
                    type: "nested_list",
                    text: "6.	Zgodnie z art. 15 rozporządzenia RODO, ma Pani/ Pan prawo do potwierdzenia, czy przetwarzane są dane Pani/ Pana dotyczące, a w razie potwierdzenia - prawo do uzyskania dostępu do danych oraz następujących informacji:",
                    items: [
                        {
                            text: "· cele przetwarzania,"
                        },
                        {
                            text: "· kategorie odnośnych danych osobowych, o odbiorcach lub kategoriach odbiorców, którym dane zostaną ujawnione (w szczególności o odbiorcach w państwach trzecich lub organizacjach międzynarodowych),"
                        },
                        {
                            text: "· w miarę możliwości planowany okres przechowywania danych, a gdy nie jest możliwe - kryteria ustalania tego okresu,"
                        },
                        {
                            text: "· o prawie do żądania od Administratora sprostowania, usunięcia lub ograniczenia przetwarzania danych, oraz do wniesienia sprzeciwu wobec takiego przetwarzania,"
                        },
                        {
                            text: "· o prawie wniesienia skargi do organu nadzorczego."
                        },
                    ]
                },
                {
                    type: "paragraph",
                    text: "7.	Ma Pani/ Pan również prawo do kopii danych osobowych przetwarzanych przez Administratora. Za wszelkie kolejne kopie Administrator może pobrać opłaty wynikające z kosztów administracyjnych."
                },
                {
                    type: "paragraph",
                    text: "8.	Zgodnie z art. 16 rozporządzenia RODO, ma Pani/ Pan prawo żądania niezwłocznego sprostowania danych osobowych, które są nieprawidłowe, albo uzupełnienia niekompletnych danych, w tym poprzez przedstawienie dodatkowego oświadczenia."
                },
                {
                    type: "nested_list",
                    text: "9.	Zgodnie z art. 17 rozporządzenia RODO, ma Pani/ Pan prawo żądania od Administratora niezwłocznego usunięcia dotyczących Pani/ Pana danych, a Administrator ma obowiązek je usunąć bez zbędnej zwłoki, jeżeli zachodzi choćby jedna z okoliczności:",
                    items: [
                        {
                            text: "· dane osobowe nie są już niezbędne do celów, w których zostały zebrane lub w inny sposób przetworzone,"
                        },
                        {
                            text: "· osoba, której dane dotyczą, cofnęła zgodę i nie ma innej podstawy prawnej ich przetwarzania,"
                        },
                        {
                            text: "· osoba, której dane dotyczą, wnosi sprzeciw na mocy art. 21 ust. 1 rozporządzenia RODO wobec przetwarzania (sprzeciw osoby zainteresowanej z przyczyn związanych z jej szczególną sytuacją) i nie występują nadrzędne prawnie uzasadnione podstawy przetwarzania lub osoba ta wnosi sprzeciw na mocy art. 21 ust. 2 rozporządzenia RODO (sprzeciw osoby zainteresowanej wobec przetwarzania danych osobowych na potrzeby marketingu bezpośredniego),"
                        },
                        {
                            text: "· dane osobowe były przetwarzane niezgodnie z prawem, dane osobowe muszą zostać usunięte w celu wywiązania się z obowiązku prawnego przewidzianego w prawie Unii lub prawie polskim,"
                        },
                        {
                            text: "· dane osobowe zostały zebrane w związku z oferowaniem usług społeczeństwa informacyjnego."
                        }
                    ]
                },
                {
                    type: "nested_list",
                    text: "10.	Zgodnie z art. 18 rozporządzenia RODO, ma Pani/ Pan prawo żądania od Administratora ograniczenia przetwarzania, gdy:",
                    items: [
                        {
                            text: "· kwestionuje Pani/ Pan prawidłowość danych osobowych - na okres pozwalający Administratorowi sprawdzić ich prawidłowość,"
                        },
                        {
                            text: "· przetwarzanie jest niezgodne z prawem, a Pani/ Pan sprzeciwia się usunięciu danych osobowych, żądając w zamian ograniczenia ich wykorzystywania,"
                        },
                        {
                            text: "· Administrator nie potrzebuje już danych osobowych do celów przetwarzania, ale są one potrzebne Pani/ Panu do ustalenia, dochodzenia lub obrony roszczeń,"
                        },
                        {
                            text: "· wniosła Pani/ wniósł Pan sprzeciw na mocy art. 21 ust. 1 rozporządzenia RODO wobec przetwarzania - do czasu stwierdzenia, czy prawnie uzasadnione podstawy po stronie Administratora są nadrzędne wobec podstaw pańskiego sprzeciwu."
                        }
                    ]
                },
                {
                    type: "paragraph",
                    text: "11.	Zgodnie z art. 21 rozporządzenia RODO, ma Pani/ Pan prawo w dowolnym momencie wnieść sprzeciw - z przyczyn związanych ze szczególną sytuacją - wobec przetwarzania dotyczących Pani/ Pana danych osobowych opartego na art. 6 ust. 1 lit. e lub d (chodzi o przetwarzanie danych w celu wykonania zadania w interesie publicznym lub w ramach władzy publicznej, albo w celach realizacji prawnie uzasadnionych interesów Administratora bądź strony trzeciej), w tym profilowania na podstawie tych przepisów. Administratorowi nie wolno już przetwarzać tych danych osobowych, chyba że wykaże on istnienie ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec interesów, praw i wolności osoby, której dane dotyczą, lub podstaw do ustalenia, dochodzenia lub obrony roszczeń."
                },
                {
                    type: "nested_list",
                    text: "12.	Administrator prowadzi z Panią/Panem korespondencję w zakresie praw określonych w pkt 7-11 niniejszej informacji w zwięzłej, przejrzystej, zrozumiałej i łatwo dostępnej formie, jasnym i prostym językiem:",
                    items: [
                        {
                            text:"· Administrator udziela informacji na piśmie lub w inny sposób, w tym w stosownych przypadkach - elektronicznie, o ile innymi sposobami da się potwierdzić Pani/ Pana tożsamość,"
                        },
                        {
                            text:"· Administrator ułatwia Pani/ Panu wykonywanie wskazanych praw,"
                        },
                        {
                            text:"· Administrator udziela Pani/ Panu informacji o podjętych działaniach bez zbędnej zwłoki, najpóźniej w ciągu miesiąca, a w razie potrzeby - z uwagi na skomplikowany charakter pańskiego żądania - może ten termin wydłużyć o kolejne 2 miesiące, informując o tym Panią/ Pana w ciągu 1 miesiąca od zgłoszenia żądania podając przyczynę opóźnienia,"
                        },
                        {
                            text:"· Jeżeli swoje żądanie w zakresie wskazanych praw złoży Pani/ Pan elektronicznie, Administrator przekaże Pani/ Panu informacje w miarę możliwości elektronicznie, chyba że zażąda Pani/ Pan innej formy,"
                        },
                        {
                            text:"· Jeżeli Administrator nie podejmie działań w związku z Pani/ Pana żądaniem w zakresie wskazanych praw, ma obowiązek zawiadomić Panią/ Pana o tym niezwłocznie, najpóźniej w ciągu 1 miesiąca od otrzymania żądania, podając powody milczenia oraz informację o możliwości wniesienia skargi do organu nadzorczego i skorzystania ze środków ochrony prawnej przed sądem,"
                        },
                        {
                            text:"· Administrator udziela informacji i podejmuje działania w zakresie wskazanych praw co do zasady nieodpłatnie. Jeżeli Pańskie żądania są ewidentnie nieuzasadnione lub nadmierne, w szczególności ze względu na ich ustawiczność, Administrator może pobrać opłatę, uwzględniając koszty administracyjne, albo odmówić podjęcia działań w związku z żądaniem."
                        }
                    ]
                },
                {
                    type: "paragraph",
                    text: "13.	Zgodnie z art. 77 rozporządzenia RODO, ma Pani/ Pan prawo wnieść skargę do organu nadzorczego (prezesa Urzędu Ochrony Danych Osobowych), jeżeli sądzi Pani/ Pan, że przetwarzanie danych osobowych narusza rozporządzenie RODO."
                }                           
            ]
        },
        ]
    }