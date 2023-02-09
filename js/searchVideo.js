import { conectApi } from "./conectApi.js";
import buildCard from "./showVideos.js"

async function searchVideo(event) {
  event.preventDefault();

  const searchData = document.querySelector("[data-search]").value;
  const search = await conectApi.searchVideo(searchData);

  const list = document.querySelector("[data-list]");

  while (list.firstChild) {
    list.removeChild(list.firstChild);

  }

  

  search.forEach(element => list.appendChild(buildCard(element.title, element.description, element.url, element.image)));

  if (search.length == 0) {
    list.innerHTML = `<h2 class="mensagem__titulo">Não existe vídeos com esse termo</h2>`
  }
  
}

const searchButton = document.querySelector("[data-search-button]")

searchButton.addEventListener("click", event => searchVideo(event))