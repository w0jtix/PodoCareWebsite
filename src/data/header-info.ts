type OpeningHours = {
    days: string;
    daysShort: string;
    hours: string;
    hoursShort: string;
}

export const OPENING_HOURS: OpeningHours[] = [
    { 
        days: "poniedziałek - środa",
        daysShort: "pon - śr",       
        hours: "12:00 - 20:00",
        hoursShort: "12 - 20"
    },
    { 
        days: "czwartek - piątek", 
        daysShort: "czw - pt",  
        hours: "09:00 - 17:00",
        hoursShort: "09 - 17"
    },
];

type Address = {
    street: string;
    city: string;
    zip: string;
    phone: string;
    email: string;
    instagram: string;
    facebook: string;
}

export const ADDRESS: Address = {
    street: "ul. Warszawska 51/3",
    city: "Poznań",
    zip: "61-028",
    phone: "725 - 868 - 735",
    email: "podocare.poznan@gmail.com",
    instagram: "@podocare.poznan",
    facebook: "facebook.com/podocare.poznan",
}