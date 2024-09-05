const url = " https://meme-api.com/gimme";
const memebox = document.querySelector(".memes_box");
const title = document.querySelector(".title");

function getData(){
    fetch(url)
    .then((Request) => {
        return Request.json();
    })
    .then((data) =>{
        const imgs = document.createElement("img");
        imgs.src = data.preview[2];
        memebox.appendChild(imgs);
        title.innerHTML = data.title;
    })
}
getData();