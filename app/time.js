// languages
var supportedLanguages = {
  oberbairisch: true,
  // niederbairisch: true,
  // allgaeuerisch: true,
};
var defaultLanguage = 'oberbairisch';

// time formatting
// example text: 'es is kurz vor dreiviertel viere'
var headerTable = {
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
  oberbairisch: ['zweife', 'oans', 'zwoa', 'drei', 'viere', 'fünfe', 'sechse', 'sieme', 'achte', 'neine', 'zehne', 'eife', 'zweife'],
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

  
  formatHeader() {
    let min = this.date.getMinutes();
    if (min == 0) {
      let headerIndex = 0;
    } else if (min <= 7) {
      let headerIndex = 1;
    } else if (min <= 12) {
      let headerIndex = 2;
    } else if (min <= 18) {
      let headerIndex = 3;
    } else if (min <= 23) {
      let headerIndex = 4;
    } else if (min <= 28) {
      let headerIndex = 5;
    } else if (min <= 32) {
      let headerIndex = 6;
    } else if (min <= 37) {
      let headerIndex = 7;
    } else if (min <= 42) {
      let headerIndex = 8;
    } else if (min <= 48) {
      let headerIndex = 9;
    } else if (min <= 53) {
      let headerIndex = 10;
    } else {
      let headerIndex = 11;
    }
    return headerTable[this.language][headerIndex];
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
    let min  = this.date.getMinutes();
    let rest = this.date.getHours() % 12;
    if (min <= 23) {
      let hourIndex = rest;
    } else {
      let hourIndex = rest + 1;
    }
    return hourTable[this.language][hourIndex];
  }
};
