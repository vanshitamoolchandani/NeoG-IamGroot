// var btnTranslate= document.querySelector("#button-translate");
// var textInput = document.querySelector("#txt-input")
// var output = document.querySelector("#output");

// var url = "https://api.funtranslations.com/translate/groot.json"
	

// function getTranslationURL(text) {
//     return url+ "?"+ "text="+text
// }

// function errorHandler(error){
// console.log("error occured", error);
// alert("something wrong with server! try again after some time. ")
// }



// function clickHandler() 
// {
//     var inputText = textInput.value;
// fetch(getTranslationURL(inputText))
// .then(response => response.json())
// .then(json =>   {
//                 var translatedText = json.contents.translatedText;
//                 output.innerText = translatedText;
//                 })
// .catch(errorHandler)
// };

// btnTranslate.addEventListener("click", clickHandler)





var buttonTranslate = document.querySelector("#button-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/groot.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
           })
        .catch(errorHandler)
};

buttonTranslate.addEventListener("click", clickHandler)