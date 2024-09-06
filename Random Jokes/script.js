const url = " https://meme-api.com/gimme";
const memebox = document.querySelector(".memes_box");
const title = document.querySelector(".title");

function getData(){
    fetch(url)
    .then((Request) => {
        return Request.json();
    })
    .then((data) =>{
        memebox.style.backgroundImage = `url('${data.preview[2]}')`;
        title.innerHTML = data.title;
    })
}
getData();