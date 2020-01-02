// languages
var supportedLanguages = {
  oberbairisch: true,
  // niederbairisch: true,
  // allgaeuerisch: true,
};
var defaultLanguage = 'oberbairisch';

// time formatting
// example text: 'es is kurz vor dreiviertel viere'
var curseTable = {
  oberbairisch: ['Ja do schau her!',
                 "Wia spad dass' is?",
                 "Wia spad dass' is?",
                 'Ge leck!',
                 "Wia spad dass' is?", 
                 "Wia spad dass' is?",
                 'A geh weida!',
                 "Wia spad dass' is?", 
                 "Wia spad dass' is?", 
                 "Wia spad dass' is?",
                 "Wia spad dass' is?",
                 "Ja sowos!"],
};
var aroundTable = {
  oberbairisch: ['Mia hams aggrad',
                 'Es is kurz noch',
                 'Mia hams zehn noch',
                 'Hammas scho wieder umara Viertel noch',
                 'Es is zwanzg noch',
                 'Glei hammas hoibe',
                 "'s is scho wieda hoibe",
                 'Es is kurz noch hoibe',
                 'Mia hams zwanzg vor',
                 "Umara dreiviertel",
                 'Es is zehn vor',
                 'Hammas scho wieder kurz vor'],
};
var hourTable = {
  oberbairisch: ['oans', 'zwoa', 'drei', 'viere', 'fünfe', 'sechse', 'sieme', 'achte', 'neine', 'zehne', 'eife', 'zweife'],
};


export function getDateInWordsInstance(date, locale) {
  let language = locale.split('-')[0];
  if (!supportedLanguages[language]) {
    language = defaultLanguage;
  }
  return new DateTimeInWords12h(date, language);
};

export class DateTimeInWords12h {
  constructor(date, language) {
    this.date = date;
    this.language = language;
  }

  
  formatCurse() {
    let min = this.date.getMinutes();
    if (min == 0) {
      let curseIndex = 0;
    } else if (min <= 7) {
      let curseIndex = 1;
    } else if (min <= 12) {
      let curseIndex = 2;
    } else if (min <= 18) {
      let curseIndex = 3;
    } else if (min <= 23) {
      let curseIndex = 4;
    } else if (min <= 28) {
      let curseIndex = 5;
    } else if (min <= 32) {
      let curseIndex = 6;
    } else if (min <= 37) {
      let curseIndex = 7;
    } else if (min <= 42) {
      let curseIndex = 8;
    } else if (min <= 48) {
      let curseIndex = 9;
    } else if (min <= 53) {
      let curseIndex = 10;
    } else {
      let curseIndex = 11;
    }
    return curseTable[this.language][curseIndex];
  }
  formatAround() {
    let min = this.date.getMinutes();
    if (min == 0) {
      let aroundIndex = 0;
    } else if (min <= 7) {
      let aroundIndex = 1;
    } else if (min <= 12) {
      let aroundIndex = 2;
    } else if (min <= 18) {
      let aroundIndex = 3;
    } else if (min <= 23) {
      let aroundIndex = 4;
    } else if (min <= 28) {
      let aroundIndex = 5;
    } else if (min <= 32) {
      let aroundIndex = 6;
    } else if (min <= 37) {
      let aroundIndex = 7;
    } else if (min <= 42) {
      let aroundIndex = 8;
    } else if (min <= 48) {
      let aroundIndex = 9;
    } else if (min <= 53) {
      let aroundIndex = 10;
    } else {
      let aroundIndex = 11;
    }
    return aroundTable[this.language][aroundIndex];
  }
  formatHours() {
    let hourIndex = this.date.getHours() % 12;
    return hourTable[this.language][hourIndex];
  }
};
