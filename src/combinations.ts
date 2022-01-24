/* enum Frequency {
  Rare = "Rare",
  Unique = "Unique",
  Common = "Common",
}

enum Setting {
  Physical = "Physical",
  Digital = "Digital",
}

enum Medium {
  Email = "Email",
  Phone = "Phone",

  Letter = "Brief",
  App = "App",
}

export interface Cause {
  event: string;
  frequency: Frequency;
  setting: Setting;
}

export interface Effect {
  event: string;
  medium: Medium;
}
 */
/* export const products = [
  "Angebote auf Wunsch",
  "Abholungseinladung bearbeiten",
  "Adressänderung mit Nachsendung",
  "E-Post Office",
  "Meine Sendungen",
  "pick@home",
  "Post umleiten",
  "Sendungen verfolgen",
  "WebStamp",
  "App Post",
  "PostCard Creator",
];
 */
export const actions = [
  "logt sich auf underer Webseite ein", //"logt sich bei Post.ch ein",
  "ruft den Kundendienst an",
  "besucht eine Filiale", //"besucht eine Post-Filiale",
  "öffnet die PCC App", //"öffnet die PostCard-Creator App",
  "chattet mit dem Kundendienst",
  "schreibt uns eine Email", //"schreibt der Post eine Email",
  "meldet sich beim Kundenberater",
  "schreibt dem Chatbot eine Nachricht",
  "sendet eine Whatsapp-Nachricht",
  "kommentiert einen Tweet", //"kommentiert einen Tweet der Post",
];

export const timings = [
  "zum 1. Mal",
  "zum 5. Mal diesen Monat",
  "zum 3. Mal diese Woche",
  "zum 10. Mal dieses Jahr",
  "zum 3. Mal dieses Jahr",
  "zum 7. Mal dieses Semester",
];

export const reasons = [
  "um seinen/ihren Umzug zu melden",
  "um einen Paket-Schadenfall zu melden",
  "um Briefmarken zu kaufen",
  "um die Filial-Öffnungszeiten zu prüfen",
  "um nach seinem/ihrem Kontostand zu fragen",
  "um einen Postboten zu loben",
  "um ein Paket zu versenden",
  "um einen Brief zu versenden",
  "um sich über WebStamp zu erkundigen",
  "um sich für den Service zu bedanken",
  "um eine Frankierlizenz zu bestellen",
  "um einen PromoPost-Auftrag zu erteilen",
  "um Sendungsdetails zu erfragen",
  "um sich für ein Webinar anzumelden",
  "um ein Paket ins Ausland zu schicken",
  "um den Preis für Expresssendungen zu prüfen",
  "um ein Paket weiterzuleiten",
  "um ein Postfach zu kündigen",
  "um eine Vormallt zu erteilen",
  "um neuen Abholschein zu bestellen",
];

export const mediums = [
  "schickt eine Email",
  "schickt eine Abfolge von Emails",
  "versendet einen Brief",
  "ändert den Inhalt der Webseite", //"ändert den Inhalt der Post.ch-Webseite",
  "reagiert mit einer SMS",
  "ruft am nächsten Vormittag an",
  "leitet die Anfrage intern weiter",
  "schickt erst eine SMS dann eine Email",
  "schickt eine physiche Grusskarte",
  "schickt erst eine Email dann einen Brief",
  "schickt Terminvorschläge",
];

export const reactions = [
  "um alle Fragen zu beantworten.",
  "um über die nächsten Schritte zu informieren.",
  "um ein attraktives Angebot zu unterbreiten.",
  "um auf passende Produkte aufmerksam zu machen.",
  "um sich für den Kontakt zu bedanken.",
  "um nach der Zufriedenheit zu fragen.",
  "um Abklärungen zu starten.",
  "um weitere Informationen zu beschaffen.",
  "um persönlich zu beraten.",
  "um über die PCC App zu informieren.", //"um über die PostCard-Creator App zu informieren.",
  "um das Anliegen zu bestätigen.",
  "um auf die App aufmerksam zu machen.", //"um auf die Post-App aufmerksam zu machen.",
];
/* 
export const causes: Cause[] = [
  {
    event: "Packet ist unterwegs",
    frequency: Frequency.Common,
    setting: Setting.Online,
  },
  {
    event: "Umzug",
    frequency: Frequency.Unique,
    setting: Setting.Online,
  },
  {
    event: "Abholungsschein",
    frequency: Frequency.Rare,
    setting: Setting.Physical,
  },
  {
    event: "Meine Sendungen",
    frequency: Frequency.Common,
    setting: Setting.Online,
  },
  {
    event: "KLP Login",
    frequency: Frequency.Common,
    setting: Setting.Online,
  },
  {
    event: "Neuer MyPost24-Standort in der Nähe",
    frequency: Frequency.Unique,
    setting: Setting.Physical,
  },
  {
    event: "Stoppkleber",
    frequency: Frequency.Unique,
    setting: Setting.Physical,
  },
];
 */
/* export const getFrequency = (f: Frequency) => {
  let available: string[];
  console.log(`Frequency is ${f}`);
  switch (f) {
    case Frequency.Common:
      available = [
        "zum 5. Mal diesen Monat",
        "zum 3. Mal diese Woche",
        "zum 10. Mal dieses Semester",
        "zum 10. Mal dieses Jahr",
      ];
      break;
    case Frequency.Rare:
      available = ["zum 3. Mal dieses Jahr", "zum 2. Mal dieses Semester"];
      break;
    case Frequency.Unique:
      available = ["zum 1. Mal"];
  }
  return available[Math.floor(Math.random() * available.length)];
};

export const getMedium = (s: Setting) => {
  const r = Math.random();
  let m: Medium;
  if (s === Setting.Physical) {
    m = r < 0.6 ? Medium.Letter : r < 0.9 ? Medium.Email : Medium.App;
  } else {
    m = r < 0.75 ? Medium.Email : Medium.App;
  }
  let available: string[];

     switch (m) {
    case Medium.App:
      return "per Benachrichtung in der App";
    case Medium.Email:
      return "per E-Mail";
    case Medium.Letter:
      return "per Brief";
  }
}; */

export interface Combination {
  action: string;
  timing: string;
  reason: string;
  medium: string;
  reaction: string;
}

export const getRandomElement = (
  e?: Combination | string,
  list?: Array<Combination | string>
): Combination | string => {
  if (e && list) {
    // return an element from list that is different from e
    return list.filter((k) => k !== e)[
      Math.floor(Math.random() * (list.length - 1))
    ];
  } else if (list) {
    // return a random element from the list
    return list[Math.floor(Math.random() * list.length)];
  } else if (e) {
    // return a new combination from new elements from the various lists
    return {
      action: getRandomElement((e as Combination).action, actions),
      timing: getRandomElement((e as Combination).timing, timings),
      reason: getRandomElement((e as Combination).reason, reasons),
      medium: getRandomElement((e as Combination).medium, mediums),
      reaction: getRandomElement((e as Combination).reaction, reactions),
    } as Combination;
  } else {
    // return a new combination from random elements
    return {
      action: getRandomElement(undefined, actions) as string,
      timing: getRandomElement(undefined, timings) as string,
      reason: getRandomElement(undefined, reasons) as string,
      medium: getRandomElement(undefined, mediums) as string,
      reaction: getRandomElement(undefined, reactions) as string,
    } as Combination;
  }
};
