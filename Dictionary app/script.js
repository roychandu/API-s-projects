const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const search_btn = document.querySelector("#search");
const inp_word = document.querySelector("#inp_word");
const volume = document.querySelector(".fi-ss-volume");
const meaning_part = document.querySelector(".row2");

volume.style.opacity = "0"

search_btn.addEventListener("click", () =>{
    let inp_text = document.querySelector("#inp_text").value;
    fetch(url + inp_text)
        .then(Response => Response.json())
        .then((data) =>{
            console.log(data);
            inp_word.innerHTML = data[0].word;
            volume.style.opacity = "1"

           meaning_part.innerHTML = "";
           meaning_part.style.height = "auto";

           for(let i = 0; i < data.length; i++){
                const meaningsDiv = document.createElement("div");
                meaningsDiv.className = "meanings";
                
                let meaningsdatalen = data[i].meanings.length;
                let meaningsdata = data[i].meanings;
                
                for(let j = 0; j < meaningsdatalen; j++){
                    const partOfSpeech = document.createElement("p");
                    partOfSpeech.className = "partofspeech";
                    partOfSpeech.innerHTML= meaningsdata[j].partOfSpeech;
                    
                    
                    let definitionslen = meaningsdata[j].definitions.length;
                    let definitionsdata = meaningsdata[j].definitions;

                    meaningsDiv.appendChild(partOfSpeech);

                    for(let k = 0; k < definitionslen; k++){
                        const definitions = document.createElement("p");
                        definitions.className = "definitions";
                        definitions.innerHTML = definitionsdata[k].definition;
                        meaningsDiv.appendChild(definitions);
                    }
                }
                meaning_part.appendChild(meaningsDiv);
           }

        // for audio 
           volume.setAttribute("src", data[0].phonetics[0].audio)
           console.log(volume);
        })
        .catch(() =>{
            inp_word.innerHTML = "Couldn't find the word!!";
            volume.style.opacity = "0"
            meaning_part.innerHTML = "";
            meaning_part.style.height = "auto";
        })
})

function focusInput(){
    inp_text.focus();
}
function playsound(){
    volume.play();
}