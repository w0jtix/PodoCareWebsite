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
        days: "czwartek", 
        daysShort: "czw",  
        hours: "08:00 - 14:00",
        hoursShort: "08 - 14"
    },
    { 
        days: "piątek", 
        daysShort: "pt",  
        hours: "08:00 - 16:00",
        hoursShort: "08 - 16"
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