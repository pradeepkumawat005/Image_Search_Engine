const accesskey = "aVHbC8sL_7j77XUxKdXE5ygnjteZMzdWleYShng2GFs"
const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchresult.innerHTML = "";
    }

    // console.log(data);
    
    const results = data.results;
    results.map((results) =>{
        const image = document.createElement('img');
        image.src=results.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href=results.links.html;
        imagelink.target="_blank";
        imagelink.appendChild(image);
        searchresult.append(imagelink);
    })
    showMoreBtn.style.display = "block";

    
}

searchform.addEventListener("submit",(e) =>{
    e.preventDefault();
    page = 1;
    searchImages();


})

showMoreBtn.addEventListener("click",() =>{
    page++;
    searchImages();
})