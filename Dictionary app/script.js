const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const search_btn = document.querySelector("#search");


search_btn.addEventListener("click", () =>{
    let inp_text = document.querySelector("#inp_text").value;
    fetch(url + inp_text)
        .then(Response => Response.json())
        .then((data) =>{
            console.log(data);
        })
})