/*
Write function that translates a text to Pig Latin and back. 
English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. 
“The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
*/

class Translator {
  constructor(text, translateMethod) {
    this.text = text;
    this.translateMethod = translateMethod;
  }
  Translate() {
    return this.translateMethod(this.text);
  }
}
class TranslationsEngine {
  ToPigLatin(text) {
    let translatedText;
    translatedText = text.split(" ").map((x) => {
      let newWord = "";
      for (let i = 1; i < x.length; i++) {
        newWord += x[i];
      }
      newWord += x[0] + "ay";
      return newWord;
    });
    return translatedText.join(" ").toLowerCase();
  }

  ReverseFromPigLatin(text) {
    let translatedText;
    translatedText = text.split(" ").map((x) => {
      let newWord = x.substring(0, x.length - 3);
      newWord = x.charAt(x.length - 3) + newWord;
      return newWord;
    });
    return translatedText.join(" ").toLowerCase();
  }
}
let translationEngine = new TranslationsEngine();
let toPigLatinTranslator = new Translator("The quick brown fox", translationEngine.ToPigLatin);
console.log(toPigLatinTranslator.Translate());
let fromPigLatinToEnglish = new Translator(
  "Hetay uickqay rownbay oxfay",
  translationEngine.ReverseFromPigLatin
);
console.log(fromPigLatinToEnglish.Translate());
