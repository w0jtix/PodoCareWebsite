export enum AppTab {
  STRONA_GLOWNA = "Strona główna",
  USLUGI = "Usługi",
  CENNIK = "Cennik",
  O_NAS = "O nas",
  PRZED_WIZYTA = "Przed Wizytą",
  REGULAMIN = "Regulamin",
  RODO = "RODO",
  KONTAKT = "Kontakt",
  INSTAGRAM = "Instagram",
  FACEBOOK = "Facebook"
}

export const tabRoutes: Record<AppTab, string> = {
    [AppTab.STRONA_GLOWNA]: "/",
    [AppTab.USLUGI]: "/uslugi",
    [AppTab.CENNIK]: "/cennik",
    [AppTab.O_NAS]: "/o-nas",
    [AppTab.PRZED_WIZYTA]: "/przed-wizyta",
    [AppTab.REGULAMIN]: "/regulamin",
    [AppTab.RODO]: "/rodo",
    [AppTab.KONTAKT]: "/kontakt",
    [AppTab.INSTAGRAM]: "https://www.instagram.com/podocare.poznan/",
    [AppTab.FACEBOOK]: "https://www.facebook.com/podocare.poznan",
}