
// Na aanmaak div, tweede stap:
let myquote = document.getElementById("dailyQuote");

let foto = document.getElementById("foto");

// Eerste stap: functie getquote aanmaken//
//Voorbeeld zie: https://www.w3schools.com/xml/tryit.asp?filename=tryajax_first//
function getquote (){
  console.log(myquote);
  console.log(foto);
  let request = new XMLHttpRequest();  //altijd gebruiken voor ajx (request is object)//



  let qtext; //qtext is variabele//

  request.onreadystatechange = function() {
                if (this.readyState === 4 && this.status == 200) {
                    qtext = JSON.parse(this.responseText);
                    myquote.innerHTML = qtext.quote;
                    //replaces the html img tag://
                    if (qtext.photo != ""){
                      var img = document.createElement("img"); //maakt een leeg blaadje dat zweeft ergensrond, voor de foto zie f12 <img>//
                      console.log(img);
                      var div = document.getElementById("pic"); // haal een stuk witte muur (deel vd webpagina/div) uit html om later het blad op te plakken//
                      console.log (div);
                      img.src = qtext.photo; // plak de foto (url) op het lege blaadje
                      div.appendChild(img); //plak blad met foto op het stukje muur (stukje muur = div)
                      console.log(qtext);
                    } else {
                      console.log(qtext);
                    }
                }

            }

            request.open("GET", "https://thatsthespir.it/api", true);
            request.send();
        }
        // daarna laten getquote uitvoeren:

getquote();
