var vowelFindingWord = "challenge";
var vowels = [];

for (var i = 0; i < vowelFindingWord.length; i++) {
  var letter = vowelFindingWord[i];
  if (/[aeiou]/i.test(letter)) {
    vowels.push(letter);
  }
}

document.getElementById("vowel_letters").innerText=vowels;
