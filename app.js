var btnTranslate= document.querySelector("#button-translate");
var textInput = document.querySelector("#txt-input")
var output = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/groot.json"
	

function getTranslationURL(text) {
    return url+ "?"+ "text="+text
}

function errorHandler(error){
console.log("error occured", error);
alert("something wrong with server! try again after some time. ")
}



function clickHandler() 
{
    var inputText = textInput.value;
fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json =>   {
                var translatedText = json.contents.translatedText;
                output.innerText = translatedText;
                })
.catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)