// alert(welcome);

const btnTranslate = document.querySelector("#btn-translate");
const outputDiv = document.querySelector("#output");
const textInput = document.querySelector("#text-input");

//var url = "https://lessonfourapi.tejs1.repl.co/translate/yoda.json";
const url = "https://api.funtranslations.com/translate/minion.json";
function urlcreator(text) {
  return url + "?text=" + text;
}
function errorHandler(error) {
  console.log("error occured", error);
  alert("server down, try after some time");
}

btnTranslate.addEventListener("click", clickHandler);

function clickHandler() {
  var inputText = textInput.value;
  //getting info from server by doing fetch call

  fetch(urlcreator(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}
