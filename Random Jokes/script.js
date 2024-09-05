const url = " https://meme-api.com/gimme";



function getData(){
    fetch(url)
    .then((Request) => {
        return Request.json();
    })
    .then((data) =>{
        console.log(data);
    })
}
getData();