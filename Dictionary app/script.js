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
           for(let i = 0; i < data.length; i++){
                const meanings = document.createElement("div");
                meanings.className = "meanings";


           }
        })
        .catch(() =>{
            inp_word.innerHTML = "word not found";
            volume.style.opacity = "0"
        })
})