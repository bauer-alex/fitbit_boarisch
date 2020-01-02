import clock from "clock";
import document from "document";
import {locale, preferences} from "user-settings";
import * as messaging from "messaging";
import {getDateInWordsInstance} from "./time";

// Update the clock every minute
clock.granularity = "seconds";

// Get a handle on the UI elements
var primaryScreen       = document.getElementById("primary_screen");
var secondaryScreen     = document.getElementById("secondary_screen");
var primaryBackground   = document.getElementById("primary_background");
var secondaryBackground = document.getElementById("secondary_background");
var curseElement        = document.getElementById("curse");
var timeTextElement     = document.getElementById("time_textArea");
var exactTimeElement    = document.getElementById("exact_time");

// Change the displayed screen on tap
primaryScreen.onclick   = function() {
  primaryScreen.style.display   = "none";
  secondaryScreen.style.display = "inline";
};
secondaryScreen.onclick = function() {
  primaryScreen.style.display   = "inline";
  secondaryScreen.style.display = "none";
};

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let dateInWords = getDateInWordsInstance(evt.date, locale.language);
  curseElement.text    = dateInWords.formatCurse();
  timeTextElement.text = dateInWords.formatAround() + "\n" + dateInWords.formatHours();
  
  // update the exact time on the secondary screen
  let h = ("0" + evt.date.getHours()).slice(-2);
  let m = ("0" + evt.date.getMinutes()).slice(-2);
  let s = ("0" + evt.date.getSeconds()).slice(-2);
  exactTimeElement.text = h + ":" + m + ":" + s;
};