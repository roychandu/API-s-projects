const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const search_btn = document.querySelector("#search");
const inp_word = document.querySelector("#inp_word");
const volume = document.querySelector(".fi-ss-volume");


search_btn.addEventListener("click", () =>{
    let inp_text = document.querySelector("#inp_text").value;
    fetch(url + inp_text)
        .then(Response => Response.json())
        .then((data) =>{
            console.log(data);
            inp_word.innerHTML = data[0].word;
            volume.style.opacity = "1"
        })
        .catch(() =>{
            inp_word.innerHTML = "word not found";
            volume.style.opacity = "0"
        })
})