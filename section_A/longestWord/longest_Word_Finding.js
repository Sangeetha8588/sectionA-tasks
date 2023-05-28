var long_words= document.getElementById("long_word");
function longestWordFinding(sentence) {
 
    var str = sentence.split(" ");
    var longest = 0;
    var word=null;

        for (let i = 0; i < str.length; i++) {
                if (longest < str[i].length) {
                    longest = str[i].length;
                    word = str[i];
                }
            }

            return long_words.innerText = word;
      }
        const longestWord = longestWordFinding("This is a coding challenge for the interview process")
